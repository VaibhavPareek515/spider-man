const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 200;
const currentFrame = index => (
		`./img/image/ezgif-frame-${index.toString().padStart(3,"0")}.jpg`
	)

const preloadImages = ()=> {
	for(let i=0;i<frameCount;i++) {
		const img = new Image();
		img.src = currentFrame(i);
	}
}

const img = new Image()
img.src = currentFrame(1);
canvas.width=570;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}


const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()