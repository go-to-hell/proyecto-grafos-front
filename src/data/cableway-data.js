import { defineConfigs } from "v-network-graph"
import * as vNG from "v-network-graph"
import { reactive } from "vue"


const nodes = { 
  "node1": {
    "id": "node1",
    "name": "Rio Seco",
    "x": -541.5,
    "y": -70.5,
    "icon": "icono-azul.png"
  },
  "node2": {
    "id": "node2",
    "name": "UPEA",
    "x": 861.9266967773438,
    "y": -400.7640075683594,
    "icon": "icono-azul.png"
  },
  "node3": {
    "id": "node3",
    "name": "Plaza La Paz",
    "x": 2281.9267578125,
    "y": -460.7640075683594,
    "icon": "icono-azul.png"
  },
  "node4": {
    "id": "node4",
    "name": "Plaza Libertad",
    "x": 3371.9267578125,
    "y": -440.7640075683594,
    "icon": "icono-azul.png"
  },
  "node5": {
    "id": "node5",
    "name": "16 de Julio",
    "x": 997.6127319335938,
    "y": -214.175537109375,
    "icon": "icono-plateada.png"
  },
  "node6": {
    "id": "node6",
    "name": "Cementerio",
    "x": 2117.61279296875,
    "y": -174.175537109375,
    "icon": "icono-roja.png"
  },
  "node7": {
    "id": "node7",
    "name": "Central",
    "x": 2917.612548828125,
    "y": -884.175537109375,
    "icon": "icono-roja.png"
  },
  "node8": {
    "id": "node8",
    "name": "Armentia",
    "x": 3777.612548828125,
    "y": -874.175537109375,
    "icon": "icono-naranja.png"
  },
  "node9": {
    "id": "node9",
    "name": "Periférica",
    "x": 4457.61279296875,
    "y": -1374.175537109375,
    "icon": "icono-naranja.png"
  },
  "node10": {
    "id": "node10",
    "name": "Villarroel",
    "x": 5147.61279296875,
    "y": -1864.175537109375,
    "icon": "icono-naranja.png"
  },
  "node11": {
    "id": "node11",
    "name": "Busch",
    "x": 5257.61279296875,
    "y": -734.175537109375,
    "icon": "icono-blanca.png"
  },
  "node12": {
    "id": "node12",
    "name": "Triangular",
    "x": 5267.61279296875,
    "y": 105.82444763183594,
    "icon": "icono-blanca.png"
  },
  "node13": {
    "id": "node13",
    "name": "Del Poeta",
    "x": 5367.61279296875,
    "y": 845.8244018554688,
    "icon": "icono-blanca.png"
  },
  "node14": {
    "id": "node14",
    "name": "Libertador",
    "x": 5417.61279296875,
    "y": 1605.824462890625,
    "icon": "icono-verde.png"
  },
  "node15": {
    "id": "node15",
    "name": "Alto Obrajes",
    "x": 6137.61279296875,
    "y": 1685.824462890625,
    "icon": "icono-verde.png"
  },
  "node16": {
    "id": "node16",
    "name": "Obrajes",
    "x": 6987.61279296875,
    "y": 1825.8243408203125,
    "icon": "icono-verde.png"
  },
  "node17": {
    "id": "node17",
    "name": "Irpavi",
    "x": 7567.6123046875,
    "y": 2365.824462890625,
    "icon": "icono-verde.png"
  },
  "node18": {
    "id": "node18",
    "name": "Sopocachi",
    "x": 4027.612548828125,
    "y": 1495.824462890625,
    "icon": "icono-amarilla.png"
  },
  "node19": {
    "id": "node19",
    "name": "Buenos Aires",
    "x": 2677.61279296875,
    "y": 1705.824462890625,
    "icon": "icono-amarilla.png"
  },
  "node20": {
    "id": "node20",
    "name": "Satelite",
    "x": 1287.6126708984375,
    "y": 1835.8243408203125,
    "icon": "icono-plateada.png"
  },
  "node21": {
    "id": "node21",
    "name": "Faro Murillo",
    "x": 1087.6126708984375,
    "y": 725.824462890625,
    "icon": "icono-morada.png"
  },
  "node22": {
    "id": "node22",
    "name": "Obelisco",
    "x": 2217.61279296875,
    "y": 445.8244323730469,
    "icon": "icono-morada.png"
  },
  "node23": {
    "id": "node23",
    "name": "6 de Marzo",
    "x": -162.38723754882812,
    "y": 785.8244018554688,
    "icon": "icono-morada.png"
  },
  "node24": {
    "id": "node24",
    "name": "Del Teatro",
    "x": 4317.61279296875,
    "y": 515.824462890625,
    "icon": "icono-celeste.png"
  },
  "node25": {
    "id": "node25",
    "name": "El Prado",
    "x": 3487.612548828125,
    "y": 35.8244514465332,
    "icon": "icono-celeste.png"
  },
  "node26": {
    "id": "node26",
    "name": "Las Villas",
    "x": 6387.61279296875,
    "y": -544.175537109375,
    "icon": "icono-cafe.png"
  }
};

const edges = {
  "edge1": {
    "source": "node1",
    "target": "node2",
    "label": "426"
  },
  "edge2": {
    "source": "node2",
    "target": "node3",
    "label": "283"
  },
  "edge3": {
    "source": "node3",
    "target": "node4",
    "label": "258"
  },
  "edge4": {
    "source": "node4",
    "target": "node5",
    "label": "268"
  },
  "edge5": {
    "source": "node5",
    "target": "node21",
    "label": "516"
  },
  "edge6": {
    "source": "node21",
    "target": "node20",
    "label": "246"
  },
  "edge7": {
    "source": "node21",
    "target": "node22",
    "label": "480"
  },
  "edge8": {
    "source": "node21",
    "target": "node23",
    "label": "487"
  },
  "edge9": {
    "source": "node20",
    "target": "node19",
    "label": "240"
  },
  "edge10": {
    "source": "node19",
    "target": "node18",
    "label": "375"
  },
  "edge11": {
    "source": "node18",
    "target": "node14",
    "label": "397"
  },
  "edge12": {
    "source": "node14",
    "target": "node15",
    "label": "205"
  },
  "edge13": {
    "source": "node15",
    "target": "node16",
    "label": "309"
  },
  "edge14": {
    "source": "node16",
    "target": "node17",
    "label": "467"
  },
  "edge15": {
    "source": "node5",
    "target": "node6",
    "label": "338"
  },
  "edge16": {
    "source": "node6",
    "target": "node7",
    "label": "309"
  },
  "edge17": {
    "source": "node7",
    "target": "node8",
    "label": "239"
  },
  "edge18": {
    "source": "node8",
    "target": "node9",
    "label": "227"
  },
  "edge19": {
    "source": "node9",
    "target": "node10",
    "label": "276"
  },
  "edge20": {
    "source": "node10",
    "target": "node11",
    "label": "237"
  },
  "edge21": {
    "source": "node11",
    "target": "node12",
    "label": "288"
  },
  "edge23": {
    "source": "node12",
    "target": "node13",
    "label": "196"
  },
  "edge24": {
    "source": "node13",
    "target": "node14",
    "label": "190"
  },
  "edge25": {
    "source": "node11",
    "target": "node26",
    "label": "227"
  },
  "edge26": {
    "source": "node13",
    "target": "node24",
    "label": "210"
  },
  "edge27": {
    "source": "node24",
    "target": "node25",
    "label": "220"
  },
  "edge28": {
    "source": "node25",
    "target": "node24",
    "label": "220"
  },
  "edge29": {
    "source": "node24",
    "target": "node13",
    "label": "210"
  },
  "edge30": {
    "source": "node13",
    "target": "node12",
    "label": "196"
  },
  "edge31": {
    "source": "node12",
    "target": "node11",
    "label": "288"
  },
  "edge32": {
    "source": "node14",
    "target": "node13",
    "label": "190"
  },
  "edge33": {
    "source": "node11",
    "target": "node10",
    "label": "237"
  },
  "edge34": {
    "source": "node26",
    "target": "node11",
    "label": "227"
  },
  "edge35": {
    "source": "node15",
    "target": "node14",
    "label": "205"
  },
  "edge36": {
    "source": "node16",
    "target": "node15",
    "label": "309"
  },
  "edge38": {
    "source": "node17",
    "target": "node16",
    "label": "467"
  },
  "edge39": {
    "source": "node14",
    "target": "node18",
    "label": "397"
  },
  "edge41": {
    "source": "node18",
    "target": "node19",
    "label": "375"
  },
  "edge43": {
    "source": "node19",
    "target": "node20",
    "label": "240"
  },
  "edge44": {
    "source": "node20",
    "target": "node21",
    "label": "246"
  },
  "edge45": {
    "source": "node22",
    "target": "node21",
    "label": "480"
  },
  "edge46": {
    "source": "node23",
    "target": "node21",
    "label": "487"
  },
  "edge47": {
    "source": "node21",
    "target": "node5",
    "label": "516"
  },
  "edge48": {
    "source": "node10",
    "target": "node9",
    "label": "274"
  },
  "edge49": {
    "source": "node9",
    "target": "node8",
    "label": "227"
  },
  "edge50": {
    "source": "node8",
    "target": "node7",
    "label": "239"
  },
  "edge51": {
    "source": "node7",
    "target": "node6",
    "label": "309"
  },
  "edge52": {
    "source": "node6",
    "target": "node5",
    "label": "338"
  },
  "edge53": {
    "source": "node5",
    "target": "node4",
    "label": "268"
  },
  "edge54": {
    "source": "node4",
    "target": "node3",
    "label": "258"
  },
  "edge55": {
    "source": "node3",
    "target": "node2",
    "label": "283"
  },
  "edge56": {
    "source": "node2",
    "target": "node1",
    "label": "426"
  }
};

const layouts = {
  "nodes": {
    "node1": {
      "x": -3081.5,
      "y": -310.5
    },
    "node2": {
      "x": -1938.073,
      "y": -710.764
    },
    "node3": {
      "x": -778.073,
      "y": -720.764
    },
    "node4": {
      "x": 221.927,
      "y": -740.764
    },
    "node5": {
      "x": 1227.613,
      "y": -494.176
    },
    "node6": {
      "x": 2257.613,
      "y": -534.176
    },
    "node7": {
      "x": 2691.628,
      "y": -1576.092
    },
    "node8": {
      "x": 3954.129,
      "y": -1809.551
    },
    "node9": {
      "x": 5178.519,
      "y": -1983.923
    },
    "node10": {
      "x": 6270.941,
      "y": -2216.346
    },
    "node11": {
      "x": 6293.215,
      "y": -1136.597
    },
    "node12": {
      "x": 6234.478,
      "y": -61.144
    },
    "node13": {
      "x": 5869.277,
      "y": 893.551
    },
    "node14": {
      "x": 5690.539,
      "y": 1985.973
    },
    "node15": {
      "x": 6819.931,
      "y": 1802.793
    },
    "node16": {
      "x": 8011.089,
      "y": 1650.372
    },
    "node17": {
      "x": 9188.014,
      "y": 2335.215
    },
    "node18": {
      "x": 3987.613,
      "y": 1525.824
    },
    "node19": {
      "x": 2677.61279296875,
      "y": 1705.824462890625
    },
    "node20": {
      "x": 1287.6126708984375,
      "y": 1835.8243408203125
    },
    "node21": {
      "x": 1197.613,
      "y": 785.824
    },
    "node22": {
      "x": 2285.845,
      "y": 631.025
    },
    "node23": {
      "x": 22.813,
      "y": 1058.752
    },
    "node24": {
      "x": 4724.076,
      "y": 178.856
    },
    "node25": {
      "x": 3887.613,
      "y": -454.176
    },
    "node26": {
      "x": 7486.394,
      "y": -799.629
    }
  }
};

const configs = reactive(
  vNG.defineConfigs({
    view: {
      grid: {
        visible: true,
        interval: 100,
        thickIncrements: 5,
        line: {
          color: "#e0e0e0",
          width: 1,
          dasharray: 1,
        },
        thick: {
          color: "#cccccc",
          width: 1,
          dasharray: 0,
        },
      },
      layoutHandler: new vNG.GridLayout({ grid: 10 }),
      minZoomLevel: 0.09,
      maxZoomLevel: 0.5,
      fitContentMargin: "8%",
      autoPanAndZoomOnLoad: "fit-content",
      panEnabled: true,
      zoomEnabled: false,
    },
    node: {
      draggable: false,
      normal: {
        type: "circle",
        radius: 15,
        width: 15,
        height: 15,
        borderRadius: 4,
        strokeWidth: 3,
        strokeColor: "#000000",
        strokeDasharray: "0",
        color: "#599db9",
      },
      hover: {
        type: "circle",
        radius: 13,
        width: 15,
        height: 15,
        borderRadius: 4,
        strokeWidth: 2,
        strokeColor: "#000000",
        strokeDasharray: "0",
        color: "#dd2288",
      },
      label: {
        visible: true,
        fontSize: 13,
        lineHeight: 1.1,
        color: "#000000",
        margin: 4,
        direction: "south",
        text: "name",
        directionAutoAdjustment: true,
        background: {
          visible: false,
          color: "#ffffff",
          padding: {
            vertical: 1,
            horizontal: 4,
          },
          borderRadius: 2,
        },
      },
      focusring: {
        visible: true,
        width: 4,
        padding: 3,
        color: "#eebb00",
        dasharray: "0",
      },
    },
    edge: {
      normal: {
        width: 3,
        color: "#000000",
        dasharray: "0",
        linecap: "butt",
        animate: false,
        animationSpeed: 50,
      },
      hover: {
        width: 4,
        color: "#599db9",
        dasharray: "0",
        linecap: "butt",
        animate: false,
        animationSpeed: 50,
      },
      label: {
        fontSize: 10,
        fontFamily: "Sans serif",
        color: "#000000",
      },
      gap: 20,
      type: "curve",
      margin: 6,
      marker: {
        source: {
          type: "none",
          width: 4,
          height: 4,
          margin: -1,
          offset: 0,
          units: "strokeWidth",
          color: null,
        },
        target: {
          type: "arrow",
          width: 4,
          height: 4,
          margin: -1,
          offset: 0,
          units: "strokeWidth",
          color: null,
        },
      },
      selfLoop: {
        radius: 24,
        offset: 16,
        angle: 270,
        isClockwise: true,
      },
      keepOrder: "horizontal",
    },
    path: {
      visible: true,
      normal: {
        width: 15,
        dasharray: "10 16",
        animate: true,
        animationSpeed: 10,
      },
    },
  })
)


export default {
  nodes,
  edges,
  layouts,
  configs,
}
