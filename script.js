let items = document.querySelectorAll('.items');
const winningArray = [
    [0, 1, 2], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];
let turn = true;
items.forEach(item => {
    item.addEventListener('click', mark)
})
function mark() {
    let bool = this.dataset.fill;
    if (turn && bool != "true") {
        this.innerText = "x";
        turn = false;
        this.dataset.fill = "true";
        this.dataset.player = "1";
        checkWin()
    }
    else if(!turn && bool != "true") {
        this.innerText = "o";
        turn = true;
        this.dataset.fill = "true";
        this.dataset.player = "2";
        checkWin()
    }
}
const checkWin = () => {
    winningArray.forEach(element => {
        if((items[element[0]].dataset.player === items[element[1]].dataset.player && items[element[0]].dataset.player === items[element[2]].dataset.player) && items[element[0]].dataset.fill === "true"){
            window.alert(items[element[0]].dataset.player + " Won")
            items.forEach(item =>{
                item.removeEventListener('click', mark)
            })
        }
    })
}
const toNumber = (string) => {
    try {
        let number = Number(string);
        return number;
    } catch (error) {
        console.log(error)     
    }
}