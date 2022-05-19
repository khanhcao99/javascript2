let array
    function creatArray(){
    let n = +prompt("Nhập vào số phần tử trong mảng")
        array = new Array(n)
        for (let i = 0; i <array.length ; i++) {
            array[i] = prompt("Nhập vào giá trị của phần tử")
        }
    }