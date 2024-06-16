var findMaximizedCapital = function (k, w, profits, capital) {
    // priority queue
    let capitals_asc = new MinPriorityQueue();
    let profits_desc = new MaxPriorityQueue();
    for (let i = 0; i < capital.length; i++)
        capitals_asc.enqueue([capital[i], profits[i]], capital[i]);

    for (let i = 0; i < k; i++) {
        while (!capitals_asc.isEmpty() && capitals_asc.front().element[0] <= w) {
            let el = capitals_asc.dequeue().element;
            profits_desc.enqueue(el, el[1]);
        }
        if (profits_desc.isEmpty()) return w;
        w += profits_desc.dequeue().element[1];
    }
    return w;
};