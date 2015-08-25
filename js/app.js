
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

var adam = new Character('Adam West', 'male', 'grey', false, false, 'collared', true, 'images/Adam-West.jpg');
var beth = new Character('Beth', 'female', 'blonde', false, false, 'collared', false, 'images/Beth.JPG');
var cyril = new Character('Cyril', 'male', 'black', true, false, 'collared', true, 'images/Cyril.jpg');
var grandpa = new Character('Grandpa', 'male', 'grey', false, false, null, true, 'images/Grandpa.jpg');
var krieger = new Character('Dr. Krieger', 'male', 'brown', false, true, 'collared', true, 'images/Krieger.jpg');
var linda = new Character('Linda', 'female', 'black', true, false, null, false, 'images/Linda.jpg');
var lois = new Character('Lois', 'female', 'red', false, false, 'collared', false, 'images/Lois.jpg');
var meg = new Character('Meg', 'female', 'brown', true, false, null, false, 'images/Meg.jpg');
var mort = new Character('Mort', 'male', 'red', true, false, 'collared', true, 'images/Mort.gif');
var morty = new	Character('Morty', 'male', 'brown', false, false, null, false, 'images/Morty.JPG');
var pam = new Character('Pam', 'female', 'blonde', false, false, 'collared', false, 'images/Pam.jpg');
var peter = new Character('Peter', 'male', 'brown', true, false, 'collared', false, 'images/Peter.jpg');
var ray = new Character('Ray', 'male', 'blonde', false, true, 'collared', true, 'images/Ray.jpg');
var ron = new Character('Ron', 'male', 'red', false, true, 'collared', false, 'images/Ron.jpg');
var summer = new Character('Summer', 'female', 'red', false, false, null, false, 'images/Summer.JPG');
var archer = new Character('Archer', 'male', 'black', false, false, 'collared', true, 'images/Archer.png');
var bob = new Character('Bob', 'male', 'black', false, true, null, true, 'images/Bob.png');
var fischoeder = new Character('Mr. Fischoeder', 'male', 'grey', false, false, 'collared', true, 'images/Fischoeder.png');
var goldenfold = new Character('Mr. Goldenfold', 'male', 'black', false, true, 'collared', true, 'images/Goldenfold.png');
var hugo = new Character('Hugo', 'male', 'blonde', false, false, 'collared', false, 'images/Hugo.png');
var jessica = new Character('Jessica', 'female', 'red', false, false, 'collared', false, 'images/Jessica.png');
var malory = new Character('Malory', 'female', 'grey', false, false, null, true, 'images/Malory.png');
var rick = new Character('Rick', 'male', 'grey', false, false, null, true, 'images/Rick.png');
var steve = new Character('Uncle Steve', 'male', 'brown', false, true, 'collared', false, 'images/Steve.png');
var tina = new Character('Tina', 'female', 'black', true, false, null, false, 'images/Tina.png');

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
	}



	function populate2() {
		for (var x = 201; x < 226; x++) {
			var rand = chooseRandomCharacter();

			$('#' + x).css('background-image', 'url(' + rand.location + ')');

			player2Array.push(rand);
		}
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























