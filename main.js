


let countel = document.getElementById("count")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countel.textContent = count
    console.log(count)
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countel.textContent = count = 0
}

function reset(){
    saveEl.textContent = "Previous entires: "
}
