/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const graph = {};
    
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    
    for(const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    let count = 0;
    
    const seen = Array(n).fill(false);
    
    const dfs = (node) => {
        seen[node] = true;
        for (const neighbor of graph[node]) {
            if (!seen[neighbor]) {
                dfs(neighbor);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count; 
};