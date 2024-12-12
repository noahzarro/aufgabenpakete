// Add collapsible functionality and load content dynamically
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', async function () {
        // Toggle active class
        this.classList.toggle('active');

        // Get the associated content div
        const content = this.nextElementSibling;

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';

            // Load content if not already loaded
            if (!content.dataset.loaded) {
                const src = content.dataset.src;
                try {
                    const response = await fetch(src);
                    const html = await response.text();
                    content.innerHTML = html;
                    content.dataset.loaded = 'true'; // Mark as loaded
                } catch (error) {
                    content.innerHTML = `<p>Error loading content: ${error.message}</p>`;
                }
            }
        }
    });
});
