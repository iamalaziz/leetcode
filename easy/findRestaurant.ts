function findRestaurant(list1: string[], list2: string[]): string[] {
    const map = new Map<string, number>();
    const res: string[] = [];
    let min:number = Infinity;

    list1.forEach((str, index) => {
        map.set(str, index);
    });

    list2.forEach((str, index) => {
        if (map.has(str)) {
            const indexSum = index + (map.get(str) ?? 0);
            if (indexSum < min) {
                min = indexSum;
                res.length = 0;
                res.push(str);
            } else if (indexSum == min) {
                res.push(str);
            }
        }
    });

    return res;
}

console.log(
    findRestaurant(
        ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['KFC', 'Shogun', 'Burger King']
    )
);
