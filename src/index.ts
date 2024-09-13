import { serve } from "@hono/node-server";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { z } from "zod";
import { FlowEngine } from "./flow-engine/flow-engine";
import {
  endpoints as cfEndpoints,
  flow as cfFlow,
} from "./flow/celsius-fahrenheit";
const app = new OpenAPIHono();

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "API based on code-flow-canvas flow",
  },
});

Object.entries(cfEndpoints).forEach(([key, value]) => {
  let outputSchema: any = {};
  value.outputs.forEach((output) => {
    outputSchema[output.name] =
      output.type === "show-value" ? z.number() : z.string();
  });
  const route = createRoute({
    method: "get" as const,
    path: value.name,
    tags: ["Celsius Fahrenheit converter"],
    request: {
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
    },
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
      const flowEngine = new FlowEngine();
      if (cfFlow?.flows?.flow?.nodes) {
        flowEngine.initialize(cfFlow.flows.flow.nodes);
        let outputs: any = {};
        value.outputs.forEach((output) => {
          console.log("output", output);
          flowEngine.canvasApp.setOnNodeMessage((key, inputValue) => {
            console.log("output", inputValue);
            if (value.outputs.find((o: any) => o.name === key)) {
              outputs[key] = inputValue;
            }
          });
        });
        const inputValue = c.req.valid("query")?.[value.name];
        const result = await flowEngine.runNode(value.id, inputValue);
        console.log("result", result);
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

app.get("/ui", swaggerUI({ url: "/doc" }));

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
