// Add an event listener for keydown events
document.addEventListener('keydown', (event) => {
    // Impersonate
    if (event.altKey && event.key.toLowerCase() === 'i') {
        event.preventDefault(); // Prevent default browser behavior

        const inputField = document.querySelector('#send_textarea');
        if (inputField) {
            inputField.value = '/impersonate ';
            const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            inputField.dispatchEvent(event);
        }
    }

    // Write as System
    if (event.altKey && event.key.toLowerCase() === 's') {
        event.preventDefault(); // Prevent default browser behavior

        const systemButton = document.querySelector('.qr--button.menu_button.qr--hasCtx.interactable[title="Write As System"]');
        if (systemButton) {
            systemButton.click();
            document.querySelector('#send_textarea').focus();
        }
    }

    // Delete Last Message
    if (event.altKey && event.key.toLowerCase() === 'l') {
        event.preventDefault(); // Prevent default browser behavior

        const inputField = document.querySelector('#send_textarea');
        if (inputField) {
            inputField.value = '/delmode 1 ';
            const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            inputField.dispatchEvent(event);
        }
    }

    // Open Dictonary
    if (event.altKey && event.key.toLowerCase() === 'd') {
        event.preventDefault(); // Prevent default browser behavior

        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            const url = `https://diki.pl/${encodeURIComponent(selectedText)}`;
            window.open(url, '_blank');
        }
    }
});