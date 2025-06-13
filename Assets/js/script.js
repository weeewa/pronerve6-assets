//cookies
//function setCookie(name, value, days) {
//  var expires = "";
//  if (days) {
//    var date = new Date();
//    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//    expires = "; expires=" + date.toGMTString();
//  }
//  document.cookie = name + "=" + value + expires + "; path=/";
//}

//function getCookie(name) {
//  var nameEQ = name + "=";
//  var ca = document.cookie.split(';');
//  for (var i = 0; i < ca.length; i++) {
//    var c = ca[i];
//    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//  }
//  return null;
//}


//check cookies
//document.addEventListener('DOMContentLoaded', () => {
//  var getStartedClicked = getCookie("getStartedClicked");
//  if (getStartedClicked) {
//  	revealfullpage2();
//  }
//});


// Wait for the DOM to be fully loaded
//document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the first video element
//  const videoElement = document.getElementsByTagName('video')[0];

  // Add a loadeddata event listener to the video element
//  videoElement.addEventListener('loadeddata', function() {
    // Display an alert when the video is fully loaded
//    alert('Video loaded!');
//  });
//});


//reveal page script
var hasScrolledToPkg = false;

function revealfullpage(){
  if (!hasScrolledToPkg) {
  	scrolltopkg();
    timerStart(900);
    hasScrolledToPkg = true;
  }
}

function revealfullpage2(){
  if (!hasScrolledToPkg) {
    $("#prp-container").css("display", "block");
    $("#prp-container").css("visibility", "visible");
    $("#prp-container").css("opacity", "1");
    timerStart(900);
    hasScrolledToPkg = true;
  }
  scrolltopkg();
}

//scroll to #pkg
function scrolltopkg(){
	$('html, body').animate({
		scrollTop: $("#pkg").offset().top -45
	}, 1000); 
}


// script for video controls
//var videoCover = document.getElementById('video-cover');
//var video = document.getElementById('vid1');

//$(document).ready(function() {
//  var video = $('#vid1')[0];
//  var isClicked = false;
  
//  video.muted = true;
//  video.play();
  
//  $(video).on('click', function() {
//    if (!isClicked) {
//      videoCover.style.display = 'none';
//      this.currentTime = 0;
//      this.muted = false;
//      isClicked = true;
      
//      video.addEventListener('timeupdate', function checkTime() {
//        if (video.currentTime >= 2034) {
//          revealfullpage();
//          video.removeEventListener('timeupdate', checkTime);
//        }
//      });
      
//  		setTimeout(function() {
//    		video.play();
//  		}, 100);
//    }
//  });
 
//});

//function fullscreenexit() {
//  if (document.exitFullscreen) {
//    document.exitFullscreen();
//  } else if (document.mozCancelFullScreen) { // Firefox
//    document.mozCancelFullScreen();
//  } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
//    document.webkitExitFullscreen();
//  } else if (document.msExitFullscreen) { // IE/Edge
//    document.msExitFullscreen();
//  }
//}

//reveal page when video ends
//video.addEventListener('ended', function() {
//  imagecover.style.display = 'block';  
//	revealfullpage();
//});

// script for when vidalytics video reveal hidden content
document.addEventListener('DOMContentLoaded', () => {
	const prpContainer = document.querySelector('#prp-container');

	const observer = new MutationObserver((mutationsList, observer) => {
  	for (const mutation of mutationsList) {
    	if (mutation.attributeName === 'style' && prpContainer.style.display === 'block') {
      	revealfullpage();
    	}
  	}
	});

observer.observe(prpContainer, { attributes: true });
});


// exit popup
var overlay = document.querySelector('#exitpopoverlay');
var popup = document.querySelector('#exitpopup');

function handleMouseOut(event) {
  if (event.clientY < 0 || event.clientX < 0 || (event.clientX > window.innerWidth || event.clientY > window.innerHeight)) {
    if (popup.offsetParent === null) {
      exitpopupstartTimer();
    }
    overlay.style.display = 'flex';
    popup.style.display = 'block';
    
    window.removeEventListener('mouseout', handleMouseOut);
  }
}

window.addEventListener('mouseout', handleMouseOut);



function closepopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
};


overlay.addEventListener('wheel', function(event) {
  event.preventDefault();
});



//check if on mobile device
//var onMobile = 0;
//window.addEventListener('load', function() {
//	if (/Mobi|Android/i.test(navigator.userAgent)) {
//		onMobile = 1;
//	}
//});


// exit intent popup
//var previousHeight = window.innerHeight;

//window.addEventListener("resize", function() {
//  var currentHeight = window.innerHeight;
  
//  if (onMobile = 1) {
//  	if (currentHeight < previousHeight) {
//      if (popup.offsetParent === null) {
//  			exitpopupstartTimer();
//  		}
//    	overlay.style.display = 'flex';
//    	popup.style.display = 'block';
//  	} else if (currentHeight > previousHeight) {
      
//  	}}

//  previousHeight = currentHeight;
//});



// Set the countdown time to 15 minutes (in seconds)
var countdownTime = 15 * 60;

// Update the timer display every second
var countdownTimer;

function timerStart(countdownTime) {
  // Update the timer display every second
  countdownTimer = setInterval(function() {
    // Convert the countdown time to minutes and seconds
    var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;

    // Add leading zeroes to the minutes and seconds if necessary
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Update the HTML element with ID "stopwatch" with the remaining time
    document.getElementById("stopwatch").innerHTML = minutes + ":" + seconds;
    document.getElementById("stopwatch2").innerHTML = minutes + ":" + seconds;
    document.getElementById("stopwatch3").innerHTML = minutes + ":" + seconds;
    document.getElementById("stopwatch4").innerHTML = minutes + ":" + seconds;
    document.getElementById("stopwatch5").innerHTML = minutes + ":" + seconds;

    // Decrement the countdown time by 1 second
    countdownTime--;

    // Stop the timer if the countdown time reaches 0
    if (countdownTime < 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);
}


//start exit popup timer
var timerInterval;
function exitpopupstartTimer() {
  var duration = 60; // 1 minute in seconds
  var timerElement = document.getElementById('exitpopup-timer');
  
  timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;

    // Add leading zeros if necessary
    var displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    var displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    timerElement.innerHTML = displayMinutes + ":" + displaySeconds;

    if (duration <= 0) {
      clearInterval(timerInterval);
      closepopup();
    }

    duration--;
  }
}

  
//accordion script
jQuery('#accordion').accordion({ 
  collapsible:true, 
  active:false, 
  autoHeight:false, 
  disabled:true
});

//accordion click event
jQuery('#accordion h3.ui-accordion-header').click(function(){
  jQuery(this).next().slideToggle();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");      
  }
  else{
    $(this).addClass("active");       
  }
    
  // Scroll to the clicked header
	jQuery('html, body').animate({
    scrollTop: jQuery(this).offset().top -18
  }, 500);
});

//accordion content height reset
window.onload = function() {
	var acccon = document.getElementsByClassName("ui-accordion-content");
	for (var i = 0; i < acccon.length; i++) {
		acccon[i].style.height = "auto";
	}
};

// Open the modal
function openfootModal(modalid) {
    document.getElementById(modalid).style.display = "block";
}

// Open the flex modal
function openfootModal2(modalid) {
    document.getElementById(modalid).style.display = "flex";
}

// Close the modal
function closefootModal(modalid) {
    document.getElementById(modalid).style.display = "none";
}

function closefootModal2(modalid) {
  const outerDiv = document.getElementById(modalid);
  const innerDiv = outerDiv.querySelector('.footmodal-content');

  outerDiv.addEventListener('click', function(event) {
    if (event.target === this) {
      this.style.display = 'none';
    }
  });

  innerDiv.addEventListener('click', function(event) {
    event.stopPropagation();
  });
}




// Attach an event listener to the window's "popstate" event
window.addEventListener("popstate", function(event) {
  event.preventDefault();
  if (popup.offsetParent === null) {
  	exitpopupstartTimer();
  }
  overlay.style.display = 'flex';
  popup.style.display = 'block';
});

window.addEventListener("load", function() {
  history.pushState({}, "");
});