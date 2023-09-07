Calcular = () => {
  let kg = parseFloat(document.frm.calc.value);
  let volDia, res1, res2, res3, mante, manteMediomante, superCorp, supDM, supMQ;
  //Método Holliday-Segar
  if (kg <= 30) {
    if (kg <= 10) volDia = kg * 100;
    else if (kg > 10 && kg <= 20) {
      res1 = 10 * 100;
      res2 = (kg - 10) * 50;
      volDia = res1 + res2;
    } else {
      res1 = 10 * 100;
      res2 = 10 * 50;
      res3 = (kg - 20) * 20;
      volDia = res1 + res2 + res3;
    }
    volDia = Math.round(volDia);
    mante = Math.round(volDia / 24);
    manteMediomante = Math.round(mante * 1.5);
    document.getElementById("peso").textContent = kg + " Kg";
    document.getElementById("volDia").textContent = volDia + "cc";
    document.getElementById("mante").textContent = mante + "cc/hr";
    document.getElementById("manteMediomante").textContent =
      manteMediomante + "cc/hr";
    document.getElementById("parra").innerHTML = "";
  } //Método de superficie corporal
  else {
    document.getElementById("peso").textContent = "";
    document.getElementById("volDia").textContent = "";
    document.getElementById("mante").textContent = "";
    document.getElementById("manteMediomante").textContent = "";
    superCorp = (kg * 4 + 7) / (kg + 90);
    supMQ = Math.round(superCorp * 1500);
    supDM = Math.round(superCorp * 2000);
    texto = `
    <h3>Para mayores de 30kg :</h3>
    Calculo 1500= <b>${supMQ} cc</b> <br>
    Calculo 2000= <b>${supDM} cc</b>`;
    document.getElementById("parra").innerHTML = texto;
  }
};
