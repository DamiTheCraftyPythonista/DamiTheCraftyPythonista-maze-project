export default function dijkstra(grid, startNode, targetNode) {
    // this function should return the nodes sorted in the order they were visited which will then be utilized to visualize the pathfinding

    const unvisitedNodes = grid
    const nodesInVisitedOrder = []
    const numRows = grid.length
    const numCols = grid[0].length

    



    //get nodes in default order
    //run a while loop where: 
        //take hold of nodes which have 1) same row, +- 1 col 2) same col, +- 1 row

        //with each node: 
            //handle if index out of range
            //check if target reached
                //stop and return array of nodes in order they were visited
                //somehow will have to also save the path in which the nodes were visited
            //check if already visited === true
                //if true skip
            //check if isWall === true
                //if true skip
            
            //assign node a new distance to number of times this loop iterated + 1 (all nodes have the same weight)
            //add node to array visitedNodesInOrder 

        //handle situations where all nodes already visited or we are trapped 
    //return the array visitedNodesInOrder
}

    //grid has to provide: row, col, isWall, distance, visited
    //startNode and targetNode will be provided from the states form Visualizer component