window.addEventListener('load', function () {
  function toggleAOS() {
    if (window.innerWidth > 768) {
      AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
      });
    } else {
      AOS.init({
        disable: true,
      });
    }
  }

  toggleAOS();

  window.addEventListener('resize', toggleAOS);
});
