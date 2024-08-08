var spiralMatrixIII = function (rows, cols, rStart, cStart) {
        let coordinates = [[rStart, cStart]];
        let direction = 0; // 0 = Right, 1 = Down, 2 = Left, 3 = Up
        let steps = 1;
        let r = rStart,
                c = cStart;

        while (coordinates.length < rows * cols) {
                for (let i = 0; i < 2; i++) {
                        for (let j = 0; j < steps; j++) {
                                if (direction === 0) c++; // Move right
                                else if (direction === 1) r++; // Move down
                                else if (direction === 2) c--; // Move left
                                else if (direction === 3) r--; // Move up

                                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                                        coordinates.push([r, c]);
                                }
                        }
                        direction = (direction + 1) % 4;
                }
                steps++;
        }

        return coordinates;
};

console.log(spiralMatrixIII(1, 4, 0, 0));
