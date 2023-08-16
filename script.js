 dice=() =>{
    sound();
    let player1=Math.floor(Math.random()*6)+1;
    let player2=Math.floor(Math.random()*6)+1;
    document.getElementById("player1").src=`assert/${player1}.jpeg`;
    document.getElementById("player2").src = `assert/${player2}.jpeg`;
    if(player1>player2){
        document.querySelector("h1").textContent="👏🏻Player 1 wins🎊"
    }
    else if (player1<player2){
        document.querySelector("h1").textContent="👏🏻Player 2 wins🎊"
    }
    else{
        document.querySelector("h1").textContent="🚨Ohh !It's Draw🚨"
    }
}
function sound(){
    let audio =new Audio("assert/sound.mp3");
    audio.play();
}