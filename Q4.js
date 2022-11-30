var arr=[ 1,2,3,4,5,6,7,8,9,9,7,7,7];
var f = 1;
var m = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (m<m)
                {
                  m=m; 
                  item = arr[i];
                }
        }
        m=0;
}
console.log(item+" ( " +m+" times ) ") ;