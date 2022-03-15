function load(){
    back = document.getElementById('back');
    bc= back.getContext('2d');
    bc.fillStyle = '#CCCCCC';
    bc.strokeStyle = '#333333';
    bc.lineWidth = 3;

    for (let y = 0; y < 440; y=y+20) {
        createblock(bc,0,y,20,20);
        createblock(bc,220,y,20,20);
    }

    for (let x = 20; x < 400; x=x+20)
        createblock(bc,x,420,20,20);
}

function start(){
    game = document.getElementById('game');
    gc= back.getContext('2d');
    gc.clearRect(0,0,239,239);
}

function createblock(context,x,y,w,h){
    context.fillRect(x,y,w,h);
    context.strokeRect(x,y,w,h);
}