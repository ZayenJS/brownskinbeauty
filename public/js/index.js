$(() => {
	$(window).scroll(() => {
		if ($(window).scrollTop() === 0) {
			$(".menu-link").removeClass("text-scroll");
			$(".main-nav").removeClass("scroll");
		} else {
			$(".menu-link").addClass("text-scroll");
			$(".main-nav").addClass("scroll");
		}
	});
});
