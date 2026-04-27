// geeneraate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalid;
const startChange = function() {

    if(!intervalid){
        intervalid = setInterval(changeBgcolor , 1000);
    }

    function changeBgcolor(){
        let colorid = randomColor();
        document.body.style.backgroundColor = colorid;
        document.querySelector('h2').innerHTML = colorid;
    }

}

const stopChange =  function() {
    clearInterval(intervalid);
    intervalid = null;
}

document.querySelector('#start').addEventListener('click', startChange);

document.querySelector('#stop').addEventListener('click',stopChange);