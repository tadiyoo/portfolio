document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            img: './packages/assets/img/pp/spirito.jpg',
            name: 'Emilio Spirito',
            role: 'Client(Italy), Sep 26, 2023 - Dec 30, 2023',
            project: 'Develop Desktop App to manage video tracking of volleyball spike',
            description: "Tadiyos has been highly professional, proactive, and cooperative. He has undoubtedly been a valuable collaborator, successfully completing the agreed-upon project, even when the required effort exceeded expectations."
        },
        {
            img: './packages/assets/img/pp/eh.jpg',
            name: 'El H',
            role: 'Client(United States), Oct 18, 2022 - Oct 21, 2022',
            project: 'Database, APIs, and Admin Panel Development for an e-commerce platform',
            description: "Excellent developer! He did everything I asked and went above and beyond. I was looking for a Fullstack Developer who can develop the AdminPanel for my E-Commerce Website and RESTful API for the Android Developer of the platform. He took my requirements and delivered exactly what I wanted at a high-quality level. From designing the admin panel to the integration of the API, he provided efficient and professional service. He is responsive, intelligent, and hard-working. Tadiyos was always available with the skills of great communication, timely replies, and attention to detail with great creativity. Completely committed to finishing the task perfectly within the timeline. I'm upset I hadn't found him sooner but will definitely be using him again going forward!" 
        },
        {
            img: './packages/assets/img/pp/umer.jpg',
            name: 'Muhammad Umer',
            role: 'Client(Italy), Sep 6, 2023 - Mar 20, 2024',
            project: 'Build an Admin Panel and APIs for a Simple eBay Store',
            description: "Tadiyos did a very good job. He exceeded my expectations yet again with his fast delivery and efficient work. Asked questions when there were things he needed to know regarding the integration of the Back4App Database with the Admin Panel and then took that information and applied it well. I will continue to work with him. "
        },
        {
            img: './packages/assets/img/pp/garan.webp',
            name: 'Baran Gur',
            role: 'Client(Japan), Feb 2, 2023 - Feb 4, 2023',
            project: 'Simple reservation system with laravel',
            description: "Tadiyos's development design expertise shone brilliantly throughout our collaboration on simple reservation system and admin panel development. His intuitive skills seamlessly blended functionality and aesthetics, enhancing user experience remarkably. Tadiyos's keen attention to detail and commitment to user-centric approach greatly contributed to the success of our project. It was a pleasure working with him, and I highly recommend his services to anyone seeking top-notch full-stack development solutions."
        },
        {
            img: './packages/assets/img/pp/umer.jpg',
            name: 'Muhammad Umer',
            role: 'Client(Italy), Dec 24, 2022 - Dec 30, 2022',
            project: 'Build Admin Panel Using Back4app Parse Database',
            description: "It was wonderful to work with Tadiyos for the second time! Another great project was completed! On-time and on budget. He is always very fast to respond and I am really pleased with the outcome! I will definitely be back again."
        },
        {
            img: './packages/assets/img/pp/umer.jpg',
            name: 'Muhammad Umer',
            role: 'Client(Italy), Sep 26, 2023 - Dec 30, 2023',
            project: 'Develop APIs and Build an Admin panel for my Application',
            description: "Working with Tadiyos was very easy. He took my requirements (an admin panel and APIs for my application) and delivered exactly what I wanted at a good quality level. He also designed and developed the database from scratch. I came to him with a rough concept, and he responded straight away and completed the job within the timeline, and was very helpful in answering all my questions. I will definitely be working together again in the future. I gladly recommend him to anyone looking for quality work." 
        },
        {
            img: './packages/assets/img/pp/umer.jpg',
            name: 'Muhammad Umer ',
            role: 'Client(Pakistan), Mar 30, 2023 - Mar 30, 2023',
            project: 'Build a Simple Website for Summer Camp',
            description: "This is the fourth time that I have worked with Tadiyos, and once again, he has exceeded my expectations. I am very pleased with the results, and I appreciate the effort he put into completing the project within a day. If I have any future projects, he will be my first choice, and I would not hesitate to recommend him to anyone looking for a skilled and reliable freelancer."
        },
    ];
    
    const testimonialContainer = document.querySelector('.testimonial__container .swiper-wrapper');

    testimonials.forEach(testimonial => {
        const testimonialContent = document.createElement('div');
        testimonialContent.classList.add('testimonial__content', 'swiper-slide');

        const fullText = testimonial.description;

        testimonialContent.innerHTML = `
            <div class="testimonial__data">
                <div class="testimonial__header">
                    <img src="${testimonial.img}" alt="" class="testimonial__img">
                    <div>
                        <h3 class="testimonial__name">${testimonial.name}</h3>
                        <span class="testimonial__client">${testimonial.role}</span>
                    </div>
                </div>
                <div>
                    <i class="fa fa-star testimonial__icon-star"></i>
                    <i class="fa fa-star testimonial__icon-star"></i>
                    <i class="fa fa-star testimonial__icon-star"></i>
                    <i class="fa fa-star testimonial__icon-star"></i>
                    <i class="fa fa-star testimonial__icon-star"></i>
                </div>
            </div>
            <h3 class="testimonial__name project">Project Title: ${testimonial.project}</h3>
            <p class="testimonial__description">${fullText}</p>
            <span class="show-more-link">Show more</span>
        `;

        testimonialContainer.appendChild(testimonialContent);

        const showMoreLink = testimonialContent.querySelector('.show-more-link');
        const descriptionElement = testimonialContent.querySelector('.testimonial__description');

        showMoreLink.addEventListener('click', () => {
            descriptionElement.classList.toggle('show-full-text');
            if (descriptionElement.classList.contains('show-full-text')) {
                showMoreLink.textContent = 'Show less';
            } else {
                showMoreLink.textContent = 'Show more';
            }
            const carousel = document.querySelector('.testimonial__container');
            if (carousel && carousel.swiper) {
                carousel.swiper.update();
            }
        });
    });

    // projects.js already loads Swiper. Wait for it, then init AFTER slides exist.
    // Loading main.js here a second time used to race: Swiper started on an empty
    // wrapper, so left/right browsing never attached to these cards.
    function startTestimonialCarousel(attempt) {
        const container = document.querySelector('.testimonial__container');
        if (!container || container.swiper) {
            return;
        }
        if (typeof Swiper === 'undefined') {
            if ((attempt || 0) < 40) {
                setTimeout(() => startTestimonialCarousel((attempt || 0) + 1), 50);
            }
            return;
        }

        new Swiper(container, {
            loop: true,
            grabCursor: true,
            spaceBetween: 48,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.testimonial__container .swiper-button-next',
                prevEl: '.testimonial__container .swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination-testimonial',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                568: {
                    slidesPerView: 2,
                },
            },
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
        });
    }

    startTestimonialCarousel(0);

});
