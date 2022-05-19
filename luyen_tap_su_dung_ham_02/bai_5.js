function test_three_number() {
    let min = array[0]
    for (let i = 0; i <array.length ; i++) {
        if (array[i]<min){
            min = array[i]
        }
    }
    return min
}



function number_5() {
    creatArray()
    document.getElementById("result5").innerHTML = "Giá trị nhỏ nhất trong 3 số là: " + test_three_number()
}