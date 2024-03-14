var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max_area = 0;
    while (left < right) {
        area = Math.min(height[left], height[right]) * (right - left);
        max_area = Math.max(max_area, area);
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max_area;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
