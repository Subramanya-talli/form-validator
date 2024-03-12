const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener("submit", e =>{
    e.preventDefault();

    validateInputs();
});

const setError= (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove("success")
}

const Setsuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isvalidEmail = email => {
    const res =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

function validateInputs()
{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue === '') {
        setError(username, "User name is required");
    }
    else
    {
        Setsuccess(username);
    }

    if (emailValue === '') {
       setError(email, "Email is required");   
    }
    else if(!isvalidEmail(emailValue))
    {
        setError(email, "Provide valid email address");
    }
    else
    {
        Setsuccess(email)
    }

    if ( password === '') {
        setError(password, "Password is required")
    }
    else if(passwordValue.length < 8)
    {
        setError(password, "Password must be 8 character.")
    }
    else
    {
        Setsuccess(password);
    }
    if(password2Value === '')
    {
        setError(password2, "Please confirm your password");
    }
    else if( password2Value !== passwordValue)
    {
        setError(password2, "Password doesn't match");
    }
    else
    {
        Setsuccess(password2)
    }
}
