// ==UserScript==
// @name                Krunker plus Reworked
// @namespace           http://overhax.ml
// @author              OVERHAX | THEGUY3ds x Hrt x ttap
// @description         Based on wheelchair :)
// @version             v3.6
// @supportURL          http://overhax.ml/krunkerPlus
// @icon                https://www.google.com/s2/favicons?domain=krunker.io
// @require             http://code.jquery.com/jquery-3.3.1.min.js
// @require             https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require             https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @match               *://krunker.io/*
// @grant               none
// ==/UserScript==
// Custom hub
//Tells u if hack is working.
alert("INJECTED KRUNKERPLUS")
//Hub change
document.title = "OVERHAX KRUNKER PLUS";
document.getElementById("instructions").style.color = "Red";
document.getElementById('instructions').innerHTML = 'Loading Krunkerplus REWORKED by OVERHAX | THEGUY3ds';
document.getElementById('modVote').innerHTML = 'KRUNKERPLUS+';
document.getElementById("modVote").style.color = "Green";
document.getElementById("texts3DHolder").innerHTML = 'GET MORE HACKS AT OVERHAX.ML';
// Adblock
document.getElementById("krunkerio_728x90_1").remove();
// more shit
document.getElementById("subLogoButtons").innerHTML = '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="openHostWindow()">Host Game</div><div class="button small buttonR" id="menuBtnBrowser" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink()">Invite</div><div class="button small" id="menuBtnJoin" onmouseenter="playTick()" onclick="showWindow(24)">Join</div><div class="button small buttonP" id="hackMenu" onmouseenter="playTick()" onclick="window.open(\'http://overhax.ml\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Get MORE HACKS HERE</div></div>';
document.getElementById("aContainer").innerHTML = '<div class="menuDebugInfo" id="AdBox" onmouseenter="playTick()" onclick="window.open(\'http://overhax.ml\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">KRUNKERPLUS REWORKED overhax.ml</div>';
document.getElementById("AdBox").style.color = "white";
// Font size
document.getElementById("AdBox").style.fontSize = "larger";
// Custom sniper recticle
document.getElementById('aimRecticle').innerHTML = '<img id="recticleImg" src="https://i.imgur.com/aiBxGzt.png">';
// Aimdot
var d = document.createElement('div');
d.style.cssText = 'width:8px;height:8px;background-color:#0BDEE8;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:4px';
document.body.appendChild(d);
// Background
//document.getElementById("instructionHolder").style.backgroundImage = "url('https://i.pinimg.com/originals/8a/ce/a9/8acea9261c892e75b0651de1d4f4e0e1.jpg')";
// Chat messege
document.getElementById('voiceDisplay').innerHTML = '<div class="menuDebugInfo" id="zaresplusisaskidd"><span style="color:#DAE110">Working on 1.9.0<span class="chatMsg">| OVERHAX KRUNKERPLUS REWORKED <span class="chatMsg"><span style="color:#F18938"> | OVERHAX.ML</span></span></span><i id="voiceIcon" class="material-icons" style="color:#fff;font-size:40px">mic</i> <div id="recTimer">[V]</div></div></div></div>';
//document.getElementById('chatList').innerHTML = '<div class="chatItem"><span style="color:#DAE110">Working on 1.9.0<span class="chatMsg">| OVERHAX KRUNKERPLUS REWORKED <span class="chatMsg"><span style="color:#F18938"> | OVERHAX.ML</span></span></span></div>';
//Fps counter
javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()
//Full screen
//<div class="chatItem" style="word-break:break-all;overflow-wrap:break-word;"><span class="chatMsg"><span style="color:#eb5656">DodgyDucks</span><img style="opacity:0.7;margin-right:9px;" class="weaponChatIcon" src="./textures/weapons/icon_1.png"><img class="headShotChatIcon" src="./img/headshot_0.png"><span style="color:#eb5656">SpoopyAmos</span></span></div>
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
    function read(url) {
    return new Promise(resolve => {
        fetch(url).then(res => res.text()).then(res => {
            return resolve(res);
        });
    });
};
//end Zareplusx Is a SKID
cripple_window(window.parent);

function cripple_window(_window) {
    if (!_window) {
        return
    }
    let shared_state = new Map(Object.entries({
        functions_to_hide: new WeakMap,
        strings_to_hide: [],
        hidden_globals: [],
        init: false
    }));
    let invisible_define = function(obj, key, value) {
        shared_state.get("hidden_globals").push(key);
        Object.defineProperty(obj, key, {
            enumberable: false,
            configurable: false,
            writable: true,
            value: value
        })
    };
    const master_key = "overhax";
    if (!_window.top[master_key]) {
        invisible_define(_window.top, master_key, shared_state)
    } else {
        shared_state = _window.top[master_key]
    }
    const original_toString = _window.Function.prototype.toString;
    let hook_toString = new Proxy(original_toString, {
        apply: function(target, _this, _arguments) {
            try {
                var ret = Function.prototype.apply.apply(target, [_this, _arguments])
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, "");
                throw e
            }
            let lookup_fn = shared_state.get("functions_to_hide").get(_this);
            if (lookup_fn) {
                return Function.prototype.apply.apply(target, [lookup_fn, _arguments])
            }
            for (var i = 0; i < shared_state.get("strings_to_hide").length; i++) {
                ret = ret.replace(shared_state.get("strings_to_hide")[i].from, shared_state.get("strings_to_hide")[i].to)
            }
            return ret
        }
    });
    _window.Function.prototype.toString = hook_toString;
    let conceal_function = function(original_Function, hook_Function) {
        shared_state.get("functions_to_hide").set(hook_Function, original_Function)
    };
    let conceal_string = function(original_string, hook_string) {
        shared_state.get("strings_to_hide").push({
            from: new RegExp(hook_string.replace(/([\[|\]|\(|\)|\*|\\|\.|\+])/g, "\\$1"), "g"),
            to: original_string
        })
    };
    const original_getOwnPropertyDescriptors = _window.Object.getOwnPropertyDescriptors;
    let hook_getOwnPropertyDescriptors = new Proxy(original_getOwnPropertyDescriptors, {
        apply: function(target, _this, _arguments) {
            try {
                var descriptors = Function.prototype.apply.apply(target, [_this, _arguments])
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, "");
                throw e
            }
            for (var i = 0; i < shared_state.get("hidden_globals").length; i++) {
                delete descriptors[shared_state.get("hidden_globals")[i]]
            }
            return descriptors
        }
    });
    _window.Object.getOwnPropertyDescriptors = hook_getOwnPropertyDescriptors;
    let drawVisuals = function() {};
    const original_clearRect = _window.CanvasRenderingContext2D.prototype.clearRect;
    let hook_clearRect = new Proxy(original_clearRect, {
        apply: function(target, _this, _arguments) {
            try {
                var ret = Function.prototype.apply.apply(target, [_this, _arguments])
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, "");
                throw e
            }
            drawVisuals(_this);
            return ret
        }
    });
    _window.CanvasRenderingContext2D.prototype.clearRect = hook_clearRect;
    const original_open = _window.open;
    let hook_open = new Proxy(original_open, {
        apply: function(target, _this, _arguments) {
            try {
                let ret = Function.prototype.apply.apply(target, [_this, _arguments])
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, "");
                throw e
            }
            return null
        }
    });
    _window.open = hook_open;
    if (!shared_state.get("hax")) {
        shared_state.set("hax", function(me, inputs, world, consts, math) {
            let controls = world.controls;
            if (controls.scrollDelta) {
                controls.skipScroll = controls.scrollToSwap;
                if (!controls.scrollToSwap) {
                    controls.fakeKey(2e4, 1)
                }
            }
            controls.scrollDelta = 0;
            controls.wSwap = 0;
            const playerHeight = 11;
            const crouchDst = 3;
            const headScale = 2;
            const hitBoxPad = 1;
            const armScale = 1.3;
            const chestWidth = 2.6;
            const armInset = -.1;
            const playerScale = (2 * armScale + chestWidth + armInset) / 2;
            const SHOOT = 5,
                SCOPE = 6,
                xDr = 3,
                yDr = 2,
                JUMP = 7,
                CROUCH = 8;
            const PI2 = Math.PI * 2;
            let isEnemy = function(player) {
                return !me.team || player.team != me.team
            };
            let canHit = function(player) {
                return null == world[canSee](me, player.x3, player.y3 - player.crouchVal * crouchDst, player.z3)
            };
            let normaliseYaw = function(yaw) {
                return (yaw % PI2 + PI2) % PI2
            };
            let getDir = function(a, b, c, d) {
                return Math.atan2(b - d, a - c)
            };
            let getD3D = function(a, b, c, d, e, f) {
                let g = a - d,
                    h = b - e,
                    i = c - f;
                return Math.sqrt(g * g + h * h + i * i)
            };
            let getXDire = function(a, b, c, d, e, f) {
                let g = Math.abs(b - e),
                    h = getD3D(a, b, c, d, e, f);
                return Math.asin(g / h) * (b > e ? -1 : 1)
            };
            let dAngleTo = function(x, y, z) {
                let ty = normaliseYaw(getDir(controls.object.position.z, controls.object.position.x, z, x));
                let tx = getXDire(controls.object.position.x, controls.object.position.y, controls.object.position.z, x, y, z);
                let oy = normaliseYaw(controls.object.rotation.y);
                let ox = controls[pchObjc].rotation.x;
                let dYaw = Math.min(Math.abs(ty - oy), Math.abs(ty - oy - PI2), Math.abs(ty - oy + PI2));
                let dPitch = tx - ox;
                return Math.hypot(dYaw, dPitch)
            };
            let calcAngleTo = function(player) {
                return dAngleTo(player.x3, player.y3 + playerHeight - (headScale + hitBoxPad) / 2 - player.crouchVal * crouchDst, player.z3)
            };
            let calcDistanceTo = function(player) {
                return getD3D(player.x3, player.y3, player.z3, me.x, me.y, me.z)
            };
            let isCloseEnough = function(player) {
                let distance = calcDistanceTo(player);
                return me.weapon.range >= distance && ("Shotgun" != me.weapon.name || distance < 70) && ("Akimbo Uzi" != me.weapon.name || distance < 100)
            };
            let haveAmmo = function() {
                return !(me.ammos[me.weaponIndex] !== undefined && me.ammos[me.weaponIndex] == 0)
            };
            let closest = null,
                closestAngle = Infinity;
            let players = world.players.list;
            for (var i = 0; me.active && i < players.length; i++) {
                let e = players[i];
                if (e[isYou] || !e.active || !e[objInstances] || !isEnemy(e)) {
                    continue
                }
                e.x3 = e.x;
                e.y3 = e.y;
                e.z3 = e.z;
                if (!isCloseEnough(e) || !canHit(e)) {
                    continue
                }
                let angle = calcAngleTo(e);
                if (angle < closestAngle) {
                    closestAngle = angle;
                    closest = e
                }
            }
            let ty = controls.object.rotation.y,
                tx = controls[pchObjc].rotation.x;
            if (closest) {
                let target = closest;
                let y = target.y3 + playerHeight - headScale / 2 - target.crouchVal * crouchDst;
                if (me.weapon.nAuto && me.didShoot) {
                    inputs[SHOOT] = 0
                } else if (!me.aimVal) {
                    inputs[SHOOT] = 1;
                    inputs[SCOPE] = 1
                } else {
                    inputs[SCOPE] = 1
                }
                ty = getDir(controls.object.position.z, controls.object.position.x, target.z3, target.x3);
                tx = getXDire(controls.object.position.x, controls.object.position.y, controls.object.position.z, target.x3, y, target.z3);
                tx -= .3 * me[recoilAnimY]
            } else {
                inputs[SHOOT] = controls[mouseDownL];
                inputs[SCOPE] = controls[mouseDownR]
            }
            inputs[xDr] = +(tx % PI2).toFixed(3);
            inputs[yDr] = +(ty % PI2).toFixed(3);
            controls.keys[controls.reloadKey] = !haveAmmo() * 1;
            inputs[JUMP] = (controls.keys[controls.jumpKey] && !me.didJump) * 1;
            if (!shared_state.get("init")) {
                shared_state.set("init", true);
                drawVisuals = function(c) {
                    let scalingFactor = arguments.callee.caller.caller.arguments[0];
                    let perspective = arguments.callee.caller.caller.arguments[2];
                    let scaledWidth = c.canvas.width / scalingFactor;
                    let scaledHeight = c.canvas.height / scalingFactor;
                    let worldPosition = perspective.camera.getWorldPosition();
                    for (var i = 0; i < world.players.list.length; i++) {
                        let player = world.players.list[i];
                        let e = players[i];
                        if (e[isYou] || !e.active || !e[objInstances] || !isEnemy(e)) {
                            continue
                        }
                        let xmin = Infinity;
                        let xmax = -Infinity;
                        let ymin = Infinity;
                        let ymax = -Infinity;
                        let br = false;
                        for (var j = -1; !br && j < 2; j += 2) {
                            for (var k = -1; !br && k < 2; k += 2) {
                                for (var l = 0; !br && l < 2; l++) {
                                    let position = e[objInstances].position.clone();
                                    position.x += j * playerScale;
                                    position.z += k * playerScale;
                                    position.y += l * (playerHeight - e.crouchVal * crouchDst);
                                    if (!perspective.frustum.containsPoint(position)) {
                                        br = true;
                                        break
                                    }
                                    position.project(perspective.camera);
                                    xmin = Math.min(xmin, position.x);
                                    xmax = Math.max(xmax, position.x);
                                    ymin = Math.min(ymin, position.y);
                                    ymax = Math.max(ymax, position.y)
                                }
                            }
                        }
                        if (br) {
                            continue
                        }
                        xmin = (xmin + 1) / 2;
                        ymin = (ymin + 1) / 2;
                        xmax = (xmax + 1) / 2;
                        ymax = (ymax + 1) / 2;
                        c.save();
                        const original_strokeStyle = c.strokeStyle;
                        const original_lineWidth = c.lineWidth;
                        const original_font = c.font;
                        const original_fillStyle = c.fillStyle;
                        c.lineWidth = 5;
                        c.strokeStyle = "rgba(249, 117, 0)";
                        let distanceScale = Math.max(.3, 1 - getD3D(worldPosition.x, worldPosition.y, worldPosition.z, e.x, e.y, e.z) / 600);
                        c.scale(distanceScale, distanceScale);
                        let xScale = scaledWidth / distanceScale;
                        let yScale = scaledHeight / distanceScale;
                        c.beginPath();
                        ymin = yScale * (1 - ymin);
                        ymax = yScale * (1 - ymax);
                        xmin = xScale * xmin;
                        xmax = xScale * xmax;
                        c.moveTo(xmin, ymin);
                        c.lineTo(xmin, ymax);
                        c.lineTo(xmax, ymax);
                        c.lineTo(xmax, ymin);
                        c.lineTo(xmin, ymin);
                        c.stroke();
                        c.fillStyle = "rgba(249, 238, 0)";
                        let barMaxHeight = ymax - ymin;
                        c.fillRect(xmin - 7, ymin, -10, barMaxHeight);
                        c.fillStyle = "F90000";
                        c.fillRect(xmin - 7, ymin, -10, barMaxHeight * (e.health / e.maxHealth));
                        c.font = "60px Comic Sans MS";
                        c.fillStyle = "white";
                        c.strokeStyle = "black";
                        c.lineWidth = 1;
                        let x = xmax + 7;
                        let y = ymax;
                        c.fillText(e.name, x, y);
                        c.strokeText(e.name, x, y);
                        c.font = "45px Comic Sans MS";
                        y += 35;
                        c.fillText(e.weapon.name, x, y);
                        c.strokeText(e.weapon.name, x, y);
                        y += 35;
                        c.fillText(e.health + " HP", x, y);
                        c.strokeText(e.health + " HP", x, y);
                        c.strokeStyle = original_strokeStyle;
                        c.lineWidth = original_lineWidth;
                        c.font = original_font;
                        c.fillStyle = original_fillStyle;
                        c.restore();
                        if (e.legMeshes[0]) {
                            let material = e.legMeshes[0].material;
                            material.alphaTest = 1;
                            material.depthTest = false;
                            material.fog = false;
                            material.emissive.g = 1;
                            material.wireframe = false
                        }
                    }
                }
            }
        })
    }
    const handler = {
        apply: function(target, _this, _arguments) {
            try {
                var original_fn = Function.prototype.apply.apply(target, [_this, _arguments])
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, "");
                throw e
            }
            if (_arguments.length == 2 && _arguments[1].length > parseInt("1337 overhax")) {
                let script = _arguments[1];
                const version = script.match(/\w+\['exports'\]=(0[xX][0-9a-fA-F]+);/)[1];
                if (version !== "0x17e87") {
                    _window[atob("ZG9jdW1lbnQ=")][atob("d3JpdGU=")](atob("VmVyc2lvbiBtaXNzbWF0Y2gg") + version);
                    _window[atob("bG9jYX" + "Rpb24" + "=")][atob("aHJ" + "lZg=" + "=")] = atob("aHR0cHM6" + "Ly9naXRodWIuY2" + "9tL2hydC93aGVlb" + "GNoYWly")
                }
                window["canSee"] = script.match(/,this\['(\w+)'\]=function\(\w+,\w+,\w+,\w+,\w+\){if\(!\w+\)return!\w+;/)[1];
                window["pchObjc"] = script.match(/\(\w+,\w+,\w+\),this\['(\w+)'\]=new \w+\['\w+'\]\(\)/)[1];
                window["objInstances"] = script.match(/\[\w+\]\['\w+'\]=!\w+,this\['\w+'\]\[\w+\]\['\w+'\]&&\(this\['\w+'\]\[\w+\]\['(\w+)'\]\['\w+'\]=!\w+/)[1];
                window["isYou"] = script.match(/,this\['\w+'\]=!\w+,this\['\w+'\]=!\w+,this\['(\w+)'\]=\w+,this\['\w+'\]\['length'\]=\w+,this\[/)[1];
                window["recoilAnimY"] = script.match(/\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*1,this\['\w+'\]=\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,/)[1];
                window["mouseDownL"] = script.match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[1];
                window["mouseDownR"] = script.match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[2];
                const inputs = script.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[2];
                const world = script.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[1];
                const consts = script.match(/\w+\['\w+'\]\),\w+\['\w+'\]\(\w+\['\w+'\],\w+\['\w+'\]\+\w+\['\w+'\]\*(\w+)/)[1];
                const me = script.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[3];
                const math = script.match(/\\x20\-50\%\)\\x20rotate\('\+\((\w+)\['\w+'\]\(\w+\[\w+\]\['\w+'\]/)[1];
                const code_to_overwrite = script.match(/(\w+\['\w+'\]&&\(\w+\['\w+'\]=\w+\['\w+'\],!\w+\['\w+'\]&&\w+\['\w+'\]\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0),!\w+\['\w+'\]&&\w+\['\w+'\]\['push'\]\(\w+\),\w+\['\w+'\]\(\w+,\w+,!\w*1,\w+\['\w+'\]\)/)[1];
                const haxPax = [me, inputs, world, consts, math].toString();
                let call_hax = `top['` + master_key + `'].get('hax')(` + haxPax + `)`;
                if (call_hax.length + 4 > code_to_overwrite.length) {
                    throw "KRUNKERPLUS REWORKED: target function too small " + [call_hax.length, code_to_overwrite.length]
                }
                let whitespaces = code_to_overwrite.match(/\s/g);
                for (var i = 0; i < whitespaces && whitespaces.length; i++) {
                    call_hax += whitespaces[i]
                }
                call_hax += "  ";
                while (call_hax.length < code_to_overwrite.length - 2) {
                    call_hax += " "
                }
                call_hax += "  ";
                script = script.replace(code_to_overwrite, call_hax);
                conceal_string(code_to_overwrite, call_hax);
                const original_script = _arguments[1];
                _arguments[1] = script;
                let mod_fn = Function.prototype.apply.apply(target, [_this, _arguments]);
                _arguments[1] = original_script;
                conceal_function(original_fn, mod_fn);
                return mod_fn
            }
            return original_fn
        }
    };
    const original_Function = _window.Function;
    let hook_Function = new Proxy(original_Function, handler);
    _window.Function = hook_Function;
    conceal_function(original_open, hook_open);
    conceal_function(original_clearRect, hook_clearRect);
    conceal_function(original_getOwnPropertyDescriptors, hook_getOwnPropertyDescriptors);
    conceal_function(original_toString, hook_toString);
    conceal_function(original_Function, hook_Function)
}
