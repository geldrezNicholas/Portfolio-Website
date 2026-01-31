document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('star-container');
    const starGif = 'assets/star.gif';
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const img = document.createElement('img');
        img.src = starGif;
        img.className = 'star';
        
        //Random position across the page above 40% height
        const top = Math.random() * 40 + '%';
        const left = Math.random() * 100 + '%';
        
        //Randomizing size
        const size = (Math.random() * 20 + 15) + 'px';
        
        //Random animation speed and delay
        const duration = (Math.random() * 5 + 3) + 's';
        const delay = (Math.random() * 2) + 's';

        //Applying styles
        img.style.top = top;
        img.style.left = left;
        img.style.width = size;
        img.style.height = size;
        img.style.animationDuration = duration;
        img.style.animationDelay = delay;

        starContainer.appendChild(img);
    }
});