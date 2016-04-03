// Toggle Nav

// When site is in smallest viewport
	$(".nav button").click(function() {
		console.log("click");
		// if links have class .hide, then switch to .show-nav
		if ( $(".nav a").css("display") === "none" ) {
			$(".nav a").css("display", "block");
		// else if links have class .show-nav, then switch to .hide
		} else if ( $(".nav a").css("display") === "block" ) {
			$(".nav a").css("display", "none");
		}
	});
		