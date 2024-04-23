// export default function dijkstra(grid, startNode, targetNode) {
//     // Returns nodes in a 1D array sorted in order they were visited in

//     const unvisitedNodes = grid
//     const nodesInVisitedOrder = []
//     const numRows = grid.length
//     const numCols = grid[0].length

//     function getUnvisitedNeighbours (node) {
//         const { row, col } = node;
//         const neighbours = [];
    
//         if (col < numCols - 1) neighbours.push(unvisitedNodes[row][col + 1]);
//         if (row < numRows - 1) neighbours.push(unvisitedNodes[row + 1][col]);
//         if (col > 0) neighbours.push(unvisitedNodes[row][col - 1]);
//         if (row > 0) neighbours.push(unvisitedNodes[row - 1][col]);
    
//         return neighbours.filter((neighbour) => !neighbour.visited && !neighbour.isWall);
//     };

//     unvisitedNodes[startNode.row][startNode.col].distance = 0

//     const priorityQueue = [];
//     priorityQueue.push(unvisitedNodes[startNode.row][startNode.col]);

//     while (priorityQueue.length > 0) {
//         priorityQueue.sort((a, b) => a.distance - b.distance);

//         const currentNode = priorityQueue.shift();

//         if (currentNode.isWall || currentNode.visited) continue;

//         if (currentNode.distance === Infinity) return nodesInVisitedOrder;

//         currentNode.visited = true;
//         nodesInVisitedOrder.push(currentNode);

//         if (currentNode === grid[targetNode.row][targetNode.col]) {
//             return nodesInVisitedOrder;
//         }

//         const neighbours = getUnvisitedNeighbours(currentNode);
//         for (const neighbour of neighbours) {
//             const distance = currentNode.distance + 1;
//             if (distance < neighbour.distance) {
//                 neighbour.distance = distance;
//                 neighbour.previousNode = currentNode;
//                 priorityQueue.push(neighbour);
//             }
//         }

//         console.log(currentNode)
//     }

//     return nodesInVisitedOrder;
// }