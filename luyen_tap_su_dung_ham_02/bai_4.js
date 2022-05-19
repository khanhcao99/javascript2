function test_number(a) {
    let flag = true
    if (!isNaN(a)){
        flag = true
        return flag

    }else {
        flag = false
        return flag
    }
}

function number() {
    let a = prompt("Nhập vào ký tự để kiểm tra")
    if (test_number(a)){
        document.getElementById("result4").innerHTML = "Đây là 1 số nguyên"
    }else {
        document.getElementById("result4").innerHTML = "Đây là không phải là 1 số nguyên"
    }
}