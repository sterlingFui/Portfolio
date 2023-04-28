/**
 * Jacascript file.
 * Author: Sterling Tamakloe
 * Date: 4/28/2023
 * File Name: script.js
 */

function toggleMenu() {
    var menuToggle = document.getElementById('menu__toggle');
    var menuBox = document.querySelector('.menu__box');
  
    menuToggle.addEventListener('click', function() {
      if (this.checked) {
        menuBox.classList.add('show-menu');
      } else {
        menuBox.classList.remove('show-menu');
      }
    });
  }
  