const el = document.querySelector(".main-sec h1");
const text = "Olá me chamo Igor Daniel e sou desenvolvedor front-end"
const interval = 50;

function showText(el, text, interval){
  const char = text.split("").reverse();
  const typer = setInterval(() => {
    if(!char.length){
      return clearInterval(typer);
    }
    const next = char.pop();
    el.innerHTML += next;
  }, interval);
}
showText(el, text, interval);