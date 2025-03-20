// Purpose: JavaScript for the portfolio website



    document.addEventListener("DOMContentLoaded", () => {
        const year = new Date().getFullYear();
        document.getElementById("copyright").textContent = `© ${year} Rima. All rights reserved.`;
    });



const clickSound = new Audio("https://www.soundjay.com/button/beep-07.wav");
        
function toggleFAQ(element) {
    let answer = element.querySelector('.answer');
    let arrow = element.querySelector('.arrow');
    element.classList.toggle("active");
    arrow.classList.toggle("rotate");
    clickSound.play();
}

function closeAllFAQs() {
    document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".arrow").classList.remove("rotate");
    });
}

function filterFAQs() {
    let input = document.querySelector(".search-bar").value.toLowerCase();
    document.querySelectorAll(".faq-item").forEach(item => {
        let question = item.querySelector(".question").innerText.toLowerCase();
        if (question.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}



document.getElementById("previewBtn").addEventListener("click", function() {
    document.getElementById("resumePreview").classList.remove("hidden");
});
document.getElementById("closePreview").addEventListener("click", function() {
    document.getElementById("resumePreview").classList.add("hidden");
});
document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "resume.pdf";  // Ensure the file exists in the same directory
    link.download = "My_Resume.pdf";  // Set the default download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent the default form submission
            const responseMessage = document.getElementById('form-response');
            responseMessage.style.display = 'block'; // Show the success message
            setTimeout(() => {
                responseMessage.style.display = 'none'; // Hide the message after 5 seconds
            }, 5000);
            event.target.reset(); // Reset the form fields
            return false;
        }
  


let index = 0;
async function fetchTestimonials() {
    try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        const data = await response.json();
        loadTestimonials(data);
    } catch (error) {
        console.error("Error fetching testimonials:", error);
    }
}

function loadTestimonials(testimonials) {
    const slider = document.getElementById("testimonial-slider");
    slider.innerHTML = "";
    testimonials.forEach((testimonial, i) => {
        const div = document.createElement("div");
        div.classList.add("testimonial");
        if (i === 0) div.classList.add("active");
        div.innerHTML = `
            <p class="quote">“${testimonial.quote}”</p>
            <div class="client-info">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="avatar">
                <div>
                    <p class="client-name">${testimonial.name}</p>
                    <p class="client-position">${testimonial.position}</p>
                </div>
            </div>
        `;
        slider.appendChild(div);
    });
}

function showTestimonial(n) {
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((t, i) => {
        t.classList.remove("active");
        if (i === n) t.classList.add("active");
    });
}

function nextTestimonial() {
    index = (index + 1) % document.querySelectorAll(".testimonial").length;
    showTestimonial(index);
}

function prevTestimonial() {
    index = (index - 1 + document.querySelectorAll(".testimonial").length) % document.querySelectorAll(".testimonial").length;
    showTestimonial(index);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchTestimonials();
    setInterval(nextTestimonial, 5000);
});



        document.addEventListener("DOMContentLoaded", function() {
            const progressBars = document.querySelectorAll(".progress-bar");
            progressBars.forEach(bar => {
                let width = 0;
                const target = bar.getAttribute("data-progress");
                const interval = setInterval(() => {
                    if (width >= parseInt(target)) {
                        clearInterval(interval);
                    } else {
                        width++;
                        bar.style.width = width + "%";
                        bar.textContent = width + "%";
                    }
                }, 20);
            });
        });


        var typed = new Typed('.type', {
            strings: ['HTML5', 'CSS', 'JavaScript', 'Python', 'WordPress,', 'And More'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
        const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-toggle span');
    
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
    
    