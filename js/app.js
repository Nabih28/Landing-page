//Storing the ul element in a variable so it can be easily accessed
let navBar= document.getElementById('navbar__list');

//Storing the sections in a variable and turn them into an array
let sections=[...document.querySelectorAll('section')];

//Creating a section in navbar for every section in the page 
for (section of sections) {
  Item = document.createElement('li');
  Item.innerHTML= `${section.getAttribute('data-nav')} `;
  Item.classList.add('menu__link') ;
  navBar.appendChild(Item);
}

//Making the navigation smoother 
function scrolling() {
  let navSection = document.querySelectorAll("li");
  for (let x=0 ; x < navSection.length ; x++){
    navSection[x].addEventListener("click", function(){
      sections[x].scrollIntoView({
        behavior : "smooth"
      })
    })
  }
}
scrolling();

//Styling the section that occupy the viewport
window.onscroll = function() {
  sec = document.querySelectorAll('section');
  sec.forEach(function (act){
    if ( act.getBoundingClientRect().top >= -350 && act.getBoundingClientRect().top <= 200 ) {
      act.classList.add('your-active-class');
    }
    else {
      act.classList.remove('your-active-class');
    }
  })
}

//Highlighting the section in navbar 

function Highlighting() {
  let item = document.querySelectorAll('li');
  window.addEventListener('scroll',function(){
    for (let i=0 ; i<sections.length ; i++) {
      if ( sections[i].getBoundingClientRect().top >= -350 && sections[i].getBoundingClientRect().top <= 200){    
         item[i].classList.add('active')
      }
      else {
        item[i].classList.remove('active')
      }
    }
  })
  
}
Highlighting();