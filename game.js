var canvas=document.getElementById('minhaTela');
ctx=canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

var vidaBoss = 100;
background = new Image();
background.w = 800;
background.h = 600;
backgroundX = 0;
backgroundY=0;
background.src="img/fundo.jpg";


background1 = new Image();
background1.w = 800;
background1.h = 600;
backgroundX1 = 0;
backgroundY1=0;
background1.src="img/GameCenter.jpg";

btPlay = new Image();
btPlay.w = 200;
btPlay.h = 200;
btPlayx = canvas.width/2-100;
btPlayy=canvas.height/2;
btPlay.src="img/Botao_Play.png";

var audio = new Audio();
audio.src = "Audio/waves.mp3";
audio.load();

var somTiro = new Audio();
somTiro.src = "Audio/tiro.wav";
somTiro.load();

var start = (new Date()).getTime();
var current;
var currentFrame =0.;
var numFrames = 2;
turtlePlayer = new Image();
turtlePlayer.w = 150;
turtlePlayer.h = 100;
turtlePlayerX = 20;
turtlePlayerY=200;
var speedTurtleX = 6;
var speedTurtleY = 4;

var numFramesB = 2;
polvoEnemy = new Image();
polvoEnemy.w = 400;
polvoEnemy.h = 200;
polvoEnemyX = 700;
polvoEnemyY= 200;
var speedPolvoX = 2;
var speedPolvoY= 10;

var passoudatela = false;
jornalEnemy = new Image();
jornalEnemy.w = 100;
jornalEnemy.h = 100;
jornalEnemyX = 800;
jornalEnemyY=200;
var speedJornalX = 6;
var speedJornalY = 4;
var atirando = false;
atirar = false;
var tiro = new Image();
tiro.src = "img/tiro.png";
tiro.w = 40;
tiro.h = 20;
var tiroX = turtlePlayerX;
var tiroY = turtlePlayerY +tiro.h*2;
var speedTiro = 15;
var newTiro = 0;
// var pontos = 100;
var colidiu = false;
var chefe;
var jornalVivo = true;
var perseguicao = false;
var fimDeJogo = false;
var colidiuB = false;
var mudou;
var mudaCena;
var btCompartilha = document.getElementById("compartilha");
var btQuadroScore = document.getElementById("btScoreQ");

for (var i = 0; i < numFramesB; i++)
    {
        polvoEnemy[i] = new Image();
        polvoEnemy[i].src = "img/boss" + (i+1) + ".png";
        
    }	

for (var i = 0; i < numFrames; i++)
    {
        turtlePlayer[i] = new Image();
        turtlePlayer[i].src = "img/tartaruga" + (i+1) + ".png";
        jornalEnemy[i] = new Image();
        jornalEnemy[i].src = "img/inimigo" + (i+1) + ".png";
    }	

var Player = class Player{
    player (img, x, y, w, h){
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
    }
    drawImage(img, x, y, w, h){
        ctx.drawImage(img, x, y, w, h);
    }
    onClick(){
        mudaCena = true;
    }

};
function drawText(x,y,text){
	ctx.fillStyle = "#000000";
	ctx.font = "20px Arial";
	ctx.fillText(text,x,y);
}
var Enemy = class Enemy{
    enemy (img, x, y, w, h){
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
    }
    drawImage(img, x, y, w, h){
        ctx.drawImage(img, x, y, w, h);
    }
    persegue(target, x, y){
        perseguicao = true;
        seguePlayer();
    }

};

function desenha(){
 ctx.clearRect(0,0,canvas.width, canvas.height);
    if(mudou){
        fundo = new Player();
    fundo.drawImage(background, backgroundX, backgroundY, background.w, background.h);
    btCompartilha.style.display = "none";
    if(vidaBoss > 0){
        drawText(600, 30, "PONTUACAO: "+pontos, "red");
    bala = new Player()
    bala.drawImage(tiro, tiroX, tiroY, tiro.w, tiro.h);
            turtle = new Player();
            turtle.drawImage(turtlePlayer[Math.floor(currentFrame%numFrames)],
            turtlePlayerX, turtlePlayerY, turtlePlayer.w, turtlePlayer.h);
        if(jornalVivo){

            inimigo = new Enemy();
            inimigo.drawImage(jornalEnemy[Math.floor(currentFrame%numFrames)],
            jornalEnemyX, jornalEnemyY, jornalEnemy.w, jornalEnemy.h);
        }
            if(chefe){
        
                boss = new Enemy();
                boss.drawImage(polvoEnemy[Math.floor(currentFrame%numFrames)],
                polvoEnemyX, polvoEnemyY, polvoEnemy.w, polvoEnemy.h);
                boss.persegue(turtle, turtlePlayerX, turtlePlayerY);
            }   

    }else
    {
        
        drawText(100, 100, "PONTUACAO: "+pontos, "red");
        space = false;
        atirar = false;
        atirando = false;
        btCompartilha.style.display = "inline";
        mostraPlacar();
    }

 } else {
        
        fundo1 = new Player();
        fundo1.drawImage(background1, backgroundX1, backgroundY1, background1.w, background1.h);
        
        drawText(300, 250, "APERTE ENTER PARA COMECAR ");
       var botao = new Player()
       botao.drawImage(btPlay, btPlayx, btPlayy, btPlay.w, btPlay.h);
        btCompartilha.style.display = "none";

        
    }
   
    
   
         
        
    
    }
    
    

function seguePlayer(){
    if(perseguicao){
      
        if(polvoEnemyY >= turtlePlayerY){
            polvoEnemyY -= speedPolvoY;
            if(polvoEnemyY == canvas.height){
                polvoEnemyY +100;
            }
        }
        if(polvoEnemyY <= turtlePlayerY){
            polvoEnemyY +=speedPolvoY;
                    if(polvoEnemyY == 0){
                        polvoEnemyY - 100;
                    }
                }
                if(polvoEnemyX >= turtlePlayerX){
            polvoEnemyX -= speedPolvoX;
        }
        if(polvoEnemyX <= turtlePlayerX){
            polvoEnemyX += speedPolvoX;
        }

    }
}

function deltaTime(){
    current = (new Date()).getTime();
    elapsed = current - start;
    start = current;
    var delta = elapsed / 1000.;			
    return delta;
}

function moveTiro(){
    
    
     
        if(passoudatela){
            
         atirar = false;
         atirando = false;
         tiroX = turtlePlayerX-tiroX;
         tiroY = turtlePlayerY +tiro.h*2;
          passoudatela = false;
        }
   
  
    
    if(!space){
        if(atirar){
        tiroX += speedTiro;
         }else {
         tiroX = turtlePlayerX+tiroX/5;
        tiroY = turtlePlayerY + tiro.h*2;
         }   
       
    }else {
        if(atirar){
            tiroX += speedTiro;
            somTiro.play();
        }
        atirar=true;
    }
    
}
function verificaColisao(){
    if(jornalVivo){
        if((tiroX + tiro.x > jornalEnemyX)&& (tiroY > jornalEnemyY)
    && (tiroY < jornalEnemyY+jornalEnemy.h)){
        colidiu = true;
        
        atirar = false;
        pontos = pontos+10;
    }
    }

    if((tiroX + tiro.x > polvoEnemyX)&& (tiroY > polvoEnemyY)
    && (tiroY < polvoEnemyY+polvoEnemy.h)){
        colidiuB = true;
        
        atirar = false;
        pontos = pontos+50;
        
    }

    if(colidiuB){
        if(vidaBoss <=0 ){
            chefe = false;
        }else vidaBoss --;
    }
   
    if(colidiu){

    
       jornalVivo = false;
       
       chefe = true;
       
       colidiu = false;
    }
   

}

function update(){
    var delta = deltaTime();
    currentFrame += delta*8;
    
if (mudaCena){
    mudou = true;

}if(mudou){
    moveTiro();
   
    if(jornalVivo){
        jornalEnemyX -= speedJornalX;
    }
    
  
 
    if(moveLeft){
        turtlePlayerX -= speedTurtleX;
    }
    if(moveRight){
        turtlePlayerX += speedTurtleX;
    }
    if(moveUp){
        turtlePlayerY -= speedTurtleY;
    }
    if(moveDown){
        turtlePlayerY += speedTurtleY;
    }
    if(turtlePlayerX + turtlePlayer.w > canvas.width){
        turtlePlayerX = canvas.width - turtlePlayer.w;
    }
    if(tiroX + tiro.w > canvas.width){
        
        passoudatela = true;

  
    }
    if(turtlePlayerX < 0){
        turtlePlayerX = 0;
    }
    if(turtlePlayerY < 0){
        turtlePlayerY = 0;
    }
    if(turtlePlayerY + turtlePlayer.h > canvas.height){
       
        turtlePlayerY = canvas.height - turtlePlayer.h;
    }
    verificaColisao();
}
}