export function interactiveGallery() {
  const images = document.querySelectorAll('.gallery-image');
  
  function insertViewTransitionName() {
    images.forEach((image,i) => {
      image.style.viewTransitionName = `gallery-image-${i++}`;
    });
  }
  
  function animateItem(e) {
    const hero = document.querySelector('img[data-pos="1"]');
    const target = e.target;
    hero != target ? [hero.dataset.pos,target.dataset.pos] = [target.dataset.pos,hero.dataset.pos] : window.open(hero.src, '__blank');
  }
  
  function init(e) {
    if (!e.target.matches('img.gallery-image')) return;
    !document.startViewTransition
      ? animateItem(e)
      : document.startViewTransition(() => animateItem(e));
  }
  
  insertViewTransitionName();
  images.forEach((image) => image.addEventListener('click',init,false));
}