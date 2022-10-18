import {funcWin} from "./funcWin.js"
import {win, win0, winX} from "./elements.js"


let value = "X";
export let click1 = () => {
    if (value == 'X') {
        winX.x1[0] = 1;
        winX.x4[0] = 1;
        winX.x6[0] = 1;
        document.getElementById('p1').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x1[0] = 1;
        win0.x4[0] = 1;
        win0.x6[0] = 1;
        document.getElementById('p1').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
           };
           document.getElementById('1').removeEventListener('click', click1);
};

export let click2 = () => {
    if (value == 'X') {
        winX.x1[1] = 2;
        winX.x7[0] = 2;
        document.getElementById('p2').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x1[1] = 0;
        win0.x7[0] = 2;
        document.getElementById('p2').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('2').removeEventListener('click', click2);

};

export let click3 = () => {
    if (value == 'X') {
        winX.x1[2] = 3;
        winX.x5[0] = 3;
        winX.x8[0] = 3;
        document.getElementById('p3').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x1[2] = 3;
        win0.x5[0] = 3;
        win0.x8[0] = 3;
        document.getElementById('p3').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('3').removeEventListener('click', click3);

};

export let click4 = () => {
    if (value == 'X') {
        winX.x2[0] = 4;
        winX.x6[1] = 4;
        document.getElementById('p4').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x2[0] = 4;
        win0.x6[1] = 4;
        document.getElementById('p4').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('4').removeEventListener('click', click4);

};

export let click5 = () => {
    if (value == 'X') {
        winX.x2[1] = 5;
        winX.x4[1] = 5;
        winX.x5[1] = 5;
        winX.x7[1] = 5;
        document.getElementById('p5').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x2[1] = 5;
        win0.x4[1] = 5;
        win0.x4[1] = 5;
        win0.x7[1] = 5;
        document.getElementById('p5').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('5').removeEventListener('click', click5);

};

export let click6 = () => {
    if (value == 'X') {
        winX.x2[2] = 6;
        winX.x8[1] = 6;
        document.getElementById('p6').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x2[2] = 6;
        win0.x8[1] = 6;
        document.getElementById('p6').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('6').removeEventListener('click', click6);

};

export let click7 = () => {
    if (value == 'X') {
        winX.x3[0] = 7;
        winX.x5[2] = 7;
        winX.x6[2] = 7;
        document.getElementById('p7').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x3[0] = 7;
        win0.x5[2] = 7;
        win0.x6[2] = 7;
        document.getElementById('p7').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('7').removeEventListener('click', click7);

};

export let click8 = () => {
    if (value == 'X') {
        winX.x3[1] = 8;
        winX.x7[2] = 8;
        document.getElementById('p8').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x3[1] = 8;
        win0.x7[2] = 8;
        document.getElementById('p8').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('8').removeEventListener('click', click8);

};

export let click9 = () => {
    if (value == 'X') {
        winX.x3[2] = 9;
        winX.x4[2] = 9;
        winX.x8[2] = 9;
        document.getElementById('p9').innerHTML = winX.s;
        funcWin(winX);
        value = "O";
    } else {
        win0.x3[2] = 9;
        win0.x4[2] = 9;
        win0.x8[2] = 9;
        document.getElementById('p9').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('9').removeEventListener('click', click9);

};

