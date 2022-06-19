//gets html elements
let canvas = document.getElementById("frame");
let rButton = document.getElementById("reset");
let sButton = document.getElementById("sort");
let slider = document.getElementById("slider");
let rangeTitle = document.getElementById("rangeTitle");

let c = canvas.getContext("2d");

// adds buttons
rButton.addEventListener('click', event => {
    reset();
  });
  sButton.addEventListener('click', event => {
    sort();
  });
  slider.oninput = function()
  {
    rangeTitle.innerHTML = this.value+" Variables";
    NUM_OF_BARS= this.value;
    BAR_INCREMENT = CANVAS_WIDTH/NUM_OF_BARS;
    reset();
  }

//constants, some will be adjustable with the menu
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;

var NUM_OF_BARS = 20;
var BAR_INCREMENT = CANVAS_WIDTH/NUM_OF_BARS;

//sets canvas width and height to the variables in
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;


// the array for the values of every bar
var bars = [];
//
var sorting = false;
reset();

// reassigns random numbers to every interval of the bar variable
function reset()
{
    sorting=false;
    bars = [];
    for(let i =0;i<NUM_OF_BARS;i++)
    {
        bars[i] = Math.floor(Math.random() * (CANVAS_HEIGHT-15))+15;
    }

    update();
    
}

//redraws every bar and its value text
function update()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    for(let i =0;i<NUM_OF_BARS;i++)
    {
        c.fillStyle = "WHITE";
        c.fillRect((BAR_INCREMENT*i),0,BAR_INCREMENT,bars[i]);
        c.fillStyle = "BLACK";
        c.font = '12px sans-serif';
        
        c.fillText(bars[i].toString(),(BAR_INCREMENT*i),bars[i]);
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms))
async function sort()
{
    sorting=true;
    for(let i =1;i<bars.length;i++)
    {
        for(let ii =0;ii<i;ii++)
        {
            if(bars[ii]<bars[i]&&sorting==true)
            {
            var t = bars[i];
            bars[i]=bars[ii];
            bars[ii]=t;
            t=0;
            update();
            await timer(70);
            
            }
        }
    }
}
