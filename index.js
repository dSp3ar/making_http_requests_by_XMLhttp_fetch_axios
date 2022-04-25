const [btn1, btn2, btn3] = document.querySelectorAll('button');
const ul = document.querySelector('ul');
const endPoint = 'https://icanhazdadjoke.com';

btn1.addEventListener('click', function() {
    const myReq = new XMLHttpRequest();

    myReq.open('GET', endPoint);
    myReq.setRequestHeader('Accept', 'application/json');
    myReq.send();

    myReq.onload = function() {
        const data = JSON.parse(this.responseText).joke;
        const li = document.createElement('li');
        li.innerText = data;
        ul.append(li);
    };

    myReq.onerror = function() {
        alert('Error!');
    }

});

btn2.addEventListener('click', function() {
    fetch(endPoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        const li = document.createElement('li');
        li.innerText = data.joke;
        ul.append(li);
    }).catch(() => {
        alert('Error!');
    })
});

btn3.addEventListener('click', async function() {
    try {
        const res = await axios.get(endPoint, { headers: { 'Accept': 'application/json' } });
        const li = document.createElement('li');
        li.innerText = res.data.joke;
        ul.append(li);
    }
    catch {
        alert('Error!');
    }
});