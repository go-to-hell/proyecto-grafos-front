// data.js

const nodes = {
  // node1: { id: "node1", name: "Nodo 1" },
  // node2: { id: "node2", name: "Nodo 2" },
  // node3: { id: "node3", name: "Nodo 3" },
  // node4: { id: "node4", name: "Nodo 4" },
  // node5: { id: "node5", name: "Nodo 5" },
};

const edges = {
  // edge1: { source: "node1", target: "node2", label: "Arista 1" },
  // edge2: { source: "node2", target: "node3", label: "Arista 2" },
  // edge3: { source: "node3", target: "node4", label: "Arista 3" },
  // edge4: { source: "node4", target: "node5", label: "Arista 4" },
};

const layouts = {
  nodes: {
    node1: { x: 0, y: 0 },
    node2: { x: 80, y: 80 },
    node3: { x: 160, y: 0 },
    node4: { x: 240, y: 80 },
    node5: { x: 320, y: 0 },
  },
};

export default {
  nodes,
  edges,
  layouts,
};
