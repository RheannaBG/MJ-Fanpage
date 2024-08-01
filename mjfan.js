document.addEventListener('DOMContentLoaded', () => {
    // Poll 
    const options = document.querySelectorAll('.poll-area label');
    options.forEach(option => {
        option.addEventListener('click', () => {
            
            options.forEach(opt => opt.classList.remove('selected'));

            
            option.classList.add('selected');

            
            options.forEach(opt => {
                opt.style.pointerEvents = 'none';
                opt.classList.add('selectall');
            });
        });
    });

    // Quiz 1 
    const quizForm1 = document.getElementById('quiz-form-1');
    const resultsContainer1 = document.getElementById('results1');

    if (quizForm1 && resultsContainer1) {
        document.getElementById('submit1').addEventListener('click', (event) => {
            event.preventDefault(); 
            let score1 = 0;
            const totalQuestions1 = 3;
            const answers1 = {
                question1: 'c',
                question2: 'a',
                question3: 'a',
            };

            for (let question in answers1) {
                const selectedOption = quizForm1.querySelector(`input[name="${question}"]:checked`);
                if (selectedOption && selectedOption.value === answers1[question]) {
                    score1++;
                }
            }

            resultsContainer1.innerHTML = `You scored ${score1} out of ${totalQuestions1}`;
        });
    
    }

    // Quiz 2 
    const quizForm2 = document.getElementById('quiz-form-2');
    const resultsContainer2 = document.getElementById('results2'); 

    if (quizForm2 && resultsContainer2) {
        document.getElementById('submit2').addEventListener('click', (event) => {
            event.preventDefault();
            let score2 = 0;
            const totalQuestions2 = 3;
            const answers2 = {
                question4: 'b',
                question5: 'a',
                question6: 'c'
            };

            for (let question in answers2) {
                const selectedOption = quizForm2.querySelector(`input[name="${question}"]:checked`);
                if (selectedOption && selectedOption.value === answers2[question]) {
                    score2++;
                }
            }

            resultsContainer2.innerHTML = `You scored ${score2} out of ${totalQuestions2}`;
        });
    }
    
});


// Slider 
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
    }
});


var typed = new Typed(".multiple-text", {
    strings: ["Michael Jordan's", "MJ's", "The Goat's"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


