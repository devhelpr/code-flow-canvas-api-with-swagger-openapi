import { Flow, FlowEndpoint,FlowMeta } from "@devhelpr/visual-programming-system";
import { NodeInfo } from "@devhelpr/web-flow-executor";
export const metaData : FlowMeta = {
  title: "Celsius to fahrenheit converter"
};  
export const endpoints : Record<string,FlowEndpoint> = {
  celsius: {
    id: "1b4a5801-d9be-4df9-9dd0-cd1c94fbcb06",
    type: "user-input",
    name: "celsius",
    group: "celsius",
    outputs: [
      {
        id: "b513423b-296c-4b7c-97e2-c19ae1af7f57",
        name: "celsius-value",
        type: "show-value"
      },
      {
        id: "16bfd0bb-fc8d-486d-b6dd-d45de7045f45",
        name: "kelvin-value",
        type: "show-value"
      },
      {
        id: "4d8e1e09-5ca8-47f0-a402-42b1f2eb9530",
        name: "fahrenheit-value",
        type: "show-value"
      }
    ]
  },
  fahrenheit: {
    id: "31d489b2-55aa-43bf-a313-5fad122503d4",
    type: "user-input",
    name: "fahrenheit",
    group: "fahrenheit",
    outputs: [
      {
        id: "4d8e1e09-5ca8-47f0-a402-42b1f2eb9530",
        name: "fahrenheit-value",
        type: "show-value"
      },
      {
        id: "b513423b-296c-4b7c-97e2-c19ae1af7f57",
        name: "celsius-value",
        type: "show-value"
      }
    ]
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
          id: "1b4a5801-d9be-4df9-9dd0-cd1c94fbcb06",
          x: 2998.804054827499,
          y: 1198.8327081027785,
          width: 200,
          height: 124,
          nodeType: "Shape",
          nodeInfo: {
            type: "user-input",
            formValues: {
              label: "celsius",
              value: "",
              decimals: "2",
              name: "celsius",
              group: "celsius"
            },
            isSettingsPopup: true,
            isUINode: true
          }
        },
        {
          id: "3bb3ba40-d618-4dea-8dc4-66edfc8c0b25",
          x: 3458.016350081764,
          y: 1596.1705407946527,
          width: 200,
          height: 112,
          nodeType: "Shape",
          nodeInfo: {
            type: "expression",
            formValues: {
              expression: "(input - 32) * (5/9)",
              inputType: "number"
            },
            showFormOnlyInPopup: true,
            isSettingsPopup: true
          }
        },
        {
          id: "27587f70-864a-4140-aadf-7e81cff03084",
          x: 4397.689143766105,
          y: 1890.5120317473811,
          width: 120.00020143934616,
          height: 84.00004772960449,
          nodeType: "Shape",
          nodeInfo: {
            type: "variable",
            formValues: {
              variableName: "fahrenheit",
              initialValue: "0",
              fieldType: "value",
              fieldValueType: "number"
            },
            isVariable: true,
            nodeCannotBeReplaced: true
          }
        },
        {
          id: "229132a7-c788-4de2-8cda-d53c31f5d190",
          x: 4346.805090064974,
          y: 1185.014179156044,
          width: 119.99973504965708,
          height: 83.99993113218223,
          nodeType: "Shape",
          nodeInfo: {
            type: "variable",
            formValues: {
              variableName: "celsius",
              initialValue: "0",
              fieldType: "value",
              fieldValueType: "number"
            },
            isVariable: true,
            nodeCannotBeReplaced: true
          }
        },
        {
          id: "31d489b2-55aa-43bf-a313-5fad122503d4",
          x: 3040.362179381469,
          y: 1869.428367178562,
          width: 200,
          height: 124,
          nodeType: "Shape",
          nodeInfo: {
            type: "user-input",
            formValues: {
              label: "fahrenheit",
              value: "",
              decimals: "2",
              name: "fahrenheit",
              group: "fahrenheit"
            },
            isSettingsPopup: true,
            isUINode: true
          }
        },
        {
          id: "5b3cd71a-ed40-4983-b8a4-32ee31b661de",
          x: 3838.545938858712,
          y: 1867.785742051138,
          width: 200,
          height: 128,
          nodeType: "Shape",
          nodeInfo: {
            type: "set-variable",
            formValues: {
              variableName: "fahrenheit"
            },
            nodeCannotBeReplaced: false,
            showFormOnlyInPopup: false,
            useInCompositionOnly: false
          }
        },
        {
          id: "6092cd9a-1bc1-4303-a77d-50c3db6b32bc",
          x: 3457.5170622280184,
          y: 1378.0275033827606,
          width: 200,
          height: 112,
          nodeType: "Shape",
          nodeInfo: {
            type: "expression",
            formValues: {
              expression: "input * (9/5) + 32",
              inputType: "number"
            },
            showFormOnlyInPopup: true,
            isSettingsPopup: true
          }
        },
        {
          id: "72722829-4c23-4774-8dcf-5e1d066cb28e",
          x: 2593.075330974822,
          y: 1877.0263802349803,
          width: 200,
          height: 116,
          nodeType: "Shape",
          nodeInfo: {
            type: "observe-variable",
            formValues: {
              variableName: "fahrenheit"
            }
          }
        },
        {
          id: "91fead76-1711-438b-9e89-a53ced174b34",
          x: 2596.5834569396943,
          y: 1188.889049948381,
          width: 200,
          height: 116,
          nodeType: "Shape",
          nodeInfo: {
            type: "observe-variable",
            formValues: {
              variableName: "celsius"
            }
          }
        },
        {
          id: "6c378e01-b948-4a61-88e5-3452b49a6ecc",
          x: 3500.497558756838,
          y: 946.0633054269581,
          width: 200,
          height: 111.99993896484375,
          nodeType: "Shape",
          nodeInfo: {
            type: "expression",
            formValues: {
              expression: "input + 273.15",
              inputType: "number"
            },
            showFormOnlyInPopup: true,
            isSettingsPopup: true
          }
        },
        {
          id: "16bfd0bb-fc8d-486d-b6dd-d45de7045f45",
          x: 3891.8332063803077,
          y: 971.157942391094,
          width: 120.00020143934616,
          height: 79.99999826257145,
          nodeType: "Shape",
          nodeInfo: {
            type: "show-value",
            formValues: {
              append: "Kelvin",
              decimals: "2",
              name: "kelvin-value"
            },
            initializeOnStartFlow: true,
            isSettingsPopup: true
          }
        },
        {
          id: "de049f05-5462-4637-8276-405d213b9cce",
          x: 3850.1181723969953,
          y: 1183.1565672862175,
          width: 200,
          height: 128,
          nodeType: "Shape",
          nodeInfo: {
            type: "set-variable",
            formValues: {
              variableName: "celsius"
            },
            nodeCannotBeReplaced: false,
            showFormOnlyInPopup: false,
            useInCompositionOnly: false
          }
        },
        {
          id: "b513423b-296c-4b7c-97e2-c19ae1af7f57",
          x: 4164.258340020516,
          y: 1217.6918652319987,
          width: 119.99973504965708,
          height: 55.9999929539289,
          nodeType: "Shape",
          nodeInfo: {
            type: "show-value",
            formValues: {
              append: "",
              decimals: "2",
              name: "celsius-value"
            },
            initializeOnStartFlow: true,
            isSettingsPopup: true
          }
        },
        {
          id: "4d8e1e09-5ca8-47f0-a402-42b1f2eb9530",
          x: 4178.16657098905,
          y: 1917.2253442490537,
          width: 119.99973504965708,
          height: 55.99987635650664,
          nodeType: "Shape",
          nodeInfo: {
            type: "show-value",
            formValues: {
              append: "",
              decimals: "2",
              name: "fahrenheit-value"
            },
            initializeOnStartFlow: true,
            isSettingsPopup: true
          }
        },
        {
          id: "000687a7-672c-43ea-be68-74bcbf351a60",
          x: 2071.5677938871404,
          y: 887.8228115787363,
          width: 920.5967829572069,
          height: 191.63253693502952,
          nodeType: "Shape",
          nodeInfo: {
            type: "annotation",
            formValues: {
              annotation: "Celsius to fahrenheit converter",
              fontSize: "45",
              fontWeight: true
            },
            isSettingsPopup: true,
            nodeCannotBeReplaced: true,
            isAnnotation: true
          }
        },
        {
          id: "78eb12b6-f4c7-41d8-ba03-b60a7dc134ba",
          x: 2258.5497416585627,
          y: 964.3199209993162,
          width: 485.15638892176094,
          height: 66.38280975830367,
          nodeType: "Shape",
          nodeInfo: {
            type: "annotation",
            formValues: {
              annotation: "bi-directional data flow",
              fontSize: "25.5",
              fontWeight: "false"
            },
            isSettingsPopup: true,
            nodeCannotBeReplaced: true,
            isAnnotation: true
          }
        },
        {
          id: "53bce103-9598-44ef-ba13-9ec1cafda0ee",
          x: 3198.804054827499,
          y: 1277.8327081027785,
          endX: 3850.1181723969953,
          endY: 1247.1565672862175,
          startNodeId: "1b4a5801-d9be-4df9-9dd0-cd1c94fbcb06",
          endNodeId: "de049f05-5462-4637-8276-405d213b9cce",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "2ea80401-0959-44c0-9899-31e7b1dbc4cf",
          x: 3240.362179381469,
          y: 1948.428367178562,
          endX: 3838.545938858712,
          endY: 1931.785742051138,
          startNodeId: "31d489b2-55aa-43bf-a313-5fad122503d4",
          endNodeId: "5b3cd71a-ed40-4983-b8a4-32ee31b661de",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "26bf3ad5-4cb7-40dc-9a46-76cdd8a0f683",
          x: 3198.804054827499,
          y: 1277.8327081027785,
          endX: 3500.497558756838,
          endY: 1002.06327490938,
          startNodeId: "1b4a5801-d9be-4df9-9dd0-cd1c94fbcb06",
          endNodeId: "6c378e01-b948-4a61-88e5-3452b49a6ecc",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "e942948a-9403-4aff-826d-1de3f8323a5d",
          x: 3700.497558756838,
          y: 1002.06327490938,
          endX: 3891.8332063803077,
          endY: 1001.157942391094,
          startNodeId: "6c378e01-b948-4a61-88e5-3452b49a6ecc",
          endNodeId: "16bfd0bb-fc8d-486d-b6dd-d45de7045f45",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "4cbe76ae-8a82-4322-913e-fcd5f5527633",
          x: 3198.804054827499,
          y: 1277.8327081027785,
          endX: 3457.5170622280184,
          endY: 1434.0275033827606,
          startNodeId: "1b4a5801-d9be-4df9-9dd0-cd1c94fbcb06",
          endNodeId: "6092cd9a-1bc1-4303-a77d-50c3db6b32bc",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "bb5e59e1-1173-4769-85ae-7ec77932d074",
          x: 3657.5170622280184,
          y: 1434.0275033827606,
          endX: 3838.545938858712,
          endY: 1931.785742051138,
          startNodeId: "6092cd9a-1bc1-4303-a77d-50c3db6b32bc",
          endNodeId: "5b3cd71a-ed40-4983-b8a4-32ee31b661de",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "eefd5e3a-6d21-4f9a-8af5-0e80a4583426",
          x: 3658.016350081764,
          y: 1652.1705407946527,
          endX: 3850.1181723969953,
          endY: 1247.1565672862175,
          startNodeId: "3bb3ba40-d618-4dea-8dc4-66edfc8c0b25",
          endNodeId: "de049f05-5462-4637-8276-405d213b9cce",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "615b9083-f5ce-49a7-90cb-9744154dad6d",
          x: 3240.362179381469,
          y: 1948.428367178562,
          endX: 3458.016350081764,
          endY: 1652.1705407946527,
          startNodeId: "31d489b2-55aa-43bf-a313-5fad122503d4",
          endNodeId: "3bb3ba40-d618-4dea-8dc4-66edfc8c0b25",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "d4a70205-d3f8-41d2-92e2-936b7a9f61dc",
          x: 2793.075330974822,
          y: 1935.0263802349803,
          endX: 3040.362179381469,
          endY: 1931.428367178562,
          startNodeId: "72722829-4c23-4774-8dcf-5e1d066cb28e",
          endNodeId: "31d489b2-55aa-43bf-a313-5fad122503d4",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "066be787-3bdf-4229-bd46-f3a839c88667",
          x: 2796.5834569396943,
          y: 1246.889049948381,
          endX: 2998.804054827499,
          endY: 1260.8327081027785,
          startNodeId: "91fead76-1711-438b-9e89-a53ced174b34",
          endNodeId: "1b4a5801-d9be-4df9-9dd0-cd1c94fbcb06",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "1370d743-abe8-4ee2-b403-9d0a6addd333",
          x: 4050.1181723969953,
          y: 1247.1565672862175,
          endX: 4164.258340020516,
          endY: 1247.6918652319987,
          startNodeId: "de049f05-5462-4637-8276-405d213b9cce",
          endNodeId: "b513423b-296c-4b7c-97e2-c19ae1af7f57",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        },
        {
          id: "e2e3410e-b9cd-43b7-81e3-191380c9036d",
          x: 4038.545938858712,
          y: 1931.785742051138,
          endX: 4178.16657098905,
          endY: 1947.2253442490537,
          startNodeId: "5b3cd71a-ed40-4983-b8a4-32ee31b661de",
          endNodeId: "4d8e1e09-5ca8-47f0-a402-42b1f2eb9530",
          startThumbName: "output",
          endThumbName: "input",
          lineType: "BezierCubic",
          nodeType: "Connection",
          layer: 1,
          nodeInfo: {}
        }
      ]
    }
  },
  compositions: {}
};