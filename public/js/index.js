const d = document;
const btn = d.querySelector(".btn-menu");
const input = d.querySelector(".name");

btn.addEventListener("click", () => {
  let user = input.value !== "" ? input.value : "NoName";
  window.location.href = `/instructions?name=${user}`;
});
