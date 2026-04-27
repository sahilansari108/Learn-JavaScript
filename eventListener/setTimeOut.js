const saySahil = function(){
    console.log("Sahil");
}
const changeText = function(){
    document.querySelector('h1').innerHTML = "Change the Heading";
}

const changeMe = setTimeout(changeText,2000);

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("Stopped");
})