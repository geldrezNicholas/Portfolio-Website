document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('star-container');
    const starGif = 'assets/star.gif'; 
    
    //if its mobile, set fewer stars
    const isMobile = window.innerWidth < 768;

    //20 for mobile, 50 for desktop
    const starCount = isMobile ? 20 : 50;

    for (let i = 0; i < starCount; i++) {
        const img = document.createElement('img');
        img.src = starGif;
        img.className = 'star';
        
        //Randomize position 40% from the top only
        const top = Math.random() * 40 + '%';
        const left = Math.random() * 100 + '%';
        
        //Randomize the size between 15px and 35px
        const size = (Math.random() * 20 + 15) + 'px';
        
        //Randomize the animation speed
        const duration = (Math.random() * 5 + 3) + 's';
        const delay = (Math.random() * 2) + 's';

        //apply styles
        img.style.top = top;
        img.style.left = left;
        img.style.width = size;
        img.style.height = size;
        img.style.animationDuration = duration;
        img.style.animationDelay = delay;

        starContainer.appendChild(img);
    }
});