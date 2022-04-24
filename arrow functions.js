const myConcat = (arr1,arr2) =>  arr1.concat(arr2);

const realNumberArray = [1, 2.2, 66, 3.14, -9];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return squaredIntegers;
}

const newarr = squareList(realNumberArray);
console.log(newarr);

function increment(number, value=1){
    return number+value;
}
console.log(increment(5))


const sum = (function() {
    return function sum(x,y,z){
        const arrgs = [x,y,z];
        return arrgs.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,2,3));
