document.addEventListener('DOMContentLoaded', () => {
	const prpContainer = document.querySelector('#prp-container');

  prpContainer.addEventListener('animationend', () => {
    if (prpContainer.style.display === 'block') {
      revealfullpage();
    }
  });

  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.attributeName === 'style' && prpContainer.style.display === 'block') {
      	revealfullpage();
      }
    }
  });

  observer.observe(prpContainer, { attributes: true });
});



//after page reveal event
var hasScrolledToPkg = false;

function revealfullpage(){
  if (!hasScrolledToPkg) {
    scrolltopkg();
    timerStart(900);
    hasScrolledToPkg = true;
    console.log('page reveal');
    addPurchaseNotificationIframe();
  }
}

function revealfullpage2(){
  if (!hasScrolledToPkg) {
    $("#prp-container").css("display", "block");
    $("#prp-container").css("visibility", "visible");
    $("#prp-container").css("opacity", "1");
    timerStart(900);
    hasScrolledToPkg = true;
    console.log('page reveal2');
    addPurchaseNotificationIframe();
  }
  scrolltopkg();
}

//scroll to #pkg
function scrolltopkg(){
	$('html, body').animate({
		scrollTop: $("#pkg").offset().top -45
	}, 1000); 
}


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

//window.addEventListener('mouseout', handleMouseOut);


function closepopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
};


//overlay.addEventListener('wheel', function(event) {
//  event.preventDefault();
//});



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



// Update the timer display every second
function timerStart(countdownTime) {
  countdownTimer = setInterval(function() {
    var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;

    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    if (document.getElementById("stopwatch")) {
      document.getElementById("stopwatch").innerHTML = minutes + ":" + seconds;
    }

    if (document.getElementById("stopwatch2")) {
      document.getElementById("stopwatch2").innerHTML = minutes + ":" + seconds;
    }

    if (document.getElementById("stopwatch3")) {
      document.getElementById("stopwatch3").innerHTML = minutes + ":" + seconds;
    }

    if (document.getElementById("stopwatch4")) {
      document.getElementById("stopwatch4").innerHTML = minutes + ":" + seconds;
    }

    if (document.getElementById("stopwatch5")) {
      document.getElementById("stopwatch5").innerHTML = minutes + ":" + seconds;
    }

    countdownTime--;

    if (countdownTime < 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);
}


//start exit popup timer
var timerInterval;
function exitpopupstartTimer() {
  var duration = 60;
  var timerElement = document.getElementById('exitpopup-timer');
  
  timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;

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


// add purchase notif iframe
function addPurchaseNotificationIframe() {
  var iframe = document.createElement('iframe');
  iframe.id = 'purchace-notif-iframe';
  iframe.src = 'https://cdn.jsdelivr.net/gh/weeewa/pronerve6-assets/pronerve6-assets/embeds/purchase-notif/purchase-notif.html?=v3.83';
  iframe.frameBorder = 0;
  iframe.style.position = 'fixed';
  iframe.style.zIndex = 1;
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '100%';
	iframe.style.pointerEvents = 'none';
  
  document.body.appendChild(iframe);
}
