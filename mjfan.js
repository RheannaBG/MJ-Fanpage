
document.addEventListener('DOMContentLoaded', function() {
  
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');
    
    let slider = document.querySelector('.slider');
    let sliderList = slider.querySelector('.list');
    let thumbnail = document.querySelector('.thumbnail');
    
    nextBtn.onclick = function() {
        moveSlider('next');
    };
    prevBtn.onclick = function() {
        moveSlider('prev');
    };
    
    function moveSlider(direction) {
        
        let sliderItems = sliderList.querySelectorAll('.item');
        let thumbnailItems = thumbnail.querySelectorAll('.item');
    
        if (direction === 'next') {
           
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            slider.classList.add('next');
        } else {

            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
            slider.classList.add('prev');
        }
    
      
        slider.addEventListener('animationend', function() {
            if (direction === 'next') {
                slider.classList.remove('next');
            } else {
                slider.classList.remove('prev');
            }
        }, { once: true });
    }});

var typed = new Typed(".multiple-text",{
    strings: ["Michael Jordan's","MJ's"," The Goat's" ], 
    typedSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

