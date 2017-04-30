$(document).ready(function() {
    console.log( "ready!" );

    var totalWon = 0;
	var totalLost = 0;
	var ranNum = 0; 
    var currentScore = 0;
    var crystalVal = 0; 
    var crystal;

    // Load crystal images
	for(var i=0; i<4; i++){

		crystal = $("<img>");
		crystal.addClass("crystal-img"+i);
		crystal.attr('alt',"Crystal"+i);
		crystal.attr("src","./assets/images/crystal"+i+".jpg");
		$("#crystalsImg").append(crystal);	
	}

	reset();

    function reset(){

		ranNum = randomIntFromInterval(9,120);

		currentScore = 0;

	    $('#targetScore').text(ranNum);
	    $('#totalScore').text(currentScore);

		randomCrystalValues();	    

    }
    
    function randomIntFromInterval(min,max)
	{
    	return Math.floor(Math.random()*(max-min+1)+min);
	}


	function randomCrystalValues(){
		for(var i=0; i<4; i++){

			console.log(i);

			crystalVal= randomIntFromInterval(1,12);
			$(".crystal-img"+i).attr("data-value",crystalVal);
		}

	}

	

	$('img[class^="crystal-img"]').on("click",function(evt){
		var crystalValue = $(this).attr("data-value");
		console.log(crystalValue);
		currentScore = currentScore+Number(crystalValue);
		console.log(currentScore);
		$('#totalScore').text(currentScore);

		if(ranNum===currentScore){
			$('#gameStatus').text('You Won!');
			totalWon++;
			$('#totalWon').text(totalWon);
			reset();
		} 
		else if (currentScore>ranNum){
			$('#gameStatus').text('You Lost.');	
			totalLost++;
			$('#totalLost').text(totalLost);
			reset();
		}	

	});
	
});