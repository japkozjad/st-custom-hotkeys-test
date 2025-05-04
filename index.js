eventSource.on(event_types.APP_READY, async()=>{
    ta.addEventListener('keydown', (evt) => {
        if (evt.altKey) {
            if (evt.key == 'I') {
                evt.preventDefault();
                ta.value = "/impersonate ";
                ta.dispatchEvent(new Event('input'));
            }
        }
    });
});