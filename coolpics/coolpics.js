const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector('.menu');
  if (!menu) return;
  menu.classList.toggle('hide');
}

if (menuButton) {
  menuButton.addEventListener('click', toggleMenu);
}

function handleResize() {
  const menu = document.querySelector('.menu');
  if (window.innerWidth > 700 && menu) {
    menu.classList.remove('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();

const modal = document.createElement('dialog');
modal.innerHTML = `
    <button class="close-viewer">X</button>
    <img src="" alt="">
`;
document.body.appendChild(modal);

const gallery = document.querySelector('.gallery');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

function showImageModal(event) {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) {
    return;
  }

  const smallSrc = clickedImage.src;
  const altText = clickedImage.alt;
  const fullSrc = smallSrc.replace('-sm.jpeg', '-full.jpeg');

  modalImage.src = fullSrc;
  modalImage.alt = altText;

  modal.showModal();
}

gallery.addEventListener('click', showImageModal);

closeButton.addEventListener('click', () => modal.close());

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});