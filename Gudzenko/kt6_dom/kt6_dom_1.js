let y = (x) => {
    if (x <= -8) {
        return x**2
    } else {
        return 8*x
    }

};
console.log(y(-7));


let arr = []

for (i=1; i<=10; i++) {
    arr.push(Math.round(Math.random()*10))
}
console.log(arr)
arr2 = (arr) => {
    return arr.filter(n => n % 2 !=0)
}

console.log(arr2(arr))

arr3 = (arr) => {
    return arr.map(n => Number((n / 3).toFixed(2)))
}

console.log(arr3(arr))