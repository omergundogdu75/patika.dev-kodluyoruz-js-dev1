let getName = prompt("isminizi giriniz: ")

document.getElementById("myName").innerHTML= getName
let  date = new Date().toLocaleString('tr-TR'); 
document.getElementById('myClock').innerHTML=date

function tarihsaat(){
    let  date = new Date().toLocaleString('tr-TR'); 
    document.getElementById('myClock').innerHTML=date

}
setInterval(tarihsaat, 1000);