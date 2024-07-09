function printBreadthFirst(start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (!visited.has(currentNode)) {
      console.log(currentNode);
      visited.add(currentNode);

      for (const neighbor of adjList[currentNode]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}
