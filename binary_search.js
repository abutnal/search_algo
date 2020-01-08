const binarySearch = (items, find) =>{
     var firstIndex = 0;
     var lastIndex = items.length  - 1;
     var middleIndex = Math.floor((firstIndex + lastIndex)/2);
     
     while(items[middleIndex] != find && lastIndex > firstIndex){
         if(find < items[middleIndex]){
             lastIndex = middleIndex - 1;
         }
         else if (find > items[middleIndex]){
             firstIndex = middleIndex + 1;
         }
          middleIndex = Math.floor((firstIndex + lastIndex)/2);
     }
     return (items[middleIndex] != find) ? 'Element not found': `Element ${find} found at index ${middleIndex}`;
}

const items = [1,2,3,4,5,6,7,8];
const find = 5;
const output = binarySearch(items, find);
console.log(output);