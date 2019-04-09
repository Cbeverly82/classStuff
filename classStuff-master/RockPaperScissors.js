var hands = [
    'rock', 'paper', 'scissors'] ;
    function getHand() {
        var weapon = parseInt(Math.random()*10)%3;
        var hand;
        hand = hands [weapon];
        return hand;
    }
    var playerWins=0
    var player1 = {firstName:"Alpha", getHand: getHand, hand: null, wins:playerWins};
    var player2 = {firstName:"Beta", getHand: getHand, hand: null, wins:playerWins};
    var player3 = {firtsName:"Charlie", getHand: getHand, hand: null, wins:playerWins};
    var player4 = {firstName:"Delta", getHand: getHand, hand: null, wins:playerWins};
    function playRound (player1, player2)
    {
        player1.hand = player1.getHand ();
        player2.hand = player2.getHand ();
        if (player1.hand === player2.hand){

            console.log (player1.firstName + "picked" + player1.hand);
            console.log (player2.firstName + "picked" + player2.hand);
            console.log ("it's a tie")
        } else if (player1.hand === "rock" && player2.hand === "scissors"
            || player1.hand === "paper" && player2.hand === "rock"
            || player1.hand === "scissors" && player2.hand === "paper"){ 
        } else {
            console.log('This hand is a draw')
        }
}

playRound(player1, player2)