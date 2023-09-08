
const handleLogin = async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let results = await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify({username,password}),
        headers: {"Content-Type":"application/json"}
    });

    if(results.ok) document.location.replace('/dashboard');
}

document.getElementById('loginForm').addEventListener('submit', handleLogin);