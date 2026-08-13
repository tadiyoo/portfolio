document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = [
        {
            category: "ai",
            image: "./packages/project/img/Triplet.png",
            title: "Surgical Triplet Recognition",
            description: [
                "Developed an AI model for recognizing surgical triplets in real-time during procedures.",
                "Implemented deep learning techniques to accurately identify sequences of surgical tools, phases, and actions.",
                "The system enhances the understanding of surgical workflows and supports intraoperative decision-making.",
                "Integrated with existing surgical systems to provide real-time feedback to surgeons.",
                "Programming languages and tools used: Python, PyTorch, OpenCV, ...."
            ]
        },      
        {
            category: "ai",
            image: "./packages/project/img/Phase.gif",
            title: "Surgical Phase Recognition",
            description: [
                "Implemented an AI system to identify and track different phases of surgery automatically.",
                "Used machine learning algorithms to classify surgical phases from video data with high accuracy.",
                "The model improves surgical procedure monitoring and provides insights for training and quality control.",
                "Supports hospitals in maintaining standards and reducing surgical errors.",
                "Programming languages and tools used: Python, PyTorch, OpenCV, ...."
            ]
        },               
        {
            category: "ai",
            image: "./packages/project/img/Tool.gif",
            title: "Surgical Tool Recognition",
            description: [
                "Developed a tool recognition model to identify and track surgical instruments in real-time.",
                "Leveraged computer vision and AI to enhance the precision of surgical tool handling.",
                "The system aids in inventory management and ensures the availability of necessary tools during operations.",
                "Supports sterile processing departments by tracking tool usage and location.",
                "Programming languages and tools used: Python, PyTorch, OpenCV, ...."
            ]
        },  
        {
            category: "ai web db",
            image: "./packages/project/img/KG.gif",
            title: "Knowledge Graph Design and Development",
            description: [
                "Designed and developed a knowledge graph to organize and represent relationships within a dataset.",
                "Applied graph-based algorithms to extract insights and connections between various entities.",
                "The knowledge graph enhances data retrieval, supporting advanced search and discovery capabilities.",
                "Utilized in domains such as healthcare, finance, and research to link and query vast amounts of data efficiently.",
                "Programming languages and tools used: Python, Neo4j, PyTorch, ...."
            ]
        },          
        {
            category: "ai web",
            image: "./packages/project/img/TSA.gif",
            title: "Time Series Anomaly Detection",
            description: [
                "Implemented an AI model to detect anomalies in time series data with high precision.",
                "Used techniques such as LSTM and autoencoders to identify unusual patterns in real-time data streams.",
                "The system helps in predictive maintenance, fraud detection, and monitoring critical infrastructures.",
                "Deployed across various industries, including finance, networking, manufacturing, and IoT.",
                "Programming languages and tools used: Python, PyTorch, Scikit-learn, ...."
            ]
        },                 
        {
            category: "ai other",
            image: "./packages/project/img/TSP.gif",
            title: "TSP: Neural Combinatorial Optimization (NCO)",
            description: [
                "Developed a neural network-based solution for the Traveling Salesman Problem (TSP).",
                "Implemented reinforcement learning techniques to optimize route planning and reduce travel costs.",
                "The model efficiently solves large-scale TSP instances, outperforming traditional heuristic methods.",
                "Applied in logistics, delivery services, and network design to improve operational efficiency.",
                "Programming languages and tools used: Python, PyTorch, RLlib, ...."
            ]
        },   
        {
            category: "ai other",
            image: "./packages/project/img/CVRP.gif",
            title: "CVRP: Neural Combinatorial Optimization (NCO)",
            description: [
                "Implemented a neural network model to solve the Capacitated Vehicle Routing Problem (CVRP).",
                "Optimized vehicle routes considering capacity constraints to minimize delivery costs.",
                "Used deep reinforcement learning to achieve superior performance over conventional methods.",
                "Beneficial for logistics companies in managing fleets and reducing operational costs.",
                "Programming languages and tools used: Python, PyTorch, RLlib, ...."
            ]
        },            
        {
            category: "db web",
            image: "./packages/project/img/RESTAPI.gif",
            title: "RESTful API Development",
            description: [
                "Designed and implemented a RESTful API to enable seamless data exchange between client and server.",
                "Ensured the API is scalable, secure, and adheres to best practices for REST architecture.",
                "The API supports CRUD operations, authentication, and handles high traffic efficiently.",
                "Used in various applications, including mobile apps, web services, and enterprise systems.",
                "Programming languages and tools used: PHP, Laravel, MySQL, ...."
            ]
        },

    
        {
            category: "ai db desk",
            image: "./packages/project/img/tech4sport.png",
            title: "TECH4SPORT Desktop App Development",
            description: [
                "LEDbox automatically recognizes the connection to e-Scoresheet software by Data Project and displays real-time official data as required by FIVB regulations.",
                "Displays all official match data, including scores, substitutions, and time-outs, with team colors.",
                "Provides personalized interfaces for various sports disciplines, both on the App and the display.",
                "Supports simple interfaces for special scores and exercises management, including 'Wash Drills' in Volleyball.",
                "Allows users to set up exercise sequences with images and timing via the App, guiding teams through preparation and execution.",
                "Enables creation of promotional Playlists with sponsor logos and videos, shown before, during, and after matches to enhance sponsor visibility.",
                "Supports audio Playlists that can be played before and after matches through the Sports Hall sound system.",
                "Enables real-time message visualization with customizable scrolling effects and character dimensions via the App.",
                "Programming languages and technologies used: Python, Django, PyQT5, MySQL, CV2, YOLO, ..."
            ]            
        },                         
        {
            category: "andr desk",
            image: "./packages/project/img/gc.gif",
            title: "Graduation Memo-Book App",
            description: [
                "This Android App I developed for graduating students contains students' information.",
                "Integrated with their social media accounts (Facebook, Instagram, and WeChat).",
                "Allows students to contact each other after graduation at any time using those integrated social media accounts.",
                "Programming languages used: Java + XML + ..."
            ]
        },
        {
            category: "andr",
            image: "./packages/project/img/dictionary.gif",
            title: "Android Dictionary App",
            description: [
                "I created a dictionary in my 'Data Structures & Algorithms' course using Java and Hash Maps (complexity: O(1)).",
                "While learning Android App Development from YouTube, I decided to make a dictionary app in Android using the same Java code logic.",
                "Developed this app in Android Studio, containing over 32,000 English words and their meanings.",
                "Initially takes approximately 8 seconds to load, then searches words instantly with a Time Complexity of O(1).",
                "Determined to reduce the loading time further.",
                "Programming languages used: Java + XML + ..."
            ]                       
        },
        {
            title: "Personal Blog Websites",
            category: "web other",
            image: "./packages/project/img/blog.gif",
            description: [
                "This project is called Complete Personal Blog Script using PHP and MySQL.",
                "Complete Personal Blog is a clean and minimal Laravel blog perfect for writers.",
                "It creates a personal blog site with simple creative features and effects to enhance the reading experience.",
                "Built a multi-page website using HTML and CSS skills which includes custom images, layout, and styling.",
                "Worked on appropriate file structuring, formatting, and styling.",
                "Focused on using Flexbox and Grid systems to make the page responsive.",
                "Programming languages used: HTML + JS + CSS + PHP/Laravel + Python/Django + ..."
            ]
            
        },    
        {
            title: "E-Commerce System",
            category: "web other",
            image: "./packages/project/img/ecom.gif",
            description: [
                "E-Commerce Website project developed using PHP, CSS, Bootstrap, and JavaScript with MySQL database.",
                "The system has all the essential features required for an e-commerce website.",
                "Contains user and admin sides.",
                "Admin can manage products, suppliers, view logs, and many more.",
                "From the user account, users can view products and purchase them easily.",
                "Admin plays the main role in the management of the website.",
                "Admin performs functions like managing products, suppliers, users, and much more.",
                "Features allow users to manage products and shop online.",
                "Helps customers to filter, shop online just like every other known eCommerce website.",
                "Contains product and order management features.",
                "Allows managing customers, website settings, subscribers, and more.",
                "Contains an admin panel with a customer panel on the client side.",
                "Customers can register on the website to start shopping.",
                "Customers can filter products, add to cart, checkout, view orders, and much more.",
                "Customers can go through a number of phases of products under this PHP eCommerce project.",
                "Programming languages used: HTML+JS+CSS+PHP/Laravel+Python/Django+MySQL+..."
            ]
            
        },
        {
            title: "Hospital Management System",
            category: "desk andr web other",
            image: "./packages/project/img/hms.gif",
            description: [
                "The system aims to computerize the front office management of a hospital.",
                "Developed to be user-friendly, fast, and cost-effective.",
                "Handles collection of employee and patient information.",
                "Performs CRUD operations on patient, doctor, pharmacist, and other data.",
                "Patients can create an account and access various services.",
                "Services include FAQs, hospital map, hotels around the hospital, appointment scheduling, online portal, contact details, financial assistance, and more.",
                "Programming languages used: Java + MySQL +..."
            ]
            
            
        },
        {
            title: "Projects for Personal Learning Purpose",
            category: "andr web desk other",
            image: "./packages/project/img/arduino.gif",
            description: [
                "Developed several projects for academic coursework and personal learning purposes, including:",
                "Timeseries Data Clustering, Classification, Anomaly Detection, and Forecasting.",
                "Design and Implementation of a Satellite Knowledge Graph and QA System.",
                "E-mail Spam and Non-spam Filtering using Machine Learning (SVM).",
                "Biometric Attendance System utilizing Java, C, Arduino Uno, and MySQL DB.",
                "RFID Smart Card System developed with Java, C, Arduino Uno, and MySQL DB.",
                "Multithreaded Banking System implemented in C/C++ with MFC and Win32 APIs.",
                "School Management System created using Java and MySQL DB.",
                "Library Management System designed with Java and MySQL DB.",
                "Programming languages and technologies used include: Python, Java, C++, C, Arduino, MFC, Win32, and others."
            ]            
        }
    ];

   

    // Populate portfolio list
    const portfolioList = document.getElementById('portfolio-list');
    portfolioItems.forEach((item, index) => {
        const colDiv = document.createElement('div');
        colDiv.className = `col-lg-4 col-md-6 mix ${item.category}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'services__content single-portfolio';
        contentDiv.style.backgroundImage = `url(${item.image})`;

        const iconDiv = document.createElement('div');
        iconDiv.className = 'portfolio-icon text-center';
        iconDiv.innerHTML = `
            <span class="button button--flex button--small button--link services__button">
                <a class="portfolio-link" data-bs-toggle="modal" data-target="#modal-${index + 1}">
                    <i class="fa fa-arrows-alt"></i>
                </a>
            </span>
        `;

        const hoverDiv = document.createElement('div');
        hoverDiv.className = 'portfolio-hover';
        hoverDiv.innerHTML = `<h4>${item.title}</h4>`;

        const modalDiv = document.createElement('div');
        modalDiv.id = `modal-${index + 1}`;
        modalDiv.className = 'services__modal';
        modalDiv.innerHTML = `
            <div class="projects__modal-content">
                <h4 class="services__modal-title" style="text-align: center;">${item.title}</h4>
                <i class="uil uil-times services__modal-close"></i>
                <img class="img-fluid d-block mx-auto" src="${item.image}" alt="..." />
                <br>
                <ul class="services__modal-services grid">
                    ${item.description.map(desc => `
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>${desc}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        contentDiv.appendChild(iconDiv);
        contentDiv.appendChild(hoverDiv);
        contentDiv.appendChild(modalDiv);
        colDiv.appendChild(contentDiv);
        portfolioList.appendChild(colDiv);
    });



    // Dynamically add script tags
    const scripts = [
        "./packages/project/js/jquery-3.3.1.min.js",
        "./packages/project/js/lightbox.min.js",
        "./packages/project/js/owl.carousel.min.js",
        "./packages/project/js/jquery.mixitup.js",
        "./packages/project/js/wow.min.js",
        "./packages/project/js/main2.js",
        "./packages/assets/js/swiper-bundle.min.js",
        "./packages/assets/js/main.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        "https://cdn.startbootstrap.com/sb-forms-latest.js"



    ];

    // Inject the dependency scripts so they execute IN ORDER.
    // Dynamically-created <script> tags are async by default, which means
    // they run in whatever order they finish downloading. That let main2.js
    // (which calls $('.portfolio-area').mixItUp()) run before jQuery/MixItUp
    // had loaded, so MixItUp never initialised and the project cards stayed
    // hidden until a reload. Setting async = false preserves insertion order,
    // guaranteeing jQuery -> MixItUp -> ... -> main2.js every time.
    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
    });



    const modalLinks = document.querySelectorAll('.portfolio-link');
    const modals = document.querySelectorAll('.services__modal');
    const closeModalButtons = document.querySelectorAll('.services__modal-close');

    modalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetModalId = link.getAttribute('data-target');
            const modal = document.querySelector(targetModalId);
            document.body.appendChild(modal); // Append modal to body
            modals.forEach(m => m.style.display = 'none'); // Close other modals
            modal.style.display = 'flex'; // Show clicked modal
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.services__modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });   
    
    
});

