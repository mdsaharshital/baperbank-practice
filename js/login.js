//login- redirect to banking page
document.getElementById('login-btn').addEventListener('click', function(){
    //user email
    const emailField = document.getElementById('input-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('input-password');
    const userPassword = passwordField.value;
    //check email n pass the give enterance 
    if(userEmail == 'sontan@bap.com' && userPassword == 'baperbank' ){
        window.location.href = 'banking.html'
    }
    else{
        alert('wrong Userid or Password')
    }
})