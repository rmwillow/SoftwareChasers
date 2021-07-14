function generateHTML(answer) {
    return `
<h1 align="center">${answer}</h1>title goes here</h1>
  
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{{ name }}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
        </ul>
    </div>
</div>

  
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{{ name }}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">School: {{ school }}</li>
        </ul>
    </div>
</div>
<br />
`;


}


//export readme to display 
module.exports = generateHTML;