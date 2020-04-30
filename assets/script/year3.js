function displayFullImage(imageid){
  document.getElementById('fullscreen-view').classList.remove('hidden');
  document.getElementById(imageid).classList.remove('hidden');
}

function displayFirstImage() {
  displayFullImage("blinkingguy");
}

function displaySecondImage() {
  displayFullImage("distractedbf");
}

function displayThirdImage() {
  displayFullImage("mockingsb");
}

function displayFourthImage() {
  displayFullImage("rollsafe");
}

document.getElementById("image-1").onclick = displayFirstImage;
document.getElementById("image-2").onclick = displaySecondImage;
document.getElementById("image-3").onclick = displayThirdImage;
document.getElementById("image-4").onclick = displayFourthImage;

function closeScreen(imageid) {
	document.getElementById('fullscreen-view').classList.add('hidden');
	document.getElementById(imageid).classList.add('hidden');
}

function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array
	var lightboxElements = document.getElementsByClassName('fullscreen');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeScreen(id);
	}
}
document.getElementById("fullscreen-view").onclick = closeAllLightboxes;


//slideshow code
let width = 500;

let prevButton = document.getElementsByClassName("button-previous")[0];
let nextButton = document.getElementsByClassName("button-next")[0];
let imageRow = document.getElementsByClassName("slideshow")[0];

let prevButton1 = document.getElementsByClassName("button-previous")[1];
let nextButton1 = document.getElementsByClassName("button-next")[1];
let imageRow1 = document.getElementsByClassName("slideshow")[1];

let prevButton2 = document.getElementsByClassName("button-previous")[2];
let nextButton2 = document.getElementsByClassName("button-next")[2];
let imageRow2 = document.getElementsByClassName("slideshow")[2];

let prevButton3 = document.getElementsByClassName("button-previous")[3];
let nextButton3 = document.getElementsByClassName("button-next")[3];
let imageRow3 = document.getElementsByClassName("slideshow")[3];

let imageNum = 0;

function showNextImage() {
	imageNum = imageNum + 1;
	let newWidth = (width * imageNum) * -1;
	imageRow.style.left = newWidth + "px";
  checkControls();
}

function showPrevImage() {
	imageNum = imageNum - 1;
	let newWidth = (width * imageNum) * -1;
	imageRow.style.left = newWidth + "px";
	checkControls();
}

function checkControls() {
	if (imageNum == 0) {
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	if (imageNum == 3) {
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
}

nextButton.onclick = showNextImage;
prevButton.onclick = showPrevImage;

function showNextImage1() {
	imageNum = imageNum + 1;
	let newWidth = (width * imageNum) * -1;
	imageRow1.style.left = newWidth + "px";
  checkControls1();
}

function showPrevImage1() {
	imageNum = imageNum - 1;
	let newWidth = (width * imageNum) * -1;
	imageRow1.style.left = newWidth + "px";
	checkControls1();
}

function checkControls1() {
	if (imageNum == 0) {
		prevButton1.classList.add("hidden");
	}
	else if (prevButton1.classList.contains("hidden")) {
		prevButton1.classList.remove("hidden");
	}
	if (imageNum == 3) {
		nextButton1.classList.add("hidden");
	}
	else if (nextButton1.classList.contains("hidden")) {
		nextButton1.classList.remove("hidden");
	}
}

nextButton1.onclick = showNextImage1;
prevButton1.onclick = showPrevImage1;

function showNextImage2() {
	imageNum = imageNum + 1;
	let newWidth = (width * imageNum) * -1;
	imageRow2.style.left = newWidth + "px";
  checkControls2();
}

function showPrevImage2() {
	imageNum = imageNum - 1;
	let newWidth = (width * imageNum) * -1;
	imageRow2.style.left = newWidth + "px";
	checkControls2();
}

function checkControls2() {
	if (imageNum == 0) {
		prevButton2.classList.add("hidden");
	}
	else if (prevButton2.classList.contains("hidden")) {
		prevButton2.classList.remove("hidden");
	}
}

nextButton2.onclick = showNextImage2;
prevButton2.onclick = showPrevImage2;


function showNextImage3() {
	imageNum = imageNum + 1;
	let newWidth = (width * imageNum) * -1;
	imageRow3.style.left = newWidth + "px";
  checkControls3();
}

function showPrevImage3() {
	imageNum = imageNum - 1;
	let newWidth = (width * imageNum) * -1;
	imageRow3.style.left = newWidth + "px";
	checkControls3();
}

function checkControls3() {
	if (imageNum == 0) {
		prevButton3.classList.add("hidden");
	}
	else if (prevButton3.classList.contains("hidden")) {
		prevButton3.classList.remove("hidden");
	}
}

nextButton3.onclick = showNextImage3;
prevButton3.onclick = showPrevImage3;
