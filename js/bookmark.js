let Btn = document.getElementById('btn');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let named = document.querySelector('#name');
let email = document.querySelector('#email');
// let select = document.querySelector('.opt');
let serverURL = 'http://192.168.43.32:5000';

Btn.addEventListener('click', () => {
	if (!username.value) {
		alert('Enter YouTube URL');
	} else if (!password.value) {
		alert('Enter YouTube URL');
	} else if (!email.value) {
		alert('Enter YouTube URL');
	} 
    else if (!named.value) {
		alert('Enter YouTube URL');
	}else {
		register(username.value, email.value, password.value, named.value);
	}
});

async function register(username,email, password, name) {

    var request = new XMLHttpRequest();


    urlsort = `http://localhost:3000/search?search_query=love`
    var n = 1;
    request.open('GET', urlsort, true);


  // Website you wish to allow to connect
  request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  request.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  request.setRequestHeader('Access-Control-Allow-Credentials', true);
  // res.setHeader('content-type', 'application/json');

    request.onload = function () {   // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        console.log("data");
        console.log(data);
    }

    request.send();
}

async function downloadMp3(query) {
	const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp3?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert("Invalid url");
	}
}

async function downloadMp4(query) {
	const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert('Invalid url');
	}
}