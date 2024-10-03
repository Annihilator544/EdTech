const windowWidth = window.innerWidth;
const imageWidth = 1440;
const imageHeight = 5570;
const windowHeight = (imageHeight / imageWidth) * windowWidth;

const image = document.querySelector('.image');
image.style.width = `${windowWidth}px`;
image.style.height = `${windowHeight}px`;

//recalculate the height of the image when the window is resized
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  const windowHeight = (imageHeight / imageWidth) * windowWidth;
  image.style.width = `${windowWidth}px`;
  image.style.height = `${windowHeight}px`;
});
