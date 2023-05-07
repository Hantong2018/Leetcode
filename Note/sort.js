const bubbleSort = (nums) => {
    for (i = 0; i < nums.length - 1; i++){
        for (j = 0; j < nums.length - 1 - i; j++){
            if (nums[j] > nums[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

const selectionSort = (nums) => {  
    for (i = 0; i < nums.length - 1; i++){
        let minIndex = i
        let temp = 0

        for (j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[minIndex]){
                minIndex = j
            }
        }

        temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
}

const insertionSort = (nums) => {
    for (i = 1; i < nums.length; i++){
        let temp = nums[i]
        let j = i - 1
        while(j>=0 && nums[j] > temp){
            nums[j+1] = nums[j]
            j--;
        }
        nums[j+1] = temp
    }
}

const mergeSort = (nums) => {
    if ( nums.length < 2 ) return nums;
    
    let pivot = Math.floor(nums.length / 2)

    const merge = (left, right) => {
        console.log(left, right);
        let result = []
        while(left.length && right.length){
            result.push(
                left[0] <= right[0] ? left.shift() : right.shift()
            )
        }
        return result.concat(left).concat(right)
    }

    return merge( mergeSort(nums.slice(0, pivot)), mergeSort(nums.slice(pivot)) )
}

const quickSort = (nums) => {
    if (nums.length <= 1) {
      return nums;
    }
  
    let pivot = nums[0];
    let left = [];
    let right = [];
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < pivot) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  };


const arr = [29,15,14,5,37,14]
// console.log(arr.slice(0, 1).length);
console.log(quickSort(arr))
