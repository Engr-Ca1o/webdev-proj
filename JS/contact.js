var form = document.getElementById('form'); 

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    alert('Message received! Please wait for confirmation.');
    // Reset form fields
    form.reset();
});
