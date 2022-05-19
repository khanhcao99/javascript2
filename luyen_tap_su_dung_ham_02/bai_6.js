function test_number6(a) {
    let flag = true
    if (a>0){
        flag = true
        return flag

    }else {
        flag = false
        return flag
    }
}



function number_6() {
    let a = prompt("Nhập vào 1 số để kiểm tra nguyên âm hay dương")
    if (test_number6(a)){
        document.getElementById("result6").innerHTML = "Đây là 1 số nguyên dương"
    }else {
        document.getElementById("result6").innerHTML = "Đây là không phải là 1 số nguyên dương"
    }
}