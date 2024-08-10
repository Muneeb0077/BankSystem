window.onload = function () {
  setTimeout(function () {
    document
      .querySelectorAll("#header, #nura-bank,#middle-line, #producers, #social-media")
      .forEach(function (element) {
        element.classList.add("visible");
      });
  }, 2000);
};


const handleRegistration = async (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target);

  try {
    const response = await fetch('/api/v1/register', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registration successful!');
    } else {
      alert(`Registration failed: ${data.message}`);
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred during registration. Please try again.');
  }
};

const handleLogin = async (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target);

  try {
    const response = await fetch('/api/v1/login', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert('Login successful!');
    } else {
      alert(`Login failed: ${data.message}`);
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login. Please try again.');
  }
};

const handleMoneyTransfer = async (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target);

  try {
    const response = await fetch('/api/v1/transfer', {
      method: 'POST',
      body: formData,
    });


    const data = await response.json();


    if (response.ok) {
      alert('Money transfer successful!');
    } else {
      alert(`Money transfer failed: ${data.message}`);
    }
  } catch (error) {
    console.error('Error during money transfer:', error);
    alert('An error occurred during money transfer. Please try again.');
  }
};

document.getElementById('registrationForm').addEventListener('submit', handleRegistration);
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('moneyTransferForm').addEventListener('submit', handleMoneyTransfer);

