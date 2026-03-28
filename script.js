const fileInput = document.getElementById("file-input");
const uploadBtn = document.getElementById("upload-btn");
const dropArea = document.getElementById("drop-area");
const previewImg = document.getElementById("preview-img");
const detectBtn = document.getElementById("detect-btn");

const result = document.getElementById("result");
const diseaseName = document.getElementById("disease-name");
const confidence = document.getElementById("confidence");

uploadBtn.onclick = () => fileInput.click();

fileInput.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(){
previewImg.src = reader.result;
}

reader.readAsDataURL(file);

}

})


// Drag Drop

dropArea.addEventListener("dragover", (e)=>{
e.preventDefault();
})


dropArea.addEventListener("drop", (e)=>{

 e.preventDefault();

 const file = e.dataTransfer.files[0];

 const reader = new FileReader();

 reader.onload = function(){
 previewImg.src = reader.result;
 }

 reader.readAsDataURL(file);

})


// AI Detection (Simulated)

const diseases = [
"Healthy Leaf",
"Bacterial Spot",
"Leaf Rust",
"Powdery Mildew",
"Early Blight",
"Late Blight",
"Leaf Mold"
]
detectBtn.addEventListener("click",()=>{

const randomDisease = diseases[Math.floor(Math.random()*diseases.length)];

const randomConfidence = (Math.random()*20+80).toFixed(2);

result.style.display = "block";

diseaseName.innerText = "Disease : " + randomDisease;

confidence.innerText = "Confidence : " + randomConfidence + "%";

})
