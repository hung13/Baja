// ================== MODAL JS ================================

function openModal(){
	document.getElementById("myModal").style.display = "block";
	document.body.style.overflow = "hidden";
}

function closeModal(){
	document.getElementById("myModal").style.display = "none";
	document.body.style.overflow = "";
}

var slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var slides = document.getElementsByClassName("mySlides"),
		captionText = document.getElementById("caption");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {slideIndex = slides.length;}

	for (var i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}

// ==================== RESPONSIVE NAV BAR JS ===============

function myFunction(){
	var x = document.getElementById("myNavBar");
	if (x.className === "topNav"){
		x.className += " responsive";
	} else{
		x.className = "topNav";
	}
}

// =================== MANSONRY JS ========================
