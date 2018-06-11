import options from '../options';

const theme = options.getOption('theme').then(themeName => {
  document.getElementsByTagName('html')[0].setAttribute('class', 'theme-'+themeName);
});
