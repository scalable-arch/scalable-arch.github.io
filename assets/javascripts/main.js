---
---

/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

var menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    // item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

var myWrapper = document.querySelector('.wrapper');
var  myMenu= document.querySelector('.sidebar');
var mySlieder = document.querySelector('.inner');
var myToggle = document.querySelector('.toggle');
var myInitialContent = document.querySelector('.initial-content');
var mySearchContent = document.querySelector('.search-content');
var mySearchToggle = document.querySelector('.search-toggle');

// Toggle sidebar visibility
function toggleClassMenu() {
  myMenu.classList.add('is--animatable');
  if (!myMenu.classList.contains('is--visible')) {
    myMenu.classList.add('is--visible');
    mySlieder.classList.add('is--visible');
    myToggle.classList.add('open');
    myWrapper.classList.add('is--pushed');

    if(myMenu.classList.contains('is--visible') &&
    mySlieder.classList.contains('is--visible')){
       document.body.classList.add('menu-active')
    }
  } else {
    myMenu.classList.remove('is--visible');
    mySlieder.classList.remove('is--visible');
    myToggle.classList.remove('open');
    myWrapper.classList.remove('is--pushed');


    if(!myMenu.classList.contains('is--visible') &&
    !mySlieder.classList.contains('is--visible')){
       document.body.classList.remove('menu-active')
    }
  }

  
}

// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove('is--animatable');
}

myMenu.addEventListener('transitionend', OnTransitionEnd, false);
myToggle.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
myMenu.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}

// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}

//다크모드
const darkMode = document.getElementById('dark-mode');
const darkModeSwitch = document.querySelector('.dark-mode-switch');

if (localStorage.getItem('darkModeEnabled') === 'true') {
  document.body.classList.add('dark');
}

darkMode.addEventListener('click',function () {

  darkModeSwitch.classList.toggle("active");
  if(document.body.classList.contains('dark')){
    document.body.classList.remove('dark');
    return localStorage.setItem('darkModeEnabled', 'false');
  }
  document.body.classList.add('dark');
  localStorage.setItem('darkModeEnabled', 'true');

})




