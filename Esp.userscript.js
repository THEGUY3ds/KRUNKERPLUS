// ==UserScript==
// @name                Krunker plus ESP
// @namespace           http://overhax.ml
// @author              OVERHAX | THEGUY3ds x Hrt x ttap
// @description         I See thru Walls!
// @version             v3.7
// @supportURL          http://overhax.ml/krunkerPlus
// @icon                https://www.google.com/s2/favicons?domain=krunker.io
// @match               *://krunker.io/*
// @grant               none
// ==/UserScript==

let shared_state = new Map(Object.entries({functions_to_hide: new WeakMap(), strings_to_hide: [], hidden_globals: [], init: false}));

let conceal_function = function(original_Function, hook_Function) {
    shared_state.get('functions_to_hide').set(hook_Function, original_Function);
};

let conceal_string = function(original_string, hook_string) {
    shared_state.get('strings_to_hide').push({from: new RegExp(hook_string.replace(/([\[|\]|\(|\)|\*|\\|\.|\+])/g,'\\$1'), 'g'), to: original_string});
};

//

var distance, cnBSeen, canSee, pchObjc, objInstances, overhax, inputs, getWorldPosition;
console.json = object => console.log(JSON.stringify(object, undefined, 2));
const defined = object => typeof object !== "undefined";

const original_encode = TextEncoder.prototype.encode;
let hook_encode = new Proxy(original_encode, {
    apply: function(target, _this, _arguments) {
        let game = false;
        try {
            if (_arguments[0].length > 1000) {
                cnBSeen = _arguments[0].match(/this\['recon']=!0x1,this\['(\w+)']=!0x1/)[1];
                //canSee = _arguments[0].match(/,this\['(\w+)'\]=function\(\w+,\w+,\w+,\w+,\w+\){if\(!\w+\)return!\w+;/)[1];
                pchObjc = _arguments[0].match(/\(\w+,\w+,\w+\),this\['(\w+)'\]=new \w+\['\w+'\]\(\)/)[1];
                objInstances = _arguments[0].match(/\[\w+\]\['\w+'\]=!\w+,this\['\w+'\]\[\w+\]\['\w+'\]&&\(this\['\w+'\]\[\w+\]\['(\w+)'\]\['\w+'\]=!\w+/)[1];
                inputs = _arguments[0].match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[2];
                getWorldPosition = _arguments[0].match(/\['camera']\['(\w+)']\(\);if/)[1]

                game = true;
            }

        } catch (e) {
            // modify stack trace to hide proxy
            e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, '');
            throw e;
        }
        if (game) TextEncoder.prototype.encode = original_encode;

        return Function.prototype.apply.apply(target, [_this, _arguments]);
    }
}); TextEncoder.prototype.encode = hook_encode;
conceal_function(original_encode, hook_encode);

let render = function() {

    //DEFINES
    const args = arguments.callee.caller.caller.arguments;
    const me = args[3];
    if (!me) return;
    const scale = args[0];
    const world = args[1];
    const renderer = args[2];
    const scale2 = args[4];
    const canvas = document.getElementById('game-overlay');
    const ctx = canvas.getContext("2d");

    console.dir(window)
    let players = world.players.list;
    let entities = players.filter(x => { return x.active && !x[overhax] });


     //FUNCTIONS

    let get = (entity, string) => {
        if (defined(entity) && entity && entity.active) {
            switch (string) {
                case 'objInstances': return entity[objInstances];
                case 'isFriendly': return (me && me.team ? me.team : me.spectating ? 0x1 : 0x0) == entity.team;
            }
        }
        return null;
    }

    let getTarget = () => {
        if (!defined (distance)) distance = Infinity;
        for (const entity of players.filter(x => { return x.active && !get(x,"overhax") && get(x,"inView") && !get(x,"isFriendly") && x.health > 0})) {
            if (defined(entity[objInstances])) {
                const entityPos = entity[objInstances].position;
                if (renderer.frustum.containsPoint(entityPos)) {
                    const dist = entityPos.distanceTo(me);
                    if (dist <= distance) {
                        me.distance = dist;
                        return entity;
                    }
                }
            }
        }
        distance = Infinity;
        return null;
    }

    let world2Screen = (camera, position) => {
        let pos = position.clone();
        pos.project(camera);
        pos.x = (pos.x + 1) / 2;
        pos.y = (-pos.y + 1) / 2;
        return pos;
    }

    let rect = (x, y, ox, oy, w, h, color, fill) => {
        ctx.save();
        ctx.beginPath();
        fill ? ctx.fillStyle = color : ctx.strokeStyle = color;
        ctx.rect(ox, oy, w, h);
        fill ? ctx.fill() : ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    //ESP / Chams
    entities.map((entity, index, array)=> {
        if (defined(entity[objInstances])) {

                //Chams
                entity[cnBSeen] = true;
                for (let i = 0; i < entity[objInstances].children.length; i++) {
                    const object3d = entity[objInstances].children[i];
                    for (let j = 0; j < object3d.children.length; j++) {
                        const mesh = object3d.children[j];
                        /*/if (mesh && mesh.type == "Mesh") {
                            const material = mesh.material;
                            material.depthTest = false;
                            material.fog = false;
                            material.emissive.g = 1;
                            material.colorWrite = true;
                            material.transparent = true;
                            material.opacity = 1.0;
                        }/*/ // Delete Both /*/ To get charms aswell
                    }
                }
            }
        //}
    });
};
const clearRect = CanvasRenderingContext2D.prototype.clearRect;
const original_clearRect = CanvasRenderingContext2D.prototype.scale;
let hook_clearRect = new Proxy(original_clearRect, {
    apply: function(target, _this, _arguments) {
        try {
            var ret = Function.prototype.apply.apply(target, [_this, _arguments]);
        } catch (e) {
            // modify stack trace to hide proxy
            e.stack = e.stack.replace(/\n.*Object\.apply \(<.*/, '');
            throw e;
        }

        render(_this);

        return ret;
    }
}); CanvasRenderingContext2D.prototype.scale = hook_clearRect;
conceal_function(original_clearRect, hook_clearRect);
