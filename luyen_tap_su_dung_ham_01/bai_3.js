function twoNumber() {
    let number1 = +prompt("Nhập số đầu tiên")
    let number2 = +prompt("Nhập số thứ hai")
    if(number1>number2){
        alert("Số thứ nhất lớn hơn số thứ hai")
    }else if (number1<=number2){
        s = number1 + number2
        alert("Tổng 2 số là: " + s)
    }
}