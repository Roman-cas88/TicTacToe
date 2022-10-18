import * as clk from "./click.js";
import {win, winX, win0} from "./elements.js";
import {restartGameButton} from "./fields.js";

let click1 = clk.click1;
let click2 = clk.click2;
let click3 = clk.click3;
let click4 = clk.click4;
let click5 = clk.click5;
let click6 = clk.click6;
let click7 = clk.click7;
let click8 = clk.click8;
let click9 = clk.click9;

export const funcWin = (a) => {
    if (JSON.stringify(win.x1) == JSON.stringify(a.x1)) {
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("2").style.backgroundColor = "green";
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s;
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame);
    };

    if (JSON.stringify(win.x2) == JSON.stringify(a.x2)) {
        document.getElementById("4").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("6").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame);
    };

    if (JSON.stringify(win.x3) == JSON.stringify(a.x3)) {
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById("8").style.backgroundColor = "green";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame)
    };

    if (JSON.stringify(win.x4) == JSON.stringify(a.x4)) {
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame)
    };

    if (JSON.stringify(win.x5) == JSON.stringify(a.x5)) {
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame)
    };

    if (JSON.stringify(win.x6) == JSON.stringify(a.x6)) {
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("4").style.backgroundColor = "green";
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame)
    };

    if (JSON.stringify(win.x7) == JSON.stringify(a.x7)) {
        document.getElementById("2").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("8").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame)
    };

    if (JSON.stringify(win.x8) == JSON.stringify(a.x8)) {
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById("6").style.backgroundColor = "green";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
        restartGameButton();
        document.getElementById('butRestartGame').addEventListener('click', restartGame)
    };
};

let removeOnclick = () => {
    document.getElementById('1').removeEventListener('click', click1)
    document.getElementById('2').removeEventListener('click', click2)
    document.getElementById('3').removeEventListener('click', click3)
    document.getElementById('4').removeEventListener('click', click4)
    document.getElementById('5').removeEventListener('click', click5)
    document.getElementById('6').removeEventListener('click', click6)
    document.getElementById('7').removeEventListener('click', click7)
    document.getElementById('8').removeEventListener('click', click8)
    document.getElementById('9').removeEventListener('click', click9)
};

export let restartGame = () => {
    let win0 = {
        s: "O",
        x1: [],
        x2: [],
        x3: [],
        x4: [],
        x5: [],
        x6: [],
        x7: [],
        x8: [],

    };
    let winX = {
        s: "X",
        x1: [],
        x2: [],
        x3: [],
        x4: [],
        x5: [],
        x6: [],
        x7: [],
        x8: [],

    };
    location.reload();
};