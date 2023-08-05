let nameSite = document.querySelector(".name-site");
let btn = document.querySelector('.scroll');

function handleButtonClick() {
   nameSite.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);


let navig = document.querySelectorAll('.shadow-text');
let typeRelax = document.querySelector('.container-slider');
let News = document.querySelector('.container-news');
let place = document.querySelector('.mainSlider');
let foot = document.querySelector('footer')

/*function handleButtonClick1(nameDiv) {
   document.querySelector(nameDiv).scrollIntoView({block: "center", behavior: "smooth"});
}*/

function handleButtonClick1() {
   nameSite.scrollIntoView({block: "center", behavior: "smooth"});
}

function handleButtonClick2() {
   typeRelax.scrollIntoView({block: "center", behavior: "smooth"});
}

function handleButtonClick3() {
   News.scrollIntoView({block: "center", behavior: "smooth"});
}

function handleButtonClick4() {
   place.scrollIntoView({block: "center", behavior: "smooth"});
}

function handleButtonClick5() {
   foot.scrollIntoView({block: "center", behavior: "smooth"});
}


navig[0].addEventListener('click', handleButtonClick1);
navig[1].addEventListener('click', handleButtonClick2);
navig[2].addEventListener('click', handleButtonClick3);
navig[3].addEventListener('click', handleButtonClick4);
navig[4].addEventListener('click', handleButtonClick5);
