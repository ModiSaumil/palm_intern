const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
console.log(itemsArray)

document.querySelector('#task').addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

var fErr = eErr = true;

function displayItem() {
    let items = ""
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="item">
        <div class="input-con d-flex m-2">
        <input type="checkbox" id="myCheck" class="donetask fs-4 m-2" onclick="toggleStrikethrough(this)">
            <input type="text" id="myDIV" class="form-control fs-4 justify-content-center" value="` + itemsArray[i] + `" disabled ></input>
            <div class="edit-con d-flex m-2">
                <span class="edittask m-2"><i class="fa fa-pencil fs-3" ></i></span>
                <span class="deletetask m-2"><i class="fa fa-trash fs-3"></i></span>
            </div>
        </div>
        <div class="update-con m-2 justify-content-center">
            <button class="save btn btn-success m-1">Save</button>
            <button class="cancel btn btn-warning m-1">Cancel</button>
        </div>
        <div id="eErr" class="d-flex justify-content-center"></div>
    </div>`
    }
    document.querySelector(".todolist").innerHTML = items
    deletetask()
    edittask()
    savebtn()
    cancelbtn()
    // donetask()
    // myFunction()
}

function createItem(item) {

    let result = item.value.trim();
    let minlenght = result.length

    console.warn(minlenght)

    if (minlenght < 5 || minlenght > 20) {
        printError("fErr", "please add character more then 5 and less then 20");
        item.value = "";
    } else {
        printError("fErr", " ");
        itemsArray.push(result)
        localStorage.setItem("items", JSON.stringify(itemsArray))
        location.reload()
    }
}

function edittask() {
    const edittas = document.querySelectorAll(".edittask")
    const update = document.querySelectorAll(".update-con")
    const input = document.querySelectorAll(".input-con input")

    edittas.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            update[i].style.display = "flex"
            input[i].disabled = false
        })
    })
}

function savebtn() {
    const save = document.querySelectorAll(".save")
    const input = document.querySelectorAll(".input-con input")

    save.forEach((sb, i) => {
        sb.addEventListener("click", () => {

            let result = input[i].value.trim()
            let minlenght = result.length

            console.warn(minlenght)

            if (minlenght < 5 || minlenght > 20) {
                console.log(result)
                printError("eErr", "please add character more then 5 and less then 20");
            }
            else {
                updateItem(result, i)
                printError("eErr", " ");
            }

        })

    })
}

function updateItem(text, i) {
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function cancelbtn() {
    const cancel = document.querySelectorAll(".cancel")
    const update = document.querySelectorAll(".update-con")
    const input = 
    document.querySelectorAll(".input-con input")

    cancel.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            update[i].style.display = "none"
            input[i].disabled = true
            location.reload();
        })
    })

}

function deletetask() {
    let deletetask = document.querySelectorAll(".deletetask")
    deletetask.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

window.onload = function () {
    displayItem()
}


// function donetask(){
//     const input = document.querySelectorAll(".input-con input")
//     let donetask = document.querySelectorAll(".donetask")
//     donetask.forEach((db,i)=>{
//         db.addEventListener("click",()=>{
//             var checkBox = document.getElementById("myCheck");
//             if(checkBox.checked == true){
//                 console.log('done')
                
//             }else{
//                 console.log('not done')
                
//             }
               
//         })
//     })
// }

// function donetaskline(i){

//     var checkBox = document.getElementById("myCheck");
//     if (checkBox.checked == true){
//         document.getElementById("myDIV").style.textDecorationLine = "line-through";
//     } else {
//         document.getElementById("myDIV").style.textDecorationLine = "none";
//     }

    // document.getElementById("myDIV").style.textDecorationLine = "line-through";
// }

// function myFunction() {
    
//   }