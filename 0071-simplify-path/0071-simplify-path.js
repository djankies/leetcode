/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    
    const splitPath = path.split('/');
    
    for (const dir of splitPath) {
        if (dir === '' || dir === '.') {
            continue;
        }
        
        if (dir === '..') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(dir);
        }
    }
    
    const canonicalPath = '/' + stack.join('/');
    
    return canonicalPath;
};