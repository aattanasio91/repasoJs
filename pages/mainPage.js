const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});