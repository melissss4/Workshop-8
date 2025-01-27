let button;
let img;

function setup() {
  createCanvas(400, 400);
  
  button = createButton('Push for Image');
  button.position(150, 350);
  button.mousePressed(fetchRandomImage); 
  
  img = null;
}

function draw() {
  background(220);
  
  if (img) {
    image(img, 50, 50, 300, 300);
  } else {
    textSize(16);
    textAlign(CENTER);
    text('Click the button to get a random dog image!', width / 2, height / 2);
  }
}

function fetchRandomImage() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      img = loadImage(data.message); 
    })
  
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}