var data=({
	"questions":[
	{
	"Question": "Each Computer has a built-in instruction set that it knows how to execute by design.",
	"option" : [
	{
	text : "True",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "False",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"Hint": "Recall that we use the term computation to mean 'the execution of a sequence of instructions by a computer with the intention of solving a given problem'.",
	},
	{
	"Question": "The computer uses intelligence to execute instructions.",
	"option" : [
	{
	text : "True",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "False",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"Hint": "Recall that we said that a computer executes the instructions given to it mechanically.",
	},
	{
	"Question": "which is the worlds largest statue",
	"option" : [
	{
	text : "sardar vallabhai patel",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	text : "statue of liberty",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"Hint": "located in India",
	},
	{
	"Question": "where is Taj Mahal located",
	"option" : [
	{
	text : "Agra",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	text : "Bandra",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"Hint": "starts with A",
	}

	]
})
var i=0;
function display(i) {
	if(i===0) {
   document.getElementById("prev").disabled = true;
  }
  if(i>0 && i<data.questions.length) {
    document.getElementById("prev").disabled = false;
  }
  if(data.questions.length-1===i) {
      document.getElementById("next").style.display = "block";
    // document.getElementById("prev").disabled = true;
  }
  if(i<data.questions.length-1) {
    document.getElementById("prev").disabled = false;
  }
	document.getElementById("question").innerHTML=data.questions[i].Question
	document.getElementById("hint").innerHTML=data.questions[i].Hint
	document.getElementById("option").innerHTML="<input type='radio' name='q1' value='option1'onclick='radioclicked("+i+","+0+")'>"+data.questions[i].option[0].text+"<br>"+
												"<input type='radio' name='q1' value='option1'onclick='radioclicked("+i+","+1+")'>"+data.questions[i].option[1].text+"<br>"
	// document.getElementById("feedback").innerHTML=data.questions[i].option[i].feedback
}
function next1() {
	document.getElementById("prev").style.display = "block";
	display(++i)
}
function prev() {
	display(--i)
}
function radioclicked(i,j) {
	if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+data.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+data.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback').innerHTML = code
	}
}