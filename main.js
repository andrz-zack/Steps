//Obtener los pasos = steps
const steps = document.querySelectorAll(".step");

//obtener la barra de progreso 
const bar = document.getElementById("bar");

//obtener la referencia a los botones
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

//Guardar en el paso en el que estamos

let currentStep = 1;

//Escuchar el boton  seiguiente
nextButton.addEventListener("click", () => {
    if (currentStep < steps.legth) {
        //Sumar 1 a los pasos
        currentStep++;
        updateProgress();
    }
});

//Escuchar el boton anterior
prevButton.addEventListener( "click", () => {
    if(currentStep > 1) {
        //restar 1 a los pasos
        currentStep--;
        updateProgress();
    }
});

//Funcion para actualizar el progreso
function updateProgress(){
    //actualizar pasos
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
    } 
});

//actualizar barra
const progress = (currentStep - 1) / (steps.leght -1) * 100
bar.style.width = progress + "%"

//control de los botones
if (currentStep === steps.leght){
    nextButton.disabled = true
} else if (currentStep === 1){
    prevButton.disabled = true;
}else {
    prevButton.disabled = nextButton.disabled = false;
 }
}
