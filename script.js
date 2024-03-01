$(document).ready(function() {


    // Make .oil draggable
    $(".oil").draggable({
        stop: function(event, ui) {
            checkOverlap();
        }
    });

    // Make .shrimpHead draggable
    $(".shrimpHead").draggable({
        stop: function(event, ui) {
            checkOverlap();
        }
    });

    checkOverlap(); // Initial check for overlap

    // $(document).ready(function() {
    //     $(".draggable").draggable({
    //         stop: function(event, ui) {
    //             checkOverlap();
    //         }
    //     });
    
    //     checkOverlap(); // Initial check for overlap
    // });
    
    function checkOverlap() {
        var image1Pos = $(".oil").position();
        var image2Pos = $(".shrimpHead").position();
        var image3Pos = $(".circle").position();
    
        var overlap1 = isOverlapping(image1Pos, image3Pos);
        var overlap2 = isOverlapping(image2Pos, image3Pos);
    
        if (overlap1 && overlap2) {
            // Both images are on top of the circle
            $(".oil, .shrimpHead").hide(); // Hide image 1 and image 2
            $(".circle").hide(); // Hide the circle
            $(".afterPot").show(); // Show image 4
        } else {
            $(".afterPot").hide(); // Hide image 4
            $(".circle").show(); // Show the circle
        }
    }
    
    function isOverlapping(pos1, pos2) {
        var rect1 = {x: pos1.left, y: pos1.top, width: $(".oil").width(), height: $(".oil").height()};
        var rect2 = {x: pos2.left, y: pos2.top, width: $(".circle").width(), height: $(".circle").height()};
        var overlapping = !(rect1.x + rect1.width < rect2.x ||
                rect2.x + rect2.width < rect1.x ||
                rect1.y + rect1.height < rect2.y ||
                rect2.y + rect2.height < rect1.y);
        console.log("Is overlapping:", overlapping);
        return overlapping;
    }

    $(".afterPot").click(function() {
        // Get the original position of the image
        var originalPositionTop = $(this).position().top;
        var originalPositionLeft = $(this).position().left;

        // Calculate the new positions
        var newPositionTop = originalPositionTop - 100;
        var newPositionLeft = originalPositionLeft - 100;

        // Animate the image to the new positions
        $(this).animate({
            top: newPositionTop,
            left: newPositionLeft
        }, {
            duration: 1000, // Adjust the duration as needed
            complete: function() {
                // Animation complete, hide the image
                $(this).hide();
                // Show the .water image
                $(".water").fadeIn();
            }
        });
    });
    $(".water").click(function() {
        // Rotate the image by 45 degrees
        $(this).animate({
            rotate: '-45deg'
        }, {
            duration: 1000, // Adjust the duration as needed
            step: function(now, fx) {
                $(this).css('transform', 'rotate(' + now + ')');
            },
            complete: function() {
                // Animation complete, hide the image
                $(this).hide();
                
                // Show the .soup image
                $(".soup").fadeIn();
                // Show the instruction
                $(".instructionTo2").fadeIn();
            }
        });
    });

    var oilClicked = false;
    var garlicClicked = false;
    var peanutClicked = false;
    var shachaClicked = false;

    $(".oil2").click(function() {
        // Hide the clicked oil element
        $(this).hide();
        oilClicked = true;

        // Check if both oil and garlic are clicked
        if (oilClicked && garlicClicked && peanutClicked && shachaClicked) {
            // Show the fry element
            $(".fry2").fadeIn();
        }
    });

    $(".garlic2").click(function() {
        // Hide the clicked garlic element
        $(this).hide();
        garlicClicked = true;

        // Check if both oil and garlic are clicked
        if (oilClicked && garlicClicked && peanutClicked && shachaClicked) {
            // Show the fry element
            $(".fry2").fadeIn();
        }
    });

    $(".peanut2").click(function() {
        // Hide the clicked garlic element
        $(this).hide();
        peanutClicked = true;

        // Check if both oil and garlic are clicked
        if (oilClicked && garlicClicked && peanutClicked && shachaClicked) {
            // Show the fry element
            $(".fry2").fadeIn();
        }
    });

    $(".shacha2").click(function() {
        // Hide the clicked garlic element
        $(this).hide();
        shachaClicked = true;

        // Check if both oil and garlic are clicked
        if (oilClicked && garlicClicked && peanutClicked && shachaClicked) {
            // Show the fry element
            $(".fry2").fadeIn();
        }
    });

    $(".circle2").click(function() {
        $(".soup2").fadeOut();
        // Rotate the Pot2 element by 45 degrees
        $(".leftStoveScene2").animate({
            rotate: '45deg'
        }, {
            duration: 1000, // Adjust the duration as needed
            step: function(now, fx) {
                $(this).css('transform', 'rotate(' + now + ')');
            },
            complete: function() {
                // Animation complete, show the shrimpsoup element
                $(".shrimpSoup2").fadeIn();
                $(".instructionTo3").fadeIn();
            }
        });
    });
    $(".leftFireScene2").hover(function() {
        $(this).fadeOut();
    });
    

    var noodleClicked = false;
    var shrimpClicked = false;
    var squidClicked = false;
    var clamClicked = false;
    var bokchoyClicked = false;

    $(".noodle").click(function() {
        // Hide the clicked oil element
        $(this).hide();
        noodleClicked = true;

        // Check if both oil and garlic are clicked
        if (noodleClicked && shrimpClicked && squidClicked && clamClicked && bokchoyClicked) {
            // Show the fry element
            $(".cooked").fadeIn();
        }
    });

    $(".shrimp").click(function() {
        // Hide the clicked garlic element
        $(this).hide();
        shrimpClicked = true;

        if (noodleClicked && shrimpClicked && squidClicked && clamClicked && bokchoyClicked) {
            // Show the fry element
            $(".cooked").fadeIn();
        }
    });

    $(".squid").click(function() {
        // Hide the clicked garlic element
        $(this).hide();
        squidClicked = true;

        if (noodleClicked && shrimpClicked && squidClicked && clamClicked && bokchoyClicked) {
            // Show the fry element
            $(".cooked").fadeIn();
        }
    });

    $(".clam").click(function() {
        // Hide the clicked garlic element
        $(this).hide();
        clamClicked = true;

        if (noodleClicked && shrimpClicked && squidClicked && clamClicked && bokchoyClicked) {
            // Show the fry element
            $(".cooked").fadeIn();
        }
    });

    $(".bokchoy").click(function() {
        // Hide the clicked garlic element
        $(this).hide();
        bokchoyClicked = true;

       if (noodleClicked && shrimpClicked && squidClicked && clamClicked && bokchoyClicked) {
            // Show the fry element
            $(".cooked").fadeIn();
            $(".instructionTo4").fadeIn();
        }
    });

    



});
  