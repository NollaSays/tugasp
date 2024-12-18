document.getElementById('toggleSchedule').addEventListener('click', function() {
    const scheduleList = document.getElementById('scheduleList');
    if (scheduleList.style.display === 'none') {
        scheduleList.style.display = 'block';
        this.textContent = 'Hide Schedule';
    } else {
        scheduleList.style.display = 'none';
        this.textContent = 'Show Schedule';
    }
});