function square(a) {
    return Math.pow(a,2)
}

function do_square() {
    let a = prompt("Nhập vào số bất kì")
    document.getElementById("result1").innerHTML = a + " là: " + square(a)
}