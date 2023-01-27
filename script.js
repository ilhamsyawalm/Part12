//! Identify Info
const nilaiMerah = document.getElementById("nilaiMerah");
const nilaiHijau = document.getElementById("nilaiHijau");
const nilaiBiru = document.getElementById("nilaiBiru");

//! Input Range
const rMerah = document.querySelector("input[name=rMerah]");
const rHijau = document.querySelector("input[name=rHijau]");
const rBiru = document.querySelector("input[name=rBiru]");
const range = document.querySelectorAll("main .inputan");

range.forEach(function (pil) {
  pil.addEventListener("input", function () {
    const r = rMerah.value;
    const g = rHijau.value;
    const b = rBiru.value;

    document.body.style.backgroundColor =
      "rgb(" + r + ", " + g + ", " + b + ")";

    nilaiMerah.innerHTML = r;
    nilaiHijau.innerHTML = g;
    nilaiBiru.innerHTML = b;
  });
});

//! Button WhiteColor
const whiteColor = document.getElementById("putih");

whiteColor.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(255, 255, 255)";

  nilaiMerah.innerHTML = "255";
  nilaiHijau.innerHTML = "255";
  nilaiBiru.innerHTML = "255";

  rMerah.setAttribute("value", "255");
  rHijau.setAttribute("value", "255");
  rBiru.setAttribute("value", "255");
});

//! Button ColorRandom
const colorRandom = document.createElement("button");
const isiColorRandom = document.createTextNode("Color Random");
colorRandom.setAttribute("type", "button");
colorRandom.appendChild(isiColorRandom);

whiteColor.after(colorRandom);

colorRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 0);
  const g = Math.round(Math.random() * 255 + 0);
  const b = Math.round(Math.random() * 255 + 0);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  nilaiMerah.innerHTML = r;
  nilaiHijau.innerHTML = g;
  nilaiBiru.innerHTML = b;

  rMerah.setAttribute("value", r);
  rHijau.setAttribute("value", g);
  rBiru.setAttribute("value", b);
});
