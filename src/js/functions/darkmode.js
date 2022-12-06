import Darkmode from 'darkmode-js';

export function darkmode() {
  const options = {
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    autoMatchOsTheme: true,
  };

  const darkmode = new Darkmode(options);

  const checkbox = document.getElementById('checkbox');
  if (localStorage.getItem('darkmode') === 'true') {
    checkbox.checked = 'true';
  }

  checkbox.addEventListener('change', () => {
    darkmode.toggle();
  });

  if (document.querySelector('.library-page')) {
    document.querySelector('.footer').classList.add('library-footer');
    document
      .querySelector('.checkbox-label')
      .classList.add('library-checkbox-label');
    document.querySelector('main').classList.add('library-main');
    document.querySelector('.pagination').classList.add('library-pagination');
  } else {
    document.querySelector('.footer').classList.remove('library-footer');
    document
      .querySelector('.checkbox-label')
      .classList.remove('library-checkbox-label');
    document.querySelector('main').classList.remove('library-main');
    document.querySelector('pagination').classList.remove('library-pagination');
  }
}
