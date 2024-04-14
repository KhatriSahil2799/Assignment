// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The contiguous subarray [4, -1, 2, 1] has the maximum sum (4 + (-1) + 2 + 1 = 6).

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const maxSubArray = (arr=[])=>{

    if(arr.length <1){
        return -1
    }

    // considering the max sum initially as -Infinity
    let maxSum = -Infinity
    
    // Keeps track of the max sum till the ith element
    const localMaxArr = Array.from(arr).fill(-Infinity)

    // maxmimum sum at the 0th element would be equal to the first element as no other elements are present
    localMaxArr[0] = arr[0]
    
     for(let i = 1; i<arr.length; i++){
        // calculates the maximum sum till a specific element using the previous element's max sum
        localmaxSum = Math.max(arr[i], localMaxArr[i-1] + arr[i])
        localMaxArr[i] = localmaxSum

        maxSum = Math.max(localmaxSum, maxSum)
    }

    return maxSum
}


const ans = maxSubArray(input)
 
console.log("SubArray maximum sum", ans)
