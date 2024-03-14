const canalesPaises = document.getElementById('canalesPaises');
const consultas = document.getElementById('consultas');
const sliderVentas = document.getElementById('sliderVentas');
const ventasDesktop = document.getElementById('ventasDesktop');
const redesSociales = document.getElementById('redesSociales');

const canalesContacto = [
  {
    title: "Argentina",
    contacto: "+54 11 5237-2827",
    tel: "541152372827"
  },
  {
    title: "Chile",
    contacto: "+56 2 2405-3096",
    tel: "56224053096"
  },
  {
    title: "Colombia",
    contacto: "+57 601 770-2903",
    tel: "576017702903"
  },
  {
    title: "Espana",
    contacto: "+34 910 601-755",
    tel: "34910601755"
  },
  {
    title: "Estados-Unidos",
    contacto: "+1 302 208-7264",
    tel: "13022087264"
  },
  {
    title: "Guatemala",
    contacto: "+502 2268-1201",
    tel: "50222681201"
  },
  {
    title: "Mexico",
    contacto: "+52 55 8526-2118",
    tel: "525585262118"
  },
];
const consultasContacto = [
  {
    texto: "Para información general sobre los tours:",
    email: "info@tourexperto.com",
  },
  {
    texto: "Para consultas sobre tus reservas:",
    email: "reservas@tourexperto.com",
  },
  {
    texto: "Para consultas por pagos:",
    email: "administracion@tourexperto.com",
  },
  {
    texto: "Para adquirir un tour vía telefónica:",
    email: "ventas@tourexperto.com",
  },
  {
    texto: "Para consultar operaciones de tus tours:",
    email: "operaciones@tourexperto.com",
  },
];
const equipoVentas = [
  {
    imgVentas: "./prueba/vendedores/Lucia-Ventas.webp",
    altVentas: "Lucia Santi Ventas",
    imgViaje: "./prueba/vendedores/Lucia-Viaje.webp",
    altViaje: "Lucia Santi Viaje",
    nombre: "LUCIA SANTI",
    rol: "Supervisora de ventas",
  },
  {
    imgVentas: "./prueba/vendedores/Julieta-Ventas.webp",
    altVentas: "Julieta Berone Ventas",
    imgViaje: "./prueba/vendedores/Julieta-Viaje.webp",
    altViaje: "Julieta Berone Viaje",
    nombre: "JULIETA BERTONE",
    rol: "Ejecutiva de ventas",
  },
  {
    imgVentas: "./prueba/vendedores/Aime-Ventas.webp",
    altVentas: "Aime Nyffenegger Ventas",
    imgViaje: "./prueba/vendedores/Aime-Viaje.webp",
    altViaje: "Aime Nyffenegger Viaje",
    nombre: "AIME NYFFENEGGER",
    rol: "Ejecutiva de ventas",
  },
  {
    imgVentas: "./prueba/vendedores/Silvia-Ventas.webp",
    altVentas: "Silvia Itoiz Ventas",
    imgViaje: "./prueba/vendedores/Silvia-Viaje.webp",
    altViaje: "Silvia Itoiz Viaje",
    nombre: "SILVIA ITOIZ",
    rol: "Ejecutiva de ventas",
  },
  {
    imgVentas: "./prueba/vendedores/Julian-Ventas.webp",
    altVentas: "Julian Santiago Ventas",
    imgViaje: "./prueba/vendedores/Julian-Viaje.webp",
    altViaje: "Julian Santiago Viaje",
    nombre: "JULIAN SANTIAGO",
    rol: "Ejecutivo de ventas",
  },
  {
    imgVentas: "./prueba/vendedores/JulietaC-Ventas.webp",
    altVentas: "Julieta Conte Ventas",
    imgViaje: "./prueba/vendedores/JulietaC-Viaje.webp",
    altViaje: "Julieta Conte Viaje",
    nombre: "JULIETA CONTE",
    rol: "Ejecutiva de ventas",
  },
  {
    imgVentas: "./prueba/vendedores/Francini-Ventas.webp",
    altVentas: "Francini Lopez Ventas",
    imgViaje: "./prueba/vendedores/Francini-Viaje.webp",
    altViaje: "Francini Lopez Viaje",
    nombre: "FRANCINI LOPEZ",
    rol: "Ejecutiva de ventas",
  },
];
const redes = [
  {
    red: "Instagram",
    link: "https://www.instagram.com/tourexperto/",
  },
  {
    red: "Facebook",
    link: "https://www.facebook.com/TourExpertoAgencia/",
  },
  {
    red: "Youtube",
    link: "https://www.youtube.com/@tourexperto",
  },
  {
    red: "Pinterest",
    link: "https://ar.pinterest.com/tourexperto/",
  },
  {
    red: "LinkedIn",
    link: "https://www.linkedin.com/company/tourexperto/",
  },
];

for (let i = 0; i < canalesContacto.length; i++) {
  canalesPaises.innerHTML += `
    <a class="canal" href="tel:${canalesContacto[i].tel}" target="_blank">
      <div class="iconoCanal canal${canalesContacto[i].title}" title="${canalesContacto[i].title}"></div>
      <p>${canalesContacto[i].contacto}</p>
      <div class="contactarme">
        <div class="iconoContactarme iconoTelefono" title="Telefono"></div>
        <p>Contactarme</p>
      </div>
    </a>
  `;
}

for (let j = 0; j < consultasContacto.length; j++) {
  consultas.innerHTML += `
    <a class="consulta" href="mailto:${consultasContacto[j].email}" target="_blank">
      <p>${consultasContacto[j].texto}</p>
      <p>${consultasContacto[j].email}</p>
    </a>
  `;
}

$(document).ready(function () {
  $('.sliderVentas').slick({
    infinite: true,
    dots: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplatSpeed: 200,
  });
});

for (let k = 0; k < equipoVentas.length; k++) {
  sliderVentas.innerHTML += `
    <div class="slide">
      <img src="${equipoVentas[k].imgVentas}" alt="${equipoVentas[k].altVentas}">
      <div>
        <p class="nombreVentas">${equipoVentas[k].nombre}</p>
        <p class="rolVentas">${equipoVentas[k].rol}</p>
      </div>
    </div>
  `;
}

for (let l = 0; l < equipoVentas.length; l++) {
  ventasDesktop.innerHTML += `
    <div class="venta">
      <img src="${equipoVentas[l].imgVentas}" alt="${equipoVentas[l].altVentas}">
      <div>
        <p class="nombreVentas">${equipoVentas[l].nombre}</p>
        <p class="rolVentas">${equipoVentas[l].rol}</p>
      </div>
    </div>
  `;
}

for (let m = 0; m < redes.length; m++) {
  redesSociales.innerHTML += `
    <a class="linkSocial" href="${redes[m].link}" target="_blank">
      <div class="iconoSocial icono${redes[m].red}"></div>
      <p class="nombreSocial">${redes[m].red}</p>
    </a>
  `;
}

const ventas = document.querySelectorAll('.venta');

ventas.forEach((venta, index) => {
  const imagen = venta.querySelector('img');
  imagen.dataset.src = equipoVentas[index].imgVentas;
  imagen.dataset.srcViaje = equipoVentas[index].imgViaje;
  
  const ventaDiv = venta.querySelector('div');
  
  venta.addEventListener('mouseenter', () => {
    imagen.src = imagen.dataset.srcViaje;
    ventaDiv.style.backgroundColor = '#2E0049';
  });
  
  venta.addEventListener('mouseleave', () => {
    imagen.src = imagen.dataset.src;
    ventaDiv.style.backgroundColor = '#6c58fe';
  });
});
