import { Flow, FlowEndpoint,FlowMeta } from "@devhelpr/visual-programming-system";
import { NodeInfo } from "@devhelpr/web-flow-executor";
export const metaData : FlowMeta = {
  title: "Test flow"
};  
export const endpoints : Record<string,FlowEndpoint> = {
  input: {
    id: "251f76d4-37b4-41e9-8a04-3e0b66a5d416",
    type: "user-input",
    name: "input",
    group: "api",
    outputs: [
      {
        id: "f80b84bd-f5aa-4928-ae51-c60ee75da5e6",
        name: "test1",
        type: "show-value"
      },
      {
        id: "fa95dd91-d49a-4f68-b072-be56120df217",
        name: "test2",
        type: "show-value"
      }
    ]
  },
  test: {
    id: "d5ce63cd-c1fe-4aa3-9b0f-5662da821b1e",
    type: "start-node",
    name: "test",
    group: "test",
    outputs: []
  }
};

export const flow: Flow<NodeInfo> = {
  schemaType: "flow",
  schemaVersion: "0.0.1",
  id: "1234",
  flows: {
    flow: {
      flowType: "flow",
      nodes: [
        {
          id: "8cf646f7-34a1-4f09-92c1-59ce0f99e7d9",
          x: 3334.9571185862224,
          y: 1260.8610069468557,
          width: 200,
          height: 112,
          nodeType: "Shape",
          nodeInfo: {
            type: "expression",
            formValues: {
              expression: "input * 2",
              inputType: "number"
            }
          }
        },
        {
          id: "f80b84bd-f5aa-4928-ae51-c60ee75da5e6",
          x: 3879.571768084183,
          y: 1094.401671836049,
          width: 120.00008405145373,
          height: 55.99994303310174,
          nodeType: "Shape",
          nodeInfo: {
            type: "show-value",
            formValues: {
              append: "",
              decimals: "0",
              name: "test1"
            },
            isSettingsPopup: true
          }
        },
        {
          id: "fa95dd91-d49a-4f68-b072-be56120df217",
          x: 3952.8358649733696,
          y: 1222.9736592964416,
          width: 120.00008405145373,
          height: 55.99994303310174,
          nodeType: "Shape",
          nodeInfo: {
            type: "show-value",
            formValues: {
              append: "",
              decimals: "0",
              name: "test2"
            },
            isSettingsPopup: true
          }
        },
        {
          id: "52fc1afb-1b53-487f-bc7c-8487496e8987",
          x: 3343.278156452237,
          y: 1111.983747038582,
          width: 240,
          height: 100,
          nodeType: "Shape",
          nodeInfo: {
            type: "annotation",
            formValues: {
              annotation: "Test flow",
              fontSize: "16",
              fontWeight: "false"
            },
            isSettingsPopup: true,
            nodeCannotBeReplaced: true,
            isAnnotation: true
          }
        },
        {
          id: "22c1b713-11dc-4541-94dc-e11fa3a43918",
          x: 3457.200752233483,
          y: 1431.9358664695874,
          width: 200,
          height: 112,
          nodeType: "Shape",
          nodeInfo: {
            type: "expression",
            formValues: {
              expression: "\"hello\"",
              inputType: "number"
            }
          }
        },
        {
          id: "251f76d4-37b4-41e9-8a04-3e0b66a5d416",
          x: 3002.6880561939424,
          y: 1270.7974066928425,
          width: 200,
          height: 124,
          nodeType: "Shape",
          nodeInfo: {
            type: "user-input",
            formValues: {
              label: "input",
              value: "",
              decimals: "0",
              name: "input",
              group: "api"
            },
            isSettingsPopup: true,
            isUINode: true
          }
        },
        {
          id: "d5ce63cd-c1fe-4aa3-9b0f-5662da821b1e",
          x: 3221.2231013168307,
          y: 1496.3596697920093,
          width: 50,
          height: 50,
          nodeType: "Shape",
          nodeInfo: {
            type: "start-node",
            formValues: {
              name: "test",
              group: "test"
            }
          }
        },
        {
          id: "fbc3fbe9-5402-49c7-873c-886c0e72b008",
          x: 3534.9571185862224,
          y: 1316.8610069468557,
          endX: 3879.571768084183,
          endY: 1124.401671836049,
          startNodeId: "8cf646f7-34a1-4f09-92c1-59ce0f99e7d9",
          endNodeId: "f80b84bd-f5aa-4928-ae51-c60ee75da5e6",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "d13600f3-1267-43c7-aa8e-9bc1171ddc68",
          x: 3534.9571185862224,
          y: 1316.8610069468557,
          endX: 3952.8358649733696,
          endY: 1252.9736592964416,
          startNodeId: "8cf646f7-34a1-4f09-92c1-59ce0f99e7d9",
          endNodeId: "fa95dd91-d49a-4f68-b072-be56120df217",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "0f98f731-44b4-40c0-9955-e122371c29f1",
          x: 3202.6880561939424,
          y: 1349.7974066928425,
          endX: 3334.9571185862224,
          endY: 1316.8610069468557,
          startNodeId: "251f76d4-37b4-41e9-8a04-3e0b66a5d416",
          endNodeId: "8cf646f7-34a1-4f09-92c1-59ce0f99e7d9",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "ecbb391c-f9d1-4d50-843a-703ea218581d",
          x: 3246.2231013168307,
          y: 1521.3596697920093,
          endX: 3457.200752233483,
          endY: 1487.9358664695874,
          startNodeId: "d5ce63cd-c1fe-4aa3-9b0f-5662da821b1e",
          endNodeId: "22c1b713-11dc-4541-94dc-e11fa3a43918",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "Straight",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        }
      ]
    }
  },
  compositions: {}
};