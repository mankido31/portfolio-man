// JavaScript Document
	var typed = new Typed('.element', {
strings: ["Web Designer.", "Designer.","Photographer.","Film Maker."],
typeSpeed:20,
backSpeed:20,
loop:true,
	});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();

