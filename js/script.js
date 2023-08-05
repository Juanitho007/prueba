let now = new Date();
let end = new Date("2023-09-01");
let duration = end - now;
let days = Math.floor(duration / (1000 * 60 * 60 * 24));
document.getElementById(
  "timeRemaining"
).innerHTML = `Solo faltan ${days} días para iniciar con el encuentro`;


const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

document
  .getElementById("registro-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    console.log(`${firstName} ${lastName} con número de telefono: ${phone} y correo ${email} quiere asistir al evento`);
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
  });
