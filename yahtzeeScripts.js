/**
 * Created by Alan on 11/9/2016.
 */

var rolls = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0};
var rollnumber = 0;
function oneRoll(dieNumber) {
    var randNum, fileName;
    randNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    fileName = "images/die" + randNum + ".png";
    document.getElementById(dieNumber).setAttribute('alt', randNum.toString());
    document.getElementById(dieNumber).setAttribute('src', fileName);
}

function rollDice() {
    rolls = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0};
    var checks = ["chkDie1", "chkDie2", "chkDie3", "chkDie4", "chkDie5", "chkDie6"];
    rollnumber += 1;
    if (rollnumber == 1) {
        document.getElementById("btnRollOne").style.visibility = "hidden";
        document.getElementById("btnRollTwo").style.visibility = "visible";
        document.getElementById("btnRollThree").style.visibility = "hidden";
        for (var i = 0; i < checks.length; i++) {
            if (document.getElementById(checks[i]).checked == false) {
                var imgId = "die" + (checks[i].substring(6, 7));
                oneRoll(imgId);
            }
        }
    }
    else if (rollnumber == 2) {
        document.getElementById("btnRollOne").style.visibility = "hidden";
        document.getElementById("btnRollTwo").style.visibility = "hidden";
        document.getElementById("btnRollThree").style.visibility = "visible";
        for (var i = 0; i < checks.length; i++) {
            if (document.getElementById(checks[i]).checked == false) {
                var imgId = "die" + (checks[i].substring(6, 7));
                oneRoll(imgId);
            }
        }
    }
    else if (rollnumber == 3) {
        document.getElementById("btnRollOne").style.visibility = "hidden";
        document.getElementById("btnRollTwo").style.visibility = "hidden";
        document.getElementById("btnRollThree").style.visibility = "hidden";
        for (var i = 0; i < checks.length; i++) {
            if (document.getElementById(checks[i]).checked == false) {
                var imgId = "die" + (checks[i].substring(6, 7));
                oneRoll(imgId);
            }
        }
    }

    fillRolls();
    onesScore();
    twosScore();
    threesScore();
    foursScore();
    fivesScore();
    sixesScore();
    threeOkScore();
    fourOkScore();
    fullHouseScore();
    smStraightScore();
    lgStraightScore();
    yahtzeeScore();
    chanceScore();


}

function resetDice() {
    var checks = ["chkDie1", "chkDie2", "chkDie3", "chkDie4", "chkDie5", "chkDie6"];
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    var scoredivs = ["ones", "twos", "threes", "fours", "fives", "sixes", "threeOfKind", "fourOfKind", "fullHouse", "smStraight", "lgStraight", "yahtzee", "chance"];
    document.getElementById("btnNewHand").style.visibility = "hidden";
    for (var x = 0; x < 6; x++) {
        document.getElementById(dies[x]).setAttribute('src', "images/die0.png");
        document.getElementById(checks[x]).checked = false;
    }
    for (var z = 0; z < scoredivs.length; z++) {
        document.getElementById(scoredivs[z]).innerHTML = "0"
    }
    document.getElementById("btnRollTwo").style.visibility="hidden";
    document.getElementById("btnRollThree").style.visibility="hidden";
    document.getElementById("btnRollOne").style.visibility = "visible";
    totalScore();
    rollnumber=0;

}

function fillRolls() {
    var rolls = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0};
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        var z = parseInt(document.getElementById(dies[i]).alt);
        rolls[z] += 1;
    }
}

function onesScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        if (document.getElementById(dies[i]).alt == "1") {
            total += 1;
        }
    }
    document.getElementById("ones").innerHTML = total.toString();
}

function twosScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        if (document.getElementById(dies[i]).alt == "2") {
            total += 2;
        }
    }
    document.getElementById("twos").innerHTML = total.toString();
}

function threesScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        if (document.getElementById(dies[i]).alt == "3") {
            total += 3;
        }
    }
    document.getElementById("threes").innerHTML = total.toString();
}

function foursScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        if (document.getElementById(dies[i]).alt == "4") {
            total += 4;
        }
    }
    document.getElementById("fours").innerHTML = total.toString();
}

function fivesScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        if (document.getElementById(dies[i]).alt == "5") {
            total += 5;
        }
    }
    document.getElementById("fives").innerHTML = total.toString();
}

function sixesScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        if (document.getElementById(dies[i]).alt == "6") {
            total += 6;
        }
    }
    document.getElementById("sixes").innerHTML = total.toString();
}

function threeOkScore() {
    var total = 0;
    var sum = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        var z = document.getElementById(dies[i]).alt;
        sum += parseInt(z);
        rolls[z] += 1;
    }
    for (var x = 0; x < 6; x++) {
        if (rolls[x] >= 3) {
            total = sum;
        }
    }
    document.getElementById("threeOfKind").innerHTML = total.toString();
}

function fourOkScore() {
    var total = 0;
    var sum = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        var z = document.getElementById(dies[i]).alt;
        sum += parseInt(z);
    }
    for (var x = 0; x < 6; x++) {
        if (rolls[x] >= 4) {
            total = sum;
        }
    }
    document.getElementById("fourOfKind").innerHTML = total.toString();
}

function fullHouseScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];

    for (var i = 0; i < 6; i++) {
        if (rolls[i] == 3) {
            for (var x = 0; x < 6; x++) {
                if (rolls[x] == 2) {
                    total = 25;
                }
            }
        }
    }

    document.getElementById("fullHouse").innerHTML = total.toString();
}

function smStraightScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];

    if (rolls["1"] >= 1 && rolls["2"] >= 1 && rolls["3"] >= 1 && rolls["4"] >= 1) {
        total = 30;
    }
    else if (rolls["2"] >= 1 && rolls["3"] >= 1 && rolls["4"] >= 1 && rolls["5"] >= 1) {
        total = 30;
    }
    else if (rolls["3"] >= 1 && rolls["4"] >= 1 && rolls["5"] >= 1 && rolls["6"] >= 1) {
        total = 30;
    }

    document.getElementById("smStraight").innerHTML = total.toString();
}

function lgStraightScore() {
    var total = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];

    if (rolls["1"] >= 1 && rolls["2"] >= 1 && rolls["3"] >= 1 && rolls["4"] >= 1 && rolls["5"] >= 1) {
        total = 40;
    }
    else if (rolls["2"] >= 1 && rolls["3"] >= 1 && rolls["4"] >= 1 && rolls["5"] >= 1 && rolls["6"] >= 1) {
        total = 40;
    }

    document.getElementById("lgStraight").innerHTML = total.toString();
}

function yahtzeeScore() {
    var total = 0;

    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];

    for (var i = 0; i < 6; i++) {
        if (rolls[i] == 5) {
            total = 50;
        }
    }

    document.getElementById("yahtzee").innerHTML = total.toString();
}

function chanceScore() {
    var sum = 0;
    var dies = ["die1", "die2", "die3", "die4", "die5", "die6"];
    for (var i = 0; i < dies.length; i++) {
        var z = document.getElementById(dies[i]).alt;
        sum += parseInt(z);
    }
    document.getElementById("chance").innerHTML = sum.toString();
}

function scoreOnes() {
    var x = document.getElementById("ones").innerHTML;
    document.getElementById("onesX").innerHTML = x;
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
}

function scoreTwos() {
    var x = document.getElementById("twos").innerHTML;
    document.getElementById("twosX").innerHTML = x;
    document.getElementById("btnTwos").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
}

function scoreThrees() {
    var x = document.getElementById("threes").innerHTML;
    document.getElementById("threesX").innerHTML = x;
    document.getElementById("btnThrees").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
}

function scoreFours() {
    var x = document.getElementById("fours").innerHTML;
    document.getElementById("foursX").innerHTML = x;
    document.getElementById("btnFours").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
}

function scoreFives() {
    var x = document.getElementById("fives").innerHTML;
    document.getElementById("fivesX").innerHTML = x;
    document.getElementById("btnFives").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
}

function scoreSixes() {
    var x = document.getElementById("sixes").innerHTML;
    document.getElementById("sixesX").innerHTML = x;
    document.getElementById("btnSixes").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
}

function scoreThreeOK() {
    var x = document.getElementById("threeOfKind").innerHTML;
    document.getElementById("threeOfKindX").innerHTML = x;
    document.getElementById("btn3OK").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";

}

function scoreFourOK() {
    var x = document.getElementById("fourOfKind").innerHTML;
    document.getElementById("fourOfKindX").innerHTML = x;
    document.getElementById("btn4OK").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";

}
function scoreFullHouse() {
    var x = document.getElementById("fullHouse").innerHTML;
    document.getElementById("fullHouseX").innerHTML = x;
    document.getElementById("btnFullHouse").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";

}

function scoreSmStraight() {
    var x = document.getElementById("smStraight").innerHTML;
    document.getElementById("smStraightX").innerHTML = x;
    document.getElementById("btnSmStr").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";

}

function scoreLgStraight() {
    var x = document.getElementById("lgStraight").innerHTML;
    document.getElementById("lgStraightX").innerHTML = x;
    document.getElementById("btnLgStr").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";

}

function scoreYahtzee() {
    var x = document.getElementById("yahtzee").innerHTML;
    document.getElementById("yahtzeeX").innerHTML = x;
    document.getElementById("btnYahtzee").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";

}

function scoreChance() {
    var x = document.getElementById("chance").innerHTML;
    document.getElementById("chanceX").innerHTML = x;
    document.getElementById("btnChance").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";
    document.getElementById("btnOnes").style.visibility = "hidden";
    document.getElementById("btnRollOne").style.visibility = "hidden";
    document.getElementById("btnRollTwo").style.visibility = "hidden";
    document.getElementById("btnRollThree").style.visibility = "hidden";
    document.getElementById("btnNewHand").style.visibility = "visible";

}

function totalScore(){
    var scoredivs = ["onesX", "twosX", "threesX", "foursX", "fivesX", "sixesX", "threeOfKindX", "fourOfKindX", "fullHouseX", "smStraightX", "lgStraightX", "yahtzeeX", "chanceX"];
    var scoreTotal=0;
    for (var i=0;i<scoredivs.length;i++){
        var z = parseInt(document.getElementById(scoredivs[i]).innerHTML)
        scoreTotal+=z;
    }
    document.getElementById("totalScore").innerHTML=scoreTotal.toString();
}