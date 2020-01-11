$(() => {
	if (window.matchMedia("(min-width:1200px)").matches) {
		//Removes welcome image
		setTimeout(() => {
			$(".welcome").fadeOut("slow");
		}, 2000);

		// Adds background to header nav

		if ($(window).scrollTop() !== 0) {
			$(".menu-link").addClass("text-scroll");
			$(".main-nav").addClass("scroll");
		}

		$(window).scroll(() => {
			if ($(window).scrollTop() === 0) {
				$(".menu-link").removeClass("text-scroll");
				$(".main-nav").removeClass("scroll");
			} else {
				$(".menu-link").addClass("text-scroll");
				$(".main-nav").addClass("scroll");
			}
		});
	}

	// Animates hamburger icon
	$("#dropdown-menu__toggle-button").click(function() {
		// Show hidden mobile menu
		$(this).toggleClass("open");
		$(".mobile-menu").slideToggle("slow");
	});

	// Scrolls to position
	$(".menu-link").click(function() {
		const page = $(this).attr("href");
		const speed = 1500;
		const headerHeight = 90;
		$("html, body").animate(
			{ scrollTop: $(page).offset().top - headerHeight },
			speed,
		); // Go
		$("#dropdown-menu__toggle-button").removeClass("open");
		$(".mobile-menu").slideUp("slow");
		return false;
	});
	$(".know-more").click(function() {
		const page = $(this).attr("href");
		const speed = 1500;
		const headerHeight = 90;
		$("html, body").animate(
			{ scrollTop: $(page).offset().top - headerHeight },
			speed,
		); // Go
		$("#dropdown-menu__toggle-button").removeClass("open");
		$(".mobile-menu").slideUp("slow");
		return false;
	});

	const $elementsToHideMenu = [$("section"), $(".cta"), $("footer")];

	$($($elementsToHideMenu)).each((index, elements) => {
		$(elements).click(() => {
			$("#dropdown-menu__toggle-button").removeClass("open");
			$(".mobile-menu").slideUp("slow");
		});
	});

	// Submit form async

	const form = document.getElementById("contact-form");
	const button = document.getElementById("submit-button");
	const status = document.getElementById("form-status");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		$(button).hide();
		$(status).css("color", "green");
		$(status).show();
		$(status).text("Merci! Votre message a bien été envoyé.");
		setTimeout(() => {
			$(button).show();
			$(status).hide();
		}, 3000);
	}

	function error() {
		$(status).css("color", "red");
		$(status).text("Oops! Une erreur est survenu, veuillez réessayer.");
		setTimeout(() => {
			$(status).fadeOut();
		}, 3000);
	}

	// handle the form submission event

	form.addEventListener("submit", function(ev) {
		ev.preventDefault();
		const data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});

	// helper function for sending an AJAX request

	function ajax(method, url, data, success, error) {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
	}
});
