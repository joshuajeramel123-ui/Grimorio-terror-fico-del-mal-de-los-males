/* =========================
   VARIABLES GLOBALES
   ========================= */
let grimorio = JSON.parse(localStorage.getItem("grimorio")) || {};
let monedas = parseInt(localStorage.getItem("monedas")) || 0;
let adminActivo = localStorage.getItem("adminActivo") === "true";

/* =========================
   SISTEMA DE GUARDADO
   ========================= */
function guardar() {
    if (!adminActivo) {
        localStorage.setItem("monedas", monedas);
    }
    localStorage.setItem("grimorio", JSON.stringify(grimorio));
    actualizarMonedas();
}

function actualizarMonedas() {
    const display = document.getElementById("monedas");
    if (display) {
        display.innerText = adminActivo ? "∞" : monedas;
    }
}

// Inicialización rápida
actualizarMonedas();
if (adminActivo) {
    const panel = document.getElementById("adminPanel");
    if (panel) panel.classList.remove("hidden");
}

/* =========================
   BASE DE DATOS DE CARTAS
   ========================= */
const cartas = [
    /* normal */
    { rareza: "normal", imagen: "img/911_normal.jpeg" },
    { rareza: "normal", imagen: "img/aceite_bebe_normal.jpeg" },
    { rareza: "normal", imagen: "img/bro_glen_normal.jpeg" },
    { rareza: "normal", imagen: "img/gefe_de_maday_normal.jpeg" },
    { rareza: "normal", imagen: "img/jorge_water_normal.jpeg" },
    { rareza: "normal", imagen: "img/larios_normal.jpeg" },
    { rareza: "normal", imagen: "img/maday_normal.jpeg" },
    { rareza: "normal", imagen: "img/nata_normal.jpeg" },
    { rareza: "normal", imagen: "img/sleeping_normal.jpeg" },
    { rareza: "normal", imagen: "img/tienda_china_normal.jpeg" },
    { rareza: "normal", imagen: "img/clinton_normal.jpeg" },
    { rareza: "normal", imagen: "img/glen_hat_normal.jpeg" },
    { rareza: "normal", imagen: "img/cristo_normal.jpeg" },
    { rareza: "normal", imagen: "img/glen_joker_normal.jpeg" },
    { rareza: "normal", imagen: "img/glen_hood_normal.jpeg" },
    { rareza: "normal", imagen: "img/clase_3as_normal.jpeg" },
    { rareza: "normal", imagen: "img/julio_rizz_normal.jpeg" },
    { rareza: "normal", imagen: "img/joshua_hungry_normal.jpeg" },
    { rareza: "normal", imagen: "img/charli_pelo_normal.jpeg" },
    { rareza: "normal", imagen: "img/coach_sanmi_normal.jpeg" },
    { rareza: "normal", imagen: "img/charly_sin_pelo_normal.jpeg" },
    { rareza: "normal", imagen: "img/madahy_base_normal.jpeg" },
    { rareza: "normal", imagen: "img/madahy_gord_normal.jpeg" },
    { rareza: "normal", imagen: "img/migue_sueter_normal.jpeg" },
    { rareza: "normal", imagen: "img/nata_staring_normal.jpeg" },
    { rareza: "normal", imagen: "img/victor_sleeping_2_normal.jpeg" },
    { rareza: "normal", imagen: "img/caballero_working_normal.jpeg" },
    { rareza: "normal", imagen: "img/jefaso_working_normal.jpeg" },
    { rareza: "normal", imagen: "img/charly_kirk_normal.jpeg" },
    { rareza: "normal", imagen: "img/glen_smart_normal.jpeg" },
    { rareza: "normal", imagen: "img/arturo_morgan_normal.jpeg" },
    { rareza: "normal", imagen: "img/beto_cheto_normal.jpeg" },
    { rareza: "normal", imagen: "img/glen_rizz1_normal.jpeg" },
    { rareza: "normal", imagen: "img/manu2_normal.jpeg" },
    { rareza: "normal", imagen: "img/george_glasses_normal.jpeg" },
    { rareza: "normal", imagen: "img/kriko_normal.jpeg" },
    { rareza: "normal", imagen: "img/manu_sleep_normal.jpeg" },
    { rareza: "normal", imagen: "img/willy_wanka_normal.jpeg" },
    { rareza: "normal", imagen: "img/beto_woman_normal.jpeg" },
    { rareza: "normal", imagen: "img/charile_more_hair_normal.jpeg" },

    /* especial */
    { rareza: "especial", imagen: "img/arabe_especial.jpeg" },
    { rareza: "especial", imagen: "img/eucaliptos_especial.jpeg" },
    { rareza: "especial", imagen: "img/hawking_especial.jpeg" },
    { rareza: "especial", imagen: "img/hillary_especial.jpeg" },
    { rareza: "especial", imagen: "img/maduro_especial.jpeg" },
    { rareza: "especial", imagen: "img/obama_especial.jpeg" },
    { rareza: "especial", imagen: "img/69_especial.jpeg" },
    { rareza: "especial", imagen: "img/alex_dormido_especial.jpeg" },
    { rareza: "especial", imagen: "img/chino_ass_especial.jpeg" },
    { rareza: "especial", imagen: "img/balon_voly_especial.jpeg" },
    { rareza: "especial", imagen: "img/migue_sonri_especial.jpeg" },
    { rareza: "especial", imagen: "img/mr_cachondo_especial.jpeg" },
    { rareza: "especial", imagen: "img/jaliscazo_especial.jpeg" },

    /* raro */
    { rareza: "raro", imagen: "img/isla_rara.jpeg" },
    { rareza: "raro", imagen: "img/duo_dinamico_rara.jpeg" },
    { rareza: "raro", imagen: "img/la_fortuna_rara.jpeg" },
    { rareza: "raro", imagen: "img/marga_euca_rara.jpeg" },
    { rareza: "raro", imagen: "img/marla_rara.jpeg" },
    { rareza: "raro", imagen: "img/matriz_rara.jpeg" },
    { rareza: "raro", imagen: "img/trump_rara.jpeg" },
    { rareza: "raro", imagen: "img/glen_rara.jpeg" },
    { rareza: "raro", imagen: "img/arabe_mex_rara.jpeg" },
    { rareza: "raro", imagen: "img/ball_crusher_rara.jpeg" },
    { rareza: "raro", imagen: "img/cheche_base_rara.jpeg" },
    { rareza: "raro", imagen: "img/fusion_josh_che_rara.jpeg" },
    { rareza: "raro", imagen: "img/joshua_jefaso_rara.jpeg" },
    { rareza: "raro", imagen: "img/nata_chilling_rara.jpeg" },
    { rareza: "raro", imagen: "img/starbucks_rara.jpeg" },
    { rareza: "raro", imagen: "img/glen_big_tits_rara.jpeg" },
    { rareza: "raro", imagen: "img/mencho_dead_rara.jpeg" },
    { rareza: "raro", imagen: "img/chocolate_rara.jpeg" },

    /* legendaria */
    { rareza: "legendaria", imagen: "img/epstein_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/67_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/fat_ass_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/pdiddy_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/profe_fisica_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/trum_clinton_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/chino_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/jack_fatass_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/marla_lengua_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/nata_cluas_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/victor_sleeping_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/marla_power_up_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/candi_god_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/golden_jeffrey_legendaria.jpeg" },
    { rareza: "legendaria", imagen: "img/glen_girl_legendaria.jpeg" },

    /* maestra */
    { rareza: "maestra", imagen: "img/justin_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/manu_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/marga_working_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/papeles_epstein_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/pili_mili_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/61_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/glen_mask_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/glen_angry_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/josh_pelon_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/super_cheche_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/kriko_sleeping_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/micheal_guapo_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/el_mencho_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/coach_rizz_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/beto_alberto_maestra.jpeg" },
    { rareza: "maestra", imagen: "img/chino_creepy_maestra.jpeg" },

    /* dios */
    { rareza: "dios", imagen: "img/chávelo_dios.jpeg" },
    { rareza: "dios", imagen: "img/chávelo_brazo_izqui_dios.jpeg" },
    { rareza: "dios", imagen: "img/chavelo_brazo_derech_dios.jpeg" },
    { rareza: "dios", imagen: "img/chávelo_pie_derech_dios.jpeg" },
    { rareza: "dios", imagen: "img/chávelo_pie_izqui_dios.jpeg" },
    { rareza: "dios", imagen: "img/gama_java_dios.jpeg" }
];

/* =========================
   SISTEMA DE PROBABILIDADES
   ========================= */
function generarRareza() {
    if (adminActivo) {
        let rands = ["dios", "maestra", "legendaria", "raro", "especial", "normal"];
        return rands[Math.floor(Math.random() * rands.length)];
    }
    let r = Math.random();
    if (r < 0.0005) return "dios";
    if (r < 0.02) return "maestra";
    if (r < 0.08) return "legendaria";
    if (r < 0.25) return "raro";
    if (r < 0.50) return "especial";
    return "normal";
}

/* =========================
   ACCIONES
   ========================= */
function ganarMonedas() {
    if (adminActivo) return;
    monedas += 1;
    guardar();
}

function abrirSobre() {
    if (!adminActivo && monedas < 10) return alert("No tienes suficientes monedas");

    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("grimorio").classList.add("hidden");
    let pantallaSobre = document.getElementById("sobre");
    pantallaSobre.classList.remove("hidden");
    pantallaSobre.style.display = "flex";

    if (!adminActivo) {
        monedas -= 10;
        guardar();
    }

    pantallaSobre.classList.add("animar-sobre");
    setTimeout(() => pantallaSobre.classList.remove("animar-sobre"), 500);

    let container = document.getElementById("cartasContainer");
    container.innerHTML = "";
    let generadas = [];

    for (let i = 0; i < 5; i++) {
        let rareza = generarRareza();
        let posibles = cartas.filter(c => c.rareza === rareza);
        if (posibles.length === 0) posibles = cartas.filter(c => c.rareza === "normal");

        let carta = posibles[Math.floor(Math.random() * posibles.length)];

        if (!grimorio[carta.imagen]) {
            grimorio[carta.imagen] = { ...carta, cantidad: 1 };
        } else {
            grimorio[carta.imagen].cantidad++;
        }

        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <div class="card-inner">
                <div class="card-front">𒅒</div>
                <div class="card-back">
                    <img src="${carta.imagen}" class="img-carta">
                    <div class="rareza-label">${carta.rareza.toUpperCase()}</div>
                </div>
            </div>`;
        container.appendChild(div);
        generadas.push({ element: div, rare: carta.rareza });
    }

    guardar();

    generadas.forEach((c, index) => {
        setTimeout(() => {
            c.element.classList.add("flipped", "revealed", c.rare);
            if (c.rare === "dios") {
                document.body.classList.add("sacudida", "fondo-dios");
                setTimeout(() => document.body.classList.remove("sacudida", "fondo-dios"), 1000);
            }
        }, 300 * (index + 1));
    });
}

/* =========================
   GRIMORIO
   ========================= */
function verGrimorio() {
    window.scrollTo(0, 0);
    document.body.classList.add("con-scroll");
    
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("sobre").classList.add("hidden");
    document.getElementById("grimorio").classList.remove("hidden");

    let container = document.getElementById("grimorioContainer");
    let containerDios = document.getElementById("grimorioDios");
    
    container.innerHTML = "";
    containerDios.innerHTML = "";

    let misCartas = Object.values(grimorio);

    if (misCartas.length === 0) {
        container.innerHTML = "<p style='color:white; text-align:center;'>Aún no tienes cartas. ¡Abre algunos sobres!</p>";
        return;
    }

    const orden = { "normal": 1, "especial": 2, "raro": 3, "legendaria": 4, "maestra": 5, "dios": 6 };
    misCartas.sort((a, b) => (orden[a.rareza] || 0) - (orden[b.rareza] || 0));

    let totalUnicas = 0;

    misCartas.forEach(c => {
        totalUnicas++;
        let div = document.createElement("div");
        div.className = `card revealed ${c.rareza}`; 

        div.innerHTML = `
            <div class="card-inner">
                <div class="card-back">
                    <div class="stack">x${c.cantidad}</div>
                    <img src="${c.imagen}" class="img-carta" onclick="verCartaGrande('${c.imagen}')">
                    <div class="rareza-label">${c.rareza.toUpperCase()}</div>
                </div>
            </div>
        `;

        if (c.rareza === "dios") {
            containerDios.appendChild(div);
        } else {
            container.appendChild(div);
        }
    });

    document.getElementById("contador").innerText = `Cartas únicas: ${totalUnicas} / ${cartas.length}`;
}

/* =========================
   UTILIDADES
   ========================= */
function verCartaGrande(src) {
    let visor = document.getElementById("visorCarta");
    let img = document.getElementById("imagenGrande");
    img.src = src;
    visor.classList.add("activo");
}

function cerrarVisor() {
    document.getElementById("visorCarta").classList.remove("activo");
}

function volverInicio() {
    document.body.classList.remove("con-scroll");
    window.scrollTo(0, 0);
    document.getElementById("sobre").classList.add("hidden");
    document.getElementById("grimorio").classList.add("hidden");
    document.getElementById("inicio").classList.remove("hidden");
}

function desbloquearTodas() {
    cartas.forEach(c => {
        if (!grimorio[c.imagen]) grimorio[c.imagen] = { ...c, cantidad: 1 };
    });
    guardar();
    verGrimorio();
}

function salirAdmin() {
    adminActivo = false;
    localStorage.setItem("adminActivo", "false");
    document.getElementById("adminPanel").classList.add("hidden");
    actualizarMonedas();
}

function reiniciarTodo() {
    if (prompt("Contraseña:") === "Adame123") {
        localStorage.clear();
        location.reload();
    }
}

/* =========================
   EVENTOS Y EFECTOS
   ========================= */
let secreto = "adameadmin";
let buffer = "";
document.addEventListener("keydown", (e) => {
    buffer += e.key.toLowerCase();
    if (buffer.length > secreto.length) buffer = buffer.slice(-secreto.length);
    if (buffer === secreto) {
        adminActivo = true;
        localStorage.setItem("adminActivo", "true");
        document.getElementById("adminPanel").classList.remove("hidden");
        actualizarMonedas();
        desbloquearTodas();
    }
});

document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".pupila, .pupila-oscura").forEach(p => {
        let rect = p.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;
        let angle = Math.atan2(e.clientY - y, e.clientX - x);
        p.style.transform = `translate(${Math.cos(angle) * 10}px, ${Math.sin(angle) * 10}px)`;
    });
});

window.addEventListener("load", () => {
    const contenedor = document.getElementById("particulas");
    if (!contenedor) return;
    setInterval(() => {
        const p = document.createElement("div");
        p.className = "particula";
        p.style.left = Math.random() * 100 + "vw";
        let size = Math.random() * 6 + 2;
        p.style.width = size + "px"; p.style.height = size + "px";
        p.style.animationDuration = (Math.random() * 5 + 5) + "s";
        contenedor.appendChild(p);
        setTimeout(() => p.remove(), 8000);
    }, 300);
});
