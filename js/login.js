document.getElementById('btn-login').addEventListener('click', function(){
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value ;
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;
    if(email === 'personalbank@gmail.com' && password === '123456'){
        window.location.href = 'secondpage.html';
    }else{
        alert('invalid')
    }
})