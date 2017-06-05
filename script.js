//var taskTime;
//var taskInfo;
var counter = 0;
var complete = false;
var moodLevel = "complacent";
var mood = 0;
var userInput;
var response = "...";
var task = {taskInfo:"", taskTime:""};

$(document).ready(function(){ 
     $("#sprite").attr("src","https://vignette1.wikia.nocookie.net/fantendo/images/3/31/Crystal.png/revision/latest?cb=20150419210156"); //**NOTE: use this to change image
    $("#enterButton").click(function(){
    userInput = $('#inputArea').val();
    if(userInput == "hi" || userInput == "howdy" || userInput == "hello" || userInput == "hello, test-chan!"){
        $("p").html("I will be acting as your assistant, but you must be the one to do your work responsibly. Do you have a task to be done?");
    };
    if(counter == 0 && userInput == "yes"){
        $("p").html("What is it that you must do?");
        counter++;
    };
    if(counter ==0 && userInput =="no"){
      $("p").html("Eh? You do not? ");  
    };
    if(counter == 1 && userInput != "yes"){
        task.taskInfo = $('#inputArea').val();
        $("p").html("So you must complete the task of \""+ task.taskInfo +"\", correct?");
        counter++;
    };
    if(counter == 2 && userInput == "yes"){
        $("p").html("Understood. When does this have to be done by?");
        counter++;
    };
    if(counter == 3 && userInput != "yes"){
        task.taskTime = $('#inputArea').val();
        $("p").html("Understood. The task has been registered. I will check in at "+ task.taskTime + ", so please be here by then. I'll be waiting! \n If you have another task to register, please input 'new task'.");
        counter++;
    };
    if(counter == 4 && (userInput == "thanks" || userInput == "thank you")){
      $("p").html("You're very welcome! Good luck!")  
      counter = 4.5;
    };
    if((counter == 4 || counter == 4.5) && userInput == "new task"){
        $("p").html("Do you have another task to be done?");
        counter = 5;
    };
    if(counter == 5 && userInput == "yes"){
       $("p").html("What is it that you must do?");
       counter = 1;
    };
    if(counter == 5 && userInput =="no"){
        $("p").html("Oh? Then, what may I assist you with?");
        counter++;
    };
    if(counter == 6 && userInput == "new task"){
       $("p").html("I see you've changed your mind. I'll be glad to help! What is it that you must do?"); 
      counter = 1;  
    };
        
    });
});

// my years of experience in the lawn of coding have told me that i have no clue what i am doing :DDD
//okedokey

var date = new Date();
document.getElementById("").innerHTML = date;
//inside the "" you put where the date will show up?
//wait. y- wait. Yep. in the "" it's where you want the date to show up. the entire thing is changing the HTML where it's to show up
//talking about the commented out section i wrote talking to myself mb
//what triggers the date to show up
//it doesn't have to show up LOL; why are you trying to make it show up anyway
// DDDDDDDDDDDDDDDDDD:
//just get the time LOL
//ez
//isn;t it var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
//no thats stupid af
//wat LUL
//or maybe not idk
//document.getElementById("").innerHTML = date; doesn't give you the time/date-- it's an action you do inside the jquery parameters in order to change the content of an HTML elemen
