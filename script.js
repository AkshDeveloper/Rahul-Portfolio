const video = document.querySelector(".Showreel");
  
// Check if user is on mobile
const isMobile = window.innerWidth <= 480;

if (isMobile) {
  video.removeAttribute("loop"); // Remove loop on mobile
} else {
  video.setAttribute("loop", true); // Make sure it's looping on desktop
}


  // Enhanced Typewriter Effect with multiple texts 
  const texts = ["Hi, I'm Rahul.", "Video Editor", "Content Creator"];
  const typewriterElement = document.getElementById('typewriter-text');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseBetweenTexts = 2000;
  
  function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // Deleting characters
      typewriterElement.innerHTML = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Typing characters
      typewriterElement.innerHTML = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end of text
      isDeleting = true;
      setTimeout(typeWriter, pauseBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Continue typing/deleting
      setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
  }
  
  // Start the typewriter effect when page loads
  window.addEventListener('DOMContentLoaded', (event) => {
    typewriterElement.style.borderRight = "3px solid #00e0ff";
    setTimeout(typeWriter, 1000); // 1 second delay before starting
  });


  function handleEmailClick(e) {
    e.preventDefault();
    
    const email = "uniquesedit0@gmail.com";
    const subject = "Video Editing Inquiry";
    const body = `Hello Rahul,
  
  I would like to discuss a video editing project.
  
  Project Details:
  - Type of video:
  - Duration:
  - Deadline:
  
  Budget:
  
  Looking forward to your response!`;
  
    // Try to open email client directly
    try {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Create temporary link element
      const tempLink = document.createElement('a');
      tempLink.href = mailtoUrl;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      
      // Set timeout to check if email client opened
      setTimeout(() => {
        if (!document.hidden) {
          showEmailFallback(email);
        }
      }, 1000);
    } catch (error) {
      showEmailFallback(email);
    }
  }
  
  function showEmailFallback(email) {
    const shouldCopy = confirm("Couldn't open email client. Copy email address to clipboard?");
    if (shouldCopy) {
      navigator.clipboard.writeText(email)
        .then(() => alert(`Email copied: ${email}`))
        .catch(() => {
          prompt("Please copy this email address:", email);
        });
    }
  }

  document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} itz rahul.`;

  const allVideos = document.querySelectorAll('video');
  const showreelVideo = document.querySelector('.Showreel');
  
  allVideos.forEach(video => {
    video.muted = true; // required for autoplay on hover
    
    // Play on hover for all videos
    video.addEventListener('mouseenter', () => {
      video.play();
      
      // Pause the showreel if this isn't the showreel itself
      if (video !== showreelVideo) {
        showreelVideo.pause();
      }
    });
    
    // Reset on mouse leave
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      
      // Resume the showreel if this isn't the showreel itself
      if (video !== showreelVideo) {
        showreelVideo.play();
      }
    });
  });
  
  // Make sure showreel is playing initially
  showreelVideo.play();
