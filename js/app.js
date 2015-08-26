
// function constructor to create each character object
// the last porperty of each object is the location of the image in the game folder
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


// array of every character object
var characterArray = [adam, beth, cyril, grandpa, krieger, linda, lois, meg, mort, morty, pam, peter, ray, ron, summer, 
	archer, bob, fischoeder, goldenfold, hugo, jessica, malory, rick, steve, tina];

// array used to randomize the order of the characters on the gameboard
var randomArray = [];


// all character objects from characterArray are pushed into randomArray
// then a random number between 1 and the length of randomArray generated
// this random number is used as an index to pull that element(character object) out of the array(using splice)
// that random character object is returned
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


// variable to determine player turn
var playerOneTurn = null;


$(function() {

	// functions to populate the board(each card) using the chooseRandomCharacter function above
	// each of the character objects property values are stored in the class "traits", each with a unique ID
	// the IDs are determined by which trait is being stored in which card
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

	
	// function that executes the previous two functions
	// also does not allow both players to ahve the same target
	function populate() {
		populate1();

		populate2();

		if (($('.p1target').css('background-image')) == ($('.p2target').css('background-image'))) {
			populate2();
		}
	}


	// event listener for the START! plate shown when the page loads
	$('#start').click(function() {
		$('#start').css('display', 'none');
		playerOneTurn = true;
		$('#player1-plate').toggle();
		populate();
		$('#gb1').toggle();
		$('#gb2').toggle();
	});
	

	// event listener which shows the overlay for each card
	// the overlay effect was achieved by wrapping the 'card div' and the 'overlay div' in a 'containing div'
	// the 'overlay' was set to 'display: none;', then this event listener calls it to fade in and fade out on hover
	$('.container').hover(function() {
		$(this).find('.overlay').fadeIn(300);
	}, function() {
		$(this).find('.overlay').stop().fadeOut(100);
	});


	// event listener which 'highlights' each trait on hover
	// each trait was listed in the 'overlay div'
	// traits listed as 'null' do not appear here
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


	// functions to eliminate the correct cards based on the selected trait, and how that relates to the target's traits
	// the event listener that executes this function is written below
	function checkBoard2(e) {
		var selectedTrait = e.target.innerHTML;

		// compares the selected trait to all the traits of the opponenet's target
		// apparently, when calling an element by ID, this function returned a single item array, hence the [0]
		if ((selectedTrait === $('#b225')[0].innerHTML) || 
									(selectedTrait === $('#c225')[0].innerHTML) || 
									(selectedTrait === $('#d225')[0].innerHTML) || 
									(selectedTrait === $('#e225')[0].innerHTML) || 
									(selectedTrait === $('#f225')[0].innerHTML) || 
									(selectedTrait === $('#g225')[0].innerHTML)) {

			// on a match, all cards which do not possess that trait are discarded
			// discarded cards' opacity is changed to 0.1, allowing the player to keep track of which cards were discarded
			// this is done by iterating through every trait on a give card and searching for a match
			// the variables in the loop are set to match the unique IDs of each trait on each card
			for (var i = 101; i < 125; i++) {
				if (!((selectedTrait === $('#b' + i)[0].innerHTML) || 
											  (selectedTrait === $('#c' + i)[0].innerHTML) || 
											  (selectedTrait === $('#d' + i)[0].innerHTML) || 
											  (selectedTrait === $('#e' + i)[0].innerHTML) || 
											  (selectedTrait === $('#f' + i)[0].innerHTML) || 
											  (selectedTrait === $('#g' + i)[0].innerHTML))) {
					$('#' + i).css({
						'opacity': '0.1'
					});
				}
			}
		} else {

			// if the selected trait does not match any of the target's traits, all cards possessing the selected trait are discarded
			for (var x = 101; x < 125; x++) {
				if ((selectedTrait === $('#b' + x)[0].innerHTML) || 
											(selectedTrait === $('#c' + x)[0].innerHTML) || 
											(selectedTrait === $('#d' + x)[0].innerHTML) || 
											(selectedTrait === $('#e' + x)[0].innerHTML) || 
											(selectedTrait === $('#f' + x)[0].innerHTML) || 
											(selectedTrait === $('#g' + x)[0].innerHTML)) {
					$('#' + x).css({
						'opacity': '0.1'
					});
				}
			}
		}
	}


	function checkBoard1(e) {
		var selectedTrait = e.target.innerHTML;

		if ((selectedTrait === $('#b125')[0].innerHTML) || 
									(selectedTrait === $('#c125')[0].innerHTML) || 
									(selectedTrait === $('#d125')[0].innerHTML) || 
									(selectedTrait === $('#e125')[0].innerHTML) || 
									(selectedTrait === $('#f125')[0].innerHTML) || 
									(selectedTrait === $('#g125')[0].innerHTML)) {
			for (var i = 201; i < 225; i++) {
				if (!((selectedTrait === $('#b' + i)[0].innerHTML) || 
											  (selectedTrait === $('#c' + i)[0].innerHTML) || 
											  (selectedTrait === $('#d' + i)[0].innerHTML) || 
											  (selectedTrait === $('#e' + i)[0].innerHTML) || 
											  (selectedTrait === $('#f' + i)[0].innerHTML) || 
											  (selectedTrait === $('#g' + i)[0].innerHTML))) {
					$('#' + i).css({
						'opacity': '0.1'
					});
				}
			}
		} else {
			for (var x = 201; x < 225; x++) {
				if ((selectedTrait === $('#b' + x)[0].innerHTML) || 
											(selectedTrait === $('#c' + x)[0].innerHTML) || 
											(selectedTrait === $('#d' + x)[0].innerHTML) || 
											(selectedTrait === $('#e' + x)[0].innerHTML) || 
											(selectedTrait === $('#f' + x)[0].innerHTML) || 
											(selectedTrait === $('#g' + x)[0].innerHTML)) {
					$('#' + x).css({
						'opacity': '0.1'
					});
				}
			}
		}
	}


	// function used to change the value of 'playerOneTurn'
	// also used to show the 'end plate' of each player's turn
	function switchTurn() {
		if (playerOneTurn === true) {
			$('#player1-end-plate').toggle();
			playerOneTurn = false;
		} else {
			$('#player2-end-plate').toggle();
			playerOneTurn = true;
		}		
	}


	// event listeners to clear the 'end plate' of a player's turn, and show the 'start plate' of the next player's turn
	// also used to toggle the visibility of each player's board
	$('#player1-end-plate').click(function() {
		$('#player2-plate').toggle();
		$('#player1-end-plate').toggle();
		$('#gb1').toggle();
		$('#gb2').toggle();
	})

	$('#player2-end-plate').click(function() {
		$('#player1-plate').toggle();
		$('#player2-end-plate').toggle();
		$('#gb1').toggle();
		$('#gb2').toggle();
	})


	// event listeners to clear the 'start plate' of each player's turn
	$('#player1-plate').click(function() {
		$('#player1-plate').toggle();
	});

	$('#player2-plate').click(function() {
		$('#player2-plate').toggle();
	});


	// event listeners which execute the functions to eliminate cards, and to change the player turn
	$('#gb1').find('.traits').click(function() {
		checkBoard2(event);
		switchTurn();
	});

	$('#gb2').find('.traits').click(function() {
		checkBoard1(event);
		switchTurn();
	});

});























