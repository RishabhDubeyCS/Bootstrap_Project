    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
 // Simple smooth scrolling

    // Resume download function
    document.getElementById('heroResumeBtn').addEventListener('click', function() {
      // Trackable event - Resume Download
      gtag('event', 'download_resume', {
        'event_category': 'engagement',
        'event_label': 'Hero Section Resume Button'
      });
    });
    
    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simple form validation
      var isValid = true;
      this.querySelectorAll('input, textarea').forEach(function(input) {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });
      
      if (isValid) {
        // Simulate form submission success
        alert('Message sent successfully!');
        this.reset();
      }
    });