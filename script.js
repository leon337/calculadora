const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let input = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (val === "C") {
      input = "";
      display.textContent = "0";
    } else if (val === "=") {
      try {
        input = eval(input).toString();
        display.textContent = input;
      } catch {
        display.textContent = "Erro";
        input = "";
      }
    } else {
      input += val;
      display.textContent = input;
    }
  });
});
