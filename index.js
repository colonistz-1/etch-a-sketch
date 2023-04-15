const grid = document.querySelector("#grid")

function makeDivs(num) {
    for (let i = 0; i < num; i++){
        let cells = document.createElement('div');
        cells.classList.add("square");
        grid.appendChild(cells);    
        }
}
    
makeDivs(256);
