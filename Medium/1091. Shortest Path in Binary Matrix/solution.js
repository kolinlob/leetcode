/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length - 1;
    if(grid[0][0] != 0 || grid[n][n] != 0) return -1;

    const queue = [[0,0]];
    grid[0][0] = 1;

    const directions = [
        { x:  1, y:  1 },
        { x:  0, y:  1 },
        { x: -1, y:  1 },
        { x: -1, y:  0 },
        { x: -1, y: -1 },
        { x:  0, y: -1 },
        { x:  1, y: -1 },
        { x:  1, y:  0 }
    ];
    
    while (queue.length) {
        const [cx, cy] = queue.shift();
        if(cx == n && cy == n) return grid[n][n];
        
        for (const { x, y } of directions) {
            const nx = cx + x;
            const ny = cy + y;
            
            if(nx >= 0 && nx <= n && ny >= 0 && ny <= n && grid[nx][ny] == 0) {
                queue.push([nx,ny]);
                grid[nx][ny] = grid[cx][cy] + 1;
            }
        }
    }
    
    return -1;
};