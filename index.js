// Add an event listener for keydown events
document.addEventListener('keydown', (event) => {
    // Check if the Alt key and the "I" key are pressed together
    if (event.altKey && event.key.toLowerCase() === 'i') {
        event.preventDefault(); // Prevent default browser behavior

        // Trigger the /impersonate slash command
        const inputField = document.querySelector('#send_textarea'); // Adjust selector if needed
        if (inputField) {
            inputField.value = '/impersonate ';
            const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            inputField.dispatchEvent(event);
        } else {
            console.error('Input field not found!');
        }
    }
});