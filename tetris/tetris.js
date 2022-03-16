var mino = ['t','o'];
move = null;
ix = 0;
iy = 0;

function load(){
    back = document.getElementById('back');
    bc= back.getContext('2d');
    bc.fillStyle = '#CCCCCC';
    bc.strokeStyle = '#333333';
    bc.lineWidth = 3;

    for (let y = 0; y < 440; y=y+20) {
        createblock(bc,0,y);
        createblock(bc,220,y);
    }

    for (let x = 20; x < 400; x=x+20)
        createblock(bc,x,420);
}

function start(){
    game = document.getElementById('game');
    gc= game.getContext('2d');
    gc.clearRect(0,0,239,239);
    mino = ['t','o'];
    move = rand();
    create(move);
}

function createblock(context,x,y){
    context.fillRect(x,y,20,20);
    context.strokeRect(x,y,20,20);
}

function rand(){
    var random = Math.floor( Math.random() * mino.length );
    return mino[random];
}

function downkey(e){
    game = document.getElementById('game');
    gc= game.getContext('2d');
    if (move = null) return;
    switch (e.keyCode) {
        case 37:
            leftmove(move,ix,iy);
            break;
        case 39:
            rightmove(move,ix,iy);
            break;
    }
}

function create(type){
    ix = 4;
    iy = 0;
    switch (type){
        case 't':
            gc.fillStyle = '#CC00CC';
            gc.strokeStyle = '#333333';
            createblock(gc,ix*20,(iy+1)*20);
            createblock(gc,(ix+1)*20,(iy+1)*20);
            createblock(gc,(ix+2)*20,(iy+1)*20);
            createblock(gc,(ix+1)*20,(iy+2)*20);
            break;
        case 'o':
            gc.fillStyle = '#CCCC00';
            gc.strokeStyle = '#333333';
            createblock(gc,ix*20,(iy+1)*20);
            createblock(gc,(ix+1)*20,(iy+1)*20);
            createblock(gc,ix*20,(iy+2)*20);
            createblock(gc,(ix+1)*20,(iy+2)*20);
            break;
    }
}

function leftmove(type,bx,by){
    ix++;
    switch (type) {
        case 't':
            gc.globalCompositeOperation = 'destination-out';
            createblock(gc,bx,by);
            createblock(gc,bx+1,by);
            createblock(gc,bx+2,by);
            createblock(gc,bx+1,by+1);
            gc.globalCompositeOperation = 'source-over';
            gc.fillStyle = '#CC00CC';
            createblock(gc,bx-1,by);
            createblock(gc,bx,by);
            createblock(gc,bx+1,by);
            createblock(gc,bx,by+1);
            break;
        case 'o':
            gc.globalCompositeOperation = 'destination-out';
            createblock(gc,bx,by);
            createblock(gc,bx+1,by);
            createblock(gc,bx,by+1);
            createblock(gc,bx+1,by+1);
            gc.globalCompositeOperation = 'source-over';
            gc.fillStyle = '#CCCC00';
            createblock(gc,bx-1,by);
            createblock(gc,bx,by);
            createblock(gc,bx-1,by+1);
            createblock(gc,bx,by+1);
            break;

    }
}