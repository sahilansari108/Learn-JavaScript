const coding  = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val){
    // console.log(val);
})


function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)


coding.forEach( (item) =>{
    // console.log(item);
})

coding.forEach( (item, index, arr) =>{     //in forEach we do not only have access to item also we can access the index, arr etc as parameter we can use it.
    // console.log(item , index, arr);
})


// array Object

const mycoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c plus plus",
        languageFileName : "cpp"
    }
]

mycoding.forEach((item) => {
    console.log(item.languageFileName);
})