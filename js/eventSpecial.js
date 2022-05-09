//alert("Connected");
window.onload = function(){
    var dateVar = new Date();
    console.log(dateVar);
    // ALL THE STUFF TO DEAL WITH EVENT DAY / INFO
    var dateDay = dateVar.getDay();
    console.log(dateDay);
    var dayName = "";
    //dateDay = 2; //test line to show date functionality
    
    //variables to collect HTML information for daily events and special info
    var eventTitle = document.getElementById("event-title");
    var eventText = document.getElementById("event-text");
    var eventTime = document.getElementById("event-time");
    var foodSpecialHead = document.getElementById("food-special-header");
    var foodSpecialText = document.getElementById("food-special-text");
    var eventHead = document.getElementById("event-header");
    var eventOneOption = document.getElementById("event-one-option");
    var eventTwoOption = document.getElementById("event-two-option");
    var eventThreeOption = document.getElementById("event-three-option");
    var eventImg = document.getElementById("event-image");
    const sunday = {event: "Game Night", eventDesc: "Participate in boardgames and classic arcade games - Winners get free drinks!"};
    const monday = {event: "Open Mic", eventDesc: "Anyone in the audience can perform! We encourage people to share stories or experiences they had in the 80’s, and how things have changed."};
    const tuesday = {event: "Comedy Night", eventDesc: "We host local comedians to do stand up comedy. Performances consist of one-liners, stories and observations ."};
    const wednesday = {event: "All you can eat!", eventDesc: "Any one who can eat 7 jumbo hotdogs in 10 minutes will get a $50 gift card. Also, their photo will go up the wall of “fame”."};
    const thursday = {event: "Karaoke", eventDesc: "Indulge in all your favourite 80's sing-alongs.  Solo or group act, show the hut what you've got!"};
    const friday = {event: "Couple's Night out", eventDesc: "You don’t have to wait till Valentines day to do something special for your significant other. Treat your loved one to a romantic candle light, 3-course dinner , including a bottle of wine for just $60 . Couples can hit the romantic dance floor anytime where most popular romantic songs from 80’s are played."};
    const saturday = {event: "Speed Dating", eventDesc: "Meet new people at our restaurant. Use this night to get to know someone of similar personalities and beliefs as yourself. We offer special deals on the menu for the participants."};

    //Switch block to grab the day-# of the week and conert to day name
    switch (dateDay){
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }
    //Day of the week name assigned to header
    eventHead.innerHTML = "Events & Specials for " + dayName;
    //Switch block to check for the day of the week and produce the corresponding daily event
    switch (dayName){
        case "Sunday":
            eventTitle.innerHTML = dayName + " - " +sunday.event;
            eventTime.innerHTML = "8:00 PM";
            eventText.innerHTML = sunday.eventDesc;
            eventImg.src="../image/events/game-night.PNG"
            break;
        case "Monday":
            eventTitle.innerHTML = "Open Mic";
            eventTime.innerHTML = "7:00 PM";
            eventText.innerHTML = "Anyone in the audience can perform! We encourage people to share stories or experiences they had in the 80’s, and how things have changed.";
            eventImg.src="../image/events/open-mic.PNG";
            break;
        case "Tuesday":
            eventTitle.innerHTML = "Comedy Night";
            eventTime.innerHTML = "7:00 PM";
            eventText.innerHTML = "We host local comedians to do stand up comedy. Performances consist of one-liners, stories and observations .";
            eventImg.src="../image/events/people-laugh.PNG";
            break;
        case "Wednesday":
            eventTitle.innerHTML = "All you can eat!";
            eventTime.innerHTML = "8:00-10:00 PM";
            eventText.innerHTML = "Any one who can eat 7 jumbo hotdogs in 10 minutes will get a $50 gift card. Also, their photo will go up the wall of “fame”.";
            eventImg.src="../image/events/hotdogs.PNG";
            break;
        case "Thursday":
            eventTitle.innerHTML = "Karaoke";
            eventTime.innerHTML = "7:00 PM";
            eventText.innerHTML = "Indulge in all your favourite 80's sing-alongs.  Solo or group act, show the hut what you've got!";
            eventImg.src="../image/events/karaoke.PNG";
            break;
        case "Friday":
            eventTitle.innerHTML = "Couple's Night out";
            eventTime.innerHTML = "6:00 PM";
            eventText.innerHTML = "You don’t have to wait till Valentines day to do something special for your significant other. Treat your loved one to a romantic candle light, 3-course dinner , including a bottle of wine for just $60 . Couples can hit the romantic dance floor anytime where most popular romantic songs from 80’s are played.";
            eventImg.src="../image/events/date-night.PNG";
            break;
        case "Saturday":
            eventTitle.innerHTML = "Speed Dating";
            eventTime.innerHTML = "6:00-9:00PM";
            eventText.innerHTML = "Meet new people at our restaurant. Use this night to get to know someone of similar personalities and beliefs as yourself. We offer special deals on the menu for the participants.";
            eventImg.src="../image/events/speed-dating.PNG";
            break;
            
    }

    //Switch block to pull daily food specials.
    switch (dayName){
        case "Sunday":
            foodSpecialHead.innerHTML = "Hobbit Fish platter - 30";
            foodSpecialText.innerHTML = "Battered 50oz haddock, 3oz battered shrimp, 4 bay scallops along with Curly cut fries or salad bowl.";
            break;
        case "Monday":
            foodSpecialHead.innerHTML = "Pokéball Cups";
            foodSpecialText.innerHTML = "4-Meat loaf cups , string beans , mashed potato along with a drink. - 16";
            break;
        case "Tuesday":
            foodSpecialHead.innerHTML = "Asgardian BBQ Bowl";
            foodSpecialText.innerHTML = "Pulled pork, bacon, coleslaw, sweet potato wedges and greens. - 25";
            break;
        case "Wednesday":
            foodSpecialHead.innerHTML = "Cowabunga chicken";
            foodSpecialText.innerHTML = "Stuffed chicken with cranberry sauce, smothered in gravy. Along with onion rings/fries and a drink. - 22";
            break;
        case "Thursday":
            foodSpecialHead.innerHTML = "Optimus Prime Ribs";
            foodSpecialText.innerHTML = "Pork ribs topped with bbq sauce along with coleslaw and butter toasted bun. - 26";
            break;
        case "Friday":
            foodSpecialHead.innerHTML = "Joker Boat";
            foodSpecialText.innerHTML = "Grilled salmon with poutine bowl and a cold beer - 23";
            break;
        case "Saturday":
            foodSpecialHead.innerHTML = "Hulk Empanadas";
            foodSpecialText.innerHTML = "3-Beef empanadas with side of sweet and sour rice balls , greens and a drink. - 18";
            break;
    }
    
    //Switch block to populate the "Next three days" section
    switch (dayName){
        case "Sunday" : 
            var header1 = document.getElementById("event-one-name");   
            header1.innerHTML = monday.event; 
            var description1 = document.getElementById("event-one-text");
            description1.innerHTML = monday.eventDesc;
            eventOneOption.innerHTML = monday.event;
            var header2 = document.getElementById("event-two-name");
            header2.innerHTML = tuesday.event;
            var description2 = document.getElementById("event-two-text");
            description2.innerHTML = tuesday.eventDesc;
            eventTwoOption.innerHTML = tuesday.event;
            var header3 = document.getElementById("event-three-name");   
            header3.innerHTML = wednesday.event; 
            var description3 = document.getElementById("event-three-text");
            description3.innerHTML = wednesday.eventDesc;
            eventThreeOption.innerHTML = wednesday.event;
            break;
        case "Monday" : 
            var header1 = document.getElementById("event-one-name");   
            header1.innerHTML = tuesday.event; 
            var description1 = document.getElementById("event-one-text");
            description1.innerHTML = tuesday.eventDesc;
            eventOneOption.innerHTML = tuesday.event;
            var header2 = document.getElementById("event-two-name");
            header2.innerHTML = wednesday.event;
            var description2 = document.getElementById("event-two-text");
            description2.innerHTML = wednesday.eventDesc;
            eventTwoOption.innerHTML = wednesday.event;
            var header3 = document.getElementById("event-three-name");   
            header3.innerHTML = thursday.event; 
            var description3 = document.getElementById("event-three-text");
            description3.innerHTML = thursday.eventDesc;
            eventThreeOption.innerHTML = thursday.event;
            break;
        case "Tuesday" : 
            var header1 = document.getElementById("event-one-name");   
            header1.innerHTML = wednesday.event; 
            var description1 = document.getElementById("event-one-text");
            description1.innerHTML = wednesday.eventDesc;
            eventOneOption.innerHTML = wednesday.event;
            var header2 = document.getElementById("event-two-name");
            header2.innerHTML = thursday.event;
            var description2 = document.getElementById("event-two-text");
            description2.innerHTML = thursday.eventDesc;
            eventTwoOption.innerHTML = thursday.event;
            var header3 = document.getElementById("event-three-name");   
            header3.innerHTML = friday.event; 
            var description3 = document.getElementById("event-three-text");
            description3.innerHTML = friday.eventDesc;
            eventThreeOption.innerHTML = friday.event;
            break;
        case "Wednesday" : 
            var header1 = document.getElementById("event-one-name");   
            header1.innerHTML = thursday.event; 
            var description1 = document.getElementById("event-one-text");
            description1.innerHTML = thursday.eventDesc;
            eventOneOption.innerHTML = thursday.event;
            var header2 = document.getElementById("event-two-name");
            header2.innerHTML = friday.event;
            var description2 = document.getElementById("event-two-text");
            description2.innerHTML = friday.eventDesc;
            eventTwoOption.innerHTML = friday.event;
            var header3 = document.getElementById("event-three-name");   
            header3.innerHTML = saturday.event; 
            var description3 = document.getElementById("event-three-text");
            description3.innerHTML = saturday.eventDesc;
            eventThreeOption = staurday.event;
            break;
        case "Thursday" : 
            var header1 = document.getElementById("event-one-name");   
            header1.innerHTML = friday.event; 
            var description1 = document.getElementById("event-one-text");
            description1.innerHTML = friday.eventDesc;
            eventOneOption.innerHTML = friday.event;
            var header2 = document.getElementById("event-two-name");
            header2.innerHTML = saturday.event;
            var description2 = document.getElementById("event-two-text");
            description2.innerHTML = saturday.eventDesc;
            eventTwoOption.innerHTML = saturday.event;
            var header3 = document.getElementById("event-three-name");   
            header3.innerHTML = sunday.event; 
            var description3 = document.getElementById("event-three-text");
            description3.innerHTML = sunday.eventDesc;
            eventThreeOption.innerHTML = sunday.event;
            break;
        case "Friday" : 
            var header1 = document.getElementById("event-one-name");   
            header1.innerHTML = saturday.event; 
            var description1 = document.getElementById("event-one-text");
            description1.innerHTML = saturday.eventDesc;
            eventOneOption.innerHTML = saturday.event;
            var header2 = document.getElementById("event-two-name");
            header2.innerHTML = sunday.event;
            var description2 = document.getElementById("event-two-text");
            description2.innerHTML = sunday.eventDesc;
            eventTwoOption.innerHTML = sunday.event;
            var header3 = document.getElementById("event-three-name");   
            header3.innerHTML = monday.event; 
            var description3 = document.getElementById("event-three-text");
            description3.innerHTML = monday.eventDesc;
            eventThreeOption.innerHTML = monday.event;
            break;
        case "Saturday" : 
            var header1 = document.getElementById("event-one-name");   
            header1.innerHTML = sunday.event; 
            var description1 = document.getElementById("event-one-text");
            description1.innerHTML = sunday.eventDesc;
            eventOneOption.innerHTML = sunday.event;
            var header2 = document.getElementById("event-two-name");
            header2.innerHTML = monday.event;
            var description2 = document.getElementById("event-two-text");
            description2.innerHTML = monday.eventDesc;
            eventTwoOption.innerHTML = monday.event;
            var header3 = document.getElementById("event-three-name");   
            header3.innerHTML = tuesday.event; 
            var description3 = document.getElementById("event-three-text");
            description3.innerHTML = tuesday.eventDesc;
            eventThreeOption.innerHTML = tuesday.event;
            break;
    }


    //STUFF TO DEAL WITH USER INPUT FOR THE FORM
    var thanksName = document.getElementById("rsvp-username");
    var thanksEvent = document.getElementById("rsvp-event");
    var thanksPhone = document.getElementById("rsvp-phone")
    var formHandle = document.forms.eventReg;
    var rsvpConfirm = document.getElementById("rsvp-confirm");

    formHandle.onsubmit = function(){
        //alert("rsvp form submitted!");
        var usernameInput = formHandle.name;
        var userPhone = formHandle.phoneNum;
        var userChoice = formHandle.event_options;
        console.log(usernameInput.value);
        console.log(userPhone.value);
        console.log(userChoice.value);
        formHandle.classList.toggle("hidden");
        rsvpConfirm.classList.toggle("shown");
        thanksName.innerHTML = `Thanks, ${usernameInput.value}!`
        thanksPhone.innerHTML = `You will be contacted at ${userPhone.value} to confirm your reservation.`
        switch (dayName){
        case "Sunday" : 
            if(userChoice.value === "event-1"){
                thanksEvent.innerHTML = "We'll see you on Monday for Open Mic."
            } else if(userChoice.value === "event-2"){
                thanksEvent.innerHTML = "We'll see you on Tuesday for Comedy Night."
            } else if(userChoice.value === "event-3"){
                thanksEvent.innerHTML = "We'll see you on Wednesday for the All you can Eat competition!."
            };
            break;
        case "Monday" : 
            if(userChoice.value === "event-1"){
                thanksEvent.innerHTML = "We'll see you on Tuesday for Comedy Night."
            } else if(userChoice.value === "event-2"){
                thanksEvent.innerHTML = "We'll see you on Wednesday for the All you can Eat competition!"
            } else if(userChoice.value === "event-3"){
                thanksEvent.innerHTML = "We'll see you on Thursday for Karaoke. "
            };
            break;
        case "Tuesday" : 
            if(userChoice.value === "event-1"){
                thanksEvent.innerHTML = "We'll see you on Wednesday for the All you can Eat competition!"
            } else if(userChoice.value === "event-2"){
                thanksEvent.innerHTML = "We'll see you on Thursday for Karaoke."
            } else if(userChoice.value === "event-3"){
                thanksEvent.innerHTML = "We'll see you on Friday for a Couple's night out."
            };
            break;
        case "Wednesday" : 
            if(userChoice.value === "event-1"){
                thanksEvent.innerHTML = "We'll see you on Thursday for Karaoke."
            } else if(userChoice.value === "event-2"){
                thanksEvent.innerHTML = "We'll see you on Friday for a Couple's night out"
            } else if(userChoice.value === "event-3"){
                thanksEvent.innerHTML = "We'll see you on Saturday for Speed Dating."
            };
            break;
        case "Thursday" : 
            if(userChoice.value === "event-1"){
                thanksEvent.innerHTML = "We'll see you on Friday for Couple's Night Out."
            } else if(userChoice.value === "event-2"){
                thanksEvent.innerHTML = "We'll see you on Saturday for Speed Dating."
            } else if(userChoice.value === "event-3"){
                thanksEvent.innerHTML = "We'll see you on Sunday for Game Night."
            };
            break;
        case "Friday" : 
            if(userChoice.value === "event-1"){
                thanksEvent.innerHTML = "We'll see you on Saturday for Speed Dating."
            } else if(userChoice.value === "event-2"){
                thanksEvent.innerHTML = "We'll see you on Sunday for Game Night."
            } else if(userChoice.value === "event-3"){
                thanksEvent.innerHTML = "We'll see you on Monday for Open Mic."
            };
            break;
        case "Saturday" : 
            if(userChoice.value === "event-1"){
                thanksEvent.innerHTML = "We'll see you on Sunday for Game Night."
            } else if(userChoice.value === "event-2"){
                thanksEvent.innerHTML = "We'll see you on Monday for Open Mic."
            } else if(userChoice.value === "event-3"){
                thanksEvent.innerHTML = "We'll see you on Tuesday for Comedy Night."
            };
            break;   
    }
        return false;
    }

}