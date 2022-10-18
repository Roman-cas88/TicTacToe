
const divArea = () => {
    let parent = document.getElementById('root')
    let newDivRed = document.createElement('div')
    newDivRed.id = "area";
    parent.after(newDivRed);
};

const divFields = (a) => {
    let parent = document.getElementById('area')
    let child = document.createElement('div');
    child.className = "field"
    child.id = a;
    parent.appendChild(child);
};

const pArea = (b) => {
    let parent = document.getElementById(`${b}`);
    let pArea = document.createElement('p');
    pArea.className = "pArea";
    pArea.id = "p" + b;
    parent.appendChild(pArea);
};

const result = () => {
    let parent = document.getElementById('root');
    let child = document.createElement('h1');
    child.id = "result";
    parent.appendChild(child);
}

export const restartGameButton = () => {
let parent = document.getElementById('area');
let child = document.createElement('button');
child.id = "butRestartGame";
child.innerHTML = "Restart Game";
parent.after(child);
}

export const fields = () => {
divArea();
result();
for (let i = 1; i < 10; i++)
divFields(i);
for (let e = 1; e < 10; e++)
pArea(e);
};

