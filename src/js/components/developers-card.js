import Data from '../../../developers.json';
import { linkedinRef, githubRef } from '../refs/refs';

const developers = Data.developers;

export function appendDevelopersMarkup() {
  let github = githubRef.getAttribute('href');
  let linkedIn = linkedinRef.getAttribute('href');

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
                 <svg class="dev-social-network__icon ">
                    <use class="icon-github" href=${github}></use>
               </svg>
                </a>
            </li>
            <li class="dev-social-network__item">
                <a class="dev-social-network__link" href="${linkedin}" target='_blank'>
              <svg class="dev-social-network__icon" >
               <use class="icon-linkedin" href=${linkedIn}></use>              
              </svg>
                </a>
            </li>
        </ul>
    </div>
</li>`;
    })
    .join('');
}
