//Grabbing Elements from the DOM
const canvas=document.getElementById("my-canvas");
const ctx=canvas.getContext("2d");
const colorContainer=document.querySelector(".color-container");
let isPainting=false;

//Styles of line

function changeCanvasHeightWidth(){
    canvas.height=(window.innerHeight-70);
    canvas.width=window.innerWidth;
}

//change the canvas size while resizing the window
window.addEventListener("resize",changeCanvasHeightWidth);

function startDrawing(event){
    isPainting=true;
}
function stopDrawing(){
    isPainting=false;
    ctx.beginPath();
}
function draw(event){
    if(!isPainting) return;
    ctx.lineWidth="10";
    ctx.strokeStyle="white";
    ctx.linCap="round";
    ctx.lineTo(event.clientX,event.clientY);
    ctx.stroke();
}


//Event Listeners
window.addEventListener("mousedown",startDrawing);
window.addEventListener("mouseup",stopDrawing);
window.addEventListener("mousemove",draw);

changeCanvasHeightWidth();

colorContainer.addEventListener("click",(event)=>{
  if(event.target.classList.contains("color-items")){
   let color=event.target.id;
   window.removeEventListener("mousemove",draw);
   window.addEventListener("mousemove",(event)=>{
    //This violates the DRY
    if(!isPainting) return;
    ctx.strokeStyle=color;
    ctx.linCap="round";
    ctx.lineWidth="10";
    ctx.lineTo(event.clientX,event.clientY);
    ctx.stroke();
   });
  }
});

//Pramesh Karki