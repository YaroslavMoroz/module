$(".triangle1").mouseenter(function() {
 	$(".circle").css("visibility", "visible");
}
);
$(".romb").mouseenter( function () {
	$(".circle").animate({
	    left: '-80%'
	}, 2000);
}
);
$(".kvadrat").mouseenter(function() {
  $(".romb").addClass("loader");
}
);