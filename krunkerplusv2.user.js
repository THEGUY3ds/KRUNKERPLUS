// ==UserScript==
// @name         Krunker plus v2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  "I'm aware krunker hacks are back. We are gonna work on fixing them as much as we can! -Sidney_de_Vries"
// @author       THEGUY3ds
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @downloadURL  https://github.com/THEGUY3ds/OVERHAX-MOO-PLUS/raw/master/UserScript.user.js
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party|game)=.+)$/
// @icon         https://www.google.com/s2/favicons?domain=krunker.io
// @grant        unsafeWindow
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
unsafeWindow.hacks.push(new hack("fullscreen", "4", true));
unsafeWindow.hacks.push(new hack("betterSniperRecticle", "5", true));

var GUI = document.createElement('div');
GUI.style = "background-color: rgba(0,0,0,0.25);border-radius:5%;text-align:center;margin-top:5%;";

function guiReload() {
    GUI.innerHTML = "";
    if (unsafeWindow.getHack("GUI").status) {
        GUI.innerHTML += '<div><span style="color:#fff800;">K</span><span style="color:#ffe700;">R</span><span style="color:#ffd600;">U</span><span style="color:#ffc500;">N</span><span style="color:#ffb400;">K</span><span style="color:#faa631;">E</span><span style="color:#f59762;">R</span><span style="color:#f08992;">P</span><span style="color:#eb7ac3;">L</span><span style="color:#e66cf4;">U</span><span style="color:#ec5bc1;">S</span><span style="color:#f24a8e;"> </span><span style="color:#f7385a;">V</span><span style="color:#fd2727;">2</span></div>';
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
 if (unsafeWindow.getHack("betterSniperRecticle").status = true) {
      document.getElementById('aimRecticle').innerHTML = '<img id="recticleImg" src="https://i.redd.it/aa069tp99wh31.png">';
  }
// Full screen
 if (unsafeWindow.getHack("fullscreen").status = true) {
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
        case unsafeWindow.getHack("fullscreen").keybind:
            unsafeWindow.getHack("fullscreen").status = !unsafeWindow.getHack("fullscreen").status;
            break;
        case unsafeWindow.getHack("betterSniperRecticle").keybind:
            unsafeWindow.getHack("betterSniperRecticle").status = !unsafeWindow.getHack("betterSniperRecticle").status;
            break;
    }
});
