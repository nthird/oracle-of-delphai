$(document).ready(function(){
	// comment out the below line to quickly populate a spread
	$("#submitTarotButtonDebugger").hide();
	
	$("#pastCardStatus").text("Empty");
	$("#presentCardStatus").text("Empty");
	$("#futureCardStatus").text("Empty");
	$("#submitTarotButton").hide();
	$('input[name="time_card"]').prop('checked', false);
	$("#promptReview").text("");
	$("#promptReview").hide();
	$("#GPTResult").text("");
	$("#GPTResult").hide();
	$("#submitTarotButtonGPT").hide();	
	$("#resetButton").hide();	
  
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
	var currentTime = $("input[type='radio'][name=time_card]:checked", '#timeRadio').val();
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
	
	if (currentTime == "Past") {
		$("#pastCardStatus").text(combinedCard);
	}
	else if (currentTime == "Present") {
		$("#presentCardStatus").text(combinedCard);
	}
	else if (currentTime == "Future") {
		$("#futureCardStatus").text(combinedCard);
	}
	
	if ($("#pastCardStatus").text() != "Empty" && $("#presentCardStatus").text() != "Empty" && $("#futureCardStatus").text() != "Empty") {
		$("#submitTarotButton").show();
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
	  // Initialize an empty array as the buffer
	  const buffer = [];
	 
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






