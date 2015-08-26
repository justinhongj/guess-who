
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

var adam = new Character('Adam West', 'Male', 'Grey Hair', null, null, 'Collared Shirt', 'Outerwear', 'images/Adam-West.jpg');
var beth = new Character('Beth', 'Female', 'Blonde', null, null, 'Collared Shirt', null, 'images/Beth.JPG');
var cyril = new Character('Cyril', 'Male', 'Black Hair', 'Glasses', null, 'Collared Shirt', 'Outerwear', 'images/Cyril.jpg');
var grandpa = new Character('Grandpa', 'Male', 'Grey Hair', null, null, null, 'Outerwear', 'images/Grandpa.jpg');
var krieger = new Character('Dr. Krieger', 'Male', 'Brown Hair', null, 'Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Krieger.jpg');
var linda = new Character('Linda', 'Female', 'Black Hair', 'Glasses', null, null, null, 'images/Linda.jpg');
var lois = new Character('Lois', 'Female', 'Red Hair', null, null, 'Collared Shirt', null, 'images/Lois.jpg');
var meg = new Character('Meg', 'Female', 'Brown Hair', 'Glasses', null, null, null, 'images/Meg.jpg');
var mort = new Character('Mort', 'Male', 'Red Hair', 'Glasses', null, 'Collared Shirt', 'Outerwear', 'images/Mort.gif');
var morty = new	Character('Morty', 'Male', 'Brown Hair', null, null, null, null, 'images/Morty.JPG');
var pam = new Character('Pam', 'Female', 'Blonde', null, null, 'Collared Shirt', null, 'images/Pam.jpg');
var peter = new Character('Peter', 'Male', 'Brown Hair', 'Glasses', null, 'Collared Shirt', null, 'images/Peter.jpg');
var ray = new Character('Ray', 'Male', 'Blonde', null, 'Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Ray.jpg');
var ron = new Character('Ron', 'Male', 'Red Hair', null, 'Facial Hair', 'Collared Shirt', null, 'images/Ron.jpg');
var summer = new Character('Summer', 'Female', 'Red Hair', null, null, null, null, 'images/Summer.JPG');
var archer = new Character('Archer', 'Male', 'Black Hair', null, null, 'Collared Shirt', 'Outerwear', 'images/Archer.png');
var bob = new Character('Bob', 'Male', 'Black Hair', null, 'Facial Hair', null, 'Outerwear', 'images/Bob.png');
var fischoeder = new Character('Mr. Fischoeder', 'Male', 'Grey Hair', null, null, 'Collared Shirt', 'Outerwear', 'images/Fischoeder.png');
var goldenfold = new Character('Mr. Goldenfold', 'Male', 'Black Hair', null, 'Facial Hair', 'Collared Shirt', 'Outerwear', 'images/Goldenfold.png');
var hugo = new Character('Hugo', 'Male', 'Blonde', null, null, 'Collared Shirt', null, 'images/Hugo.png');
var jessica = new Character('Jessica', 'Female', 'Red Hair', null, null, 'Collared Shirt', null, 'images/Jessica.png');
var malory = new Character('Malory', 'Female', 'Grey Hair', null, null, null, 'Outerwear', 'images/Malory.png');
var rick = new Character('Rick', 'Male', 'Grey Hair', null, null, null, 'Outerwear', 'images/Rick.png');
var steve = new Character('Uncle Steve', 'Male', 'Brown Hair', null, 'Facial Hair', 'Collared Shirt', null, 'images/Steve.png');
var tina = new Character('Tina', 'Female', 'Black Hair', 'Glasses', null, null, null, 'images/Tina.png');

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



	function populate1() {
		for (var i = 101; i < 126; i++) {
			var rand = chooseRandomCharacter();

			$('#' + i).css('background-image', 'url(' + rand.location + ')');

			$('#a' + i).html(rand.name);
			$('#b' + i).html(rand.sex);
			$('#c' + i).html(rand.hair);
			$('#d' + i).html(rand.glasses);
			$('#e' + i).html(rand.facialHair);
			$('#f' + i).html(rand.shirt);
			$('#g' + i).html(rand.outerwear);
		}

	}



	function populate2() {
		for (var x = 201; x < 226; x++) {
			var rand = chooseRandomCharacter();

			$('#' + x).css('background-image', 'url(' + rand.location + ')');

			$('#a' + x).html(rand.name);
			$('#b' + x).html(rand.sex);
			$('#c' + x).html(rand.hair);
			$('#d' + x).html(rand.glasses);
			$('#e' + x).html(rand.facialHair);
			$('#f' + x).html(rand.shirt);
			$('#g' + x).html(rand.outerwear);

		}

	}

	function populate() {
		populate1();

		populate2();

		if (($('.p1target').css('background-image')) == ($('.p2target').css('background-image'))) {
			populate2();
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


	$('.traits').hover(function(event) {
		$(event.target).css({
			'font-weight': 'bold',
			'font-size': '0.8em'
		});
	}, function() {
		$(event.target).css({
			'font-weight': 'normal',
			'font-size': '0.7em'
		});
	});


	function checkBoard2(e) {
		console.log(e.target);
		console.log(e.target.innerHTML);
		console.log($('#b201')[0].innerHTML);
		if (e.target.innerHTML == ($('#b225')[0].innerHTML || 
			$('#c225')[0].innerHTML || 
			$('#d225')[0].innerHTML || 
			$('#e225')[0].innerHTML || 
			$('#f225')[0].innerHTML || 
			$('#g225')[0].innerHTML)) {
			for (var i = 101; i < 125; i++) {
				if (!(e.target.innerHTML == ($('#b' + i)[0].innerHTML || 
					$('#c' + i)[0].innerHTML || 
					$('#d' + i)[0].innerHTML || 
					$('#e' + i)[0].innerHTML || 
					$('#f' + i)[0].innerHTML || 
					$('#g' + i)[0].innerHTML))) {
					$('#' + i).css('opacity', '0.1');
				}
			}
		} else {
			for (var x = 101; x < 125; x++) {
				if (e.target.innerHTML == ($('#b' + x)[0].innerHTML || 
					$('#c' + x)[0].innerHTML || 
					$('#d' + x)[0].innerHTML || 
					$('#e' + x)[0].innerHTML || 
					$('#f' + x)[0].innerHTML || 
					$('#g' + x)[0].innerHTML)) {
					$('#' + x).css('opacity', '0.1');
				}
			}
		}
	}


	function checkBoard1(e) {
		if (e.target == ('#b125' || '#c125' || '#d125' || '#e125' || '#f125' || '#g125')) {
			for (var i = 101; i < 125; i++) {
				if (!(e.target == ('#b' + i || '#c' + i || '#d' + i || '#e' + i || '#f' + i || '#g' + i))) {
					$('#' + (i + 100)).css('opacity', '0.1');
				}
			}
		} else {
			for (var x = 101; x < 125; x++) {
				if (e.target == ('#b' + x || '#c' + x || '#d' + x || '#e' + x || '#f' + x || '#g' + x)) {
					$('#' + (x + 100)).css('opacity', '0.1');
				}
			}
		}
	}


	$('#gb1').find('.traits').click(function() {
		checkBoard2(event);
	});

	$('#gb2').find('.traits').click(function() {
		checkBoard1(event);
	});

});























