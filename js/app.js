
playerOneTurn = true;

function Character(name, sex, hair, glasses, facialHair, shirt, outerwear, location) {
	this.name = name;
	this.sex = sex;
	this.hair = hair;
	this.glasses = glasses;
	this.facialHair = facialHair;
	this.shirt = shirt;
	this.outerwear = outerwear;
	this.location = location;
}

var adam = new Character('Adam West', 'Male', 'Grey Hair', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Adam-West.jpg');
var beth = new Character('Beth', 'Female', 'Blonde', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Beth.JPG');
var cyril = new Character('Cyril', 'male', 'Black Hair', 'Glasses', 'No Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Cyril.jpg');
var grandpa = new Character('Grandpa', 'male', 'Grey Hair', 'No Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'Outerwear', 'images/Grandpa.jpg');
var krieger = new Character('Dr. Krieger', 'male', 'Brown Hair', 'No Glasses', 'Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Krieger.jpg');
var linda = new Character('Linda', 'female', 'Black Hair', 'Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'No Outerwear', 'images/Linda.jpg');
var lois = new Character('Lois', 'female', 'Red Hair', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Lois.jpg');
var meg = new Character('Meg', 'female', 'Brown Hair', 'Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'No Outerwear', 'images/Meg.jpg');
var mort = new Character('Mort', 'male', 'Red Hair', 'Glasses', 'No Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Mort.gif');
var morty = new	Character('Morty', 'male', 'Brown Hair', 'No Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'No Outerwear', 'images/Morty.JPG');
var pam = new Character('Pam', 'female', 'Blonde', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Pam.jpg');
var peter = new Character('Peter', 'male', 'Brown Hair', 'Glasses', 'No Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Peter.jpg');
var ray = new Character('Ray', 'male', 'Blonde', 'No Glasses', 'Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Ray.jpg');
var ron = new Character('Ron', 'male', 'Red Hair', 'No Glasses', 'Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Ron.jpg');
var summer = new Character('Summer', 'female', 'Red Hair', 'No Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'No Outerwear', 'images/Summer.JPG');
var archer = new Character('Archer', 'male', 'Black Hair', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Archer.png');
var bob = new Character('Bob', 'male', 'Black Hair', 'No Glasses', 'Facial Hair', 'Non-Collared Shirt', 'Outerwear', 'images/Bob.png');
var fischoeder = new Character('Mr. Fischoeder', 'male', 'Grey Hair', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Fischoeder.png');
var goldenfold = new Character('Mr. Goldenfold', 'male', 'Black Hair', 'No Glasses', 'Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Goldenfold.png');
var hugo = new Character('Hugo', 'male', 'Blonde', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Hugo.png');
var jessica = new Character('Jessica', 'female', 'Red Hair', 'No Glasses', 'No Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Jessica.png');
var malory = new Character('Malory', 'female', 'Grey Hair', 'No Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'Outerwear', 'images/Malory.png');
var rick = new Character('Rick', 'male', 'Grey Hair', 'No Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'Outerwear', 'images/Rick.png');
var steve = new Character('Uncle Steve', 'male', 'Brown Hair', 'No Glasses', 'Facial Hair', 'Collared Shirt', 'No Outerwear', 'images/Steve.png');
var tina = new Character('Tina', 'female', 'Black Hair', 'Glasses', 'No Facial Hair', 'Non-Collared Shirt', 'No Outerwear', 'images/Tina.png');

var characterArray = [adam, beth, cyril, grandpa, krieger, linda, lois, meg, mort, morty, pam, peter, ray, ron, summer, 
	archer, bob, fischoeder, goldenfold, hugo, jessica, malory, rick, steve, tina];

var randomArray = [];


function chooseRandomCharacter() {
	if (!randomArray.length) {
		for (var i = 0; i < 25; i++) {
			randomArray.push(characterArray[i]);
		}
	}

	var index = Math.floor(Math.random() * randomArray.length);
	var randomCharacter = randomArray[index];

	randomArray.splice(index, 1);

	return randomCharacter;
}


var player1Array = [];

var player2Array = [];


$(function() {


// attempting to add '.data' to each card to hold the properties of the object whose image is on that card
	// changes made to html adding spans nested inside each overlay
	// changes made to '.hover' function to show traits inside each span
	function populate1() {
		for (var i = 101; i < 126; i++) {
			var rand = chooseRandomCharacter();

			$('#' + i).css('background-image', 'url(' + rand.location + ')');

			player1Array.push(rand);
		}

		console.log(player1Array);
	}



	function populate2() {
		for (var x = 201; x < 226; x++) {
			var rand = chooseRandomCharacter();

			$('#' + x).css('background-image', 'url(' + rand.location + ')');

			player2Array.push(rand);
		}

		console.log(player2Array);
	}

	function populate() {
		populate1();

		populate2();

		if (($('.p1target').css('background-image')) == ($('.p2target').css('background-image'))) {
			populate2;
		}
	}


	$('#start').click(function(){
		populate();
		$('#start').css('display', 'none');
	});


	function switchTurn() {
		$('#gb1').toggle();
		$('#gb2').toggle();

		if (playerOneTurn === true) {
			playerOneTurn = false;
		} else {
			playerOneTurn = true;
		}		
	}


	$('.guesswho').click(function(){
		switchTurn();
	})


	$('.container').hover(function() {
		$(this).find('.overlay').fadeIn(300);
	}, function() {
		$(this).find('.overlay').stop().fadeOut(100);
	});


	$('.container').hover(function() {

	}, function() {

	});

		// $(this).find('.name').text( $.data($(this).find('.cards')), "traits").name );
});























