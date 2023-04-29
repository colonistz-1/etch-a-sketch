const grid = document.querySelector("#grid")
const eraser = document.querySelector("#erase")
ctx = grid.getContext("2d");

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



