document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
  
    // Change style on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "orange";
      } else {
        navbar.style.backgroundColor = "black";
      }
    });
  });

  // for responsive 
  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navList = document.querySelector('#navbar ul');
  
    menuBtn.addEventListener('click', function() {
      navList.classList.toggle('show');
    });
  });