var survivedRobotsHealths = function (positions, healths, directions) {
        let robots = [];

        for (let i = 0; i < positions.length; i++) {
                robots.push({
                        position: positions[i],
                        order: i + 1,
                        health: healths[i],
                        direction: directions[i]
                });
        }

        robots.sort((a, b) => a.position - b.position);

        let movingToRight = [];
        let movingToLeft = [];

        parentLoop: for (let robot of robots) {
                if (robot.direction === 'R') {
                        movingToRight.push(robot);
                        continue;
                }
                /// case when direction if left
                let currRobot = { ...robot }; /// cloning robot to track health

                innerLoop: while (movingToRight.length > 0) {
                        let lastRobot = movingToRight[movingToRight.length - 1];
                        if (currRobot.health > lastRobot.health) {
                                movingToRight.pop();
                                currRobot.health -= 1;
                                continue innerLoop;
                        } else if (currRobot.health < lastRobot.health) {
                                lastRobot.health -= 1;
                                break innerLoop;
                        } else {
                                /// case when they have equal health
                                movingToRight.pop();
                                continue parentLoop;
                        }
                }

                /// if loop is over and currRobot is survived, then we add it to moving movingToLeft
                if (movingToRight.length === 0) {
                        movingToLeft.push(currRobot);
                }
        }

        let survived = [...movingToLeft, ...movingToRight];
        survived.sort((a, b) => a.order - b.order);
        return survived.map((r) => r.health);
};

// console.log(survivedRobotsHealths(, , ));
// console.log(survivedRobotsHealths([7, 1, 3, 2, 6, 4], [8, 10, 5, 12, 15, 7], 'RLLRRL')); /// PASSED
// console.log(survivedRobotsHealths([3, 5, 2, 6], [10, 10, 15, 12], 'RLRL')); /// PASSED
// console.log(survivedRobotsHealths([5, 4, 3, 2, 1, 6, 8, 7, 9, 10],[2, 17, 9, 15, 10, 20, 25, 30, 5, 10],'RLRLRLRLRL')); /// PASSED
console.log(survivedRobotsHealths([1, 2, 5, 6], [10, 10, 11, 11], 'RLRL'));

/* 
    RLLRRL
        <-1, 2->, <-3, <-4, 6->, 7->
         10  12     5   7   15   8  
             11     x   x
             10              15
        [7,1,3,2,6,4]
         1,2,3,4,5,6
    
    res : [8,10,10,15]
    [8,10, 10, 15]



        1  2  3  4  5  6  7  8  9  10
        [5->, <-4, 3->, <-2, 1->, <-6, 8->, <-7, 9->, <-10]
        [2, 17, 9, 15, 10, 20, 25, 30, 5, 10]
        "RLRLRLRLRL"

        1-> <-2 3-><-4 5->

        ml = [L]
        mr = [ ]
        LRRRLLRRRLR
     */
