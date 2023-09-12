/* 
Given a list of integers nums and an integer target, write a function that solves the following
problem; return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice.
You can return the answer in any order.
*/

const solve = (arr,target) => {
    //we need to do a for for each element 
    for (let i = 0; i < arr.length; i++) {
        //we iterate for each element all others elements
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] == target) {
                console.log(i,j)
            }
        }
    }
}
solve([1,4,3,2],3)