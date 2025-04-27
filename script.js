document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMsg = document.getElementById('error-msg');
  
    if (username === '' || password === '') {
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
      window.location.href = 'home.html'; // Redirect to Home
    }
  });
  