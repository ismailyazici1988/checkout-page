const kdvUcreti = 0.18;
const kargoUcreti = 15;
const kargoBedavaUcret = 300;

window.addEventListener("load", () => {
  localStorage.setItem("kdvUcreti", "kdv");
  localStorage.setItem("kargoUcreti", "kargo");
  localStorage.setItem("kargoBedavaUCret", "bedava");

  sessionStorage.setItem("kdvUcreti", "kdv");
  sessionStorage.setItem("kargoUcreti", "kargo");
  sessionStorage.setItem("kargoBedavaUCret", "bedava");
});

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    console.log("eksi buton");
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.nextElementSibling.innerText--;
    } else {
      alert("artık azaltamazsın");
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    console.log("artı buton");
    // console.log(event.target.previousElementSibling.innerText);
    event.target.previousElementSibling.innerText++;
  } else if (event.target.classList.contains("remove-product")) {
    console.log("remove");
  }
});
