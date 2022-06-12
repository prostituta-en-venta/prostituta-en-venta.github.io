var img = document.querySelector(".img");

setTimeout(newImg, 2000);
function newImg() {
  img.setAttribute("src", "https://prostituta-en-venta.github.io/img/min-image2.jpg");
  setTimeout(newImg2, 2000);
}
function newImg2() {
  img.setAttribute("src", "https://prostituta-en-venta.github.io/img/min-image3.jpg");
  setTimeout(newImg3, 2000);
}
function newImg3() {
  img.setAttribute("src", "https://prostituta-en-venta.github.io/img/min-image1.jpg");
  setTimeout(newImg, 2000);
}




const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+591 78094364';
const m = "Si?";

function enviarMensaje() {
  //let mensaje = 'send?phone=' + telefono + '&text=*Hola, pasame tu Pack*%0A' + m;
  
  let mensaje = 'send?phone=' + telefono + '&text=*Hola, pasame tu Pack 😘*'; 
  
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
}
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}
