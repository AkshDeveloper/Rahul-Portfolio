(function() {
      // Typewriter
      const texts = ["Hi, I'm Rahul.", "Video Editor", "Content Creator"];
      const typewriterElement = document.getElementById('typewriter-text');
      let textIndex = 0, charIndex = 0, isDeleting = false;
      function typeWriter() {
        if (!typewriterElement) return;
        const currentText = texts[textIndex];
        typewriterElement.innerHTML = currentText.substring(0, isDeleting ? charIndex - 1 : charIndex + 1);
        charIndex += isDeleting ? -1 : 1;
        if (!isDeleting && charIndex === currentText.length) { isDeleting = true; setTimeout(typeWriter, 2000); }
        else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; setTimeout(typeWriter, 150); }
        else { setTimeout(typeWriter, isDeleting ? 80 : 120); }
      }
      window.addEventListener('DOMContentLoaded', () => { if(typewriterElement) setTimeout(typeWriter, 1000); });

      window.handleEmailClick = function(e) { e.preventDefault(); window.location.href = "mailto:uniquesedit0@gmail.com?subject=Video%20Editing%20Inquiry&body=Hello%20Rahul,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project."; };
      const footer = document.querySelector('footer p');
      if(footer) footer.innerHTML = `&copy; ${new Date().getFullYear()} itz rahul. All rights reserved.`;

      // Clients
      const clients = [
        { img:"image/Reefbash.jpg", ig:"reefbash_", url:"https://www.instagram.com/reefbash_/" },
        { img:"image/Magnet.au.jpg", ig:"magnet.au", url:"https://www.instagram.com/magnet.au" },
        { img:"image/theemralebs.jpg", ig:"theempirelabs", url:"https://www.instagram.com/theempirelabs" },
        { img:"image/bailey.cramer.jpg", ig:"baileyy.cramer", url:"https://www.instagram.com/baileyy.cramer" },
        { img:"image/Thomaskingston.jpg", ig:"thomaskingston_", url:"https://www.instagram.com/thomaskingston_" },
        { img:"image/trader saket.jpg", ig:"trader_saket_fx", url:"https://www.instagram.com/trader_saket_fx/" },
        { img:"image/yogadelight.jpg", ig:"_yogadelight", url:"https://www.instagram.com/_yogadelight/" }
      ];
      const clientsTrack = document.getElementById('clientsTrack');
      if(clientsTrack) {
        let html = '';
        for(let i=0; i<2; i++) clients.forEach(c => html += `<div class="card instagram-persona"><img src="${c.img}" alt="${c.ig}" loading="lazy" decoding="async"><a href="${c.url}" target="_blank"><p>Profile:<strong>@${c.ig}</strong></p></a></div>`);
        clientsTrack.innerHTML = html;
      }

      // Testimonials
      const testimonialImages = ["Testimonials/Testimonials 01.webp","Testimonials/Testimonials 02.webp","Testimonials/Testimonials 03.webp","Testimonials/Testimonial 04.webp","Testimonials/Testimonials 05.webp","Testimonials/Testimonials 06.webp","Testimonials/Testimonial 07.webp"];
      const testimonialTrack = document.getElementById('testimonialTrack');
      if(testimonialTrack) {
        let html = '';
        for(let i=0; i<2; i++) testimonialImages.forEach(img => html += `<figure class="testimonial-card"><img src="${img}" alt="Client testimonial" loading="lazy" decoding="async"></figure>`);
        testimonialTrack.innerHTML = html;
      }

      // Form
      const form = document.getElementById('projectInquiryForm');
      if(form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          const name = document.getElementById('clientName')?.value || '';
          const link = document.getElementById('referenceLink')?.value || '';
          const budget = form.querySelector('input[name="budget"]:checked')?.value || '';
          const types = Array.from(form.querySelectorAll('input[name="editingType"]:checked')).map(el => el.value).join(', ');
          const source = document.getElementById('leadSource')?.value || '';
          if(!types) { alert('Please select at least one editing type.'); return; }
          window.open(`https://wa.me/918889484701?text=${encodeURIComponent(`Hello Rahul,\n\nI want to discuss a video editing project.\n\n👤 Name: ${name}\n🔗 Reference: ${link}\n💰 Budget: ${budget}\n🎬 Type: ${types}\n📍 From: ${source}`)}`, '_blank');
          form.reset();
        });
        document.getElementById('bookCallButton')?.addEventListener('click', () => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3fpQPTKBuZOcbFT2o0cNKyJoWm8yvs6tEbna_P6kOUwzZBXyXzmcQQMjWGnzDLyARuiI-EQicU', '_blank'));
      }

      // Slider
      const videoGrid = document.getElementById('shortVideoGrid');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      if (videoGrid && prevBtn && nextBtn) {
        const videoSources = [
          { src: "Short video/4th Hebrew (002) Compressed .mp4", title: "4th Hebrew" },
          { poster: "image/@stellrmedia edit 2.png", src: "Short video/@stellrmedia edit 2.mp4", title: "@stellrmedia edit" },
          { poster: "image/Trading Day 02 (1st Drop) 3.png", src: "Short video/Trading Day 02 (1st Drop) 3.mp4", title: "Trading Day 02" },
          { poster: "image/Chrish (Ashton Hall) 4.png", src: "Short video/Itz Rahul Showreel 1.mp4", title: "Showreel" },
          { src: "Short video/@edouardbrochuu Reel Edit 5.mp4", title: "Reel Edit 5" },
          { src: "Short video/Hi Pages (001) Compressed .mp4", title: "Hi Pages" },
          { src: "Short video/Coachway 3rd (003) Compressed.mp4", title: "Coachway 3rd" }
        ];
        let currentIndex = 0;
        const totalSlides = videoSources.length;
        function createVideoElement(source, containerClass) {
          const container = document.createElement('div');
          container.className = `slider-video-container ${containerClass}`;
          const video = document.createElement('video');
          if (source.poster) video.poster = source.poster;
          video.src = source.src; video.loading = "lazy"; video.controls = true; video.title = source.title; video.muted = true;
          video.preload = "none";
          if (containerClass === 'center') {
            video.addEventListener('mouseenter', () => video.play().catch(() => {}));
            video.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
          }
          container.appendChild(video);
          return container;
        }
        function renderSlider() {
          videoGrid.innerHTML = '';
          const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          const prevContainer = createVideoElement(videoSources[prevIndex], 'side');
          prevContainer.addEventListener('click', () => { currentIndex = prevIndex; renderSlider(); });
          videoGrid.appendChild(prevContainer);
          videoGrid.appendChild(createVideoElement(videoSources[currentIndex], 'center'));
          const nextIndex = (currentIndex + 1) % totalSlides;
          const nextContainer = createVideoElement(videoSources[nextIndex], 'side');
          nextContainer.addEventListener('click', () => { currentIndex = nextIndex; renderSlider(); });
          videoGrid.appendChild(nextContainer);
        }
        function goNext() { currentIndex = (currentIndex + 1) % totalSlides; renderSlider(); }
        function goPrev() { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; renderSlider(); }
        nextBtn.addEventListener('click', goNext);
        prevBtn.addEventListener('click', goPrev);
        document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') goNext(); else if (e.key === 'ArrowLeft') goPrev(); });
        let touchStartX = 0;
        const sliderContainer = document.getElementById('shortSlider');
        if (sliderContainer) {
          sliderContainer.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
          sliderContainer.addEventListener('touchend', (e) => { const diff = touchStartX - e.changedTouches[0].screenX; if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev(); }, {passive: true});
        }
        renderSlider();
      }
      document.querySelectorAll('.category-grid video').forEach(v => {
        v.muted = true;
        v.addEventListener('mouseenter', () => v.play().catch(() => {}));
        v.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
      });
    })();