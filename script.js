$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);

    // Hide the message box when the page first loads using jQuery method: .hide().
    // Later, we will use jQuery method: .slideToggle() to show the message box with an animation.
    $('.pet-message-box').hide();
    showPetMessage();

  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name: "Totoro",
      weight: 20,
      happiness: 8,
      strength: 6,
      hunger: 5,
      message: "Hi!"
    };  

    function clickedTreatButton() {

      console.log("Treat buton pressed!");
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness += 1;
      pet_info.weight += 1;
      pet_info.hunger -= 3;
      pet_info.message = "Yum! That treat was delicious!";

      addRemoveClasses("Treat");

      showPetMessage();
      checkAndUpdatePetInfoInHtml();
    }

    
    function clickedPlayButton() {

      console.log("Play buton pressed");

      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness += 3;
      pet_info.weight -= 2;
      pet_info.hunger += 2;
      pet_info.message = "Yay! I love playing";

      addRemoveClasses("Play");

      showPetMessage();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {

      // Decrease pet happiness
      // Decrease pet weight
      pet_info.happiness -= 2;
      pet_info.weight -= 2;
      pet_info.strength += 2;
      pet_info.hunger += 2;
      pet_info.message = "Phew... What a workout!";

      addRemoveClasses("Exercise")

      showPetMessage();
      checkAndUpdatePetInfoInHtml();

    }

    function clickedNapButton() {
      console.log("Nap buton pressed");

      pet_info.happiness += 2;
      pet_info.strength -= 4;
      pet_info.hunger += 3;
      pet_info.message = "Zzz... I feel well rested now!";

      addRemoveClasses("Nap");

      showPetMessage();
      checkAndUpdatePetInfoInHtml();

    }

    function addRemoveClasses(x) {  
      // jQuery method: .removeClass(): Since we are going to be adding a glow effect around our pet image via a css class,
      // we want to first remove all any other possible effect classes on our image,
      // then after we can use the jQuery method .addClass() to add the neccessary css class to this image
        switch (x) {
          case "Treat":
            $('.pet-image').removeClass('green-glow', 'yellow-glow', 'purple-glow');
            $('.pet-image').addClass('blue-glow');
            break;

          case "Play":
            $('.pet-image').removeClass('blue-glow', 'yellow-glow', 'purple-glow');
            $('.pet-image').addClass('green-glow');
            break;
          
          case "Exercise":
            $('.pet-image').removeClass('green-glow', 'blue-glow', 'purple-glow');
            $('.pet-image').addClass('yellow-glow');
            break;

          case "Nap": 
            $('.pet-image').removeClass('green-glow', 'yellow-glow', 'purple-glow');
            $('.pet-image').addClass('blue-glow');
            break;

          default:
            $('.pet-image').removeClass('green-glow', 'yellow-glow', 'blue-glow', 'purple-glow');
            break;
        }
      }
  
    function checkAndUpdatePetInfoInHtml() {
      checkStats();
      updatePetInfoInHtml();
      
      // log all pet info as a table
       console.table(pet_info);
    }
    
    function checkStats() {
      //  Conditional checks to see if anything is lower than zero, we should clamp all to zero
      if (pet_info.weight <= 0) {
        console.warn("Weight is zero!");
        pet_info.weight = 0;
      }
      if (pet_info.happiness <= 0) {
        console.warn("Happiness is zero!");
        pet_info.happiness = 0;
      }
      if (pet_info.hunger < 0) {
        console.error("Hunger is below zero!");
      }
      if (pet_info.hunger >= 30) {
        console.warn("Totoro is starving!");
      }
      if (pet_info.strength <= 0) {
        console.warn("Strength is zero!");
        pet_info.strength = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info.name);
      $('.weight').text(pet_info.weight);
      $('.happiness').text(pet_info.happiness);
      $('.strength').text(pet_info.strength);
      $('.hunger').text(pet_info.hunger);
      $('.message').text(pet_info.message);
    }

    function showPetMessage() {
      // jQuery method: .slideToggle()
      // First we hide the message box(We did this earlier already, so we know it's hidden)
      // Now we can use slideToggle() to have the message box animated 
      // This creates a visible notification in the page after every button press
      $('.pet-message-box').slideToggle('slow');

      // After 2 seconds, fade out
      // jQuery method: .hide(), personally liked how .hide() looked over .slideToggle()
      // So instead we use .hide() to have the message box fade away, still works with .slideToggle, 
      // no need to call .slideToggle() again to reset it
      setTimeout(function() {
        $('.pet-message-box').hide('slow');
        //$('.pet-message-box').slideToggle('slow');
      }, 2000);
      
    }

    /*
    function showPetMessage() {
      // jQuery method: .fadeIn()
      // First we hide the message box(We did this earlier already, so we know it's hidden)
      // Now we can fade it in slowly
      // This creates a visible notification in the page after every button press
      $('.pet-message-box').fadeToggle('slow');

      //hidePetMessage();
    }
    */

    /*
    function hidePetMessage() {
      // jQuery method: .hide() && .fadeOut()
      // Personally liked how .hide() makes the message box scale down, 
      // and how .hide() fades the text away, so I decided to combine both :)

      $('.pet-message-box').hide('slow');
      $('.pet-message-box').fadeOut('slow');
    }
    */
  