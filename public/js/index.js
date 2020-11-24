if (window.matchMedia('(min-width:992px)').matches) {
  // Adds background to header nav

  if ($(window).scrollTop() !== 0) {
    $('.menu .menu-link').addClass('text-scroll');
    $('.main-nav').addClass('scroll');
  }
  $(window).scroll(() => {
    if ($(window).scrollTop() === 0) {
      $('.menu .menu-link').removeClass('text-scroll');
      $('.main-nav').removeClass('scroll');
    } else {
      $('.menu .menu-link').addClass('text-scroll');
      $('.main-nav').addClass('scroll');
    }
  });
}

// Animates hamburger icon
$('#dropdown-menu__toggle-button').click(function () {
  // Show hidden mobile menu
  $(this).toggleClass('open');
  $('.menu').slideToggle('slow');
});

// Scrolls to position
function scrollToPosition(el, header) {
  const page = $(el).attr('href');
  const speed = 1500;
  const headerHeight = header;
  $('html, body').animate({ scrollTop: $(page).offset().top - headerHeight }, speed); // Go

  if (window.matchMedia('(max-width:1200px)').matches) {
    $('#dropdown-menu__toggle-button').removeClass('open');
    $('.mobile-menu').slideUp('slow');
  }

  return false;
}

if (window.matchMedia('(min-width:992px)').matches) {
  $('.menu-link').click(function () {
    scrollToPosition($(this), 100);
    if ($('.menu-link').hasClass('active')) {
      $('.menu-link').removeClass('active');
      $(this).addClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $(window).scroll(function () {
    const ref = Math.round($(document).scrollTop() + 100);
    const homeEl = $(".menu-link[href='#home']")[0];
    const presentationEl = $(".menu-link[href='#presentation']")[0];
    const presentationPosition = Math.round($('#presentation').position().top);
    const serviceEl = $(".menu-link[href='#services']")[0];
    const servicesPosition = Math.round($('#services').position().top);
    const partnersEl = $(".menu-link[href='#partners']")[0];
    const partnersPosition = Math.round($('#partners').position().top);
    const newsEl = $('.menu-link[href="#news"]')[0];
    const newsPosition = Math.round($('#news').position().top);
    const contactEl = $(".menu-link[href='#contact']")[0];
    const contactPosition = Math.round($('#contact').position().top);

    if (contactPosition <= ref) {
      if ($('.menu-link').hasClass('active')) {
        $('.menu-link').removeClass('active');
        $(contactEl).addClass('active');
      }
    } else if (newsPosition <= ref) {
      if ($('.menu-link').hasClass('active')) {
        $('.menu-link').removeClass('active');
        $(newsEl).addClass('active');
      }
    } else if (partnersPosition <= ref) {
      if ($('.menu-link').hasClass('active')) {
        $('.menu-link').removeClass('active');
        $(partnersEl).addClass('active');
      }
    } else if (servicesPosition <= ref) {
      if ($('.menu-link').hasClass('active')) {
        $('.menu-link').removeClass('active');
        $(serviceEl).addClass('active');
      }
    } else if (presentationPosition <= ref) {
      if ($('.menu-link').hasClass('active')) {
        $('.menu-link').removeClass('active');
        $(presentationEl).addClass('active');
      }
    } else {
      if ($('.menu-link').hasClass('active')) {
        $('.menu-link').removeClass('active');
        $(homeEl).addClass('active');
      }
    }
  });

  $('.know-more').click(function () {
    scrollToPosition($(this), 100);
  });
} else if (window.matchMedia('(max-width:991px)').matches) {
  $('.menu-link').click(function () {
    scrollToPosition($(this), 60);
  });
  $('.know-more').click(function () {
    scrollToPosition($(this), 60);
  });
}

const $elementsToHideMenu = [$('section'), $('.cta'), $('footer')];

$($($elementsToHideMenu)).each((index, elements) => {
  $(elements).click(() => {
    $('#dropdown-menu__toggle-button').removeClass('open');
    $('.mobile-menu').slideUp('slow');
  });
});

// Submit form async

const form = document.getElementById('contact-form');
const button = document.getElementById('submit-button');
const status = document.getElementById('form-status');

// Success and Error functions for after the form is submitted

function success() {
  form.reset();
  $(button).hide();
  $(status).css('color', 'green');
  $(status).show();
  $(status).text('Merci! Votre message a bien été envoyé.');
  setTimeout(() => {
    $(button).show();
    $(status).hide();
  }, 3000);
}

function error() {
  $(status).css('color', 'red');
  $(status).text('Oops! Une erreur est survenu, veuillez réessayer.');
  setTimeout(() => {
    $(status).fadeOut();
  }, 3000);
}

// handle the form submission event

form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  const data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

$(window).on({
  orientationchange: () => {
    if ($(window).scrollTop() !== 0) {
      $('.menu .menu-link').addClass('text-scroll');
      $('.main-nav').addClass('scroll');
    }
    $(window).scroll(() => {
      if ($(window).scrollTop() === 0) {
        $('.menu .menu-link').removeClass('text-scroll');
        $('.main-nav').removeClass('scroll');
      } else {
        $('.menu .menu-link').addClass('text-scroll');
        $('.main-nav').addClass('scroll');
      }
    });
  },

  resize: () => {
    if (window.matchMedia('(min-width:992px)').matches) {
      // Adds background to header nav

      if ($(window).scrollTop() !== 0) {
        $('.menu .menu-link').addClass('text-scroll');
        $('.main-nav').addClass('scroll');
      }
      $(window).scroll(() => {
        if ($(window).scrollTop() === 0) {
          $('.menu .menu-link').removeClass('text-scroll');
          $('.main-nav').removeClass('scroll');
        } else {
          $('.menu .menu-link').addClass('text-scroll');
          $('.main-nav').addClass('scroll');
        }
      });
    }
  },
});
