let productList = []
//tên hàm : showAllProduct
//danh sách tham số : không có
// dữ liệu trả về : không có
// chức năng : lặp danh sách sản phẩm, điền vào trong thẻ có id products

function showAllProduct(){
     let content = "";
    for (let i = 0; i <productList.length ; i++) {
        content += "<tr>\n" +
            "        <td>"+productList[i]+"</td>\n" +
            "        <td><button onclick='editProduct("+i+")'>Sửa</button></td>\n" +
            "        <td><button onclick='deleteProduct("+i+")'>Xóa</button></td>\n" +
            "    </tr>"
    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("sum").innerHTML = productList.length
}
//tên hàm : creatNewProduct
// danh sách tham số : không có
// dữ liệu trả về : không có
// chức năng : lấy dữ liệu, push vào mảng, hiển thị dữ liệu

function creatNewProduct() {
    let newP = document.getElementById("newP").value;
    productList.push(newP);
    showAllProduct();
    document.getElementById("newP").value = ""
}

//tên hàm : deleteNewProduct
// danh sách tham số : index
// dữ liệu trả về : không có
// chức năng : Xóa dữ liệu theo index, hiển thị lại danh sách

function deleteProduct(index) {
    productList.splice(index, 1);
    showAllProduct();
}

//tên hàm : editNewProduct
// danh sách tham số : index
// dữ liệu trả về : không có
// chức năng : Sửa dữ liệu theo index, hiển thị lại danh sách
// Cho người dùng nhập vào sản phẩm mới
// Gán lại sản phẩm mới cho sản phẩm cũ
// hiển thị lại danh sách

function editProduct(index) {
    let  newValue = prompt('Chỉnh sửa sản phẩm', productList[index])
    productList[index] = newValue
    showAllProduct()
}