// Add an event listener for keydown events
document.addEventListener('keydown', (event) => {
    // Check if the Alt key and the "I" key are pressed together
    if (event.altKey && event.key.toLowerCase() === 'i') {
        event.preventDefault(); // Prevent default browser behavior

        // Write "/impersonate " in the input field
        const inputField = document.querySelector('input[type="text"]'); // Adjust selector if needed
        if (inputField) {
            inputField.value = '/impersonate '; // Set the value with a trailing space
            inputField.focus(); // Ensure the input field is focused
            inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
        } else {
            console.error('Input field not found!');
        }
    }
});