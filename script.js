import {fields} from "./fields.js";
import {win, win0, winX} from "./elements.js"
import {funcWin} from "./funcWin.js"
import * as clk from "./click.js"

fields();

let click1 = clk.click1;
let click2 = clk.click2;
let click3 = clk.click3;
let click4 = clk.click4;
let click5 = clk.click5;
let click6 = clk.click6;
let click7 = clk.click7;
let click8 = clk.click8;
let click9 = clk.click9;

document.getElementById("1").addEventListener('click', click1);
document.getElementById("2").addEventListener('click', click2);
document.getElementById("3").addEventListener('click', click3);
document.getElementById("4").addEventListener('click', click4);
document.getElementById("5").addEventListener('click', click5);
document.getElementById("6").addEventListener('click', click6);
document.getElementById("7").addEventListener('click', click7);
document.getElementById("8").addEventListener('click', click8);
document.getElementById("9").addEventListener('click', click9);