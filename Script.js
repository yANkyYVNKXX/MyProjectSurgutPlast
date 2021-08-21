let topSlide = document.getElementById('top_slide');
let left;
let num=0;
function slideShow2 (){
  let listTop = document.getElementById('list_top_content');
  let widthListTop = getComputedStyle(listTop).width;
  window.addEventListener('resize', function () {
  listTop = document.getElementById('list_top_content');
  widthListTop = getComputedStyle(listTop).width;
  num = 0;
  topSlide.style.left = 0+'px';
  })
     if (num<2) {
   
      widthListTop = parseInt(widthListTop)
   left = parseInt(topSlide.style.left, 10)-widthListTop;
   topSlide.style.left = left+'px';
   num++;
   
     }
     else{ if (num==2)
     { 
      widthListTop = parseInt(widthListTop);
        left = parseInt(topSlide.style.left, 10)+(widthListTop*2);
        topSlide.style.left = left+'px';
        num-=2;
     }
    }

    
}

setInterval(slideShow2, 3000);
addEventListener('scroll', function() {
  let scrollim = window.pageYOffset;
  let headerContact = document.getElementById('header_contacts');
  let header = document.getElementById('header');
  let free_froze = document.getElementById('free_froze');
  if (scrollim>0) {
    free_froze.classList.add ('active_free_froze')
    header.classList.add('active_header')
  headerContact.classList.add('active_header_contacts')
  } else {
    free_froze.classList.remove ('active_free_froze')
    header.classList.remove('active_header')
    headerContact.classList.remove('active_header_contacts')
  }
})
let burger_menu = document.getElementById('burger_menu');
let icon_burger = document.getElementById('icon_burger');
icon_burger.addEventListener('click', function () {
  burger_menu.classList.toggle('burger_active');
  console.log('1');
})


var modal = document.getElementById("myModal");
var btn = document.querySelectorAll(".add");
console.log (btn);
var span = document.getElementsByClassName("close")[0];
for (key in btn) {
btn[key].onclick = function() {
  modal.style.display = "block";
}}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}