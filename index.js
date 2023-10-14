function openNav() {
    // document.getElementById("sideNav").style.display = "block";
    document.getElementById("sideNav").style.width = "250px";
  }
function closeNav() {
    // document.getElementById("sideNav").style.display = "none";
    document.getElementById("sideNav").style.width = "0px";
  }

  let currentSlide = 0;
  let slides = document.querySelectorAll(".slides");
  let prevBtn = document.getElementById("prevBtn");
  let nextBtn = document.getElementById("nextBtn");
  function next(){
    let nextSlide = (currentSlide + 1)%slides.length;
    slides[currentSlide].style.display = "none";
    slides[nextSlide].style.display = "block";
    currentSlide = nextSlide;

  }
  nextBtn.addEventListener("click", next)
  prevBtn.addEventListener("click", function(){
    let prevSlide = currentSlide == 0?slides.length-1:currentSlide-1;
    slides[currentSlide].style.display = "none";
    slides[prevSlide].style.display = "block";
    currentSlide = prevSlide;
  })
  setInterval(next, 3000);
//reviews
  let currentReview = 0;
  let reviews = document.querySelectorAll(".review");
  let prevBtn1 = document.getElementById("prevBtn1");
  let nextBtn1 = document.getElementById("nextBtn1");
  function nextReview(){
    let nextReview = (currentReview + 1)%reviews.length;
    reviews[currentReview].style.display = "none";
    reviews[nextReview].style.display = "block";
    currentReview = nextReview;

  }
  nextBtn1.addEventListener("click", nextReview)
  prevBtn1.addEventListener("click", function(){
    let prevReview = currentReview == 0?reviews.length-1:currentReview-1;
    reviews[currentReview].style.display = "none";
    reviews[prevReview].style.display = "block";
    currentReview = prevReview;
  })
//   setInterval(nextReview, 3000);

//left and right sliding effect
const left = document.getElementById("left");
const right = document.getElementById("right");

window.addEventListener("scroll", appearOnScroll);

function appearOnScroll(){
  let leftPosition = left.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.5;
  if(windowHeight>leftPosition){
    left.classList.remove("left");
    right.classList.remove("right");
  }else{
    left.classList.add("left");
    right.classList.add("right");
  }
}
const left1 = document.getElementById("left1");
const right1 = document.getElementById("right1");

window.addEventListener("scroll", appearOnScroll1);

function appearOnScroll1(){
  let leftPosition1 = left1.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.5;
  if(windowHeight>leftPosition1){
    left1.classList.remove("left1");
    right1.classList.remove("right1");
  }else{
    left1.classList.add("left1");
    right1.classList.add("right1");
  }
}

const left2 = document.getElementById("left2");
const right2 = document.getElementById("right2");

window.addEventListener("scroll", appearOnScroll2);

function appearOnScroll2(){
  let leftPosition2 = left2.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.5;
  if(windowHeight>leftPosition2){
    left2.classList.remove("left2");
    right2.classList.remove("right2");
  }else{
    left2.classList.add("left2");
    right2.classList.add("right2");
  }
}


const shows = document.querySelectorAll(".show");
window.addEventListener("scroll", appearOnScroll3);
function appearOnScroll3(){
  let windowHeight = window.innerHeight/1.5;
  shows.forEach ((show) => {
  let showPosition = show.getBoundingClientRect().top;
  if(showPosition<windowHeight){
    show.classList.remove("show");

  }else{
    show.classList.add("show");

  }})
}



// // const right2 = document.getElementById("right2");
// console.log(show)

//     // right2.classList.remove("right2");
//     // right2.classList.add("right2");
//   }
// }



// //slide up on scroll effects
// const reveals = document.querySelectorAll(".aboutus");
// const reveals1 = document.querySelectorAll(".chooseus");

// window.addEventListener("scroll", reveal);

// function reveal(){
//   let revealTop = reveals.getBoundingClientRect().top;
//   let windowHeight = window.innerHeight/5 *4;

//   reveal.forach
//     if (windowHeight>revealTop){
//       reveals.classList.add("reveal");
//     }else{
//       reveals.classList.remove("reveal");
//     }
//   }
// reveal();
// }