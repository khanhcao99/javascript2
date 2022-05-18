let star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]

function check(star) {
    let index_star = 0
    let result = 0
    for (let i = 0; i < star1.length; i++) {
        if (star == star1[i]) {
            index_star = i
            for (let j = 0; j <star2.length ; j++) {
                if (index_star == j){
                    result = star2[j]
                    return result;
                }else {
                    result = "Không tìm thấy chòm sao"
                    return  result;
                }
            }
        }else {
            result = "Không tìm thấy chòm sao"
            return result;
        }

    }
}
function checkStar(){
    let star = prompt("Nhập tên cầu thủ")
    document.getElementById("bai5").innerHTML = "Chòm sao của cầu thủ là: " + check(star)
}


