var last = function last(array, n) {
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  };
  
  console.log(last([1,2,3,4,5]));
  
  