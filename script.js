
document.addEventListener('DOMContentLoaded', function () {
    function updateTime() {
        const now = new Date();
        
        
        const nigeriaOffset = 1 * 60 * 60 * 1000; 
        const nigeriaTime = new Date(now.getTime() + nigeriaOffset);
        
        const nigeriaTimeString = nigeriaTime.toUTCString().replace('GMT', 'WAT');
        
        document.getElementById('nigeriaTime').textContent = nigeriaTimeString;
    }

    function updateDay() {
        const now = new Date();
        const day = now.toLocaleDateString('en-NG', { weekday: 'long' });
        document.getElementById('day').textContent = day;
    }
    
    updateDay(); 
    updateTime();
    setInterval(updateTime, 1000); 
});
