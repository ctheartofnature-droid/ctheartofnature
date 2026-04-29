document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var navMenu = document.querySelector(".nav-menu");
  var navLinks = document.querySelectorAll(".nav-menu a");
  var fadeElements = document.querySelectorAll(".hero, .featured-section, .message-section");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
      menuToggle.classList.toggle("open");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu) {
        navMenu.classList.remove("show");
      }

      if (menuToggle) {
        menuToggle.classList.remove("open");
      }
    });
  });

  fadeElements.forEach(function (element) {
    element.classList.add("fade-in");
    element.classList.add("visible");
  });

  var lightbox = document.getElementById("video-lightbox");
  var lightboxVideo = document.getElementById("lightbox-video");
  var closeBtn = document.querySelector(".close");
  var videoClicks = document.querySelectorAll(".video-click");

  videoClicks.forEach(function (video) {
    video.addEventListener("click", function () {
      var id = video.getAttribute("data-video");

      if (lightbox && lightboxVideo) {
        lightbox.style.display = "flex";
        lightboxVideo.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
      }
    });
  });

  if (closeBtn && lightbox && lightboxVideo) {
    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
      lightboxVideo.src = "";
    });
  }

  if (lightbox && lightboxVideo) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxVideo.src = "";
      }
    });
  }
});