const canales = document.getElementById('canales');
const consultas = document.getElementById('consultas');

const canalesContacto = [
  {
    imagen: "Icono-Argentina.png",
    alt: "Icono Argentina",
    contacto: "+54 11 5237-2827",
  },
  {
    imagen: "Icono-Chile.png",
    alt: "Icono Chile",
    contacto: "+56 2 2405-3096",
  },
  {
    imagen: "Icono-Colombia.png",
    alt: "Icono Colombia",
    contacto: "+57 601 770-2903",
  },
  {
    imagen: "Icono-Espana.png",
    alt: "Icono Espana",
    contacto: "+34 910 601-755",
  },
  {
    imagen: "Icono-Estados-Unidos.png",
    alt: "Icono Estados-Unidos",
    contacto: "+1 302 208-7264",
  },
  {
    imagen: "Icono-Guatemala.png",
    alt: "Icono Guatemala",
    contacto: "+502 2268-1201",
  },
  {
    imagen: "Icono-Mexico.png",
    alt: "Icono Mexico",
    contacto: "+52 55 8526-2118",
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

for (let i = 0; i < canalesContacto.length; i++) {
  const canal = document.createElement('div');
  const divImg = document.createElement('div');
  canal.className = 'canal';
  const imagen = document.createElement('img');
  imagen.src = `./images-contacto-lio/${canalesContacto[i].imagen}`;
  imagen.alt = canalesContacto[i].alt;
  const parrafo = document.createElement('p');
  parrafo.textContent = canalesContacto[i].contacto;
  divImg.appendChild(imagen);
  canal.appendChild(divImg);
  canal.appendChild(parrafo);
  canales.appendChild(canal);
}

for (let j = 0; j < consultasContacto.length; j++) {
  const consulta = document.createElement('div');
  consulta.className = 'consulta';
  const texto = document.createElement('p');
  texto.textContent = consultasContacto[j].texto;
  const email = document.createElement('p');
  email.textContent = consultasContacto[j].email;
  consulta.appendChild(texto);
  consulta.appendChild(email);
  consultas.appendChild(consulta);
}