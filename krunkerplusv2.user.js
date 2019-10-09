// ==UserScript==
// @name         Krunker plus v2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  "STOP HACKING"
// @author       THEGUY3ds
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party|game)=.+)$/
// @grant        unsafeWindow
//Tells u if hack is working.
alert("INJECTED KRUNKERPLUS")
//Hub change
document.title = "OVERHAX KRUNKER PLUS";
document.getElementById("instructions").style.color = "Red";
document.getElementById('instructions').innerHTML = 'Loading Krunker plus by OVERHAX | THEGUY3ds';
document.getElementById('modVote').innerHTML = 'KRUNKERPLUS+';
document.getElementById("modVote").style.color = "Green";
document.getElementById("texts3DHolder").innerHTML = 'GET MORE HACKS AT OVERHAX.ML';
// Adblock
document.getElementById("krunkerio_728x90_1").remove();
// Checkboxes
document.getElementById("aContainer").innerHTML = 'OVERHAX KRUNKERPLUS V2';
document.getElementById("subLogoButtons").innerHTML = '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="openHostWindow()">Host Game</div><div class="button small buttonR" id="menuBtnBrowser" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink()">Invite</div><div class="button small" id="menuBtnJoin" onmouseenter="playTick()" onclick="showWindow(24)">Join</div><div class="button small buttonP" id="hackMenu" onmouseenter="playTick()" onclick="window.open(\'http://overhax.ml\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Get MORE HACKS HERE</div></div>';
document.getElementById("aContainer").style.color = "white";
// Font size
document.getElementById("aContainer").style.fontSize = "larger";
// End
// ==/UserScript==
function hack(name, keybind, status) {
    this.name = name;
    this.keybind = keybind;
    this.status = status;
}

unsafeWindow.getHack = function(name) {
    var returned;
    unsafeWindow.hacks.forEach(function(hack) {
        if (hack.name === name) returned = hack;
    });
    return returned;
}

unsafeWindow.hacks = [];
unsafeWindow.hacks.push(new hack("GUI", "1", true));
unsafeWindow.hacks.push(new hack("ESP", "2", true));
unsafeWindow.hacks.push(new hack("Aimbot", "3", true));
unsafeWindow.hacks.push(new hack("Fullscreen", "4", true));
unsafeWindow.hacks.push(new hack("Better Sniper Recticle", "5", true));

var GUI = document.createElement('div');
GUI.style = "background-color: rgba(0,0,0,0.25);border-radius:5%;text-align:center;margin-top:5%;";

function guiReload() {
    GUI.innerHTML = "";
    if (unsafeWindow.getHack("GUI").status) {
        GUI.innerHTML += "<br><h2 style='color:white;'>KRUNKERPLUS</h2>";
        unsafeWindow.hacks.forEach(function(hack) {
            GUI.innerHTML += `<h4 style='color:grey;'>[${hack.keybind}] ${hack.name}: ${hack.status ? "<span style='color:green'>ON</span>" : "<span style='color:red'>OFF</span>"}</h4>`;
        });
        GUI.innerHTML += "<br>";
    }
}

setInterval(function() {
    let topRight = document.getElementById("topRight");
    if (!topRight) return;

    if (!topRight.contains(GUI)) {
        topRight.appendChild(GUI);
    } else {
        guiReload();
    }
}, 0);
// better sniper recticle
 if (unsafeWindow.getHack("Better Sniper Recticle").status = true) {
      document.getElementById('aimRecticle').innerHTML = '<img id="recticleImg" src="https://i.redd.it/aa069tp99wh31.png">';
  } else {
      document.getElementById('aimRecticle').innerHTML = '<div class="topBox black" style="display: block;"></div><div class="leftBox black" style="display: block;"></div><img id="recticleImg" src="https://krunker.io/textures/recticle.png"><div class="bottomBox black" style="display: block;"></div><div class="rightBox black" style="display: block;"></div>';
  }
// Full screen
 if (unsafeWindow.getHack("Fullscreen").status = true) {
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
    function read(url) {
    return new Promise(resolve => {
        fetch(url).then(res => res.text()).then(res => {
            return resolve(res);
           });
    });
};
// Esp
    if (unsafeWindow.getHack("ESP").status = true) {

    var original_push = Array.prototype.push;
    Array.prototype.push = function(...args) {
        original_push.apply(this, args);
        if (args.length == 1 && args[0] && args[0].armMeshes) {
            Object.defineProperty(args[0], 'inView', { get: function() { return true } });
        }else {

        }
    }
    }
document.open();
window.addEventListener('keydown', (key) => {
    switch (String.fromCharCode(key.keyCode)) {
        default:
            return;
        case unsafeWindow.getHack("GUI").keybind:
            unsafeWindow.getHack("GUI").status = !unsafeWindow.getHack("GUI").status;
            break;
        case unsafeWindow.getHack("ESP").keybind:
            unsafeWindow.getHack("ESP").status = !unsafeWindow.getHack("ESP").status;
            break;
        case unsafeWindow.getHack("Aimbot").keybind:
            unsafeWindow.getHack("Aimbot").status = !unsafeWindow.getHack("Aimbot").status;
            break;
    }
});
