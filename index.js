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

const drawing = (e) =>{
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

grid.addEventListener("mousemove", drawing);

eraser.addEventListener("click", ()=>{
    ctx.clearRect(0,0, grid.width, grid.height);
})

