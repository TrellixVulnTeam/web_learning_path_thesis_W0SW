let dataName = [];
let request = async ('http://localhost:3000/') => {
    const response = await fetch(url);
    const data = await response.json();
    dataName = data.name;
}

let name = document.getElementById('name');
name.textContent = dataName;