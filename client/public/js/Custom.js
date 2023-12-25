const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  fillColor = document.querySelector("#fill-color"),
  sizeSlider = document.querySelector("#size-slider"),
  colorBtns = document.querySelectorAll(".colors .option"),
  colorPicker = document.querySelector("#color-picker"),
  clearCanvas = document.querySelector(".clear-canvas"),
  pointerTool = document.querySelector("#pointer-tool"),
  pointerTool2 = document.querySelector("#pointer-tool2"),
  saveImg = document.querySelector(".save-img"),
  ctx = canvas.getContext("2d"),
  
  images = [];

const fileInput = document.getElementById("file-input");
const bgImage = new Image();
let isPointerToolActive = false;
let isPointerToolActive2 = false;
let isDragging = false,
  offsetX = 0,
  draggingImage = null,
  isResizing = false,
  ismoveing = false,
  offsetY = 0;
  
  function setCanvasSize() {
    canvas.width = window.innerWidth; // Adjust as needed
    canvas.height = window.innerHeight; // Adjust as needed
    setCanvasBackground();
  }
  
bgImage.src = '../img/t-shirt-template-white.png';
bgImage.onload = setCanvasSize;
window.addEventListener("resize", setCanvasSize);
let prevMouseX, prevMouseY, snapshot,
  isDrawing = false,
  selectedTool = "brush",
  brushWidth = 5,
  selectedColor = "#000";

  const setCanvasBackground = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const aspectRatio = bgImage.width / bgImage.height;
    const canvasAspectRatio = canvas.width / canvas.height;
  
    if (aspectRatio > canvasAspectRatio) {
      const scaledWidth = canvas.width;
      const scaledHeight = canvas.width / aspectRatio;
      const yOffset = (canvas.height - scaledHeight) / 2;
      ctx.drawImage(bgImage, 0, yOffset, scaledWidth, scaledHeight);
    } else {
      const scaledHeight = canvas.height;
      const scaledWidth = canvas.height * aspectRatio;
      const xOffset = (canvas.width - scaledWidth) / 2;
      ctx.drawImage(bgImage, xOffset, 0, scaledWidth, scaledHeight);
    }
    
    for (const image of images) {
        ctx.drawImage(image.img, (image.x), (image.y), image.width, image.height);
      }
    
  };

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackground();
});

const importImage = function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const newImage = {
      img: new Image(),
      x: 0,
      y: 0,
      width: 500,
      height: 500
    };

    newImage.img.src = event.target.result;
    newImage.img.onload = () => {
      images.push(newImage);
      setCanvasBackground();
    };
  };

  reader.readAsDataURL(file);
};

const drawRect = (e) => {
  if (!fillColor.checked) {
    return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
  }
  ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}

const drawCircle = (e) => {
  ctx.beginPath();
  let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  fillColor.checked ? ctx.fill() : ctx.stroke();
}

const drawTriangle = (e) => {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  fillColor.checked ? ctx.fill() : ctx.stroke();
}

const startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

const drawing = (e) => {
  if (!isDrawing) return;
  ctx.putImageData(snapshot, 0, 0);

  if (selectedTool === "brush" || selectedTool === "eraser") {
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else if (selectedTool === "rectangle") {
    drawRect(e);
  } else if (selectedTool === "circle") {
    drawCircle(e);
  } else if(selectedTool==="triangle"){
    drawTriangle(e);
  }
}

toolBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    //console.log(selectedTool); //debug tool
    if (btn.id === "pointer-tool") {
        isPointerToolActive = true;
        isPointerToolActive2 = false;
        isDrawing = false;
        isResizing = false; // Reset resizing flag
        //console.log(isResizing);
      }else if(btn.id === "pointer-tool2"){
        isPointerToolActive2 = true;
        isPointerToolActive =false;
        isDrawing = false;
        isResizing = true; // Set resizing flag
       // console.log(isResizing);
      } 
      else {
        isPointerToolActive = false;
        isPointerToolActive2 = false;
        isResizing = false; // Reset resizing flag
        selectedTool = btn.id;
      }
  });
});

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value);

colorBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .selected").classList.remove("selected");
    btn.classList.add("selected");
    selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
  });
});

colorPicker.addEventListener("change", () => {
  colorPicker.parentElement.style.background = colorPicker.value;
  colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
});

saveImg.addEventListener("click", () => {
  const imageData = canvas.toDataURL('image/png'); // Save as PNG
  const formData = new FormData();
  formData.append('imageData', imageData);

  fetch('../php/Cartafterlogin.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Image saved successfully. Path:', data.filePath);
    window.location.href = '../php/Cartafterlogin.php?member=';
  })
  .catch(error => {
    console.error('Error saving image:', error);
    window.location.href = '../php/Cartafterlogin.php?member=';
  });
  
});

const drawImages = () => {
    setCanvasBackground();
    
    for (const image of images) {
      // Draw the image
      ctx.drawImage(image.img, image.x, image.y, image.width, image.height);
  
      // Draw handles for resizing
      if (isPointerToolActive2) {
        ctx.fillStyle = "blue";
        const handleSize = 10; // Adjust the handle size as needed
  
        // Top-left handle
        ctx.fillRect(image.x - handleSize / 2, image.y - handleSize / 2, handleSize, handleSize);
  
        // Bottom-right handle
        ctx.fillRect(image.x + image.width - handleSize / 2, image.y + image.height - handleSize / 2, handleSize, handleSize);
      }
    }
};




canvas.addEventListener("mousedown", (e) => {
    if (isPointerToolActive) {
      for (const image of images) {
        if (
          e.clientX >= image.x &&
          e.clientX <= image.x + image.width &&
          e.clientY >= image.y &&
          e.clientY <= image.y + image.height
        ) {
          isDragging = true;
          isResizing = false;
          draggingImage = image;
          offsetX = e.clientX - image.x;
          offsetY = e.clientY - image.y;
          console.log(offsetX);
          console.log(offsetY);
          break;
        }
      }
    } else if(isPointerToolActive2){
        for (const image of images) {
            if (
              e.clientX >= image.x &&
              e.clientX <= image.x + image.width &&
              e.clientY >= image.y &&
              e.clientY <= image.y + image.height
            ) {
              isDragging = true;
              isResizing = true;
              draggingImage = image;
              offsetX = e.clientX - image.x;
              offsetY = e.clientY - image.y;
              break;
            }
    }
    }
    else if (selectedTool === "brush") {
      isDrawing = true;
      startDraw(e);
    }
  });


  document.addEventListener('mousemove', (e) => {
        //Debug //        
         // console.log("IsDragging:");
        // console.log(isDragging);
        // console.log("draggingImage:");
        // console.log(draggingImage);

    if (isDragging && draggingImage) {
      if (isResizing) {
        // Handle resizing
        draggingImage.width = e.clientX - draggingImage.x ;
        draggingImage.height = e.clientY - draggingImage.y;
        drawImageOnCanvas();
      } else {
        // Handle moving
        draggingImage.x = e.clientX - offsetX;
        draggingImage.y = e.clientY  - offsetY;
        setCanvasBackground();
      }
      setCanvasBackground();
    } else if (isDrawing) {
      drawing(e);
    }
  });


  document.addEventListener('mouseup', () => {
    isDragging = false;
    isResizing = false;
    draggingImage = null;
    isDrawing = false;

  });


  
function drawImageOnCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  images.forEach((image) => {
    ctx.drawImage(image.img, image.x, image.y, image.width, image.height);
  });
}

// fileInput.addEventListener('change', importImage);
fileInput.addEventListener('change', importImage);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);