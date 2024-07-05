let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#resetbtn")
let turnO = true; //player O, Player X
const winpatterns = [       // giving winning patterns 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "0";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const checkwinner= () => {
    for( let pattern of winpatterns){
        console.log(pattern);
    }
};