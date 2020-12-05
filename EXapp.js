const btnel = document.querySelector("#btn")
const i1el = document.querySelector("#i1")
const i2el = document.querySelector("#i2")
const h1el = document.querySelector("#h1")
const tableel = document.querySelector("#table")

let arr = []
let date = new Date()



function addexpense() {

    const dict = {}
    let i1elv = parseInt(i1el.value)
    let i2elv = i2el.value

    if (i1elv && i2elv) {
        dict.desc = i2elv
        dict.cost = i1elv
        dict.moment = date
        arr.push(dict)
        console.clear()
        console.table(arr)
        render(arr)
        totalex(arr) 
        
        //i1el.value =''
        //i2el.value =''
        
        // console.log(i1elv)
        // console.log(i2elv)
    }

    else { alert("Please Enter The Values :") }
   
}


function clearInput(){
    i1el.value =''
        i2el.value =''
}



function render(arr) {

    tableel.innerHTML = ""

    for (i = 0; i < arr.length; i++) {

        tableel.innerHTML += view()

        //alternate method

        // const tableTextarray = arr.map(item => {return `<div> ${item.desc}::${item.cost} </div>`})
        // let tableTextString = tableTextarray.join("")
        // tableel.innerHTML = tableTextString
        // console.log(arr.map(item => {return `<div> ${item.desc}::${item.cost} </div>`}))
    }
}



function totalex(arr) {
    let totalExpense = 0
    for (i = 0; i < arr.length; i++) {
        totalExpense += arr[i].cost
    }
    console.log(arr)
    h1el.textContent = (`Total Expense : ${totalExpense}`)
}



function view() {
    return ` <li class="list-group-item d-flex justify-content-between">


    <div class="d-flex flex-column">
    
    ${arr[i].desc}
        <small class="text-muted">${arr[i].moment}</small>
    </div>
    

    <div>

        <span class="px-5">
        ₹ ${arr[i].cost}
        </span>
        

        <button onclick="delIn(${i})" type="button" class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
        </button>
        
    </div>
    
 </li>`

}




function delIn(j) {
    deletearr = []

    for (i = 0; i < arr.length; i++) {

        if (i != j) {
            deletearr.push(arr[i])
        }
    }
    arr = deletearr
    console.log(arr)
    render(arr)
    totalex(arr)
}



btnel.addEventListener("click", addexpense)
i1el.addEventListener("focus",clearInput)
