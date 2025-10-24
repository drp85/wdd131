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

function viewHandler(event) {
  if (event.target.tagName === 'IMG') {
    const clickedImage = event.target;
    const fullSrc = clickedImage.src.replace('-sm', '-full');

    const dialog = document.createElement('dialog');
    dialog.innerHTML = `<button class="close-viewer">X</button><img src="${fullSrc}" alt="${clickedImage.alt}">`;

    dialog.querySelector('.close-viewer').addEventListener('click', () => {
      dialog.close();
      dialog.remove();
    });

    document.body.appendChild(dialog);
    dialog.showModal();
  }
}

const gallery = document.querySelector('.gallery');
if (gallery) {
  gallery.addEventListener('click', viewHandler);
}