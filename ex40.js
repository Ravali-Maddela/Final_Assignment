//es6 arrow function 

//multi params 

const multi=(arr, startIndex, endIndex)=>{
    length=endIndex-startIndex;
    return arr.splice(startIndex,length+1);
}

console.log('multi: ',multi([8,4,5,0,3,2,4],2,4)) // returns elements of given indexes

//single param

const single=(arr)=>arr.sort()
console.log('single : ',single([8,4,5,0,3,2,4])) //returns sorted arr

//no param

const noParam=()=>{
    let arr=['yellow', 'black', 'red', 'orange', 'pink']
    console.log('no param',single(arr))
    console.log('no param',multi(arr, 3,4))
}
noParam()// call the above funcions