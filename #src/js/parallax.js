
const parallax = () => {
  const parallaxContainer = document.querySelector('.parallax');
  
  if (parallaxContainer) {
    const parallaxItems = document.querySelectorAll('.parallax__item');
    const coefficient = [10, 20, 15, 12];
    const containerCoefficient = -100;
    const speed = 0.05;
  
    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;
  
    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;
    
      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);
  
      parallaxContainer.style.cssText = `transform: translate(
        ${positionX / containerCoefficient}%,${positionY / (4 * containerCoefficient)}%);`;
      parallaxItems.forEach((it, i) => {
        it.style.cssText = `transform: translate(${positionX / coefficient[i]}%,${positionY / (2 * coefficient[i])}%);`;
      });
    
      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();
  
    parallaxContainer.addEventListener("mousemove", function (e) {
      
      const parallaxWidth = parallaxContainer.offsetWidth;
      const parallaxHeight = parallaxContainer.offsetHeight;
      
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;
      
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }
}

window.addEventListener('DOMContentLoaded', parallax);