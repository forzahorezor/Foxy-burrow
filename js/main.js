
  const buttons = document.querySelectorAll('.hits_btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      
      buttons.forEach(btn => btn.classList.remove('active_btn'));

      
      button.classList.add('active_btn');
    });
  });
