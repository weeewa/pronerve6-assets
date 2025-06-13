$(function() {
	if ($('#timeleft-01').length) {

		var timeleft = 60 * 5;
		
		
		var downloadTimer = setInterval(function function1(){
			var timer = timeleft, minutes, seconds;
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ?  minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
		
			document.getElementById("timeleft-01").innerHTML = "" + minutes + ":" + seconds + "</span>";

			timeleft -= 1;
			var url = window.location.href; 
			if(timeleft <= 0){
				clearInterval(downloadTimer);
				document.getElementById("ctrTxt").innerHTML = "Discount has expired."
				document.getElementById("timeleft-01").innerHTML = "0:00"
			}
		}, 1000);

		console.log(countdown);
	}
});


	   

	   