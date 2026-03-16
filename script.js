//*======Admin======*/

let grimorio = JSON.parse(localStorage.getItem("grimorio")) || {};
let monedas = parseInt(localStorage.getItem("monedas")) || 0;
let adminActivo = localStorage.getItem("adminActivo") === "true";

function guardar(){              //*====== Guardar ======*/
if(!adminActivo){
localStorage.setItem("monedas", monedas);
}
localStorage.setItem("grimorio", JSON.stringify(grimorio));
actualizarMonedas();
}

function actualizarMonedas(){         //*====== ActualizarMonedas ======*/
document.getElementById("monedas").innerText = adminActivo ? "∞" : monedas;
}

actualizarMonedas();
if(adminActivo){
document.getElementById("adminPanel").classList.remove("hidden");
}

/* =========================
CARTAS
========================= */
const cartas = [
/*normal*/
{ rareza:"normal", imagen:"img/911_normal.jpeg" },//
{ rareza:"normal", imagen:"img/aceite_bebe_normal.jpeg" },//
{ rareza:"normal", imagen:"img/bro_glen_normal.jpeg" },//
{ rareza:"normal", imagen:"img/gefe_de_maday_normal.jpeg" },//
{ rareza:"normal", imagen:"img/jorge_water_normal.jpeg" },//
{ rareza:"normal", imagen:"img/larios_normal.jpeg" },//
{ rareza:"normal", imagen:"img/maday_normal.jpeg" },//
{ rareza:"normal", imagen:"img/nata_normal.jpeg" },//
{ rareza:"normal", imagen:"img/sleeping_normal.jpeg" },//
{ rareza:"normal", imagen:"img/tienda_china_normal.jpeg" }, //
{ rareza:"normal", imagen:"img/clinton_normal.jpeg" },//
{ rareza:"normal", imagen:"img/glen_hat_normal.jpeg" }, //                 /*13*/
{ rareza:"normal", imagen:"img/cristo_normal.jpeg" },//
{ rareza:"normal", imagen:"img/glen_joker_normal.jpeg" },//
{ rareza:"normal", imagen:"img/glen_hood_normal.jpeg" },//
{ rareza:"normal", imagen:"img/clase_3as_normal.jpeg" },//
{ rareza:"normal", imagen:"img/julio_rizz_normal.jpeg" },  //
{ rareza:"normal", imagen:"img/joshua_hungry_normal.jpeg" },//
{ rareza:"normal", imagen:"img/charli_pelo_normal.jpeg" },//
{ rareza:"normal", imagen:"img/coach_sanmi_normal.jpeg" },//
{ rareza:"normal", imagen:"img/charly_sin_pelo_normal.jpeg" },//
{ rareza:"normal", imagen:"img/madahy_base_normal.jpeg" },//
{ rareza:"normal", imagen:"img/madahy_gord_normal.jpeg" },//
{ rareza:"normal", imagen:"img/migue_sueter_normal.jpeg" },//
{ rareza:"normal", imagen:"img/nata_staring_normal.jpeg" },//
{ rareza:"normal", imagen:"img/victor_sleeping_2_normal.jpeg" },//
{ rareza:"normal", imagen:"img/caballero_working_normal.jpeg" },//
{ rareza:"normal", imagen:"img/jefaso_working_normal.jpeg" },//
{ rareza:"normal", imagen:"img/charly_kirk_normal.jpeg" },//
{ rareza:"normal", imagen:"img/glen_smart_normal.jpeg" },//
{ rareza:"normal", imagen:"img/arturo_morgan_normal.jpeg" },//
{ rareza:"normal", imagen:"img/beto_cheto_normal.jpeg" },
{ rareza:"normal", imagen:"img/glen_rizz1_normal.jpeg" },
{ rareza:"normal", imagen:"img/manu2_normal.jpeg" },
{ rareza:"normal", imagen:"img/george_glasses_normal.jpeg" },
{ rareza:"normal", imagen:"img/kriko_normal.jpeg" },
{ rareza:"normal", imagen:"img/manu_sleep_normal.jpeg" },
{ rareza:"normal", imagen:"img/willy_wanka_normal.jpeg" },
{ rareza:"normal", imagen:"img/beto_woman_normal.jpeg" },
{ rareza:"normal", imagen:"img/charile_more_hair_normal.jpeg" },


/*especial*/
{ rareza:"especial", imagen:"img/arabe_especial.jpeg" },//
{ rareza:"especial", imagen:"img/eucaliptos_especial.jpeg" },//
{ rareza:"especial", imagen:"img/hawking_especial.jpeg" },//
{ rareza:"especial", imagen:"img/hillary_especial.jpeg" },//
{ rareza:"especial", imagen:"img/maduro_especial.jpeg" },//                 /*6*/
{ rareza:"especial", imagen:"img/obama_especial.jpeg" },//
{ rareza:"especial", imagen:"img/69_especial.jpeg" },//
{ rareza:"especial", imagen:"img/alex_dormido_especial.jpeg" },
{ rareza:"especial", imagen:"img/chino_ass_especial.jpeg" },
{ rareza:"especial", imagen:"img/balon_voly_especial.jpeg" },
{ rareza:"especial", imagen:"img/migue_sonri_especial.jpeg" },//
{ rareza:"especial", imagen:"img/mr_cachondo_especial.jpeg" },//
{ rareza:"especial", imagen:"img/jaliscazo_especial.jpeg" },//


/*rara*/
{ rareza:"raro", imagen:"img/isla_rara.jpeg" },//
{ rareza:"raro", imagen:"img/duo_dinamico_rara.jpeg" },//
{ rareza:"raro", imagen:"img/la_fortuna_rara.jpeg" },//
{ rareza:"raro", imagen:"img/marga_euca_rara.jpeg" },//
{ rareza:"raro", imagen:"img/marla_rara.jpeg" },//
{ rareza:"raro", imagen:"img/matriz_rara.jpeg" },//
{ rareza:"raro", imagen:"img/trump_rara.jpeg" },//                            /*9*/
{ rareza:"raro", imagen:"img/glen_rara.jpeg" },//
{ rareza:"raro", imagen:"img/arabe_mex_rara.jpeg" },//
{ rareza:"raro", imagen:"img/ball_crusher_rara.jpeg" },//
{ rareza:"raro", imagen:"img/cheche_base_rara.jpeg" },//
{ rareza:"raro", imagen:"img/fusion_josh_che_rara.jpeg" },//
{ rareza:"raro", imagen:"img/joshua_jefaso_rara.jpeg" },//
{ rareza:"raro", imagen:"img/nata_chilling_rara.jpeg" },//
{ rareza:"raro", imagen:"img/starbucks_rara.jpeg" },//
{ rareza:"raro", imagen:"img/glen_big_tits_rara.jpeg" },//
{ rareza:"raro", imagen:"img/mencho_dead_rara.jpeg" },//
{ rareza:"raro", imagen:"img/chocolate_rara.jpeg" },

/*legendaria*/
{ rareza:"legendaria", imagen:"img/epstein_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/67_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/fat_ass_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/pdiddy_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/profe_fisica_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/trum_clinton_legendaria.jpeg" },//           /*6*/
{ rareza:"legendaria", imagen:"img/chino_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/jack_fatass_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/marla_lengua_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/nata_cluas_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/victor_sleeping_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/marla_power_up_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/candi_god_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/golden_jeffrey_legendaria.jpeg" },//
{ rareza:"legendaria", imagen:"img/glen_girl_legendaria.jpeg" },


/*maestra*/
{ rareza:"maestra", imagen:"img/justin_maestra.jpeg" },//
{ rareza:"maestra", imagen:"img/manu_maestra.jpeg" },//
{ rareza:"maestra", imagen:"img/marga_working_maestra.jpeg" },//
{ rareza:"maestra", imagen:"img/papeles_epstein_maestra.jpeg" },//
{ rareza:"maestra", imagen:"img/pili_mili_maestra.jpeg" },//                  /*5*/
{ rareza:"maestra", imagen:"img/61_maestra.jpeg" },//
{ rareza:"maestra", imagen:"img/glen_mask_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/glen_angry_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/josh_pelon_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/super_cheche_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/kriko_sleeping_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/micheal_guapo_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/el_mencho_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/coach_rizz_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/beto_alberto_maestra.jpeg" },
{ rareza:"maestra", imagen:"img/chino_creepy_maestra.jpeg" },

/* CARTA DIOS */
{ rareza:"dios", imagen:"img/chávelo_dios.jpeg" },//
{ rareza:"dios", imagen:"img/chávelo_brazo_izqui_dios.jpeg" },//
{ rareza:"dios", imagen:"img/chavelo_brazo_derech_dios.jpeg" },//
{ rareza:"dios", imagen:"img/chávelo_pie_derech_dios.jpeg" },//
{ rareza:"dios", imagen:"img/chávelo_pie_izqui_dios.jpeg" }, //                  /*5*/
{ rareza:"dios", imagen:"img/gama_java_dios.jpeg" } //


];
/* =========================
RAREZAS
========================= */

function generarRareza(){                             //*====== GenerarRareza ======*/

if(adminActivo){
let rarezas = ["dios","maestra","legendaria","raro","especial","normal"];
return rarezas[Math.floor(Math.random() * rarezas.length)];
}

let r=Math.random();

if(r < 0.0000001) return "dios";   // 0.00001%
if(r < 0.01) return "maestra";
if(r < 0.05) return "legendaria";
if(r < 0.20) return "raro";
if(r < 0.45) return "especial";
return "normal";
}

/*============== Ganar monedas ========*/
function ganarMonedas(){
if(adminActivo) return;
monedas += 1;
guardar();
}

/*====================== Abrir sobre =============*/
function abrirSobre(){
window.scrollTo({top:0,left:0,behavior:"instant"});
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;if(!adminActivo){
if(monedas < 10) return;
monedas -= 10;
guardar();
actualizarContador();
}

document.getElementById("inicio").classList.add("hidden");
document.getElementById("grimorio").classList.add("hidden");
document.getElementById("sobre").classList.remove("hidden");
let pantallaSobre = document.getElementById("sobre");
pantallaSobre.classList.add("animar-sobre");

setTimeout(()=>{
pantallaSobre.classList.remove("animar-sobre");
},500);

let container=document.getElementById("cartasContainer");
container.innerHTML="";

let generadas=[];

for(let i=0;i<5;i++){

let rareza=generarRareza();
let posibles=cartas.filter(c=>c.rareza===rareza);

if(posibles.length===0){
posibles=cartas.filter(c=>c.rareza==="normal");
}

let carta=posibles[Math.floor(Math.random()*posibles.length)];
if(!grimorio[carta.imagen]){
grimorio[carta.imagen]={...carta,cantidad:1};
}else{
grimorio[carta.imagen].cantidad++;
}

let div=document.createElement("div");
div.className="card";
/*=========== Como es la carta por frente, atras ==========*/
div.innerHTML=`
<div class="card-inner">
<div class="card-front">𒅒</div>
<div class="card-back">
<img src="${carta.imagen}" class="img-carta"
onerror="console.error('No se encontró:', this.src); this.src='https://via.placeholder.com/180x220?text=Error'">
<div class="rareza-label">${carta.rareza.toUpperCase()}</div>
</div>
</div>
`;

container.appendChild(div);
generadas.push({element:div,rare:carta.rareza});
}

guardar();

generadas.forEach((carta,index)=>{
setTimeout(()=>{

carta.element.classList.add("flipped");
carta.element.classList.add("revealed");
carta.element.classList.add(carta.rare);

/* =========================
EFECTOS SEGÚN RAREZA
========================= */

if(carta.rare === "legendaria"){
carta.element.classList.add("legendaria-efecto");

setTimeout(()=>{
carta.element.classList.remove("legendaria-efecto");
},1000);
}

if(carta.rare === "maestra"){
carta.element.classList.add("maestra-efecto");

setTimeout(()=>{
carta.element.classList.remove("maestra-efecto");
},1000);
}

if(carta.rare === "dios"){

/* Sacudida */
document.body.classList.add("sacudida");

setTimeout(()=>{
document.body.classList.remove("sacudida");
},500);

/* Fondo rojo */
document.body.classList.add("fondo-dios");

setTimeout(()=>{
document.body.classList.remove("fondo-dios");
},600);
}

},200*(index+1));
});

actualizarContador();

}

function actualizarContador(){

let total = 0;

for(let img in grimorio){
let existe = cartas.some(c => c.imagen === img);
if(existe) total++;
}

let contador = document.getElementById("contador");
if(contador){
contador.innerText = "Cartas únicas: " + total + " / " + cartas.length;
}
}

/*================== Es el grimorio de las cartas ============================*/

function verGrimorio(){
window.scrollTo({top:0,left:0,behavior:"instant"});
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
document.getElementById("inicio").classList.add("hidden");
document.getElementById("sobre").classList.add("hidden");
document.getElementById("grimorio").classList.remove("hidden");

let container = document.getElementById("grimorioContainer");
let containerDios = document.getElementById("grimorioDios");

container.innerHTML = "";
containerDios.innerHTML = "";

/* ORDEN DE RAREZA */
const ordenRareza = {
    normal: 1,
    especial: 2,
    raro: 3,
    legendaria: 4,
    maestra: 5,
    dios: 6
};

/* Convertir grimorio en array */
let cartasArray = Object.values(grimorio).filter(c =>
    cartas.some(x => x.imagen === c.imagen)
);

/* Ordenar por rareza */
cartasArray.sort((a, b) =>
    ordenRareza[a.rareza] - ordenRareza[b.rareza]
);

let total = 0;

cartasArray.forEach(c => {

    total++;

    let div = document.createElement("div");
    div.className = "card revealed " + c.rareza;

    div.innerHTML = `
    <div class="card-back">
        <div class="stack">x${c.cantidad}</div>
        <img src="${c.imagen}"
        class="img-carta"
        onclick="verCartaGrande('${c.imagen}')">
        <div class="rareza-label">${c.rareza.toUpperCase()}</div>
    </div>
    `;

    if(c.rareza === "dios"){
        containerDios.appendChild(div);
    }else{
        container.appendChild(div);
    }

});

document.getElementById("contador").innerText =
"Cartas únicas: " + total + " / " + cartas.length;

}


function verCartaGrande(src){     /*================VerCartaGrande====================*/
console.log("CLICK EN CARTA:", src); /*temporal*/
let visor = document.getElementById("visorCarta");
let img = document.getElementById("imagenGrande");

img.src = src;
visor.classList.add("activo");
}

function cerrarVisor(){
document.getElementById("visorCarta").classList.remove("activo");
}

// ========================================salir admin
function salirAdmin(){
adminActivo = false;
localStorage.setItem("adminActivo","false");
actualizarMonedas();
document.getElementById("adminPanel").classList.add("hidden");
}

 function desbloquearTodas(){
for(let carta of cartas){

if(!grimorio[carta.imagen]){
grimorio[carta.imagen] = {
imagen: carta.imagen,
rareza: carta.rareza,
cantidad: 1
};
}
}
guardar();
actualizarContador();
}

function volverInicio(){   /*====================volver inicio=====================================*/
window.scrollTo({top:0,left:0,behavior:"instant"});
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
document.getElementById("sobre").classList.add("hidden");
document.getElementById("grimorio").classList.add("hidden");
document.getElementById("inicio").classList.remove("hidden");
}

/* =========================
   RESET ADMIN
========================= */

function reiniciarTodo(){   /*=================== Reiniciar todo ================*/

let password = prompt("Ingrese contraseña de administrador:");

if(password === "Adame123"){
grimorio = {};
monedas = 0;
adminActivo = false;
localStorage.clear();
location.reload();
}
}

/* =========================
   ACTIVAR ADMIN
========================= */

let secreto="adameadmin";
let buffer="";

document.addEventListener("keydown",function(e){
buffer+=e.key.toLowerCase();
if(buffer.length>secreto.length){
buffer=buffer.slice(-secreto.length);
}
if(buffer===secreto){
adminActivo = true;
localStorage.setItem("adminActivo","true");
document.getElementById("adminPanel").classList.remove("hidden");
actualizarMonedas();
 desbloquearTodas(); //
buffer="";
}
});

document.addEventListener("mousemove", function(e){

    document.querySelectorAll("#sobre .card.maestra.flipped").forEach(card => {

        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let inner = card.querySelector(".card-inner");
        if(!inner) return;

        if(x > 0 && x < rect.width && y > 0 && y < rect.height){

            let rotateY = ((x / rect.width) - 0.5) * 15;
            let rotateX = ((y / rect.height) - 0.5) * -15;

            inner.style.transform =
                `rotateY(180deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        }else{
            inner.style.transform = "rotateY(180deg)";
        }

    });

});

// ==========================
// PARTICULAS MAGICAS SEGURAS
// ==========================

window.addEventListener("load", function(){

const contenedor = document.getElementById("particulas");
if(!contenedor) return;

function crearParticula(){

const particula = document.createElement("div");
particula.className = "particula";

particula.style.left = Math.random() * 100 + "vw";

let size = Math.random() * 6 + 2;
particula.style.width = size + "px";
particula.style.height = size + "px";

particula.style.animationDuration = (Math.random() * 5 + 5) + "s";

contenedor.appendChild(particula);

setTimeout(()=>{
particula.remove();
},10000);

}

setInterval(crearParticula, 200);

});

// ==========================
// SISTEMA DE PAGINAS LIBRO
// ==========================

let paginaActual = 1;
const totalPaginas = 2;

function paginaSiguiente(){

if(paginaActual < totalPaginas){

let pagina = document.getElementById("pagina"+paginaActual);

pagina.classList.remove("activa");
pagina.classList.add("volteada");

paginaActual++;

document.getElementById("pagina"+paginaActual).classList.add("activa");

}

}

function paginaAnterior(){

if(paginaActual > 1){

document.getElementById("pagina"+paginaActual).classList.remove("activa");

paginaActual--;

let pagina = document.getElementById("pagina"+paginaActual);

pagina.classList.remove("volteada");
pagina.classList.add("activa");

}

}
// ==========================
// TODOS LOS OJOS SIGUEN EL CURSOR
// ==========================

document.addEventListener("mousemove", function(e){

let pupils = document.querySelectorAll(".pupila, .pupila-oscura");

pupils.forEach(function(pupil){

let rect = pupil.getBoundingClientRect();

let x = rect.left + rect.width/2;
let y = rect.top + rect.height/2;

let angle = Math.atan2(e.clientY - y, e.clientX - x);

let moveX = Math.cos(angle) * 10;
let moveY = Math.sin(angle) * 10;

pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;

});

});

// ==========================
// CREAR OJOS ESCONDIDOS
// ==========================

window.addEventListener("load", function(){

const contenedor = document.getElementById("ojosOscuros");

for(let i=0;i<10;i++){

let ojo = document.createElement("div");
ojo.className="ojo-oscuro";
ojo.style.animationDelay = Math.random() * 4 + "s";
ojo.style.top = Math.random()*90 + "vh";
ojo.style.left = Math.random()*90 + "vw";

let pupila = document.createElement("div");
pupila.className="pupila-oscura";

ojo.appendChild(pupila);
contenedor.appendChild(ojo);

}

});


// ==========================
// ABRIR SOBRE DESLIZANDO
// ==========================

/*let startX = 0;

document.addEventListener("touchstart", e=>{
startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e=>{

let endX = e.changedTouches[0].clientX;
let diff = startX - endX;

if(Math.abs(diff) > 100){
abrirSobre();
}

});*/

// ==========================
// PASAR PAGINAS DESLIZANDO
// ==========================

let libroStart = 0;

document.addEventListener("touchstart", e=>{
libroStart = e.touches[0].clientX;
});

document.addEventListener("touchend", e=>{

let libroEnd = e.changedTouches[0].clientX;

if(libroStart - libroEnd > 80){
paginaSiguiente();
}

if(libroStart - libroEnd < -80){
paginaAnterior();
}

});

// ==========================
// CARTAS QUE SE INCLINAN
// ==========================

window.addEventListener("deviceorientation", e=>{

let x = e.gamma;
let y = e.beta;

document.querySelectorAll(".card.flipped .card-inner").forEach(card=>{

card.style.transform =
`rotateY(180deg) rotateX(${y*-0.3}deg) rotateY(${x*0.5}deg)`;

});

});

// ==========================
// ZOOM CARTA EN CELULAR
// ==========================

document.addEventListener("touchstart", e=>{

let card = e.target.closest(".card");

if(card){
card.classList.add("zoomCarta");
}

});

document.addEventListener("touchend", e=>{

document.querySelectorAll(".card").forEach(card=>{
card.classList.remove("zoomCarta");
});

});
