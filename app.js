const toggles = document.querySelectorAll("input")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click',()=>{
        let r = getRandomInt(0, toggles.length);
        toggles[r].checked = !toggles[r].checked;
    })
}

