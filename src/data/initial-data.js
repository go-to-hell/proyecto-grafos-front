// data.js
export default {
    nodes: {
      node1: { id: 'node1', label: 'Node 1' },
      node2: { id: 'node2', label: 'Node 2' },
      // ... más nodos
    },
    edges: {
      edge1: { id: 'edge1', source: 'node1', target: 'node2', label: 'Link 1-2' },
      // ... más enlaces
    },
    layouts: {
      hierarchical: false, // u otras configuraciones de diseño
    },
    configs: {
      view: {
        panEnabled: true,
        zoomEnabled: true,
      },
      node: {
        draggable: true,
      },
    },
};