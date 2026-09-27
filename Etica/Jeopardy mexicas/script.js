const NUM_EQUIPOS = 3;
const puntajes = Array(NUM_EQUIPOS).fill(0);
const $ = id => document.getElementById(id);
let actual = null;

function pintarMarcadores() {
  $("marcadores").innerHTML = "";
  puntajes.forEach((p, i) => {
    const d = document.createElement("div");
    d.className = "equipo";
    const nombre = $("marcadores").dataset["n" + i] || "Equipo " + (i + 1);
    d.innerHTML = `<input value="${nombre}"><div class="pts">${p}</div>`;
    d.querySelector("input").oninput = e => $("marcadores").dataset["n" + i] = e.target.value;
    $("marcadores").appendChild(d);
  });
}

function nombreEquipo(i) {
  return $("marcadores").dataset["n" + i] || "Equipo " + (i + 1);
}

function construirTablero() {
  const t = $("tablero");
  CATEGORIAS.forEach(c => {
    const d = document.createElement("div");
    d.className = "cat";
    d.textContent = c.nombre;
    t.appendChild(d);
  });
  for (let f = 0; f < 5; f++) {
    CATEGORIAS.forEach((c, ci) => {
      const b = document.createElement("button");
      b.className = "celda";
      b.textContent = (f + 1) * 100;
      b.onclick = () => abrir(ci, f, b);
      t.appendChild(b);
    });
  }
}

function abrir(ci, f, btn) {
  actual = { btn, valor: (f + 1) * 100 };
  const [p, r] = CATEGORIAS[ci].preguntas[f];
  $("puntos").textContent = actual.valor;
  $("pregunta").textContent = p;
  $("respuesta").textContent = r;
  $("respuesta").classList.add("oculto");
  $("acciones").classList.add("oculto");
  $("btnMostrar").classList.remove("oculto");
  $("botonesEquipos").innerHTML = "";
  puntajes.forEach((_, i) => {
    const b = document.createElement("button");
    b.textContent = nombreEquipo(i);
    b.onclick = () => cerrar(i);
    $("botonesEquipos").appendChild(b);
  });
  $("modal").classList.remove("oculto");
  iniciarTimer();
}

let intervalo = null;
function iniciarTimer() {
  clearInterval(intervalo);
  let t = 10;
  $("timer").textContent = t;
  $("timer").classList.remove("urgente");
  intervalo = setInterval(() => {
    t--;
    $("timer").textContent = t;
    if (t <= 3) $("timer").classList.add("urgente");
    if (t <= 0) clearInterval(intervalo);
  }, 1000);
}

function mostrarRespuesta() {
  clearInterval(intervalo);
  $("respuesta").classList.remove("oculto");
  $("acciones").classList.remove("oculto");
  $("btnMostrar").classList.add("oculto");
}

function cerrar(equipo) {
  clearInterval(intervalo);
  if (equipo !== null) puntajes[equipo] += actual.valor;
  actual.btn.classList.add("usada");
  $("modal").classList.add("oculto");
  pintarMarcadores();
}

$("btnMostrar").onclick = mostrarRespuesta;
$("btnNadie").onclick = () => cerrar(null);

pintarMarcadores();
construirTablero();
