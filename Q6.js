function arr (a1, a2) {
    var temp = [];
    a1 = a1.toString().split(',').map(Number);
    a2 = a2.toString().split(',').map(Number);
    
    for (var i in a1) {
    if(a2.indexOf(a1[i]) === -1) temp.push(a1[i]);
    }
    for(i in a2) {
    if(a1.indexOf(a2[i]) === -1) temp.push(a2[i]);
    }
    return temp.sort((a,b) => a-b);
    }
    
    console.log( arr([1, 2, 3], [100, 2, 1, 10]));
    console.log(arr([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));