function secondLargestUnique(arr) {
    let first = -Infinity, second = -Infinity;
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(num)) continue;
        seen.add(num);

        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    if (second === -Infinity) {
        return -1;
    } else {
        return second;
    }
}

console.log(secondLargestUnique([3,5,2,5,6,6,1])); 
console.log(secondLargestUnique([7, 7, 7]));
