function positiveNegativeZero(arr)
{
     
     
    let len = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
 
    
    for(let i = 0; i < len; i++)
    {
        if (arr[i] > 0)
        {
            positiveCount++;
        }
        else if (arr[i] < 0)
        {
            negativeCount++;
        }
        else if (arr[i] == 0)
        {
            zeroCount++;
        }
    }
 
     
    console.log((positiveCount / len).toFixed(4) + " ");
  console.log((negativeCount / len).toFixed(4) + " ");
 console.log((zeroCount / len).toFixed(4));
 
}
 
 
let a1 = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(a1);
 
 