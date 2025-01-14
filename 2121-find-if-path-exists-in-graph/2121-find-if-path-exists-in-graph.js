/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    if (source === destination) return true;
    
    const graph = new Map();
    
    for (const [a, b] of edges) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    
    const seen = new Set();
    
    const dfs = (start) => {
        if (start === destination) return true;
        seen.add(start);
        const neighbors = graph.get(start) || [];
        for (let neighbor of neighbors) {
            if (!seen.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    return dfs(source);
};
