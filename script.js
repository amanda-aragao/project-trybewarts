const applyLogin = () => {
  const getButton = document.querySelector('.btn-login');
  const getEmail = document.querySelector('#floatingInput');
  const getPassword = document.querySelector('#floatingPassword');
  getButton.addEventListener('click', () => {
    const emailValue = getEmail.value;
    const passwordlValue = getPassword.value;
    if (emailValue === 'tryber@teste.com' && passwordlValue === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};

window.onload = () => {
  applyLogin();
};
