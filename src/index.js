const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const links = document.querySelectorAll('header nav a')
const lt = Object.values(siteContent.nav)
links.forEach((link, index) => {
link.textContent = lt[index]
link.classList.add('italic')
})




//////////////////////////////
const img1 = document.querySelector('#logo-img')
img1.src = siteContent.images['logo-img']

const img2 = document.querySelector('#cta-img')
img2.src = siteContent.images['cta-img']

const img3 = document.querySelector('#middle-img')
img3.src = siteContent.images['accent-img']

///////////////////////////

const txt2 = document.querySelector('h1')
txt2.textContent = 'DOM Is Awesome'

const b1 = document.querySelector('button')
b1.textContent = 'Get Started'

//////////////////////////////////

const contact = document.querySelector('section.contact')
contact.querySelector('h4').textContent = ' Contact'
contact.children[1].textContent = siteContent.contact['address']
contact.children[2].textContent = siteContent.contact['phone']
contact.children[3].textContent = siteContent.contact['email']

const foot = document.querySelector('footer a')
foot.textContent = siteContent.footer.copyright
foot.classList.add('bold')

/////////////////////////////
const topcontent = document.querySelector('.top-content')
topcontent.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topcontent.children[0].children[1].textContent = siteContent['main-content']['features-content']
topcontent.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topcontent.children[1].children[1].textContent = siteContent['main-content']['about-content']

const bottomcontent = document.querySelector('.bottom-content')
bottomcontent.children[0].children[0].textContent = siteContent['main-content']['services-h4']
bottomcontent.children[0].children[1].textContent = siteContent['main-content']['services-content']
bottomcontent.children[1].children[0].textContent = siteContent['main-content']['product-h4']
bottomcontent.children[1].children[1].textContent = siteContent['main-content']['product-content']
bottomcontent.children[2].children[0].textContent = siteContent['main-content']['vision-h4']
bottomcontent.children[2].children[1].textContent = siteContent['main-content']['vision-content']





