
let intervalid;
const startEvent = function(){
    function print(){
        console.log("sahil",Date.now());
        document.querySelector('h1').innerHTML = "Sahil Time Now : "+Date.now();
    }
    if(!intervalid){
        intervalid = setInterval(print, 1000);
    }
    
    
}
const stopEvent = function(){
    clearInterval(intervalid);
    intervalid = null;
}
document.querySelector('#start').addEventListener('click',startEvent);
document.querySelector('#stop').addEventListener('click',stopEvent)