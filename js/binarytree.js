let canvas = document.getElementById("frame");
let c = canvas.getContext("2d");

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;
const LEVELS = CANVAS_HEIGHT/8;
const COLUMN = CANVAS_WIDTH/16;
const CENTER = CANVAS_WIDTH/2-25;
var TREE_HEIGHT = 2;



drawNode(8,1,"1");
function generateTree()
{
    for(let i =0;i<TREE_HEIGHT;i++)
    {

    }
}

function drawNode(column,level,text)
{
    let y = level*LEVELS-50;
    let x = column*COLUMN-50;
    c.font = '16px Arial';
    c.fillStyle = "black";
    c.fillRect(x,y,50,50);
    c.fillStyle = "white";
    c.fillText(text,x+18,y+30);
}


