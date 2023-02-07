'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💜 Sabia que dirias que chii 😌, no mentira si estaba nervioso 😅 jajaja XD ');
    alert('💜 Y es que, yo no estaba buscando nada en absoluto cuando te conocí. En realidad, yo no estaba pensando en enamorarme de alguien tan pronto, pero luego te conocí, y eso fue todo. Supongo que las cosas solo sucedieron, te encontré y me encontré queriendo pasar más tiempo contigo, y creo que es así como empiezan las mejores relaciones. TÚ NO ESTABAS BUSCANDO NADA Y DE REPENTE YA TIENES TODO 😍 ');
    location.href = 'https://youtu.be/mX_OygXHyNs?t=14';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };
  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);