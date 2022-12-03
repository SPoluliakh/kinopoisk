const developers = [
  {
    name: 'Sergii Poluliakh',
    position: 'Team lead',
    git: 'https://github.com/SPoluliakh',
    linkedin: 'https://www.linkedin.com/in/sergii-poluliakh/',
    photo300: 'https://i.ibb.co/L0WX694/300.jpg',
    photo600: 'https://i.ibb.co/42myh6n/600.jpg',
  },
  {
    name: 'Vlad Popov',
    position: 'Scrum master',
    git: 'https://github.com/StudentVlad5',
    linkedin: 'https://www.linkedin.com/in/vladyslav-popov-a491232a/',
    photo300: 'https://i.ibb.co/0Jfz9h0/image.jpg',
    photo600: 'https://i.ibb.co/0Jfz9h0/image.jpg',
  },
];

import Data from '../../../developers.json';

import { linkedinRef, githubRef } from '../refs/refs';

// const developers = Data.developers;

export function appendDevelopersMarkup() {
  const github = '/sprite.f14d31f7.svg#icon-github';
  const linkedIn = '/sprite.f14d31f7.svg#icon-linkedin';

  return developers
    .map(({ name, position, git, photo300, photo600, linkedin }) => {
      return `<li class="dev-modal__card">
        <img class="dev-modal__picture" src="${photo300}" alt="${name} >
    <div class="dev-modal__wrapper">
        <h2 class="dev-modal__name">${name}</h2>
        <p class="dev-modal__position">${position}</p>
        <ul class="dev-social-network">
            <li class="dev-social-network__item">
                <a class="dev-social-network__link" href="${git}" target='_blank'>
                 <svg class="dev-social-network__icon icon-github">
                    <use href="${github}"></use>
               </svg>
                </a>
            </li>
            <li class="dev-social-network__item">
                <a class="dev-social-network__link" href="${linkedin}" target='_blank'>
              <svg
              class="dev-social-network__icon icon-linkedin">                  
                <use href="${linkedIn}"></use>
                  </svg>
                </a>
            </li>
        </ul>
    </div>
</li>`;
    })
    .join('');
}
