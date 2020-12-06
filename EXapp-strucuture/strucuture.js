const btnel = document.querySelector("#btne")
const i1el = document.querySelector("#i1")
const i2el = document.querySelector("#i2")
const h1el = document.querySelector("#h1")
const tableel = document.querySelector("#table")


const arr = []

let totalExpense = 0



function funcIn() {

    const dict = {}
    const i1elv = parseInt(i1el.value)
    const i2elv = i2el.value

    dict.desc = i2elv
    dict.cost = i1elv
    totalExpense = totalExpense + i1elv
    h1el.textContent = (`Total Cost : ${totalExpense}`)
    arr.push(dict)
    console.clear()
    console.table(arr)
    
    

    tableel.innerHTML = ""

    for (i=0;i<arr.length;i++){
        
        tableel.innerHTML += `<div> ${arr[i].desc}::${arr[i].cost} </div>`
                       //<div> ${arr[1].desc}::${arr[1].cost} </div>`
                       
                   
    }

    //alternate method

    //const tableTextarray = arr.map(item => {return `<div> ${item.desc}::${item.cost} </div>`})
    //let tableTextString = tableTextarray.join("")
    //tableel.innerHTML = tableTextString
    //console.log(arr.map(item => {return `<div> ${item.desc}::${item.cost} </div>`}))

    
}



btnel.addEventListener("click", funcIn)
