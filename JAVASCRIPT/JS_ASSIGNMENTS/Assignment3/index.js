const display = document.getElementsByClassName("display")[0];
const buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("equal")) {
      try {
        const result = eval(display.value);
        display.value += `\n ${result}`;
      } catch (error) {
        display.value = `\n Error`;
      }
    } else if (btn.classList.contains("clear")) {
      display.value = "";
    } else {
      display.value += btn.innerHTML;
    }
  });
});
