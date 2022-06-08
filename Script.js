var img = document.querySelector(".img");

setTimeout(newImg, 2000);
function newImg() {
  img.setAttribute("src", "https://pbs.twimg.com/ext_tw_video_thumb/928979450972160001/pu/img/9NK1CpNmErpc4VrE.jpg");
  setTimeout(newImg2, 2000);
}
function newImg2() {
  img.setAttribute("src", "https://p-a-c-k-s.com/wp-content/uploads/2021/04/p-a-c-k-s.com_1.jpeg");
  setTimeout(newImg, 2000);
}




const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '992767717';
const m = "Si?";

function enviarMensaje() {
  //let mensaje = 'send?phone=' + telefono + '&text=*Enviame tu Pack*%0A' + m;
  
  let mensaje = 'send?phone=' + telefono + '&text=*Enviame tu Pack 😘*'; 
  
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
