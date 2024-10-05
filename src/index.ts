import { serve } from "@hono/node-server";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { z } from "zod";
import { RuntimeFlowEngine } from "./flow-engine/runtime-flow-engine";
import { endpoints, flow, metaData } from "./flow/codeflowcanvas-flow";
const app = new OpenAPIHono();

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: metaData.title ?? "API based on code-flow-canvas flow",
    description: "API based on code-flow-canvas flow",
  },
});

Object.entries(endpoints).forEach(([key, value]) => {
  const flowEndpoint = value;
  let outputSchema: any = {};
  if (flowEndpoint.outputs.length > 0) {
    flowEndpoint.outputs.forEach((output: any) => {
      if (output.name) {
        outputSchema[output.name] =
          output.type === "show-value"
            ? z.number()
            : output.type === "show-object"
            ? z.object({})
            : z.string();
      }
    });
  } else {
    outputSchema["result"] = z.string();
  }
  console.log("outputSchema", outputSchema);
  const route = createRoute({
    method: "get" as const,
    path: value.name,
    tags: [value.group ?? "Flow api"],
    request:
      value.type !== "start-node"
        ? {
            query: z.object({
              [value.name]: z.string().openapi({
                param: {
                  name: value.name,
                  in: "query",
                },
                type: "string",
                example: "25",
              }),
            }),
          }
        : undefined,
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object(outputSchema),
          },
        },
        description: value.name,
      },
      500: {
        content: {
          "application/json": {
            schema: z.object({
              ["error"]: z.string(),
            }),
          },
        },
        description: "error",
      },
    },
  });
  app.openapi(route, async (c) => {
    try {
      const flowEngine = new RuntimeFlowEngine();
      if (flow?.flows?.flow?.nodes) {
        flowEngine.initialize(flow.flows.flow.nodes);
        let outputs: any = {};
        value.outputs.forEach((output) => {
          console.log("output", output);
          flowEngine.canvasApp.setOnNodeMessage(
            (key: string, inputValue: string) => {
              console.log("OnNodeMessage output", key, inputValue);
              const searchOutput = value.outputs.find(
                (o: any) => o.name === key
              );
              if (searchOutput) {
                console.log("searchOutput", searchOutput);
                outputs[key] = inputValue;
              }
            }
          );
        });
        const inputValue = c?.req?.valid("query" as never)?.[value.name];
        if (key === "default") {
          const result = await flowEngine.run(inputValue);
          if (Object.entries(outputs).length === 0) {
            console.log("result1", result, outputs);

            outputs = { result: result };
          } else {
            console.log("outputs1", result, outputs);
          }
        } else {
          const result = await flowEngine.runNode(value.id, inputValue);
          if (
            (key.startsWith("default") &&
              Object.entries(outputs).length === 0) ||
            (flowEndpoint.type === "start-node" &&
              Object.entries(outputs).length === 0)
          ) {
            outputs = { result: result };
          }
          console.log("result2", result, outputs);
        }
        flowEngine.destroy();
        return c.json(outputs, 200);
      } else {
        flowEngine.destroy();
        return c.json({ error: "error" }, 500);
      }
    } catch (error) {
      console.log("error", error);
      return c.json({ error: JSON.stringify(error, null, 2) }, 500);
    }
  });
});

app.get("/swagger", swaggerUI({ url: "/doc" }));

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
