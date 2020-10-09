$(function () {
  let all_numbers = [];
  let all_selected_numbers = [];

  for (let count = 1; count < 77; count++) {
    $("#table").append(
      `<span style="animation-delay:0.${count}s;" class="animated zoomIn"> ${count} </span>`
    );
    all_numbers.push(count);

    $(".random-number").click(function () {
      $(".extracted-number")(function () {
        let selected_numbers =
          all_selected_numbers[Math.floor(Math.floor(Math.random() * 76) + 1)];
        $(".extracted-number").text(selected_numbers);
        return console.log(selected_numbers);
      });
    });
  }
});

/*
const createCells = function(){


const board = document.querySelector("#board");
for (let i = 1; i <= 76; i++){
  const Cells = document.createElement("div")
  cell.style.width = '50px'
  cell.style.height = '50px'
  cell.style.backgroundColor = 'orange'
  cell.classList.add('bingoCell')


  board.style.display = "flex";
  board.style.flexWrap = "wrap";
  cell.innerText = i

  board.appendChild(cell)

  child.ClassName = "Cells"

  child.className = i + 1
  Cell.innerText = Cell
  child.appendChild(day)
  board.appendChild(child)
}

}

// randomize 
const randomizeNumber = function(){
let number Math.floor(Math.random() * 76) + 1
console.log(number)
let allTheCells = document.querySelectorAll('.bingoCell')
let foundCell;
for(let y0; y<76; y++){
 if(allTheCells[y].innerText === number.toString()){
   foundCell = allTheCells[y]
 }
}
 
  console.log(foundCell)
  // instead of for loop cells[number-1].style.backgroundcolor='yellow'
}

window.onload = createCells
//in html
//<input type="button" onclick="randomizeButton" />
*/
