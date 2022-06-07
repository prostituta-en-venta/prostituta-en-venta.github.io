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
