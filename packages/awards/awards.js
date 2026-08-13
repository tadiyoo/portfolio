const portfolioItems = [
    {
        img: "./packages/awards/img/2022UESTCAward1.jpg",
        title: "Outstanding International Student of UESTC Award 2023",
        description: "Moments"
    },
    {
        img: "./packages/awards/img/2022UESTCAward2.jpg",
        title: "Outstanding International Student of UESTC Award 2023",
        description: "Moments"
    },    
    {
        img: "./packages/awards/img/2021UESTCAward.JPG",
        title: "Outstanding International Student of UESTC Award 2021",
        description: "Moments"
    },
    {
        img: "./packages/awards/img/Huawei1.jpg",
        title: "Huawei Internship Experience",
        description: "Moments"
    },
    {
        img: "./packages/awards/img/Huawei2.jpg",
        title: "Huawei Internship Experience",
        description: "Moments"
    },
    {
        img: "./packages/awards/img/Huawei3.jpg",
        title: "Huawei Internship Experience",
        description: "Moments"
    }
]; 

const portfolioWrapper = document.getElementById('portfolio-wrapper');

portfolioItems.forEach(item => {
    const portfolioContent = document.createElement('div');
    portfolioContent.className = 'portfolio__content grid swiper-slide';

    portfolioContent.innerHTML = `
        <img src="${item.img}" alt="" class="portfolio__img">
        <div class="portfolio_">
            <h3 class="portfolio__title">${item.title}</h3>
            <p class="portfolio__description">${item.description}</p>
        </div>
    `;

    portfolioWrapper.appendChild(portfolioContent);


    // To make the dialog box close when we click on outside of it after opening the dialog 
    document.addEventListener("DOMContentLoaded", function() {
        const modalLinks = document.querySelectorAll('.services__button');
        const modals = document.querySelectorAll('.services__modal');
        const closeModalButtons = document.querySelectorAll('.services__modal-close');

        // Open modal when clicking on a modal link
        modalLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                // Find the closest modal related to the clicked button
                const modal = this.closest('.services__content').querySelector('.services__modal');
                modals.forEach(m => m.style.display = 'none'); // Close other modals
                modal.style.display = 'flex'; // Show the clicked modal
            });
        });

        // Close modal when clicking on the close button
        closeModalButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.closest('.services__modal').style.display = 'none';
            });
        });

        // Close modal when clicking outside of the modal
        window.addEventListener('click', function(event) {
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });

    // Dynamically add script tags
    const scripts = [
        "./packages/assets/js/swiper-bundle.min.js",
        "./packages/assets/js/main.js",
    ];

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    });


});
