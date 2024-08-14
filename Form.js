document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way


    // Capture the user's choices
    let languageElement = document.querySelector('input[name="language"]:checked');
    let levelElement = document.querySelector('input[name="level"]:checked');

    // Check if the elements are not null
    if (languageElement && levelElement) {
        let language = languageElement.value;
        let level = levelElement.value;
        
        if (language === "Python" && level === "Beginner") {
            window.location.href = "/Tech_find/Python_beginner.html";
        } else if (language === "Python" && level === "Intermediate") {
            window.location.href = "/Tech_find/python_intermediate.html";
        } else if (language === "Python" && level === "Advanced") {
            window.location.href = "/Tech_find/python_advanced.html";
        } 
        
        // Java strat here

        else if (language === "Java" && level === "Beginner") {
            window.location.href =  "/Tech_find/java_beginner.html";
        } else if (language === "Java" && level === "Intermediate") {
            window.location.href =  "/Tech_find/java_intermediate.html";

        } else if (language === "Java" && level === "Advanced") {
            window.location.href = "/Tech_find/java_advanced.html";
        }
    
        // Html stars here
        else if (language === "HTML" && level === "Beginner") {
            window.location.href = "/Tech_find/html_beginner.html";
        }
        else if (language === "HTML" && level === "Intermediate") {
            window.location.href = "/Tech_find/html_intermediate.html";
        } else if (language === "HTML" && level === "Advanced") {
            window.location.href = "/Tech_find/html_advanced.html";
        }


        // Add event listener to the submit button
        // let submit = document.getElementById("submit");
        // submit.addEventListener("click", link);
    } else {
        alert('Please make sure all questions are answered.');
    }
});
                                                             