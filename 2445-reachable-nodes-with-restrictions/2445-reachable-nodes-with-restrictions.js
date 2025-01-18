/**
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const graph = new Map();
    const restrictedSet = new Set(restricted);
    
    for (const [a, b] of edges) {
        if (restrictedSet.has(a) || restrictedSet.has(b)) continue;        
        graph.set(a, [...(graph.get(a) ?? []), b]);
        graph.set(b, [...(graph.get(b) ?? []), a]);
    }
    
    const reachable = new Set();
    
    const dfs = (node) => {
        if (reachable.has(node)) return;
        reachable.add(node);
        
        for (const neighbor of graph.get(node) ?? []) {
            dfs(neighbor);
        }
    }
    
    dfs(0);
    return reachable.size;
};
