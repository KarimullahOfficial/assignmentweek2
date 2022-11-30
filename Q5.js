const array = [1, 2, 3, 4, 5, 6];
let s = 0;
let p = 1;
let i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log(`Sum : ${s} Product :  ${p}`); 