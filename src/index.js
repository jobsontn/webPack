import './style.scss';

const textComponent = () => {
  const elH1 = document.createElement('h1');
  elH1.innerHTML = 'Olá Mundo';
  return elH1;
}

document.body.appendChild(textComponent());