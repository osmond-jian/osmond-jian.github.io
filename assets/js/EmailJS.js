window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('resetButton').click();
                alert('Your message has been sent!')
            }, function(error) {
                console.log('FAILED...', error);
                alert('Your message has not been sent. Error:' + error);
            });
    });
}