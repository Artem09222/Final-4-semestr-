// document.addEventListener("DOMContentLoaded", function() {
//     const loadMoreButton = document.querySelector(".loadMoreButton");
//     const initialVisibleCount = 4;

//     const allCards = document.querySelectorAll(".card");
//     for (let i = 0; i < allCards.length; i++) {
//         if (i < initialVisibleCount) {
//             allCards[i].classList.remove("hidden");
//         } else {
//             allCards[i].classList.add("hidden");
//         }
//     }

//     loadMoreButton.addEventListener("click", function() {
//         const hiddenCards = document.querySelectorAll(".card.hidden");

//         for (let i = 0; i < hiddenCards.length && i < 4; i++) {
//             hiddenCards[i].classList.remove("hidden");
//         }
//         const newHiddenCards = document.querySelectorAll(".card.hidden");
//         if (newHiddenCards.length === 0) {
//             loadMoreButton.style.display = "none";
//         }
//     });
// });

// const secondSectionInput = document.querySelector('.secondSectionInput');
// const countryInfoContainer = document.querySelector('.countryInfoContainer');

// async function getCountryInfo(countryName) {
//     try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//         const countryData = await response.json(); 

//         renderCountryInfo(countryData[0]);
//     } catch (error) {
//         console.error('Помилка при отриманні інформації про країну:', error);
//     }
// }

// function renderCountryInfo(countryData) {
//     const countryCode = countryData.cca2.toLowerCase();
    
//     const flagImageUrl = `https://flagcdn.com/w80/${countryCode}.png`;

//     const countryInfoHTML = `
//         <div class="countryInfo">
//             <h2 style="color: white; text-align: center;">${countryData.name.common}</h2>
//             <img src="${flagImageUrl}" alt="${countryData.name.common} flag" class="countryFlag">
//             <p style="color: white; text-align: center;">Столиця: ${countryData.capital}</p>
//             <p style="color: white; text-align: center;">Населення: ${countryData.population}</p>
//             <p style="color: white; text-align: center;">Регіон: ${countryData.region}</p>
//         </div>
//     `;
//     countryInfoContainer.innerHTML = countryInfoHTML;
// }

// secondSectionInput.addEventListener('change', async function() {
//     const selectedCountry = this.value.trim();
//     await getCountryInfo(selectedCountry);
// });


// // modal 
// const modals = document.querySelectorAll('.modal');

// document.querySelectorAll('.card').forEach((card, index) => {
//   const modal = modals[index];
//   const closeBtn = modal.querySelector('.close');

//   card.addEventListener('click', () => {
//     modal.style.display = 'block';
//   });

//   closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });

//   document.addEventListener('click', (event) => {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

const modals = document.querySelectorAll('.modal');

document.querySelectorAll('.card').forEach((card, index) => {
  const modal = modals[index];
  console.log(modal);
  const closeBtn = modal.querySelector('.close');

  card.addEventListener('click', () => {
    // console.log(modal);
    modal.style.display = 'block';
    console.log(modal.style.display);
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  document.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pageNumbers = document.querySelectorAll('.thirdSectionInfo');
  const cardsPerPage = 6; // Кількість карточок на одній сторінці

  pageNumbers.forEach(page => {
      page.addEventListener('click', () => {
          const pageNumber = parseInt(page.dataset.page);
          displayCards(pageNumber);
      });
  });

  // Функція для відображення карточок на певній сторінці
  function displayCards(pageNumber) {
      const allCards = document.querySelectorAll('.card');
      const startIndex = (pageNumber - 1) * cardsPerPage;
      const endIndex = pageNumber * cardsPerPage;

      allCards.forEach((card, index) => {
          if (index >= startIndex && index < endIndex) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
});

// firstInputSearch
// let firstSectionInput = document.querySelector('.firstSectionInput')
// let eventsContainer = document.querySelector('.eventsContainer')

// async function searchEvents() {
//     const 
// }

// function toggleMenu() {
//     const menu = document.getElementById('burgerMenu');
//     menu.classList.toggle('active');
// }


// async function showSelectedCountry() {
//   var selectElement = document.getElementById("country-select");
//   var selectedCountry = selectElement.options[selectElement.selectedIndex].value;

//   try {
//     const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${selectedCountry}&apikey=D9dT71LdTC1wOKwX0OBANeezmoFJm65E`);
//     const eventData = await response.json();

//     displayEvents(eventData);
//   } catch (error) {
//     console.error('Помилка при отриманні інформації про події:', error);
//   }
// }

// function displayEvents(eventData) {
//   const eventsContainer = document.querySelector('.eventsContainer');
//   eventsContainer.innerHTML = '';

//   eventData._embedded.events.forEach(event => {
//     const eventName = event.name;
//     const eventDate = new Date(event.dates.start.localDate).toLocaleDateString();
//     const eventVenue = event._embedded.venues[0].name;
//     const eventImage = event.images[0].url;

//     const eventHTML = `
//       <div class="event">
//         <h3>${eventName}</h3>
//         <img src="${eventImage}" alt="${eventName}" class="eventImage">
//         <p>Date: ${eventDate}</p>
//         <p>Venue: ${eventVenue}</p>
//       </div>
//     `;
//     eventsContainer.innerHTML += eventHTML;
//   });

//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }

function showSelectedCountry() {
    const select = document.getElementById('country-select');
    const selectedOption = select.options[select.selectedIndex].text;
    document.getElementById('selected-country').innerHTML =
      'You selected: ' + selectedOption;
    // document.getElementById('myModal').style.display = 'block';
  }
  
  // function closeModal() {
  //   document.getElementById('myModal').style.display = 'none';
  // }
  
  function searchEvents() {
    let inputSearch,
      filterValue,
      eventsSearch,
      eventSearch,
      descriptionSearch,
      i,
      txtValue,
      found = false;
    inputSearch = document.querySelector('.search'); // Змінена 'getElementsByClassName' на 'querySelector'
    filterValue = inputSearch.value.toUpperCase(); // Змінена 'input' на 'inputSearch'
    eventsSearch = document.querySelectorAll('.event1');
    for (i = 0; i < eventsSearch.length; i++) {
      eventSearch = eventsSearch[i];
      descriptionSearch = eventSearch.querySelector('.describtion');
      txtValue = descriptionSearch.textContent || descriptionSearch.innerText; // Змінена 'description' на 'descriptionSearch'
      if (txtValue.charAt(0).toUpperCase() === filterValue && !found) { // Змінена 'filter' на 'filterValue'
        eventSearch.style.display = '';
        found = true;
      } else {
        eventSearch.style.display = 'none';
      }
    }
  }
  
  async function fetchCountries() {
    const url =
        'https://app.ticketmaster.com/discovery/v2/venues.json?apikey=D9dT71LdTC1wOKwX0OBANeezmoFJm65E';

    try {
        const response = await fetch(url);
        const data = await response.json();

        const countries = data._embedded.venues.map(venue => venue.country.countryCode);

        const selectElement = document.getElementById('country-select');
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

window.addEventListener('load', fetchCountries);
  
  async function fetchEvents() {
    const url =
      'https://app.ticketmaster.com/discovery/v2/events.json?apikey=D9dT71LdTC1wOKwX0OBANeezmoFJm65E';
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const events = data._embedded.events;
      const eventContainers = document.querySelectorAll('.event1');
  
      events.forEach((event, index) => {
        const imageURL = event.images[0].url;
  
        eventContainers[index].querySelector('img').src = imageURL;
      });
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }
  
  window.addEventListener('load', () => {
    fetchCountries();
    fetchEvents();
    
    const countrySelect = document.getElementById('country-select');
    countrySelect.addEventListener('change', showSelectedCountry);
  });
