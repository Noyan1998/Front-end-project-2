// Selecting the navbar and styling it
const navbar = document.querySelector('.navbar__menu');
navbar.style.height = '100px';
navbar.style.display = 'flex';
navbar.style.alignItems = 'center';
navbar.style.justifyContent = 'center';

// Building navigation dynamically as an unordered list using a forloop
const ulNav = document.querySelector('#navbar__list');
const sectionId = ['#section1','#section2','#section3','#section4']
const text = ['Section 1', 'Section 2', 'Section 3', 'Section 4']
for (let i=0; i<=3; i++) {
   const list = document.createElement('li');
   const anchor = document.createElement('a');
   anchor.href = `${sectionId[i]}`;
   anchor.textContent = `${text[i]}`;
   anchor.style.color = 'darkblue';
   anchor.style.fontSize = '20px';
   anchor.style.margin = '2rem';
   anchor.style.textDecoration = 'none';
   list.appendChild(anchor);
   ulNav.appendChild(list)
}

// Adding SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});