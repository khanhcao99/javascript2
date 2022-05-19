function perimeter(dk) {
    return (dk+dk)*Math.PI;
}

function area(dk) {
    return Math.pow(dk,2)*Math.PI;
}

function do_cricle() {
    let dk = prompt("Nhập vào bán kính hình tròn");
    document.getElementById("result2").innerHTML = " Chu vi = " + perimeter(dk).toFixed(2) + ", " + " Diện tích = " + area(dk).toFixed(2)
}