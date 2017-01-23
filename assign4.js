let myArr=[]
let myVal= process.argv
let mealCost=myArr.push(Number(myArr[2]))
let tipPercent=myArr.push(Number(myArr[3]))
let tipAmount=myVal[3]/100*myVal[2]
const totalowing=Number(myVal[2])+ tipAmount;
const output =` Your meal was$${Number(myVal[2])} + a $${Number(myVal[3])}%tip = ${totalowing}`
console.log(output)