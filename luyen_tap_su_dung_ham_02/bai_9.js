
function number_9() {
    creatArray()
    let a = "v"
    let count = 0
    for (let i = 0; i <array.length ; i++) {
        if (a===array[i]){
            count++
        }
    }
    console.log(array)
    document.getElementById("result9").innerHTML = " Ký tự " + "v " + "xuất hiện " + count + " lần"

}
