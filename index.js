// Add an event listener for keydown events
document.addEventListener('keydown', (event) => {
    // Check if the Alt key and the "I" key are pressed together
    if (event.altKey && event.key.toLowerCase() === 'i') {
        event.preventDefault(); // Prevent default browser behavior

        // Trigger the /impersonate slash command
        const inputField = document.querySelector('input[type="text"]'); // Adjust selector if needed
        if (inputField) {
            inputField.value = '/impersonate'; // Set the value
            inputField.focus(); // Ensure the input field is focused
            inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
            const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            inputField.dispatchEvent(enterEvent); // Simulate pressing Enter
        } else {
            console.error('Input field not found!');
        }
    }
});