document.getElementById('request-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('confirmation').classList.remove('hidden');
});