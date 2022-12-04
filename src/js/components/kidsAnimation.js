import Letterize from 'letterizejs';
import anime from 'animejs/lib/anime.es.js';

// Анимация текста
const test = new Letterize({
  targets: '.animate-me',
});
const animation = anime.timeline({
  targets: test.listAll,
  delay: anime.stagger(100, {
    grid: [test.list[0].length, test.list.length],
    from: 'center',
  }),
  loop: true,
});

animation
  .add({
    scale: 0.5,
  })
  .add({
    letterSpacing: '10px',
  })
  .add({
    scale: 1,
  })
  .add({
    letterSpacing: '6px',
  });

// ======== Анимация улитки =============
let design = anime({
  targets: 'svg #XMLID5',
  keyframes: [
    { translateX: -1200 },
    { rotateY: 180 },
    { translateX: 1500 },
    { rotateY: 0 },
    { translateX: -1200 },
    { rotateY: 180 },
    { translateX: 300 },
  ],
  easing: 'easeInOutSine',
  duration: 60000,
});
