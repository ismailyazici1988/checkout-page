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
