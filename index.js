// Add an event listener for keydown events
document.addEventListener('keydown', (event) => {
    // Check if the Alt key and the "I" key are pressed together
    if (event.altKey && event.key.toLowerCase() === 'i') {
        event.preventDefault(); // Prevent default browser behavior

        // Get the selected persona's name
        const selectedPersona = document.querySelector('.persona.selected'); // Adjust selector if needed
        const personaName = selectedPersona ? selectedPersona.textContent.trim() : null;

        // Write "/impersonate [personaName]" in the input field
        const inputField = document.querySelector('input[type="text"]'); // Adjust selector if needed
        if (inputField) {
            if (personaName) {
                inputField.value = `/impersonate ${personaName}`; // Set the value with the persona name
            } else {
                inputField.value = '/impersonate '; // Default command if no persona is selected
            }
            inputField.focus(); // Ensure the input field is focused
            inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
        } else {
            console.error('Input field not found!');
        }
    }
});