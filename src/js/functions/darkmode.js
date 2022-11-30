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
}
