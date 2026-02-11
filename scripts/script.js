$(document).ready(function(){
	// comment out the below line to quickly populate a spread
	$("#submitTarotButtonDebugger").hide();
	
	$("#pastCardStatus").text("Empty");
	$("#presentCardStatus").text("Empty");
	$("#futureCardStatus").text("Empty");
	$("#cardOneOfFiveStatus").text("Empty");
	$("#cardTwoOfFiveStatus").text("Empty");
	$("#cardThreeOfFiveStatus").text("Empty");
	$("#cardFourOfFiveStatus").text("Empty");
	$("#cardFiveOfFiveStatus").text("Empty");
	$("#cardOneOfSevenStatus").text("Empty");
	$("#cardTwoOfSevenStatus").text("Empty");
	$("#cardThreeOfSevenStatus").text("Empty");
	$("#cardFourOfSevenStatus").text("Empty");
	$("#cardFiveOfSevenStatus").text("Empty");
	$("#cardSixOfSevenStatus").text("Empty");
	$("#cardSevenOfSevenStatus").text("Empty");
	$("#submitTarotButton").hide();
	$('input[name="time_card"]').prop('checked', false);
	$("#promptReview").text("");
	$("#promptReview").hide();
	$("#GPTResult").text("");
	$("#GPTResult").hide();
	$("#submitTarotButtonGPT").hide();	
	$("#resetButton").hide();	
	
	$("#threeCardSpreadTop").hide();
	$("#fiveCardSpreadTop").hide();
	$("#sevenCardSpreadTop").hide();
	
  $("input[name='spread_card']").change(function() {
	var selectedSpread = $("input[type='radio'][name=spread_card]:checked", '#spreadRadio').val();
	$("#suitRadio").hide();
	$("#arcanaRadio").hide();
	$("#wandsRadio").hide();
	$("#cupsRadio").hide();
	$("#swordsRadio").hide();
	$("#pentaclesRadio").hide();
	$("#positionRadio").hide();
	$('input[name="suit_card"]').prop('checked', false);
	$('input[name="suitRadio"]').prop('checked', false);
	$("#timeRadio").hide();
	$("#fiveCardRadio").hide();
	$("#sevenCardRadio").hide();
	$("#threeCardSpreadTop").hide();
	$("#fiveCardSpreadTop").hide();
	$("#sevenCardSpreadTop").hide();
	if (selectedSpread == "Three") {		
		$("#timeRadio").show();
		$("#threeCardSpreadTop").show();
	}
	else if (selectedSpread == "Five Linear") {
		$('#fiveCardSpreadImage').prop("src", "images/5cardlinear.png");
		$("#cardOneOfFive").text("1 - Past");
		$("#cardTwoOfFive").text("2 - Present");
		$("#cardThreeOfFive").text("3 - Future");
		$("#cardFourOfFive").text("4 - Advice");
		$("#cardFiveOfFive").text("5 - Outcome");
		$("#fiveCardRadio").show();
		$("#fiveCardSpreadTop").show();
	}
	else if (selectedSpread == "Five Cross") {
		$('#fiveCardSpreadImage').prop("src", "images/5cardcross.png");
		$("#cardOneOfFive").text("1 - Challenge");
		$("#cardTwoOfFive").text("2 - Past");
		$("#cardThreeOfFive").text("3 - Present");
		$("#cardFourOfFive").text("4 - Future");
		$("#cardFiveOfFive").text("5 - Advice");
		$("#fiveCardRadio").show();
		$("#fiveCardSpreadTop").show();
	}
	else if (selectedSpread == "Seven Split") {
		$('#sevenCardSpreadImage').prop("src", "images/7cardsplit.png");
		$("#cardOneOfSeven").text("1 - Situation");
		$("#cardTwoOfSeven").text("2 - Option A - Strength");
		$("#cardThreeOfSeven").text("3 - Option A - Challenges");
		$("#cardFourOfSeven").text("4 - Option A - Outcome");
		$("#cardFiveOfSeven").text("5 - Option B - Strength");
		$("#cardSixOfSeven").text("6 - Option B - Challanges");
		$("#cardSevenOfSeven").text("7 - Option B - Outcome");
		$("#sevenCardRadio").show();
		$("#sevenCardSpreadTop").show();
	}
	else if (selectedSpread == "Seven Horseshoe") {
		$('#sevenCardSpreadImage').prop("src", "images/7cardhorseshoe.png");
		$("#cardOneOfSeven").text("1 - Past");
		$("#cardTwoOfSeven").text("2 - Present");
		$("#cardThreeOfSeven").text("3 - Future");
		$("#cardFourOfSeven").text("4 - Attitude");
		$("#cardFiveOfSeven").text("5 - Influences");
		$("#cardSixOfSeven").text("6 - Obstacles");
		$("#cardSevenOfSeven").text("7 - Outcomes");
		$("#sevenCardRadio").show();
		$("#sevenCardSpreadTop").show();
	}
  });
  
  $("input[name='time_card']").change(function() {
	$("#arcanaRadio").hide();
	$("#wandsRadio").hide();
	$("#cupsRadio").hide();
	$("#swordsRadio").hide();
	$("#pentaclesRadio").hide();
	$("#positionRadio").hide();
	$('input[name="suit_card"]').prop('checked', false);
    $("#suitRadio").show();
  });
  
  $("input[name='five_card']").change(function() {
	$("#arcanaRadio").hide();
	$("#wandsRadio").hide();
	$("#cupsRadio").hide();
	$("#swordsRadio").hide();
	$("#pentaclesRadio").hide();
	$("#positionRadio").hide();
	$('input[name="suit_card"]').prop('checked', false);
    $("#suitRadio").show();
  });
  
  $("input[name='seven_card']").change(function() {
	$("#arcanaRadio").hide();
	$("#wandsRadio").hide();
	$("#cupsRadio").hide();
	$("#swordsRadio").hide();
	$("#pentaclesRadio").hide();
	$("#positionRadio").hide();
	$('input[name="suit_card"]').prop('checked', false);
    $("#suitRadio").show();
  });
  
  $("input[name='suit_card']").change(function() {
	var selectedSuit = $("input[type='radio'][name=suit_card]:checked", '#suitRadio').val();
	  $("#arcanaRadio").hide();
	  $("#wandsRadio").hide();
	  $("#cupsRadio").hide();
	  $("#swordsRadio").hide();
	  $("#pentaclesRadio").hide();
	  $("#positionRadio").hide();
		if (selectedSuit == "Arcana") {
			$('input[name="suit_arcana_card"]').prop('checked', false);
			$("#arcanaRadio").show();
		}
		else if (selectedSuit == "Wands") {
			$('input[name="suit_wands_card"]').prop('checked', false);
			$("#wandsRadio").show();
		}
		else if (selectedSuit == "Cups") {
			$('input[name="suit_cups_card"]').prop('checked', false);
			$("#cupsRadio").show();
		}
		else if (selectedSuit == "Swords") {
			$('input[name="suit_swords_card"]').prop('checked', false);
			$("#swordsRadio").show();
		}
		else if (selectedSuit == "Pentacles") {
			$('input[name="suit_pentacles_card"]').prop('checked', false);
			$("#pentaclesRadio").show();
		}
  });
  
  $("input[name='suit_arcana_card']").change(function() {
	$('input[name="upright_card"]').prop('checked', false);
    $("#positionRadio").show();
  });
  
  $("input[name='suit_wands_card']").change(function() {
	$('input[name="upright_card"]').prop('checked', false);
    $("#positionRadio").show();
  });
  
  $("input[name='suit_cups_card']").change(function() {
	$('input[name="upright_card"]').prop('checked', false);
    $("#positionRadio").show();
  });
  
  $("input[name='suit_swords_card']").change(function() {
	$('input[name="upright_card"]').prop('checked', false);
    $("#positionRadio").show();
  });
  
  $("input[name='suit_pentacles_card']").change(function() {
	$('input[name="upright_card"]').prop('checked', false);
    $("#positionRadio").show();
  });
  
  $("#positionRadioButton").click(function(){
	var currentSpread = $("input[type='radio'][name=spread_card]:checked", '#spreadRadio').val();
	var currentTime;
	if (currentSpread == "Three") {
	  currentTime = $("input[type='radio'][name=time_card]:checked", '#timeRadio').val();
	}
	else if (currentSpread == "Five Linear" || currentSpread == "Five Cross") {
	  currentTime = $("input[type='radio'][name=five_card]:checked", '#fiveCardRadio').val();
	}
	else if (currentSpread == "Seven Split" || currentSpread == "Seven Horseshoe") {
	  currentTime = $("input[type='radio'][name=seven_card]:checked", '#sevenCardRadio').val();
	}
	var currentSuit = $("input[type='radio'][name=suit_card]:checked", '#suitRadio').val();
	var currentValue = "";
	if (currentSuit == "Arcana") {
		currentValue = $("input[type='radio'][name=suit_arcana_card]:checked", '#arcanaRadio').val();
	}
	else if (currentSuit == "Wands") {
		currentValue = $("input[type='radio'][name=suit_wands_card]:checked", '#wandsRadio').val();
	}
	else if (currentSuit == "Cups") {
		currentValue = $("input[type='radio'][name=suit_cups_card]:checked", '#cupsRadio').val();
	}
	else if (currentSuit == "Swords") {
		currentValue = $("input[type='radio'][name=suit_swords_card]:checked", '#swordsRadio').val();
	}
	else if (currentSuit == "Pentacles") {
		currentValue = $("input[type='radio'][name=suit_pentacles_card]:checked", '#pentaclesRadio').val();
	}
	var currentPosition = $("input[type='radio'][name=upright_card]:checked", '#positionRadio').val();
	
	var combinedCard = ""
	
	if (currentSuit == "Arcana") {
		combinedCard = currentValue + " " + currentPosition;
	}
	else {
		combinedCard = currentValue + " of " + currentSuit + " " + currentPosition;
	}
	
	if (currentSpread == "Three") {
		if (currentTime == "Past") {
			$("#pastCardStatus").text(combinedCard);
		}
		else if (currentTime == "Present") {
			$("#presentCardStatus").text(combinedCard);
		}
		else if (currentTime == "Future") {
			$("#futureCardStatus").text(combinedCard);
		}
	}
	else if (currentSpread == "Five Linear" || currentSpread == "Five Cross") {
		if (currentTime == "One") {
			$("#cardOneOfFiveStatus").text(combinedCard);
		}
		else if (currentTime == "Two") {
			$("#cardTwoOfFiveStatus").text(combinedCard);
		}
		else if (currentTime == "Three") {
			$("#cardThreeOfFiveStatus").text(combinedCard);
		}
		else if (currentTime == "Four") {
			$("#cardFourOfFiveStatus").text(combinedCard);
		}
		else if (currentTime == "Five") {
			$("#cardFiveOfFiveStatus").text(combinedCard);
		}
	}
	else if (currentSpread == "Seven Split" || currentSpread == "Seven Horseshoe") {
		if (currentTime == "One") {
			$("#cardOneOfSevenStatus").text(combinedCard);
		}
		else if (currentTime == "Two") {
			$("#cardTwoOfSevenStatus").text(combinedCard);
		}
		else if (currentTime == "Three") {
			$("#cardThreeOfSevenStatus").text(combinedCard);
		}
		else if (currentTime == "Four") {
			$("#cardFourOfSevenStatus").text(combinedCard);
		}
		else if (currentTime == "Five") {
			$("#cardFiveOfSevenStatus").text(combinedCard);
		}
		else if (currentTime == "Six") {
			$("#cardSixOfSevenStatus").text(combinedCard);
		}
		else if (currentTime == "Seven") {
			$("#cardSevenOfSevenStatus").text(combinedCard);
		}
	}
	
	if (currentSpread == "Three") {
		if ($("#pastCardStatus").text() != "Empty" && $("#presentCardStatus").text() != "Empty" && $("#futureCardStatus").text() != "Empty") {
			$("#submitTarotButton").show();
		}
	}
	else if (currentSpread == "Five Linear" || currentSpread == "Five Cross") {
		if ($("#cardOneOfFiveStatus").text() != "Empty" && $("#cardTwoOfFiveStatus").text() != "Empty" && $("#cardThreeOfFiveStatus").text() != "Empty" &&
				$("#cardFourOfFiveStatus").text() != "Empty" && $("#cardFiveOfFiveStatus").text() != "Empty")  {
			$("#submitTarotButton").show();
		}
	}
	else if (currentSpread == "Seven Split" || currentSpread == "Seven Horseshoe") {
		if ($("#cardOneOfSevenStatus").text() != "Empty" && $("#cardTwoOfSevenStatus").text() != "Empty" && $("#cardThreeOfSevenStatus").text() != "Empty" &&
				$("#cardFourOfSevenStatus").text() != "Empty" && $("#cardFiveOfSevenStatus").text() != "Empty" && $("#cardSixOfSevenStatusvenStatus").text() != "Empty"  &&
				$("#cardSevenOfSevenStatus").text() != "Empty") {
			$("#submitTarotButton").show();
		}
	}
	
	$('input[name="time_card"]').prop('checked', false);
	$("#suitRadio").hide();
	$("#arcanaRadio").hide();
	$("#wandsRadio").hide();
	$("#cupsRadio").hide();
	$("#swordsRadio").hide();
	$("#pentaclesRadio").hide();
	$("#positionRadio").hide();
		
  });
  
  $("#submitTarotButton").click(async function(){
	  var submitSpread = $("input[type='radio'][name=spread_card]:checked", '#spreadRadio').val();
	  // Initialize an empty array as the buffer
	  const buffer = [];
	  
	  if (submitSpread == "Three") {
	 
		  // Append strings to the buffer (O(1) per push)
		  buffer.push("Interpret a tarot reading for me with the following specifications. ");
		  buffer.push("I will provide information about what cards I drew. ");
		  buffer.push("The cards are in a 3 card spread, with the first card representing the past, ");
		  buffer.push("the second card representing the present, and the third card representing the future. ");
		  buffer.push("First, write a brief poem about the reading. ");
		  buffer.push("Second, tell me what my reading is and what it means, card by card. ");
		  buffer.push("The first card in this reading is ");
		  buffer.push($("#pastCardStatus").text());
		  buffer.push(". The second card is ");
		  buffer.push($("#presentCardStatus").text()); 
		  buffer.push(". The third card is ");
		  buffer.push($("#futureCardStatus").text());
		  buffer.push(".");
	  }
	  
	  else if (submitSpread == "Five Linear") {
	 
		  // Append strings to the buffer (O(1) per push)
		  buffer.push("Interpret a tarot reading for me with the following specifications. ");
		  buffer.push("I will provide information about what cards I drew. ");
		  buffer.push("The cards are in a 5 card spread. ");
		  buffer.push("The first card represents the Past. ");
		  buffer.push("The second card represents the Present. ");
		  buffer.push("The third card represents the Future. ");
		  buffer.push("The fourth card represents Advice. ");
		  buffer.push("The fifth card represents Outcomes. ");
		  buffer.push("First, write a brief poem about the reading. ");
		  buffer.push("Second, tell me what my reading is and what it means, card by card. ");
		  buffer.push("The first card in this reading is ");
		  buffer.push($("#cardOneOfFiveStatus").text());
		  buffer.push(". The second card is ");
		  buffer.push($("#cardTwoOfFiveStatus").text()); 
		  buffer.push(". The third card is ");
		  buffer.push($("#cardThreeOfFiveStatus").text());
		  buffer.push(". The fourth card is ");
		  buffer.push($("#cardFourOfFiveStatus").text());
		  buffer.push(". The fifth card is ");
		  buffer.push($("#cardFiveOfFiveStatus").text());
		  buffer.push(".");
	  }
	  
	  else if (submitSpread == "Five Cross") {
	 
		  // Append strings to the buffer (O(1) per push)
		  buffer.push("Interpret a tarot reading for me with the following specifications. ");
		  buffer.push("I will provide information about what cards I drew. ");
		  buffer.push("The cards are in a 5 card spread and are arranged in a cross pattern. ");
		  buffer.push("Card one is on the top row alone, cards two, three, and four are in the middle row in order, and card 5 is on the bottom row alone." );
		  buffer.push("The first card represents the Challenge. ");
		  buffer.push("The second card represents the Past. ");
		  buffer.push("The third card represents the Present. ");
		  buffer.push("The fourth card represents the Future. ");
		  buffer.push("The fifth card represents Advice. ");
		  buffer.push("First, write a brief poem about the reading. ");
		  buffer.push("Second, tell me what my reading is and what it means, card by card. ");
		  buffer.push("The first card in this reading is ");
		  buffer.push($("#cardOneOfFiveStatus").text());
		  buffer.push(". The second card is ");
		  buffer.push($("#cardTwoOfFiveStatus").text()); 
		  buffer.push(". The third card is ");
		  buffer.push($("#cardThreeOfFiveStatus").text());
		  buffer.push(". The fourth card is ");
		  buffer.push($("#cardFourOfFiveStatus").text());
		  buffer.push(". The fifth card is ");
		  buffer.push($("#cardFiveOfFiveStatus").text());
		  buffer.push(".");
	  }
	  
	  else if (submitSpread == "Seven Split") {
	 
		  // Append strings to the buffer (O(1) per push)
		  buffer.push("Interpret a tarot reading for me with the following specifications. ");
		  buffer.push("I will provide information about what cards I drew. ");
		  buffer.push("The cards are in a 7 card spread. ");
		  buffer.push("The first card represents the Situation. ");
		  buffer.push("The second card represents the Strengths of Option A. ");
		  buffer.push("The third card represents the Challenges of Option A. ");
		  buffer.push("The fourth card represents outcomes of Option A. ");
		  buffer.push("The fifth card represents the Strengths of Option B. ");
		  buffer.push("The sixth card represents the Challenges of Option B. ");
		  buffer.push("The seventh card represents outcomes of Option B. ");
		  buffer.push("First, write a brief poem about the reading. ");
		  buffer.push("Second, tell me what my reading is and what it means, card by card. ");
		  buffer.push("The first card in this reading is ");
		  buffer.push($("#cardOneOfSevenStatus").text());
		  buffer.push(". The second card is ");
		  buffer.push($("#cardTwoOfSevenStatus").text()); 
		  buffer.push(". The third card is ");
		  buffer.push($("#cardThreeOfSevenStatus").text());
		  buffer.push(". The fourth card is ");
		  buffer.push($("#cardFourOfSevenStatus").text());
		  buffer.push(". The fifth card is ");
		  buffer.push($("#cardFiveOfSevenStatus").text());
		  buffer.push(". The sixth card is ");
		  buffer.push($("#cardSixOfSevenStatus").text());
		  buffer.push(". The seventh card is ");
		  buffer.push($("#cardSevenOfSevenStatus").text());
		  buffer.push(".");
	  }
	  
	  else if (submitSpread == "Seven Horseshoe") {
	 
		  // Append strings to the buffer (O(1) per push)
		  buffer.push("Interpret a tarot reading for me with the following specifications. ");
		  buffer.push("I will provide information about what cards I drew. ");
		  buffer.push("The cards are in a 7 card spread. ");
		  buffer.push("The first card represents the Past. ");
		  buffer.push("The second card represents the Present. ");
		  buffer.push("The third card represents the Future. ");
		  buffer.push("The fourth card represents the Attitude of the asker towards the question. ");
		  buffer.push("The fifth card represents Influences. ");
		  buffer.push("The sixth card represents Obstacles. ");
		  buffer.push("The seventh card represents Outcomes. ");
		  buffer.push("First, write a brief poem about the reading. ");
		  buffer.push("Second, tell me what my reading is and what it means, card by card. ");
		  buffer.push("The first card in this reading is ");
		  buffer.push($("#cardOneOfSevenStatus").text());
		  buffer.push(". The second card is ");
		  buffer.push($("#cardTwoOfSevenStatus").text()); 
		  buffer.push(". The third card is ");
		  buffer.push($("#cardThreeOfSevenStatus").text());
		  buffer.push(". The fourth card is ");
		  buffer.push($("#cardFourOfSevenStatus").text());
		  buffer.push(". The fifth card is ");
		  buffer.push($("#cardFiveOfSevenStatus").text());
		  buffer.push(". The sixth card is ");
		  buffer.push($("#cardSixOfSevenStatus").text());
		  buffer.push(". The seventh card is ");
		  buffer.push($("#cardSevenOfSevenStatus").text());
		  buffer.push(".");
	  }
	 
	 
	  // Convert buffer to final string (O(n) time)
	  const result = await buffer.join(""); 
	  console.log(result);
	  $("#promptReview").show();
	  $("#promptReview").val(result);
	  
	  $("#submitTarotButtonGPT").show();
		
    });
	
	$("#submitTarotButtonGPT").click(async function(){
		$("#submitTarotButtonGPT").prop("disabled", true);
		$("#submitTarotButton").hide();
	    $("#overallRadioContainer").hide();
	    $("#promptReview").hide();
		$("#GPTResult").text("Awaiting response from Chat GPT");
	    $("#GPTResult").show();
		
		var localAPIkey = prompt("Please copy and paste your API key here", "");
  
	    const response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          'Authorization': "Bearer " + localAPIkey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
 		  "model": "gpt-5-nano", 
		  "input": $("#promptReview").val()
		})
      });
	  
	  const data = await response.json();
	  
	  $("#resetButton").show();
	  var textOnly = data.output[1].content[0].text;
	  console.log(data);
	  console.log(textOnly);	
	  $("#GPTResult").text(textOnly);
		
    });
	
	$("#submitTarotButtonDebugger").click(async function() {
		$("#pastCardStatus").text("Emperor Upright");
		$("#presentCardStatus").text("10 of Cups Upright");
		$("#futureCardStatus").text("Fool Reversed");
		$("#submitTarotButton").show();
	});
	
	$("#resetButton").click(function() {
		// comment out the below line to quickly populate a spread
		$("#submitTarotButtonDebugger").hide();
		
		$("#pastCardStatus").text("Empty");
		$("#presentCardStatus").text("Empty");
		$("#futureCardStatus").text("Empty");
		$("#cardOneOfFiveStatus").text("Empty");
		$("#cardTwoOfFiveStatus").text("Empty");
		$("#cardThreeOfFiveStatus").text("Empty");
		$("#cardFourOfFiveStatus").text("Empty");
		$("#cardFiveOfFiveStatus").text("Empty");
		$("#cardOneOfSevenStatus").text("Empty");
		$("#cardTwoOfSevenStatus").text("Empty");
		$("#cardThreeOfSevenStatus").text("Empty");
		$("#cardFourOfSevenStatus").text("Empty");
		$("#cardFiveOfSevenStatus").text("Empty");
		$("#cardSixOfSevenStatus").text("Empty");
		$("#cardSevenOfSevenStatus").text("Empty");
		$("#submitTarotButton").hide();
		$('input[name="time_card"]').prop('checked', false);
		$("#promptReview").text("");
		$("#promptReview").hide();
		$("#GPTResult").text("");
		$("#GPTResult").hide();
		$("#submitTarotButtonGPT").hide();	
		$("#resetButton").hide();	
		$("#submitTarotButton").hide();
	    $("#overallRadioContainer").show();
	    $("#promptReview").hide();
		$("#submitTarotButtonGPT").prop("disabled", false);
	});

  });






