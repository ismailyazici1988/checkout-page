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
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.nextElementSibling.innerText--;
      ürünFiyatıHesap(event.target);
    } else {
      if (
        confirm(
          `${
            event.target.parentElement.parentElement.querySelector("h2")
              .innerText
          } will be deleted!!!`
        )
      ) {
        event.target.parentElement.parentElement.parentElement.remove();
      }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    // console.log(event.target.previousElementSibling.innerText);
    event.target.previousElementSibling.innerText++;
    ürünFiyatıHesap(event.target);
  } else if (event.target.classList.contains("remove-product")) {
    event.target.closest(".product").remove();
  }
});

const ürünFiyatıHesap = (button) => {
  const productInfoDiv = button.parentElement.parentElement;
  const ürünFiyatı = productInfoDiv.querySelector(
    ".product-price strong"
  ).innerText;
  const adet = productInfoDiv.querySelector(".quantity").innerText;
  const toplamÜrünFiyatı = productInfoDiv.querySelector(".product-line-price");
  toplamÜrünFiyatı.innerText = ürünFiyatı * adet;
};
