// window.setInterval(newColor,8000);
$('body').hover(newColor);
let startingColor = true;
function newColor(){
	if(startingColor){
		$('body').addClass("colored");
		startingColor = false;
	} else {
		$('body').removeClass("colored");
		startingColor = true;
	}
}
