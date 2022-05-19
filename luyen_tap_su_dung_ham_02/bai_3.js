function do_factorial(a) {
    if (a === 2) {
        return 2
    }
    return a * do_factorial(a - 1)
}


function factorial() {
    let a = prompt("Nhập vào số nguyên bất kỳ");
    document.getElementById("result3").innerHTML = a + " là: " + do_factorial(a)
}