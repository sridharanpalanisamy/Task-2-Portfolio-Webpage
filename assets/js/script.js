// SECTION 1: Accordion Functionality
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");
    
    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.padding = "0 18px";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.padding = "18px";
            }
        });
    });

    // SECTION 2: Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // SECTION 3: Back to Top Button Visibility
    const backToTop = document.getElementById("backToTop");
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    // SECTION 4: Back to Top Button Click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});

// SECTION 5: Skill Bar Animation
function animateSkill() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        if (isViewPort(bar) && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const percentage = parseInt(bar.getAttribute('data-percentage'), 10);
            let current = 0;
            const percentageSpan = bar.parentElement.previousElementSibling.querySelector('.skill-percentage');
            const interval = setInterval(() => {
                if (current >= percentage) {
                    clearInterval(interval);
                } else {
                    current++;
                    bar.style.width = current + '%';
                    if (percentageSpan) {
                        percentageSpan.textContent = current + '%';
                    }
                }
            }, 10); // Adjust speed as needed
        }
    });
}

// SECTION 6: Skill Animation Event Listeners
//add scroll event listener
window.addEventListener('scroll', animateSkill);
//initial check on page
window.addEventListener('load', animateSkill);
