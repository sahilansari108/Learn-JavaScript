
// document.getElementById('bird').onclick = function(){
//     alert("birds");
// }

//what different type of eventListener we will learn
//type, timestamp, defaultPrevent, target, toElement
//srcElement, currentTarget, clientX, clientY, screenX
//screenY, altkey, shiftkey, keyCode

// document.getElementById('bird').addEventListener('click',function(e){
//     console.log(e);
// },false);

// document.getElementById('img-list').addEventListener('click',function(e){
//     console.log("clicked inside ul");
// },false);

// true or false is for event propogation 
// true -> event capturing (outer tag to inner tag)
//false -> event bubbling (inner tag to outer tag)

// document.getElementById('bird').addEventListener('click',function(e){
//     console.log("birds Clicked");
//     e.stopPropagation()
// },false);



document.querySelector('#img-list').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode;
        // removeIt.remove();
        removeIt.parentNode.removeChild(removeIt);
    }
})