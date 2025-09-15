document.addEventListener('DOMContentLoaded', () => {
    // Add retro sound effect
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function playRetroSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Add sound effect to menu items
    document.querySelectorAll('.game-menu a').forEach(link => {
        // link.addEventListener('mouseenter', playRetroSound);
    });
});