document.getElementById('coding-resources-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Capture the user's choices
    let languageElement = document.querySelector('input[name="language"]:checked');
    let levelElement = document.querySelector('input[name="level"]:checked');

    // Check if the elements are not null
    if (languageElement && levelElement) {
        let language = languageElement.value;
        let level = levelElement.value;

        // Define the link function inside the event listener
        function link(event) {
            event.preventDefault();
            if (language === "Python" && level === "beginner") {
                window.location.href = "/Python_beginner.html";
            } else if (language === "Python" && level === "intermediate") {
                window.location.href = "/python_intermediate.html";
            } else if (language === "Python" && level === "advanced") {
                window.location.href = "/python_advanced.html";
            } 
            
            // Java strat here

            else if (language === "Java" && level === "beginner") {
                window.location.href = "/java_beginner.html";
            } else if (language === "Java" && level === "intermediate") {
                window.location.href = "/java_intermediate.html";
            } else if (language === "Java" && level === "advanced") {
                window.location.href = "/java_advanced.html";
            }
        }

        // Add event listener to the submit button
        let submit = document.getElementById("submit");
        submit.addEventListener("click", link);
    } else {
        console.log('Please make sure all questions are answered.');
    }
});
                                                             