/* 
Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums.
*/
//We need a function that receives an array
const solve = (arr) => {
    //we create an new array where each element into is the range
    let newArray = arr.map((num,index)=> {
        if(num <= arr.length){
            return index + 1
        }else{
            return
        }
    })
    //we need to compare the new array with the given array and the diference is that we needed
    let difference = newArray.filter( element => arr.indexOf(element) === -1);
    //we need to validate that if each element in the array is in the range [1, array.length]
    //we have an undefined value if that so we create a if to console the result or if need to introduce a valid array
    if(difference.includes(undefined)){
        console.log("ingresa un array valido")
    }else{
        console.log(difference);
    }
}
solve([1,3,3])