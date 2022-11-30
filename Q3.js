const num=5;
 
const result = [str[0]];
  
for(let x=1; x<num; x++)
  {
    if((num[x-1]%2 === 0)&&(num[x]%2 === 0))
     {
      result.push('-', num[x]);
     }
    else
     {
      result.push(num[x]);
     }
  }
console.log(result.join(''));