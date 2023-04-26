var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var final=createSprite(375,190,52,140);
final.shapeColor="yellow";

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//adicione velocidade para fazer o carro se mover.
  car1.velocityY=7;
  car2.velocityY=7;
  car3.velocityY=-7;
  car4.velocityY=-7;
  

function draw() {
  
   background("white");
  textSize(25);
  text("Vidas:" + life,0,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);

car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
 if(keyDown(RIGHT_ARROW)){
    sam.x=sam.x+3;
  }
  
  if(keyDown(LEFT_ARROW)){
    sam.x=sam.x-3;
  }
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  if(sam.isTouching(car1)){
    life=life-1;
    sam.x=20;
    sam.y=190;
  }
  
    if(sam.isTouching(car2)){
    life=life-1;
    sam.x=20;
    sam.y=190;
  }
  
      if(sam.isTouching(car3)){
    life=life-1;
    sam.x=20;
    sam.y=190;
  }
  
      if(sam.isTouching(car4)){
    life=life-1;
    sam.x=20;
    sam.y=190;
  }
  
  if(sam.isTouching(final)){
    textSize(30);
    fill("black");
    text("Você Venceu!",150,100);
    car1.velocityY=0;
    car2.velocityY=0;
    car3.velocityY=0;
    car4.velocityY=0;
    sam.velocityX=0;
  }
  
  if(life===0){
    textSize(30);
    fill("black");
    text("Fim De Jogo!",150,100);
    car1.velocityY=0;
    car2.velocityY=0;
    car3.velocityY=0;
    car4.velocityY=0;
  }
  
  
 drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
