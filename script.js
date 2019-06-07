$(function() {
    $('#goDown').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
    });
  });


let slideIndex = 1;
showSlides(slideIndex);
function slideAbout(n){
    showSlides(slideIndex += n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        slides[i].style.animate = 1000, 'linear';
    }
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].style.animate = 1000, 'linear';
}

let downloadBox = document.getElementById('downloadBox');
let i = document.createElement('i');
i.className = "fas fa-file-download";
let span = document.createElement('span');
span.innerHTML = 'Download resume in PDF';
downloadBox.appendChild(i);
downloadBox.appendChild(span);


let portofolioSlideIndex = 1;
showSlidesPortfol(portofolioSlideIndex);

function plusSlides(n) {
    showSlidesPortfol(portofolioSlideIndex += n);
    for(let i=0; i<=imgPortfolio.length;i++){
  buttonsForWatch1[i].style.display = 'none';
  buttonsForWatch2[i].style.display = 'none';

}
}

function currentSlide(n) {
    showSlidesPortfol(portofolioSlideIndex = n);
}

function showSlidesPortfol(n) {
  let i;
  let mySlides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > mySlides.length) {portofolioSlideIndex = 1}    
  if (n < 1) {portofolioSlideIndex = mySlides.length}
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");

  }
  mySlides[portofolioSlideIndex-1].style.display = "block";  
  dots[portofolioSlideIndex-1].className += " active";

}

let imgPortfolio = document.getElementsByClassName('imgPortfolio');
let buttonsForWatch1 = document.getElementsByClassName('buttonsForWatch1');
let buttonsForWatch2 = document.getElementsByClassName('buttonsForWatch2');

let mySlides = document.getElementsByClassName('mySlides');

let demo = document.createElement('span');
demo.innerHTML = 'Demo';

let code = document.createElement('span');
code.innerHTML = 'Code';

for(let n = 0; n<=mySlides.length;n++){
  mySlides[n].addEventListener('mouseover', function(){

   buttonsForWatch1[n].style.display = 'block';
   buttonsForWatch2[n].style.display = 'block';

   buttonsForWatch1[n].appendChild(demo);
   buttonsForWatch2[n].appendChild(code);
  })
  mySlides[n].addEventListener('mouseout', function(){

    buttonsForWatch1[n].style.display = 'none';
    buttonsForWatch2[n].style.display = 'none';
  })
};


function sendSend(){

  let nameTelega = document.getElementById('nameTelega').value;
  let telTelega = document.getElementById('telTelega').value;
  let messageTelega = document.getElementById('messageTelega').value;
if(nameTelega && telTelega && messageTelega != ''){
  window.open(`https://api.telegram.org/bot834977669:AAGwXXf4bn3CbE3-6SNzvhUCrkCai3VCToE/sendMessage?chat_id=-344427268&text=name: ${nameTelega}, phone: ${ telTelega }, message: ${messageTelega}`);
  nameTelega = '';
  telTelega = '';
  messageTelega = '';
}else{
    let alert = document.getElementById('alert');
    alert.style.display = 'block';
    setTimeout(function(){
      alert.style.display = 'none';
    },3000)
  }
}