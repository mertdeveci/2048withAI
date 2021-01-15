/* * * * *  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*	@author: Mert Deveci
*	@contact: mertdeveci0@gmail.com
*   @contact: https://www.linkedin.com/in/mert-deveci-49361a135/
*	@company: Sakarya University - Department of Computer Engineering (cs.sakarya.edu.tr)
*	@date: 4/9/2020
*   @file extension: JS
*
*	@description:   javascript codes of 2048 GAME
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */




// VARIABLES & STARTER PROCESSES
matrix=[2,2,2,4];       // probability: "75%" -> 2 & "%25" -> 4
move=false;             // move 
score=0;                // player score
best_player_name="";    // best player name
best_player_score="";   // best player score
adder();                // add number
adder();                // add number
add_theme();            // design themes







// MANAGMENT & CONTROL
function managment(e){  //  MANAGEMENT OF ALL DIRECTION KEYS & CONTROL
    switch(e.key){
        case 'ArrowLeft':
            left();
            break;
        case 'ArrowRight':
            right();
            break;
        case 'ArrowDown':
            down();
            break;
        case 'ArrowUp':
            up();
            break;
        default:
            AICode();
            break;
        refresh();
    }
    remove_theme();     // REMOVE THEMES
    if(move){           // If there is no any operation of design or addition in functions, "move" variable is false, otherwise it's true.
      adder();
    }
    add_theme();        // ADD THEMES
    controller();
}

// PROCESS
function left(){    // SUM-TO-LEFT
    move=false;
    for(a=0;a<4;a++){ 
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=b+1;c<4;c++){
                    y=document.getElementById(a+"x"+c);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
            }
        }
        document.getElementById("player_score").innerHTML=score;
    }
    for(a=0;a<4;a++){   
        for(b=0;b<4;b++){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=b;c<4;c++){
                    filled=document.getElementById(a+"x"+c);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}
function right(){   // SUM-TO-RIGHT
    move=false;
    for(a=3;a>=0;a--){       
        for(b=3;b>=0;b--){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=b-1;c>=0;c--){
                    y=document.getElementById(a+"x"+c);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }

    document.getElementById("player_score").innerHTML=score;

    for(a=0;a<4;a++){   
        for(b=3;b>=0;b--){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=b;c>=0;c--){
                    filled=document.getElementById(a+"x"+c);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}
function up(){      // SUM-TO-UP
    move=false;
    for(a=0;a<4;a++){   
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=a+1;c<4;c++){
                    y=document.getElementById(c+"x"+b);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }

    document.getElementById("player_score").innerHTML=score;

    for(a=0;a<4;a++){   
        for(b=0;b<4;b++){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=a;c<4;c++){
                    filled=document.getElementById(c+"x"+b);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}
function down(){    // SUM-TO-DOWN
    move=false;
    for(a=3;a>=0;a--){   
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=a-1;c>=0;c--){
                    y=document.getElementById(c+"x"+b);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }


    document.getElementById("player_score").innerHTML=score;

    for(a=3;a>=0;a--){   
        for(b=0;b<4;b++){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=a;c>=0;c--){
                    filled=document.getElementById(c+"x"+b);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}
function gameover(){    // game over
    document.querySelector("table").classList.replace("table1","table2");   // TABLE OPACITY
    document.querySelector("p").style.visibility="visible"; // GAME OVER
    document.querySelector("p").textContent="GAME OVER";    
    document.getElementById("try_again").style.visibility="visible";    // make try_again button visible
    
}
function adder(){       // ADD NEW NUMBER
    empty=[];
    for(a=0;a<4;a++){
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){
                empty.push(x.id);
            }
        }
    }
    if(empty.length==0){
        return false;
    }else{
        rnd=rand(empty.length);
        document.getElementById(empty[rnd]).textContent=matrix[rand(4)];
    }
}

function controller(){   // CONTROL OF END OF THE GAME
    _bool=AX_sola_hareket_edebilir_mi() || BX_asagi_hareket_edebilir_mi() || CX_yukarı_hareket_eder_mi() || DX_sag_hareket_eder_mi();
    if(_bool){
        return;
    }else{
        gameover();
    }
}





// OTHERS
function rand(e){       // return random number
    return Math.floor(Math.random() * e);
}

function random_doldur(){
     var dizi=[2,4,8,16,32,64,128,,,];
     for(i=0;i<4;i++){
         for(j=0;j<4;j++){
                document.getElementById(i+"x"+j).textContent=dizi[rand(10)];
         }
         refresh();
     }
}
function refresh(){
    remove_theme();
    add_theme();
    return;
}
function replay(){
    window.location.reload();
}

function add_theme(e){      // Set theme
        for(x=0;x<4;x++){
            for(y=0;y<4;y++){
            cell=document.getElementById(x+"x"+y);
                switch(cell.textContent){
                    case '2':
                        cell.parentElement.classList.add("cell-2");
                        break;
                    case '4':
                        cell.parentElement.classList.add("cell-4");
                        break;
                    case '8':
                        cell.parentElement.classList.add("cell-8");
                        cell.classList.add("upper-8");  // make color of h1 white 
                        break;
                    case '16':
                        cell.parentElement.classList.add("cell-16");
                        cell.classList.add("upper-8");
                        break;
                    case '32':
                        cell.parentElement.classList.add("cell-32");
                        cell.classList.add("upper-8");
                        break;
                    case '64':
                        cell.parentElement.classList.add("cell-64");
                        cell.classList.add("upper-8");
                        break;
                    case '128':
                        cell.parentElement.classList.add("cell-128");
                        cell.classList.add("upper-8");
                        break;
                    case '256':
                        cell.parentElement.classList.add("cell-256");
                        cell.classList.add("upper-8");
                        break;
                    case '512':
                        cell.parentElement.classList.add("cell-512");
                        cell.classList.add("upper-8");
                    break;
                    case '1024':
                        cell.parentElement.classList.add("cell-1024");
                        cell.classList.add("upper-8");
                    break;
                    case '2048':
                        cell.parentElement.classList.add("cell-2048");
                        cell.classList.add("upper-8");
                        break;
                    case '4096':
                        cell.parentElement.classList.add("cell-4096");
                        cell.classList.add("upper-8");
                        break;
                    case '8192':
                        cell.parentElement.classList.add("cell-8192");
                        cell.classList.add("upper-8");
                        break;
                    case '16384':
                        cell.parentElement.classList.add("cell-16384");
                        cell.classList.add("upper-8");
                        break;
                    default:
                        cell.parentElement.classList.add("default");
                }
            }
        }
}
function remove_theme(){    // Remove All themes
   for(a=0;a<4;a++){
       for(b=0;b<4;b++){
           cell=document.getElementById(a+"x"+b);
           cell.classList.remove("upper-8");
           cell.parentElement.classList.remove("default");
           for(c=0;c<=16384;c++){
            cell.parentElement.classList.remove("cell-"+c);
           } 
       }
   }
}




// - - - - - LİSTENER - - - - - -
document.addEventListener("keydown",managment);
document.addEventListener("onclick",managment);