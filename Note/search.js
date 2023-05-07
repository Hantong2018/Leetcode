
// Search element for sorted array
const binarySearch = (arr, target) => {
    let start = 0, 
        end = arr.length-1;
         
    // Iterate while start not meets end
    while (start <= end){
 
        // Find the mid index
        let mid = Math.floor( (start + end) / 2 );
  
        // If element is present at mid, return True
        if (arr[mid] === target) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < target)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}


const arr = [ 5, 14, 14, 15, 29, 37 ]
console.log(binarySearch(arr, 14));