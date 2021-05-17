let save=document.querySelector(".save");
let open = document.querySelector(".open");
save.addEventListener("click",function(){
    //2d array save file
    const data=JSON.stringify(sheetDB);
    //just google how to make download btn using dom
const blob = new Blob([data], { type: 'application/json' });

// Create new URL
const url = window.URL.createObjectURL(blob);
//compulsory line of codes
let a=document.createElement("a");
//navigate
a.download="file.json";
a.href=url;
a.click();
})
open.addEventListener("change", function () {
    // files array -> file accept-> multiple files get 
    let filesArray = open.files;

    let fileObj = filesArray[0];
    // file reader to read the file
    let fr = new FileReader();
    // read as text 
    fr.readAsText(fileObj);
fr.onload=function(){
    console.log(fr.result);
}
    fr.addEventListener("load", function () {
        console.log(fr.result);
        
    })
    
    console.log("After");
    // ui init f
})