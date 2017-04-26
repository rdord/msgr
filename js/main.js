addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--left', `${e.pageX}px`);
  document.documentElement.style.setProperty('--top', `${e.pageY}px`);
});


