document.querySelectorAll(".btn-explode").forEach(button => {
    button.addEventListener("click", e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("span");
            particle.classList.add("particle");
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random();
            particle.style.setProperty("--x", Math.cos(angle) * distance);
            particle.style.setProperty("--y", Math.sin(angle) * distance);

            button.appendChild(particle);

            particle.addEventListener("animationend", () => {
                particle.remove();
            });
        }
    });
});

// Menambahkan efek slide-in untuk bagian pengalaman dan ulasan saat digulir
window.addEventListener('scroll', function () {
    const experience = document.getElementById("experience");
    const reviews = document.getElementById("reviews");
  
    // Menambahkan efek slide-in pada bagian pengalaman saat pengguna menggulir
    if (isInViewport(experience)) {
      experience.classList.add('slide-in');
    }
  
    // Menambahkan efek slide-in pada bagian ulasan saat pengguna menggulir
    if (isInViewport(reviews)) {
      reviews.classList.add('slide-in');
    }
  });
  
  // Fungsi untuk memeriksa apakah elemen ada di tampilan (viewport)
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  }
  
  // Menambahkan efek partikel saat tombol diklik
  document.querySelectorAll(".btn-explode").forEach(button => {
    button.addEventListener("click", e => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("span");
        particle.classList.add("particle");
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
  
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random();
        particle.style.setProperty("--x", Math.cos(angle) * distance);
        particle.style.setProperty("--y", Math.sin(angle) * distance);
  
        button.appendChild(particle);
  
        particle.addEventListener("animationend", () => {
          particle.remove();
        });
      }
    });
  });
  