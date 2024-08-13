document.getElementById('coding-resources-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Capture the user's choices
    let languageElement = document.querySelector('input[name="language"]:checked');
    let levelElement = document.querySelector('input[name="level"]:checked');

    // Check if the elements are not null
    if (languageElement && levelElement && ) {
        let language = languageElement.value;
        let level = levelElement.value;

        // Log the captured values
        console.log(language, level );

        window.location.href = 
    } else {
        console.log('Please make sure all questions are answered.');
    }

  
    
});
