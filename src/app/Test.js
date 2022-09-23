function outerFun() {
    let x = 'Randhir'
    function innerFun() {
        console.log(x)
    }
    innerFun()
}

const result = outerFun()
console.log(result)