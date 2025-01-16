// Navigation
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");
  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

//Data Portfolio
const projects = [
  {
    id: `project1`,
    image: "foto/porto_1.png",
    category1: "UI Development",
    category2: "Landing Page",
    tittle: "Redesign Promotion Page (Pegadaian Digital)",
    type: "Exploration",
  },
  {
    id: `project2`,
    image: "foto/porto_2.png",
    category1: "UI/UX Design",
    category2: "Prototyping",
    tittle: "Self Order Food",
    type: "Exploration",
  },
  {
    id: `project3`,
    image: "foto/butik.png",
    category1: "UI Development",
    category2: "Responsive Design",
    tittle: "Redesign Landing Page and List Product",
    type: "Projects",
  },
  {
    id: `project4`,
    image: "foto/shesafe_p.png",
    category1: "Fullstack Development",
    category2: "Web Apps",
    tittle: "SheSafe",
    type: "Projects",
  },
  {
    id: `project5`,
    image: "foto/literasi.png",
    category1: "UI/UX Design",
    category2: "Web Apps",
    tittle: "Literasictarsa.id",
    type: "Projects",
  },
  {
    id: `project6`,
    image: "foto/alumni.png",
    category1: "UI Development",
    category2: "Web Apps",
    tittle: "Alumnismauctarsa.id",
    type: "Projects",
  },
  {
    id: `project7`,
    image: "foto/myporto.png",
    category1: "UI Development",
    category2: "Responsive Web Apps",
    tittle: "Portfolio of Rusydina",
    type: "ForFun",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("porto-container");

  projects.map((item) => {
    const projectCard = `<div class="card-porto" id="${item.id}">
            <div class="img-porto">
              <img src="${item.image}" />
            </div>
            <div class="title-porto">
              <h6
                style="
                  background-color: #d46e1a;
                  color: white;
                  border-radius: 10px;
                  padding: 8px 8px;
                  display: inline-flex;
                  margin-bottom: 0px;
                " data-category1="${item.category1}"
                >
                ${item.category1}
              </h6>
              <h6
                style="
                  background-color: #5d5cdc;
                  color: white;
                  border-radius: 10px;
                  padding: 8px 8px;
                  display: inline-flex;
                  margin-bottom: 0px;
                " data-category2="${item.category2}">
                ${item.category2}
              </h6>

              <h3>${item.tittle}</h3>
            </div>
          </div>`;
    container.innerHTML += projectCard;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".btn-filter");
  const container = document.getElementById("porto-container");

  const defaultActiveBtn = document.querySelector(".btn-filter[value='']");
  defaultActiveBtn.classList.add("active");

  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener("click", function () {
      filterBtns.forEach((btn) => btn.classList.remove("active"));

      filterBtn.classList.add("active");

      const valueFilter = filterBtn.getAttribute("value");

      const filteredData = projects.filter(
        (item) => valueFilter === "" || item.type === valueFilter
      );

      container.innerHTML = "";

      if (filteredData.length > 0) {
        filteredData.forEach((item) => {
          const projectCard = `
              <div class="card-porto" id="${item.id}">
                <div class="img-porto">
                  <img src="${item.image}" />
                </div>
                <div class="title-porto">
                  <h6 style="background-color: #d46e1a; color: white; border-radius: 10px; padding: 8px 8px; display: inline-flex; margin-bottom: 0px;">
                    ${item.category1}
                  </h6>
                  <h6 style="background-color: #5d5cdc; color: white; border-radius: 10px; padding: 8px 8px; display: inline-flex; margin-bottom: 0px;">
                    ${item.category2}
                  </h6>
                  <h3>${item.tittle}</h3>
                </div>
              </div>`;
          container.innerHTML += projectCard;
        });
      } else {
        const projectCard = `<div style="display:flex; justify-content:center; align-items:center;"><h2>Belum ada Projects hihi</h2></div>`;
        container.innerHTML = projectCard;
      }
    });
  });
});

//Popup Menu and Detail
const body = document.getElementsByTagName("body")[0];
const popMenu = document.getElementById("popmenu");
const containers = document.getElementById("porto-container");
const detailProject = [
  {
    id: `project1`,
    image: "foto/porto_1.png",
    category1: "UI Development",
    category2: "Landing Page",
    tittle: "Redesign Promotion Page ",
    technologies: ["Figma", "React.js", "Bootstrap"],
    description: `<p> I was assigned a test to redesign a promotional website for a digital application. The goal of the redesign is to provide users with information about the Pegadaian Digital application and encourage them to download it. I used Figma to create the mockups and then implemented them using React.js (hardcode).</p>`,
  },
  {
    id: `project2`,
    image: "foto/porto_2.png",
    category1: "UI/UX Design ",
    category2: "Prototyping",
    tittle: "Self Order Food",
    technologies: ["Figma"],
    description: `<h2> Self Food Ordering Web Apps </h2>

<p>A restaurant self-ordering application aimed at improving operational efficiency by reducing the need for cashiers and automating orders, while enhancing the customer experience through easy ordering, attractive menu visualization, and support for both dine-in and take-away. This application also boosts sales and customer satisfaction with promotions and flexible payment options, reduces waiting times and queues, and ensures order accuracy through QR code integration and order tracking.</p>
<h4>Problem?</h4>
<li>Queues and waiting times during peak hours cause customers to wait up to 15 minutes, which can decrease the user experience. </li>
<li>Dependence on cashiers to receive dine-in and take-away orders and handle payments, which slows down service speed, especially during busy times.</li>
<li>There is no effective way for customers to view the menu with appealing food images, which can influence their decision-making.</li>
<h4>Solutions</h4>
<li><strong>Self-Ordering System</strong>: A web-based application that allows customers to place orders and pay independently, reducing queues and improving efficiency.</li>
<li><strong>Integration with POS System</strong>: Orders are directly connected to the POS system and kitchen display, ensuring an efficient workflow from ordering to serving.</li>
<li><strong>Dynamic Menu Display</strong>: A menu display with appealing photos that can be updated for promotions and seasonal menus.</li>
<h4>User Flow</h4>
<a href="foto/uflow.png" target="_blank"><img src="foto/uflow.png" class="container" /> </a>
<h4>Self-Food Ordering Web App Placement Simulation</h4>
<p><strong>Table:</strong><br>
QR code is placed at the center of the table or in an area easily accessible by customers. Simple and clear instructions are provided to help customers get started.<br>
&middot; <strong>Restaurant Entrance:</strong><br>
Install posters or stickers displaying simple instructions on how to order with the QR code. Make sure it’s clearly visible when customers enter the restaurant so they immediately know about the self-ordering option.</p>

<p><strong>Queue or Waiting Area:</strong><br>
In the queue or waiting area, place an information board or digital screen explaining the self-order process. This helps reduce confusion, especially during peak hours, and guides customers directly to their tables to order on their own.</p>

<p><strong>Take Away Counter:</strong><br>
Place information at the kiosk table or take-away counter, especially for customers who prefer to order for take-out. This can be in the form of a small brochure, digital screen, or poster explaining that they can order and pay via QR code at the table, even if they don't plan to dine in.</p>

<p><strong>Near the Cashier or Payment Counter:</strong><br>
If there are customers who prefer to pay at the cashier or are unfamiliar with technology, place information near the cashier to educate them about the self-ordering option using their own devices. This could be a small screen showing a tutorial or visual instructions.</p>

<p><strong>Menu Display Area (Digital/Printed):</strong><br>
On the menu board or digital display in the restaurant, include instructions on how to use the QR code to place an order. This can help customers who are browsing the menu before deciding to sit down and order.</p>
<div class="container" style="display:flex; gap:2rem;">
<a class="btn-link"style="text-decoration:none;" target="_blank" href="https://www.figma.com/proto/1byYjS3koonDV6TaUzqI65/McDoni?page-id=2%3A4&node-id=203-3258&viewport=664%2C209%2C0.25&t=QhHlp336vzQe4CXp-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=203%3A3254">Prototyping</a>
<a class="btn-link" style="text-decoration:none;" target="_blank" href="https://www.figma.com/design/1byYjS3koonDV6TaUzqI65/McDoni?node-id=203-3128&t=AhliA1aTVryGCBe7-1">Link Figma</a>

</div>
`,
  },
  {
    id: `project3`,
    image: "foto/butik.png",
    category1: "UI Development",
    category2: "Responsive Design",
    tittle: "Redesign Landing Page and List Product",
    technologies: [
      "Figma",
      "Jquery",
      "Bootstrap",
      "JS",
      "Codeigniter3",
      "HTML",
      "CSS",
    ],
    description: `<h2>Boutique CTARSA</h2>
    <p>In this project, I spearheaded the redesign of the landing page and product pages by creating comprehensive mockups using Figma. Subsequently, I successfully translated the new user interface design into the existing codebase utilizing CSS, Bootstrap, jQuery, and JavaScript, ensuring seamless implementation while preserving the functionality of the current system. Additionally, I meticulously crafted the pages to achieve full responsiveness, thereby enhancing the user experience across various mobile devices.</p>
    <div class="container">
    <a href="https://boutique.ctarsa.id/" target="_blank" class="btn-link" style="text-decoration:none;">View Apps</a>
    </div>
    `,
  },
  {
    id: `project5`,
    image: "foto/literasi.png",
    category1: "UI/UX Design",
    category2: "Web Apps",
    tittle: "Literasictarsa.id",
    technologies: ["Figma", "Bootstrap", "Codeigniter3", "HTML", "CSS"],
    description: `<h2>Literasictarsa.id</h2>
    <h3><b>Description</b></h3>
    <p>The "Literacy CTARSA" app is a digital learning space for anyone who wants an engaging and enjoyable learning experience, without boredom. Various knowledge in the form of text, audio, and video can be accessed anytime, anywhere, and by anyone. Becoming smart in an easy and interesting way is now in your hands!</p>
    <h3>My Role</h3>
    <p>In this project, I played a pivotal role in designing the entire process, starting from creating wireframes to prototyping using Figma. My responsibilities extended to contributing to the development of a responsive display for the Arsapedia page, skillfully implementing Bootstrap 4 to ensure optimal user experience. This meticulous approach allowed for seamless navigation and enhanced visual aesthetics, showcasing a commitment to delivering a professional and user-friendly outcome.</p>
    <div class="container">
    <a href="https://literasictarsa.id/" target="_blank" class="btn-link" style="text-decoration:none;">View Apps</a>
    </div>
    `,
  },
  {
    id: `project6`,
    image: "foto/alumni.png",
    category1: "UI Development",
    category2: "Web Apps",
    tittle: "Alumnismauctarsa.id",
    technologies: [
      "Figma",
      "Bootstrap",
      "Codeigniter3",
      "HTML",
      "CSS",
      "Jquery",
      "PHP",
    ],
    description: `<h2>Alumnismauctarsa.id</h2>
    <h3><b>Description</b></h3>
    <p>The CTARSA Alumni Association is a platform that plays an important role in connecting alumni. Through this platform, alumni can connect with each other and share various information, experiences, and memories from their time at CTARSA. It is not just a space, but also an emotional bridge that allows alumni to feel nostalgic about their wonderful moments together. Let’s make this platform a place full of useful information.</p>
    <h3>My Role</h3>
    <p>In the project alumnismau.ctarsa.id, I played a dual role as a mentor UI/UX Designer and contributed technically to the development of forum pages, galleries, and informational pages, ensuring their responsiveness. As a mentor, I provided guidance to the team regarding client requirements, application flow, and necessary data. I facilitated discussions between Frontend and Backend teams to align the application's appearance and functionality with user needs. Additionally, I actively participated in UI/UX design discussions, creating wireframes, mockups, and prototypes to visualize the application's interface and flow. Through collaborative efforts and technical contributions, we successfully delivered a high-quality application that met client expectations and provided an intuitive user experience.</p>
    <div class="container">
    <a href="https://alumnismau.ctarsa.id/" target="_blank" class="btn-link" style="text-decoration:none;">View Apps</a>
    </div>
    `,
  },
  {
    id: `project4`,
    image: "foto/shesafe_p.png",
    category1: "Development (MERN Stack)",
    category2: "Web Apps",
    tittle: "SheSafe",
    technologies: [
      "Figma",
      "TailwindCSS",
      "ReactJS",
      "HTML",
      "CSS",
      "ExpressJS",
      "MongoDB",
    ],
    description: `<h2>SheSafe</h2>
    <p>SheSafe is a mobile-first website dedicated to empowering women by providing a safe platform to document personal experiences, submit cases of violence for community support, and access educational resources. With a user-friendly design tailored for mobile devices, SheSafe ensures accessibility and fosters a supportive environment where women can connect, reflect, and find strength in solidarity.</p>
    <h3>My Role</h3>
    <p>This application was developed over the course of 2 weeks. Serving as the tech lead for the final group project while also taking on the role of a full-stack developer, I was responsible for coordinating the team, developing application features and UI, reviewing code, and resolving issues. Additionally, I ensured consistency in the application's design, fixed existing features, and refined or added features that other team members were unable to complete, contributing to the overall success of the project.</p>
    <div class="container" style="display:flex; gap:10px;">
        <a href="https://www.canva.com/design/DAGcAsA57NU/qaOiHGgO6FwIkFcSkc1w1Q/edit?utm_content=DAGcAsA57NU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" class="btn-link" style="text-decoration:none;">View Deck</a>

    <a href="https://shesafe.netlify.app/" target="_blank" class="btn-link" style="text-decoration:none;">View Apps</a>
    </div>
    `,
  },
  {
    id: `project7`,
    image: "foto/myporto.png",
    category1: "UI Development",
    category2: "Responsive Web Apps",
    tittle: "Portfolio of Rusydina",
    technologies: ["HTML", "CSS", "JS"],
    description: `<h2>Portfolio</h2>
   <p>My project portfolio, created using HTML, CSS, and JS, showcases information about my background, the projects I’ve worked on, and the skills I possess. It’s a dynamic space where you can explore my journey, see the impactful projects I’ve contributed to, and learn more about the expertise I bring to the table</p>  
    `,
  },
];

containers.addEventListener("click", function (event) {
  const clickedCard = event.target.closest(".card-porto");
  if (clickedCard) {
    const projectId = clickedCard.id;

    const content = detailProject.find((item) => item.id == projectId);
    console.log("projectsid", projectId);

    console.log("ini content", content);
    if (content) {
      popMenu.classList.toggle("active");
      //   document.documentElement.style.overflow = "hidden";
      //   document.body.style.overflow = "hidden";
      const detail = `
        <div class="detail-project container">
          <div class="popup-menu" id="${content.id}">
            <div class="popup-heading">
              <div>
                <h6 style="background-color: #d46e1a; color: white; border-radius: 10px; padding: 8px 8px; display: inline-flex; margin-bottom: 0px;">
                  ${content.category1}
                </h6>
                <h6 style="background-color: #5d5cdc; color: white; border-radius: 10px; padding: 8px 8px; display: inline-flex; margin-bottom: 0px;">
                  ${content.category2}
                </h6>
                <h1>${content.tittle}</h1>
              </div>
  
            </div>
                        <div class="close" id="close-${
                          content.id
                        }" style="cursor: pointer; position:fixed; top:20px; right:20px;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
	<g fill="none" fill-rule="evenodd">
		<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z" />
	</g>
</svg></div>
            <div class="popup-content">
             
              <a hreg="${
                content.iamge
              }" target="_blank" style="cursor:pointer;"><img class="img-popup" src="${
        content.image
      }" alt=""></a>
               <h4>Technologies</h4>
              <div class="popup-technologies container ">
            
                ${content.technologies.map((t) => `<p>${t}</p>`).join("")}
              </div>
              <div class="popup-description">
                ${content.description}
              </div>
            </div>
          </div>
        </div>`;

      popMenu.innerHTML = detail;

      // Menambahkan event listener setelah detail di render
      const closeBtn = document.getElementById(`close-${content.id}`);
      closeBtn.addEventListener("click", function () {
        popMenu.classList.remove("active");
        // document.documentElement.style.overflow = "auto";
        // document.body.style.overflow = "auto";
      });

      //   if(!popMenu.current )
    }
  }
});
