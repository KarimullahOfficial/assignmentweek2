function as(num) {
    if (num.length === 1) {
        return true;
    }
    const direction = num[1] - num[0];
    for (let i = 0; i < num.length - 1; i++) {
        if (direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(as([1, 2, 3]));
console.log(as([1, 2, 2]))
console.log(as([-3, -2, -1]))