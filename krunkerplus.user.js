// ==UserScript==
// @name         Krunker plus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  "STOP HACKING"
// @author       THEGUY3ds
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party|game)=.+)$/
// @grant        none
// ==/UserScript==
//Tells u if hack is working.
alert("INJECTED KRUNKERPLUS")
//Hub change
document.title = "OVERHAX KRUNKER PLUS";
document.getElementById("instructions").style.color = "Red";
document.getElementById('instructions').innerHTML = 'Loading Krunker plus by OVERHAX | THEGUY3ds';
document.getElementById('modVote').innerHTML = 'KRUNKERPLUS+';
document.getElementById("modVote").style.color = "Green";
document.getElementById("texts3DHolder").innerHTML = 'GET MORE HACKS AT OVERHAX.ML';
// Checkboxes
document.getElementById("subLogoButtons").innerHTML = ' <input type="checkbox" id="myCheck">𝐁𝐞𝐭𝐭𝐞𝐫 𝐒𝐧𝐢𝐩𝐞𝐫 𝐑𝐞𝐜𝐭𝐢𝐜𝐥𝐞 <input type="checkbox" id="myCheck1">𝐄𝐧𝐚𝐛𝐥𝐞 𝐟𝐮𝐥𝐥𝐬𝐜𝐫𝐞𝐞𝐧 <input type="checkbox" id="myCheck2">𝐄𝐒𝐏';
document.getElementById("subLogoButtons").style.color = "white";
// esp thx to hrt
document.getElementById('myCheck2').addEventListener('click', () => {
var checkBox = document.getElementById("myCheck2");

if (checkBox.checked == true){

    var original_push = Array.prototype.push;
    Array.prototype.push = function(...args) {
        original_push.apply(this, args);
        if (args.length == 1 && args[0] && args[0].armMeshes) {
            Object.defineProperty(args[0], 'inView', { get: function() { return true } });
     }
    }
}
// check if check box one is checked
document.getElementById('myCheck').addEventListener('click', () => {
var checkBox = document.getElementById("myCheck");

  // Get checked state better sniper recticle
  if (checkBox.checked == true){
      document.getElementById('aimRecticle').innerHTML = '<img id="recticleImg" src="https://i.redd.it/aa069tp99wh31.png">';
  } else {
      document.getElementById('aimRecticle').innerHTML = '<div class="topBox black" style="display: block;"></div><div class="leftBox black" style="display: block;"></div><img id="recticleImg" src="https://krunker.io/textures/recticle.png"><div class="bottomBox black" style="display: block;"></div><div class="rightBox black" style="display: block;"></div>';
  }
  // Get checked state Full screen
document.getElementById('myCheck1').addEventListener('click', () => {
var checkBox = document.getElementById("myCheck1");

  if (checkBox.checked == true){
	document.fullscreenEnabled =
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}
  }
});
});
});
