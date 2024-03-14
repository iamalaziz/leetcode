function nearestValidPoint(x, y, points) {
    let minDistance = Infinity;
    let minIndex = -1;

    for (let i = 0; i < points.length; i++) {
        const [px, py] = points[i];

        if (px === x || py === y) {
            const distance = Math.abs(px - x) + Math.abs(py - y);

            if (distance < minDistance) {
                minDistance = distance;
                minIndex = i;
            }
        }
    }

    return minIndex;
}

console.log(
    nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4]
    ])
);
