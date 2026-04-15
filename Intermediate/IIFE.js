// IIFE(Immediately Invoked Function Expression)
// it is used to avoid the pollution caused due to global scope


(function(){
    console.log("IIFE Function here used");
})(); 

(function chai(){   //named IIfe
    console.log(" named IIFE Function here used");
})();  // always use semi coln to terminate the invoked call             

(() => {
    console.log (`arrow function as IIFE `)
})();

((name) => {
    console.log (`arrow function as IIFE with parameter name = ${name} `)
})("sahil");