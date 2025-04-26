fetch('https://disease.sh/v3/covid-19/all')
.then(res => res.json())
.then(data => {
    document.getElementById('cases').textContent = data.cases.toLocaleString();
    document.getElementById('deaths').textContent = data.deaths.toLocaleString();
    document.getElementById('recovered').textContent = data.recovered.toLocaleString();
    document.getElementById('active').textContent = data.active.toLocaleString();
}).catch((err) => console.log("error:", err));