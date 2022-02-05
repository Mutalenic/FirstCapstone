const speakerCard = document.querySelector('.SpeakerSection');


const speakersinfo = [
    {
        Name: 'Mwiya Musokotwane',
        Picture: './images/Mwiya1.jpg',
        ImageAlt: 'Mwiya Musokotwane',
        speakerTitle: 'CEO Thebe Investment',
        Bio: 'Mwiya Musokotwane is the CEO of Zambia-based investment firm Thebe Investment Management.'
  
    },
    {
        Name: 'Nolan Myers',
        Picture: './images/nolan mayers.jpg',
        ImageAlt: 'Nolan Myers',
        speakerTitle: 'CEO DOUBLE GDP',
        Bio: 'Nolan is a versatile leader with experience running customer success, professional services, operations, partnerships, and product.'
  
    },
    {
        Name: 'Doreen Okiri',
        Picture: './images/doreen1.jpg',
        ImageAlt: 'Doreen Okiri',
        speakerTitle: 'Head of customer Success DOUBLE GDP',
        Bio: 'Doreen is Specialised in Project management, software implementation and has extensive experience in SaaS customer success.'
  
    },
    {
        Name: 'Silumesii Maboshe',
        Picture: './images/silumesii.jpg',
        ImageAlt: 'Silumesii Maboshe',
        speakerTitle:'Co-Founder and Director',
        Bio:'Silumesii is a software developer, project manager, connector, researcher and has provided solutions to various customer  tech challenges.'
  
    },
    {
        Name: 'Ariel Camus',
        Picture: './images/Ariel.jpg',
        ImageAlt: 'Ariel Camus',
        speakerTitle:'Founder & CEO at Microverse',
        Bio:' Ariel believes that the place where you are born should not determine your opportunities in life.'
  
    },
    {
        Name: 'Butler Shimaluwani',
        Picture: './images/BUTTLER1.jpg',
        ImageAlt: 'Butler Shimaluwani',
        speakerTitle: 'Student at Microverse',
        Bio:'Butler is a full time student at Microverse, learning Full Stack Web Development.'
  
    },   
  ];

  function createSpeakerSection(cardData) {
    speakerCard.innerHTML = ' ';
  
    cardData.forEach((card) => {
      const cardMaster = `
  <div class="speaker1">
  <div class="grid-card">
  <img src="${card.Picture}" alt="${card.ImageAlt}"></div>
  
  <div class="card-content">
  <h3 class="speakerName">${card.Name}</h3>
  <h4 class="SpeakerTitle"><i>${card.speakerTitle}</i></h4>
  <p class="speakerText">${card.Bio}</p>
  </div>
  </div>
  </div>
  `;
  speakerCard.insertAdjacentHTML('afterbegin', cardMaster);
    });
  }
  
  createSpeakerSection(speakersinfo);

  const menuOverlay = document.querySelector('.mobileMenu');
  const cross = document.getElementById('crossIcon');
  const button = document.getElementById('humbergar');
  console.log(cross);

  function toggleMenu() {
      menuOverlay.style.position = 'inherit';
      cross.style.display = 'block';

      };

function closeMenu () {
    menuOverlay.style.position = 'fixed';
}

button.addEventListener('click', () => toggleMenu())

cross.addEventListener('click', ()=> closeMenu())