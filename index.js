const images = 'images/';
const imagesArray = ['1.jpg' ,'2.jpg' , '3.jpg' , '4.jpg' , '5.jpg' , '6.jpg' , '7.jpg' , '8.jpg' , '9.jpg' ];


function generateRandomImage(imagesArray){

    const img = document.querySelector("img");

	const randomNum = Math.floor(Math.random() * imagesArray.length);

    const imagePath = images + imagesArray[randomNum];

	img.src = imagePath;

}

generateRandomImage(imagesArray);