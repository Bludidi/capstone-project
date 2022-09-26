// menu display

const menu = document.querySelector('.menu');
const menuOption = document.querySelector('.menu_opt');
const closeMenu = document.getElementById('exit');
const menuItems = document.querySelector('.menu_list');

function show() {
  menuOption.style.display = 'block';
  menuOption.classList.toggle('open');
  menu.style.visibility = 'hidden';
}

function close() {
  menuOption.style.display = 'none';
  menuOption.classList.remove('open');
  menu.style.visibility = 'visible';
}

menu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuItems.addEventListener('click', close);

// Artits section

const artists = [
  {
    name: 'Erykah Badu',
    bio: 'American singer-songwriter, record producer and actress.',
    message: 'Erykah will be showcasing her talent in this event',
    image: './assets/images/Erykah_Badu.jpg',
  },

  {
    name: 'DJ Khaled',
    bio: 'Khaled Mohammed Khaled, known professionally as DJ Khaled, is an American DJ, record executive, author and record producer.',
    message: 'This prominent DJ will be showcasing his talent in this event',
    image: './assets/images/Dj_Khaled2.jpg',
  },

  {
    name: 'Ali Campbell',
    bio: 'Alistair Ian Campbell (born 15 February 1959) is an English singer and songwriter who was the lead singer and a member of the British reggae band UB40.',
    message: 'A vetaran in the musical fratenity will be also sharing his artistic skills',
    image: './assets/images/Ali_Campbell.jpg',
  },

  {
    name: 'Lauryn Hill',
    bio: 'Lauryn Noelle Hill (born May 26, 1975) is an American rapper, singer, songwriter, and actress. She is often regarded as one of the greatest rappers of all time,[2] as well as being one of the most influential musicians of her generation.',
    message: 'Lauryn will be showcasing her great talent in this event',
    image: './assets/images/lauryn_hill2.jpg',
  },

  {
    name: 'Black Coffee',
    bio: 'Nkosinathi Innocent Maphumulo is a South African DJ, record producer and a songwriter. Black Coffee, as he is known is also a Grammy Award winner and a prominent figure.',
    message: 'Black Coffee will be showcasing his great talent in this event',
    image: './assets/images/black_coffee2.jpg',
  },

  {
    name: 'Adele',
    bio: 'Adele Laurie Blue Adkins MBE is an English singer and songwriter',
    message: 'Adele will be showcasing her great talent in this event',
    image: './assets/images/adele.jpg',
  },
];

// Creating HTML structure

const artistCards = artists.map((artist) => `
<div id="card1" class="cards pt-5 ps-5">
 <div class="all-cards"> <div id="card_img" class="card img-div me-4">
    <img class="card_img" src="${artist.image}" alt="artist card">
  </div>
  <div id="txt_img" class="txt-div pe-3">
    <h5 class="card-h">${artist.name}</h5>
    <p class="card-p1">${artist.bio}</p>
    <p class="card-p2">${artist.message}</p>
  </div>
  </div>
</div>
`);

// Projecting information into HTML structure

const cardSection = document.querySelector('.artists');
const parser = new DOMParser();
artistCards.forEach((artistCard) => {
  const artistIndex = parser.parseFromString(artistCard, 'text/html').body.firstChild;
  cardSection.append(artistIndex);
});