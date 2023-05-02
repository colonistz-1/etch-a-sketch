const grid = document.querySelector("#grid")
const eraser = document.querySelector("#erase")
const redbtn = document.querySelector("#red")
const bluebtn = document.querySelector("#blue")
const greenbtn = document.querySelector("#green")
const orangebtn = document.querySelector("#orange")
const purplebtn = document.querySelector("#purple")
const blackbtn = document.querySelector("#black")
ctx = grid.getContext("2d");
const brushslider = document.querySelector("#brush-size");
let brushThickness = brushslider.value; 
ctx.lineWidth = brushThickness;

brushslider.addEventListener("change", (e) => {
    brushThickness = e.target.value;
    ctx.lineWidth = brushThickness;
  });
function makeDivs(num) {
    for (let i = 0; i < num; i++){
        let cells = document.createElement('div');
        cells.classList.add("square");
        cells.style.columnGap = "40px"
        grid.appendChild(cells);    
        }
}
makeDivs(256);

window.addEventListener("load", ()=>{
    grid.width = grid.offsetWidth;
    grid.height = grid.offsetHeight;
});

let isDrawing = false

const startDraw = () =>{
    isDrawing = true;
    ctx.beginPath(); 
}
const drawing = (e) =>{
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

grid.addEventListener("mousedown", startDraw)
grid.addEventListener("mousemove", drawing)
grid.addEventListener("mouseup", () => isDrawing =false)
eraser.addEventListener("click", () => location.reload())
redbtn.addEventListener("click", () => ctx.strokeStyle = 'rgb(248, 14, 14)');
bluebtn.addEventListener("click", () => ctx.strokeStyle = 'rgba(6, 77, 230, 0.98)');
greenbtn.addEventListener("click", () => ctx.strokeStyle = 'rgba(7, 223, 17, 0.98)');
orangebtn.addEventListener('click', () => ctx.strokeStyle = 'rgb(247, 121, 4)');
purplebtn.addEventListener("click", () => ctx.strokeStyle = "rgb(140, 6, 250)");
blackbtn.addEventListener('click', () => ctx.strokeStyle = "black");