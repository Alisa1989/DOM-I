const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png');


//Task 1 and 2
let cta = document.querySelector("#cta-img");
cta.src = siteContent["cta"]["img-src"];

let middleImage = document.querySelector("#middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

let ctaText = document.querySelector(".cta-text");

let navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

let mainTitle = document.querySelector("h1");
mainTitle.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

//top
let topTitles = document.querySelectorAll(".top-content h4");
topTitles[0].textContent = siteContent["main-content"]["features-h4"];
topTitles[1].textContent = siteContent["main-content"]["about-h4"];

let topParagraphs = document.querySelectorAll(".top-content p");
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];

//bottom
let bottomTitles = document.querySelectorAll(".bottom-content h4");
bottomTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitles[2].textContent = siteContent["main-content"]["vision-h4"];


let bottomParagraphs = document.querySelectorAll(".bottom-content p");
bottomParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"];

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].textContent = siteContent['contact']['address'];
contactParagraphs[1].textContent = siteContent['contact']['phone'];
contactParagraphs[2].textContent = siteContent['contact']['email'];


let footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent['footer']['copyright'];

//Task 3
//navItems.style.color = 'green';// ????
navItems.forEach(element => {
  element.style.color = 'green';
})

let newPreChild = document.createElement("navPreChild");
let newPostChild = document.createElement("newPostChild");

newPreChild.textContent = "Back to Safety";
newPostChild.textContent = "To Infinity";

let nav = document.querySelector("nav");
nav.appendChild(newPreChild);
nav.prepend(newPostChild);
