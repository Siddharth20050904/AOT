var yesB, noB;
var gameState;
var pic;
var gameState1;
var playB, startB, stopB;

function preload() {

  youseebiggirl = loadSound("youseebiggirl.mp3");

  leviImg = loadImage("levi.jpg");
  arminImg = loadImage("armin.jpg");
  reinerImg = loadImage("reiner.jpg"); 
  pixis = loadImage("pixis.jpg");
  connie = loadImage("connie.jpg");
  eren = loadImage("eren.jpg");
  erwin = loadImage("Erwin.jpg");
  bertholdt = loadImage("bertholt.jpg");
  jean = loadImage("jean.jpg");
  marco = loadImage("marco.jpg");
  zeke = loadImage("zeke.jpg");
  marcel = loadImage("marcelGalliad.jpg");
  porco = loadImage("porcoGalliard.jpg");
  falco = loadImage("falcoGrice.jpg");
  grisha = loadImage("grisha.jpg");
  kruger = loadImage("erenKruger.jpg");
  rod = loadImage("rodreiss.jpg");
  floch = loadImage("floch.jpg");
  tom = loadImage("tom.jpg");
  willy = loadImage("willyTybur.jpg");
  niccolo = loadImage("niccolo.jpg");
  karl = loadImage("karlfritz.jpg");
  carla = loadImage("carla.jpg");
  lara = loadImage("laraTybur.jpg");
  frieda = loadImage("frieda.jpg");
  mikasa = loadImage("mikasa.jpg");
  annie = loadImage("annie.jpg");
  historia = loadImage("historia.jpg");
  sasha = loadImage("sasha.jpg");
  ymir = loadImage("ymir.png");
  ymirfritz = loadImage("ymirfritz.jpg");
  pieck = loadImage("PieckFinger.png");
  dina = loadImage("DinaFritz.png");
  gabi = loadImage("GabiBraun.png");
  yelena = loadImage("Yelena.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  yesB = createButton("Yes");
  yesB.size(100,50);
  yesB.position(displayWidth/2-100,displayHeight/2);

  noB = createButton("No");
  noB.size(100,50);
  noB.position(displayWidth/2,displayHeight/2);

  playB = createButton("Start");
  playB.size(100, 50);
  playB.position(displayWidth/2 + 150, displayHeight/2 + 200);

  startB = createButton("Play");
  startB.size(100, 50);
  startB.position(displayWidth/2 + 100, displayHeight/2);
  startB.hide();

  stopB = createButton("Stop");
  stopB.size(100, 50);
  stopB.position(displayWidth/2 + 200, displayHeight/2);
  stopB.hide();

  pic = createSprite(displayWidth/2, displayHeight/2);
  pic.visible = false;

  leviSound = createAudio('levi.mp3');
  erenSound = createAudio('Eren_laugh.mp3');
  gameState = 0;
  gameState1 = 0;
}

function draw(){
  background(250);
  fill("Black");
  textAlign(CENTER);
  textSize(30);
  if(gameState1 === 0){
    playB.hide();
    if(gameState===0){
      text("Is your character Male?",displayWidth/2, displayHeight/2-50);
      yesB.mousePressed(()=>{
        gameState = 1;
      })
      noB.mousePressed(()=>{
        gameState = 49 
      })
    }
      if(gameState===1){
        text("Is your character hairs are black ?",displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState =2;
        })
        noB.mousePressed(()=>{
          gameState = 8;
        })
      }
      if(gameState===2){
        text("Is your character too short ?", displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 36;
        })
        noB.mousePressed(()=>{
          gameState = 12;
        })
      }
      if(gameState===4){
        text("Is your character one of the Titan Shifter ?", displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 5;
        })
        noB.mousePressed(()=>{
          gameState = 20;
        })
      }
      if(gameState===5){
        text("Was your character childhood friend of main character ?", displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 6;
          gameState1 = 1;
        })
        noB.mousePressed(()=>{
          gameState = 23;
        })
      }
      if(gameState===8){
        text("Is your character blad ?",displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 9;
        })
        noB.mousePressed(()=>{
          gameState = 16;
        })
      }
      if(gameState===9){
        text("Does your character have a big moustache ?",displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 10;
          gameState1 = 1;
        });
        noB.mousePressed(()=>{
          gameState = 11;
          gameState1 = 1;
        })
      }
      if(gameState === 12){
        text("Is your character one of the Titan Shifter ?", displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 13;
        })
        noB.mousePressed(()=>{
          gameState = 14;
        })
      }
      if(gameState === 13){
        text("Does your character poses more then one titans?", displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 32;
        })
        noB.mousePressed(()=>{
          gameState = 18;
        })
      }
      if(gameState === 14){
        text("Does his death was suspicious ?",displayWidth/2, displayHeight/2-50);
        yesB.mousePressed(()=>{
          gameState = 22;
          gameState1 = 1;
        })
        noB.mousePressed(()=>{
          gameState = 46
        })
      }
      if(gameState === 16){
    text("Is your character has the Highest Post in Scout Regiment ?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 17;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 4;
    })
  }
  if(gameState === 18){
    text("Does your character broke the Wall Maria ?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 19;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 40;
    })
  }
  if(gameState === 20){
    text("Does your character have Horse Face ?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 21;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 39;
    })
  }
  if(gameState===23){
    text("Is your character a member of Fritz family ?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 24;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 25;
    })
  }
  if(gameState===25){
    text("Does your characters Titan has armour ?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 7;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 26;
    })
  }
  if(gameState===26){
    text("Does your is specialized for jaw ?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 27;
    })
    noB.mousePressed(()=>{
      gameState = 34;
    })
  }
  if(gameState===27){
    text("Is your character was eaten by pure titan while saving armour titan?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 28;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 29;
    })
  }
  if(gameState===29){
    text("Does your character titan can fly ?",displayWidth/2, displayHeight/2-50);
    yesB.mousePressed(()=>{
      gameState = 30;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 31;
      gameState1 = 1;
    })
  }
  if(gameState === 32){
    text("Does your character ever been Eldia Restorationist ?", displayWidth/2, displayHeight/2 -50);
    yesB.mousePressed(()=>{
      gameState = 33;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 15;
      gameState1 = 1;
    })
  }
  if(gameState === 34){
    text("Does your character helped Eldia Restorationists by the name of 'owl' ?", displayWidth/2, displayHeight/2 -50);
    yesB.mousePressed(()=>{
      gameState = 35;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 15;
    })
  }
  if(gameState===36){
    text("Is character a member of Reiss family?", displayWidth/2, displayHeight/2 -50);
    yesB.mousePressed(()=>{
      gameState = 37;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 3;
      gameState1 = 1;
    })
  }
  if(gameState === 39){
    text("Is character a main member of Jeagerists group?", displayWidth/2, displayHeight/2 -50);
    yesB.mousePressed(()=>{
      gameState = 38;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 42;
    })
  }
  if(gameState === 40){
    text("Was character mentor of Zeke ?", displayWidth/2, displayHeight/2 -50);
    yesB.mousePressed(()=>{
      gameState = 41;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 3;
    })
  }
  if(gameState === 42){
    text("Is your character a main of Tybur family ?", displayWidth/2, displayHeight/2 -50);
    yesB.mousePressed(()=>{
      gameState = 43;
      gameState1 = 1;
    })
    noB.mousePressed(()=>{
      gameState = 44;
  })
}
if(gameState === 44){
  text("Does your character cooks tasty food?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
    gameState = 45;
    gameState1 = 1;
  })
  noB.mousePressed(()=>{
    gameState = 44;
})
}
if(gameState === 46){
  text("Was your character a King of Eldia?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
    gameState = 47;
    gameState1 = 1;
  })
  noB.mousePressed(()=>{
    gameState = 44;
})
 }
 if(gameState === 49){
   text("Is your female character has Black hairs ?",displayWidth/2, displayHeight/2 -50);
   yesB.mousePressed(()=>{
     gameState = 50;
   })
   noB.mousePressed(()=>{
     gameState = 51;
   })
 }
 if(gameState === 50){
   text("Is your character one of the member of Ackerman clan ?",displayWidth/2, displayHeight/2 -50);
   yesB.mousePressed(()=>{
     gameState = 52;
   })
   noB.mousePressed(()=>{
     gameState = 61;
   })
 }
 if(gameState === 51){
   text("Is your character has good Martial art skills ?", displayWidth/2, displayHeight/2 -50);
   yesB.mousePressed(()=>{
    gameState = 55;
  })
  noB.mousePressed(()=>{
    gameState = 56;
  })
 }
 if(gameState === 52){
   text("Do your character where scarf all the time ?", displayWidth/2,displayHeight/2 -50);
   yesB.mousePressed(()=>{
     gameState = 54;
     gameState1 = 1;
   })
 }
 if(gameState === 55){
   text("Does your character poses Female Titan ?", displayWidth/2, displayHeight/2 -50);
   yesB.mousePressed(()=>{
    gameState = 57;
    gameState1 = 1;
  })
  noB.mousePressed(()=>{
    gameState = 53;
  })
 }
 if(gameState === 56){
  text("Is your character current queen of Paradise Island ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 58;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 59;
 })
 }
 if(gameState === 59){
  text("Is your character foodie ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 60;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 63;
 })
 }
 if(gameState === 61){
  text("Is your character lived more than 60 years as a pure titan ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 62;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 59;
 })
 }
 if(gameState === 63){
  text("Is your character was the first Founding Titan ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 64;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 66;
 })
 }
 if(gameState === 66){
  text("Does your character needs support to walk?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 67;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 68;
 })
 }
 if(gameState === 68){
  text("Does your character lies in crystal after becoming a titan ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 69;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 70;
 })  
 }
 if(gameState === 70){
  text("Does your character was a very important person in Erens life ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 71;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 72;
 })  
 }
 if(gameState === 72){
  text("Does your character eaten by Grisha Jaeger ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 73;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 74;
 })  
 }
 if(gameState === 74){
  text("Was your character was the last decendent of Royal Family in Marley ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 75;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 76;
 })  
 }
 if(gameState === 76){
  text("Did your character shot Shasha ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 77;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 78;
 })  
 }
 if(gameState === 78){
  text("Is your character a formoer of Marleyan Millitary who followed Zeke Yeager ?", displayWidth/2, displayHeight/2 -50);
  yesB.mousePressed(()=>{
   gameState = 79;
   gameState1 = 1;
 })
 noB.mousePressed(()=>{
   gameState = 76;
 })  
 }
  }
 if(gameState1 === 1){
   text("SOUNDTRACK = >", displayWidth/2, displayHeight/2 + 250);
   playB.show();
   playB.mousePressed(()=>{
     gameState1 = 2;
   })
  if(gameState===3){
    text("Levi Ackerman", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(leviImg);
  }
  if(gameState===6){
    text("Armin Arlert", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();    

    pic.visible = true;
    pic.addImage(arminImg);
  }
  if(gameState===7){
    text("Reiner Braun", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(reinerImg);
  }
  if(gameState===10){
    text("Dot Pixis", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(pixis);
  }
  if(gameState===11){
    text("Connie Springer", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(connie);
  }
  if(gameState===15){
    text("Eren Yeager / Jeager", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(eren);
    erenSound.play();
  }
  if(gameState===17){
    text("Erwin Smith", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(erwin);
  }
  if(gameState === 19){
    text("Bertholdt Hoover", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(bertholdt);
  }
  if(gameState === 21){
    text("Jean Kirstein", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(jean);
  }
  if(gameState === 22){
    text("Marco Bott", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(marco);
  }
  if(gameState === 24){
    text("Zeke Yeager / Jeager", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(zeke);
  }
  if(gameState === 28){
    text("Marcel Galliard", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(marcel);
  }
  if(gameState === 30){
    text("Falco Grice", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(falco);
  }
  if(gameState===31){
      text("Porco Galliard", displayWidth/2, displayHeight/2+150);
      yesB.hide();
      noB.hide();
  
      pic.visible = true;
      pic.addImage(porco);
  }
  if(gameState === 33){
    text("Grisha Yeager / Jeager", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(grisha);
  }
  if(gameState===35){
    text("Eren Kruger", displayWidth/2, displayHeight/2+150);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(kruger);
  }
  if(gameState === 37){
    text("Rod Reiss", displayWidth/2 , displayHeight/2 +200);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(rod);
  }
  if(gameState === 38){
    text("Floch Foster", displayWidth/2 , displayHeight/2 +200);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(floch);
  }
  if(gameState === 41){
    text("Tom Ksaver", displayWidth/2 , displayHeight/2 +200);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(tom);
  }
  if(gameState === 43){
    text("Willy Tybur", displayWidth/2 , displayHeight/2 +200);
    yesB.hide();
    noB.hide();

    pic.visible = true;
    pic.addImage(willy);
  }
if(gameState === 45){
  text("Niccolo", displayWidth/2 , displayHeight/2 +150);
  yesB.hide();
  noB.hide();

  pic.visible = true;
  pic.addImage(niccolo);
}
   if(gameState === 47){
    text("Karl Fritz", displayWidth/2 , displayHeight/2 +150);
    yesB.hide();
    noB.hide();
  
    pic.visible = true;
    pic.addImage(karl);
   }
   if(gameState === 54){
     text("Mikasa Ackerman", displayWidth/2, displayHeight/2 + 150);
     yesB.hide();
     noB.hide();
  
    pic.visible = true;
    pic.addImage(mikasa);
   }
   if(gameState === 57){
    text("Annie Leonhart", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(annie);
  }
  if(gameState === 58){
    text("Historia Reiss", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(historia);
  }
  if(gameState === 60){
    text("Sasha Braus", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(sasha);
  }
  if(gameState === 62){
    text("Ymir", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(ymir);
  }
  if(gameState === 64){
    text("Ymir Fritz", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(ymirfritz);
  }
  if(gameState === 67){
    text("Pieck Finger", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(pieck);
  }
  if(gameState === 69){
    text("Lara Tybur", displayWidth/2, displayHeight/2 + 170);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(lara);
  }
  if(gameState === 71){
    text("Carla Yeager", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(carla);
  }
  if(gameState === 73){
    text("Frieda Reiss", displayWidth/2, displayHeight/2 + 150);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.addImage(frieda);
  }
  if(gameState === 75){
    text("Dina Fritz", displayWidth/2, displayHeight/2 + 170);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.scale = 0.7;
   pic.addImage(dina);
  }
  if(gameState === 77){
    text("Gabi Braun", displayWidth/2, displayHeight/2 + 170);
    yesB.hide();
    noB.hide();
 
   pic.visible = true;
   pic.scale = 0.7;
   pic.addImage(gabi);
  }
  if(gameState===79){
  text("Yelena", displayWidth/2, displayHeight/2 + 170);
  yesB.hide();
  noB.hide();

 pic.visible = true;
 pic.scale = 0.7;
 pic.addImage(yelena);
}
}
  if(gameState1 === 2){
    playB.hide();
    pic.visible = false;
    text("Youseebiggirl =>", displayWidth/2, displayHeight/2);
    startB.show();
    stopB.show();
    startB.mousePressed(()=>{
      youseebiggirl.play();
    })
    stopB.mousePressed(()=>{
      youseebiggirl.stop();
    })
  }
  drawSprites();
}