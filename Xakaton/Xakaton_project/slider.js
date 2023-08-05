const nextImageTimeout = 7000;
const mainSlider = document.querySelector('.mainSlider');
let sliderImagesArr = mainSlider.querySelectorAll('.slide-img');
let currentImage = 0;
let buttons = document.querySelectorAll('.button_replace');
let button_left = buttons[0];
let button_right = buttons[1];

//let check_button_active = false;



//if (sliderImagesArr.length > 1 && check_button_active == false) setTimeout(showNextSlide, nextImageTimeout);


/*function active() {
    check_button_active = false;
    showNextSlide();
}*/


function showNextSlide() {

    button_left.addEventListener('click', () => {
        currentImage--;
        if (currentImage < 0) {
            currentImage = sliderImagesArr.length - 1;
            sliderImagesArr[currentImage].style.opacity = 1;
        } else {
            sliderImagesArr[currentImage + 1].style.opacity = 0;
            sliderImagesArr[currentImage].style.opacity = 1;
        }
                
        check_button_active = true;

    })
    button_right.addEventListener('click', () => {
        if ( currentImage < sliderImagesArr.length-1) {
            currentImage++;
            sliderImagesArr[currentImage].style.opacity = 1;
        
        } else {
            currentImage = 0;
            sliderImagesArr.forEach( (img, i) => {if (i > 0) img.style.opacity = 0;});
        }
    })

    /*if ( currentImage < sliderImagesArr.length-1) {

        currentImage++;
        sliderImagesArr[currentImage].style.opacity = 1;
    
    } else {

        currentImage = 0;
        sliderImagesArr.forEach( (img, i) => {if (i > 0) img.style.opacity = 0;});
    }
    
    if (sliderImagesArr.length > 1) setTimeout(showNextSlide, nextImageTimeout);

    /*if (check_button_active) {
        setTimeout(active, nextImageTimeout)
    }*/
    
}
showNextSlide()
//check_button_active = false;



/*let images = document.querySelectorAll('.slide-img');
let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  currentIndex = index;
}

document.querySelector('.buttons').addEventListener('click', function (event) {
    if (event.target.classList.contains('button_replace-1')) {
      let index = currentIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage(index);
    } else if (event.target.classList.contains('button_replace-2')) {
      let index = currentIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      showImage(index);
    }
});

showImage(currentIndex);*/