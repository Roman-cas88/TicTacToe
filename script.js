let value = document.getElementById('turn').innerHTML;
value = "X";

playAgaine = () => {
    document.getElementById('area').parentNode.removeChild(area)
winX = {};
win0 = {};
}

let win = {
    x1: [1, 2, 3],
    x2: [4, 5, 6],
    x3: [7, 8, 9],
    x4: [1, 5, 9],
    x5: [3, 5, 7],
    x6: [1, 4, 7],
    x7: [2, 5, 8],
    x8: [3, 6, 9],
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
removeOnclick = () => {
let fields = document.getElementsByClassName('field')
for (let i=0; i<fields.length; i++){
    let field = fields[i]
    field.removeAttribute('onclick')
    }
};
funcWin = (a) => {
    if (JSON.stringify(win.x1) == JSON.stringify(a.x1)) {
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("2").style.backgroundColor = "green";
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s;
        removeOnclick();
    }
    if (JSON.stringify(win.x2) == JSON.stringify(a.x2)) {
        document.getElementById("4").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("6").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
    }
    if (JSON.stringify(win.x3) == JSON.stringify(a.x3)) {
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById("8").style.backgroundColor = "green";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
    }
    if (JSON.stringify(win.x4) == JSON.stringify(a.x4)) {
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
    }
    if (JSON.stringify(win.x5) == JSON.stringify(a.x5)) {
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
    }
    if (JSON.stringify(win.x6) == JSON.stringify(a.x6)) {
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("4").style.backgroundColor = "green";
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
    }
    if (JSON.stringify(win.x7) == JSON.stringify(a.x7)) {
        document.getElementById("2").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("8").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
    }
    if (JSON.stringify(win.x8) == JSON.stringify(a.x8)) {
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById("6").style.backgroundColor = "green";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "Win " + a.s
        removeOnclick();
    }
};

click1 = () => {
    if (value == 'X') {
        winX.x1[0] = 1;
        winX.x4[0] = 1;
        winX.x6[0] = 1;
        document.getElementById('p1').innerHTML = winX.s
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
           document.getElementById('1').removeAttribute('onclick');
};

click2 = () => {
    if (value == 'X') {
        winX.x1[1] = 2;
        winX.x7[0] = 2;
        document.getElementById('p2').innerHTML = winX.s
        funcWin(winX);
        value = "O";
    } else {
        win0.x1[1] = 0;
        win0.x7[0] = 2;
        document.getElementById('p2').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('2').removeAttribute('onclick');

};

click3 = () => {
    if (value == 'X') {
        winX.x1[2] = 3;
        winX.x5[0] = 3;
        winX.x8[0] = 3;
        document.getElementById('p3').innerHTML = winX.s
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
    document.getElementById('3').removeAttribute('onclick');

};

click4 = () => {
    if (value == 'X') {
        winX.x2[0] = 4;
        winX.x6[1] = 4;
        document.getElementById('p4').innerHTML = winX.s
        funcWin(winX);
        value = "O";
    } else {
        win0.x2[0] = 4;
        win0.x6[1] = 4;
        document.getElementById('p4').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('4').removeAttribute('onclick');

};

click5 = () => {
    if (value == 'X') {
        winX.x2[1] = 5;
        winX.x4[1] = 5;
        winX.x5[1] = 5;
        winX.x7[1] = 5;
        document.getElementById('p5').innerHTML = winX.s
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
    document.getElementById('5').removeAttribute('onclick');

};

click6 = () => {
    if (value == 'X') {
        winX.x2[2] = 6;
        winX.x8[1] = 6;
        document.getElementById('p6').innerHTML = winX.s
        funcWin(winX);
        value = "O";
    } else {
        win0.x2[2] = 6;
        win0.x8[1] = 6;
        document.getElementById('p6').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('6').removeAttribute('onclick');

};

click7 = () => {
    if (value == 'X') {
        winX.x3[0] = 7;
        winX.x5[2] = 7;
        winX.x6[2] = 7;
        document.getElementById('p7').innerHTML = winX.s
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
    document.getElementById('7').removeAttribute('onclick');

};

click8 = () => {
    if (value == 'X') {
        winX.x3[1] = 8;
        winX.x7[2] = 8;
        document.getElementById('p8').innerHTML = winX.s
        funcWin(winX);
        value = "O";
    } else {
        win0.x3[1] = 8;
        win0.x7[2] = 8;
        document.getElementById('p8').innerHTML = win0.s;
        funcWin(win0);
        value = "X";
    }
    document.getElementById('8').removeAttribute('onclick');

};

click9 = () => {
    if (value == 'X') {
        winX.x3[2] = 9;
        winX.x4[2] = 9;
        winX.x8[2] = 9;
        document.getElementById('p9').innerHTML = winX.s
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
    document.getElementById('9').removeAttribute('onclick');

};