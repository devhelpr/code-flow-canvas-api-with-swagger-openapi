import { Flow } from "@devhelpr/visual-programming-system";
import { NodeInfo } from "@devhelpr/web-flow-executor";

export const endpoints = {
  basic: {
    route: "/flow/",
    method: "get" as const,
    output: "string",
    outputVariable: "output",
    description: "random number",
  },
};

export const helloFlow: Flow<NodeInfo> = {
  schemaType: "flow",
  schemaVersion: "0.0.1",
  id: "1234",
  flows: {
    flow: {
      flowType: "flow",
      nodes: [
        {
          id: "4e2ae465-c8c5-4f19-a90e-3cdc07c8a5c3",
          x: 243.1705391973758,
          y: 37.629463101946946,
          width: 200.00003203625403,
          height: 111.99996232589326,
          nodeType: "Shape",
          nodeInfo: {
            type: "expression",
            formValues: {
              expression: "random",
              inputType: "number",
            },
            taskType: "expression",
          },
        },
        {
          id: "0d7897af-9494-45fe-af5d-3364f23d89fe",
          x: 443.17057123362986,
          y: 93.62944426489358,
          endX: 600.1574964051578,
          endY: 93.38959279173457,
          startNodeId: "4e2ae465-c8c5-4f19-a90e-3cdc07c8a5c3",
          endNodeId: "f3a049ef-9aea-4253-92dc-c4e1c00b82cd",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {},
        },
        {
          id: "f3a049ef-9aea-4253-92dc-c4e1c00b82cd",
          x: 600.1574964051578,
          y: 63.38959279173457,
          width: 119.99993780912443,
          height: 55.99997604382346,
          nodeType: "Shape",
          nodeInfo: {
            type: "show-input",
            taskType: "show-input",
          },
        },
      ],
    },
  },
  compositions: {},
};
