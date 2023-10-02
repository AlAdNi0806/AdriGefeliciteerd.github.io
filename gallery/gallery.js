// JavaScript (script.js)

// Function to create a random star with drifting animation
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;

    // Add a subtle drifting animation
    star.style.animation = `drift ${Math.random() * 8 + 4}s linear infinite`;

    return star;
}

// Function to add stars to the background
function addStarsToBackground() {
    const numberOfStars = 100; // You can adjust the number of stars as needed

    const neonBackground = document.querySelector('.neon-background');

    for (let i = 0; i < numberOfStars; i++) {
        const star = createStar();
        neonBackground.appendChild(star);
    }
}

// Add stars to the background when the page loads
window.addEventListener('load', addStarsToBackground);

// Embed the YouTube player when the page loads
window.onload = onYouTubeIframeAPIReady;


function onYouTubeIframeAPIReady() {
    new YT.Player('youtube-player', {
      videoId: 'BQWCc9JXIwg',
      width: 640, // Width of the player
      height: 360, // Height of the player
      playerVars: {
        autoplay: 1, // Autoplay the video
        loop: 1, // Loop the video
        controls: 0, // Hide video controls
        showinfo: 0, // Hide video information
        modestbranding: 1, // Hide YouTube logo
        fs: 0, // Disable fullscreen button
        cc_load_policy: 0, // Disable captions
        iv_load_policy: 3, // Disable annotations
        autohide: 0 // Don't auto-hide video controls
      }
    });
}
