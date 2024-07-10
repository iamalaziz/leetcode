var minOperations = function (logs) {
        let depth = 0
        for (let log of logs) {
            if (log === "./" || (depth == 0 && log === '../')) {
                continue
            } else if (log === '../' && depth > 0) {
                depth -= 1
            }else {
                depth++
            }
        }
    
        return depth
    };