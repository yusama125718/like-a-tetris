var mino = ['t','o','i','s','z','l','j'];
var move = null;
var vector = 0;
var ix = 4;
var iy = 0;
var tmino = [
    [
        [0,0,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,0,0],
        [0,1,1,0],
        [0,1,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,0,0],
        [1,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
    ]
]
var omino = [
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ]
]
var imino = [
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
    ],
    [
        [0,0,0,0],
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0]
    ],
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
    ]
]
var smino = [
    [
        [0,0,0,0],
        [0,0,1,1],
        [0,1,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,1,0],
        [0,0,1,1],
        [0,0,0,1],
        [0,0,0,0]
    ],
    [
        [0,0,1,1],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,0,0],
        [1,1,0,0],
        [1,0,0,0],
        [0,0,0,0]
    ]
]

var zmino = [
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,0,1,1],
        [0,0,0,0]
    ],
    [
        [0,0,0,1],
        [0,0,1,1],
        [0,0,1,0],
        [0,0,0,0]
    ],
    [
        [0,1,1,0],
        [0,0,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,1,0],
        [0,1,1,0],
        [0,1,0,0],
        [0,0,0,0]
    ]
]

var lmino = [
    [
        [0,0,0,1],
        [0,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,1,1,1],
        [0,1,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,1],
        [0,0,0,0]
    ]
]

var jmino = [
    [
        [0,1,0,0],
        [0,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,1,0],
        [0,0,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,1,1,1],
        [0,0,0,1],
        [0,0,0,0]
    ],
    [
        [0,0,1,1],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,0,0]
    ]
]

state = [];

function load(){
    back = document.getElementById('back');
    bc= back.getContext('2d');
    bc.globalCompositeOperation = 'source-over';
    bc.fillStyle = '#CCCCCC';
    bc.strokeStyle = '#333333';
    bc.lineWidth = 3;

    for (let y = 0; y < 22; y++) {
        createblock(bc,0,y);
        createblock(bc,11,y);
    }

    for (let x = 1; x < 20; x++)
        createblock(bc,x,21);
}

function start(){
    game = document.getElementById('game');
    gc= game.getContext('2d');
    gc.clearRect(0,0,239,239);
    state = new Array(22);
    for (i = 0;i < 22;i++){
        state[i] = new Array(12);
        for (j = 0;j < 12;j++){
            state[i][j] = 100;
        }
    }
    for (i = 0;i < 22;i++){
        state[i][0] = 99;
        state[i][11] = 99; 
    }
    for (i = 0;i < 12;i++) state[11][i] = 99;
    vector = 0;
    ix = 4;
    iy = 0;
    mino = ['t','o','i','s','z','l','j'];
    move = rand();
    create(move,vector,gc);
    mino.splice(random,1);
    nextmino();
}

function jugde(bx,by,vector,type){
    switch (type) {
        case 't':
            movetype = tmino;
            break;
        case 'o':
            movetype = omino;
            break;
        case 'i':
            movetype = imino;
            break;
        case 's':
            movetype = smino;
            break;
        case 'z':
            movetype = zmino;
            break;
        case 'l':
            movetype = lmino;
            break;
        case 'j':
            movetype = jmino;
            break;
    }
    p = movetype[vector];
    for (i = 0;i < 4;i++){
        for (j = 0;j < 4;j++){
            if ([i][j] == 1){
                if (bx + i < 0||bx +1 > 12) return false;
                if (state[by + j][bx + i] != 100) return false;
            }
        }
    }
    return true;
}

function createblock(context,x,y){
    context.fillRect(x*20,y*20,20,20);
    context.strokeRect(x*20,y*20,20,20);
}

function rand(){
    random = Math.floor( Math.random() * mino.length );
    return mino[random];
}

function downkey(e){
    game = document.getElementById('game');
    gc = game.getContext('2d');
    if (move == null) return;
    switch (e.keyCode) {
        case 37:
            leftmove(move,ix,iy);
            break;
        case 39:
            rightmove(move,ix,iy);
            break;
        case 67:
            rightrotate(move,ix,iy);
            break;
        case 90:
            leftrotate(move,ix,iy);
            break;

    }
}

function create(type,minovector,context){
    gc.strokeStyle = '#333333';
    switch (type){
        case 't':
            gc.fillStyle = '#CC00CC';
            createtype = tmino;
            break;
        case 'o':
            gc.fillStyle = '#CCCC00';
            createtype = omino;
            break;
        case 'i':
            gc.fillStyle = '#00CCCC';
            createtype = imino;
            break;
        case 's':
            gc.fillStyle = '#00CC00';
            createtype = smino;
            break;
        case 'z':
            gc.fillStyle = '#CC0000';
            createtype = zmino;
            break;
        case 'l':
            gc.fillStyle = '#FFA500';
            createtype = lmino;
            break;
        case 'j':
            gc.fillStyle = '#CC0000';
            createtype = jmino;
            break;
    }
    for (i=0;i<4;i++){
        for (j=0;j<4;j++){
            if (createtype[minovector][i][j] == 1){
                createblock(context,ix+j,iy+i);
            }
        }
    }
}

function destroy(type,minovector,context){
    gc.globalCompositeOperation = 'destination-out';
    switch (type){
        case 't':
            createtype = tmino;
            break;
        case 'o':
            createtype = omino;
            break;
        case 'i':
            createtype = imino;
            break;
        case 's':
            createtype = smino;
            break;
        case 'z':
            createtype = zmino;
            break;
        case 'l':
            createtype = lmino;
            break;
    }
    for (i=0;i<4;i++){
        for (j=0;j<4;j++){
            if (createtype[minovector][i][j] == 1){
                createblock(context,ix+j,iy+i);
            }
        }
    }
    gc.globalCompositeOperation = 'source-over';
}

function leftmove(type,bx,by){
    game = document.getElementById('game');
    gc = game.getContext('2d');
    switch (type) {
        case 't':
            destroy('t',vector,gc);
            gc.fillStyle = '#CC00CC';
            ix--;
            if (!jugde(ix,iy,vector,type)){
                ix++;
            }
            create('t',vector,gc);
            break;
        case 'o':
            destroy('o',vector,gc);
            gc.fillStyle = '#CCCC00';
            ix--;
            if (!jugde(ix,iy,vector,type)){
                ix++;
            }
            create('o',vector,gc);
            break;
        case 'i':
            destroy('i',vector,gc);
            gc.fillStyle = '#00CCCC';
            ix--;
            if (!jugde(ix,iy,vector,type)){
                ix++;
            }
            create('i',vector,gc);
            break;
        case 's':
            gc.fillStyle = '#00CC00';
            destroy('s',vector,gc);
            ix--;
            if (!jugde(ix,iy,vector,type)){
                ix++;
            }
            creeate('s',vector,gc);
            break;
        case 'z':
            gc.fillStyle = '#CC0000';
            destroy('z',vector,gc);
            ix--;
            if (!jugde(ix,iy,vector,type)){
                ix++;
            }
            creeate('z',vector,gc);
            break;
        case 'l':
            gc.fillStyle = '#FFA500';
            destroy('l',vector,gc);
            ix--;
            if (!jugde(ix,iy,vector,type)){
                ix++;
            }
            creeate('l',vector,gc);
            break;
        case 'j':
            gc.fillStyle = '#CC0000';
            destroy('j',vector,gc);
            ix--;
            if (!jugde(ix,iy,vector,type)){
                ix++;
            }
            creeate('j',vector,gc);
            break;
    }
}

function rightmove(type,bx,by){
    game = document.getElementById('game');
    gc = game.getContext('2d');
    switch (type) {
        case 't':
            destroy('t',vector,gc);
            gc.fillStyle = '#CC00CC';
            ix++;
            if (!jugde(ix,iy,vector,type)){
                ix--;
            }
            create('t',vector,gc);
            break;
        case 'o':
            destroy('o',vector,gc);
            gc.fillStyle = '#CCCC00';
            ix++;
            if (!jugde(ix,iy,vector,type)){
                ix--;
            }
            create('o',vector,gc);
            break;
        case 'i':
            destroy('i',vector,gc);
            gc.fillStyle = '#00CCCC';
            ix++;
            if (!jugde(ix,iy,vector,type)){
                ix--;
            }
            create('i',vector,gc);
            break;
        case 's':
            gc.fillStyle = '#00CC00';
            destroy('s',vector,gc);
            ix++;
            if (!jugde(ix,iy,vector,type)){
                ix--;
            }
            creeate('s',vector,gc);
            break;
        case 'z':
            gc.fillStyle = '#CC0000';
            destroy('z',vector,gc);
            ix++;
            if (!jugde(ix,iy,vector,type)){
                ix--;
            }
            creeate('z',vector,gc);
            break;
        case 'l':
            gc.fillStyle = '#FFA500';
            destroy('l',vector,gc);
            ix++;
            if (!jugde(ix,iy,vector,type)){
                ix--;
            }
            creeate('l',vector,gc);
            break;
        case 'j':
            gc.fillStyle = '#CC0000';
            destroy('j',vector,gc);
            ix++;
            if (!jugde(ix,iy,vector,type)){
                ix--;
            }
            creeate('j',vector,gc);
            break;
    }
}

function leftrotate(type,bx,by){
    switch (type) {
        case 't':
            destroy('t',vector,gc);
            gc.fillStyle = '#CC00CC';
            if (vector == 0) vector = 3;
            else vector--;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 3) vector = 0;
                else vector++;
            }
            create('t',vector,gc);
            break;
        case 'o':
            destroy('o',vector,gc);
            gc.fillStyle = '#CCCC00';
            if (vector == 0) vector = 3;
            else vector--;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 3) vector = 0;
                else vector++;
            }
            create('o',vector,gc);
            break;
        case 'i':
            destroy('i',vector,gc);
            gc.fillStyle = '#00CCCC';
            if (vector == 0) vector = 3;
            else vector--;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 3) vector = 0;
                else vector++;
            }
            create('i',vector,gc);
            break;
        case 's':
            gc.fillStyle = '#00CC00';
            destroy('s',vector,gc);
            if (vector == 0) vector = 3;
            else vector--;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 3) vector = 0;
                else vector++;
            }
            creeate('s',vector,gc);
            break;
        case 'z':
            gc.fillStyle = '#CC0000';
            destroy('z',vector,gc);
            if (vector == 0) vector = 3;
            else vector--;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 3) vector = 0;
                else vector++;
            }
            creeate('z',vector,gc);
            break;
        case 'l':
            gc.fillStyle = '#FFA500';
            destroy('l',vector,gc);
            if (vector == 0) vector = 3;
            else vector--;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 3) vector = 0;
                else vector++;
            }
            creeate('l',vector,gc);
            break;
        case 'j':
            gc.fillStyle = '#CC0000';
            destroy('j',vector,gc);
            if (vector == 0) vector = 3;
            else vector--;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 3) vector = 0;
                else vector++;
            }
            creeate('j',vector,gc);
            break;
    }
}

function rightrotate(type,bx,by){
    switch (type) {
        case 't':
            destroy('t',vector,gc);
            gc.fillStyle = '#CC00CC';
            if (vector == 3) vector = 0;
            else vector++;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 0) vector = 3;
                else vector--;
            }
            create('t',vector,gc);
            break;
        case 'o':
            destroy('o',vector,gc);
            gc.fillStyle = '#CCCC00';
            if (vector == 3) vector = 0;
            else vector++;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 0) vector = 3;
                else vector--;
            }
            create('o',vector,gc);
            break;
        case 'i':
            destroy('i',vector,gc);
            gc.fillStyle = '#00CCCC';
            if (vector == 3) vector = 0;
            else vector++;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 0) vector = 3;
                else vector--;
            }
            create('i',vector,gc);
            break;
        case 's':
            gc.fillStyle = '#00CC00';
            destroy('s',vector,gc);
            if (vector == 3) vector = 0;
            else vector++;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 0) vector = 3;
                else vector--;
            }
            creeate('s',vector,gc);
            break;
        case 'z':
            gc.fillStyle = '#CC0000';
            destroy('z',vector,gc);
            if (vector == 3) vector = 0;
            else vector++;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 0) vector = 3;
                else vector--;
            }
            creeate('z',vector,gc);
            break;
        case 'l':
            gc.fillStyle = '#FFA500';
            destroy('l',vector,gc);
            if (vector == 3) vector = 0;
            else vector++;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 0) vector = 3;
                else vector--;
            }
            creeate('l',vector,gc);
            break;
        case 'j':
            gc.fillStyle = '#CC0000';
            destroy('j',vector,gc);
            if (vector == 3) vector = 0;
            else vector++;
            if (!jugde(ix,iy,vector,type)){
                if (vector == 0) vector = 3;
                else vector--;
            }
            creeate('j',vector,gc);
            break;
    }
}

function nextmino(){
    next = rand();
    nextdisplay = document.getElementById('next');
    nc = nextdisplay.getContext('2d');
    nc.clearRect(0,0,79,79);
    create(next,0,nc);
    mino.splice(random,1);
}