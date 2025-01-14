/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const graph = new Map();
    
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for(const [a, b] of edges) {
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    
    let count = 0;
    
    const seen = new Set();
    
    const dfs = (node) => {
        seen.add(node);
        for (const neighbor of graph.get(node)) {
            if (!seen.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!seen.has(i)) {
            dfs(i);
            count++;
        }
    }
    
    return count; 
};