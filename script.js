const PLAYER_X = "X";
const PLAYER_O = "O";
var player = PLAYER_X;
var round = 1;

function mark_this_cell(cell){
    if(is_empty(cell.innerHTML)){
        cell.innerHTML = player;
        change_player();
        round ++;

        update_game_state();

        check_win_or_finish();
    }
}

function is_empty(text){
    return (text===null) || (text.length==0);
}

function change_player(){
    player = round%2==0 ? PLAYER_X : PLAYER_O;
}

function update_game_state(){
    document.getElementById("state").innerHTML = "round " + round + " : " + player + " turn";
}

function check_win_or_finish(){
    var value00 = document.getElementById("c00").innerHTML;
    var value01 = document.getElementById("c01").innerHTML;
    var value02 = document.getElementById("c02").innerHTML;
    var value10 = document.getElementById("c10").innerHTML;
    var value11 = document.getElementById("c11").innerHTML;
    var value12 = document.getElementById("c12").innerHTML;
    var value20 = document.getElementById("c20").innerHTML;
    var value21 = document.getElementById("c21").innerHTML;
    var value22 = document.getElementById("c22").innerHTML;

    if((!is_empty(value00)) && (value00==value01) && (value01==value02)){
        congrats_player(value00);
    }else if((!is_empty(value10)) && (value10==value11) && (value11==value12)){
        congrats_player(value10);
    }else if((!is_empty(value20)) && (value20==value21) && (value21==value22)){
        congrats_player(value20);
    }else if((!is_empty(value00)) && (value00==value10) && (value10==value20)){
        congrats_player(value00);
    }else if((!is_empty(value01)) && (value01==value11) && (value11==value21)){
        congrats_player(value01);
    }else if((!is_empty(value02)) && (value02==value12) && (value12==value22)){
        congrats_player(value02);
    }else if((!is_empty(value00)) && (value00==value11) && (value11==value22)){
        congrats_player(value00);
    }else if((!is_empty(value02)) && (value02==value11) && (value11==value20)){
        congrats_player(value02);
    }else{
        if( !(is_empty(value00) || is_empty(value01) || is_empty(value02)
        || is_empty(value10) || is_empty(value11) || is_empty(value12)
        || is_empty(value20) || is_empty(value21) || is_empty(value22)) ){
            no_one_win();
        }
    }
}

function congrats_player(name){
    alert("player " + name + " WIN");
    location.reload();
}

function no_one_win(){
    alert("no one win");
    location.reload();
}
