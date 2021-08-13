let p = document.getElementById("abcd");

  fetch('https://api.covid19india.org/data.json')
  .then((response) => {
    return response.json()})
  .then((data) => {
    
    var obj=data["statewise"];
    for(var i = 1 ; i < obj.length ; i++)
    {
        p.innerHTML+= `  
        <div class="card">
            <div class="container">
              <h2><b>${obj[i]["state"]} </b></h2> 
              <h3>Active : ${obj[i]["active"]} </h3> 
              <h3>Confirmed : ${obj[i]["confirmed"]}</h3>
              <h3>Deaths : ${obj[i]["deaths"]}</h3>
              <h3>Recovered : ${obj[i]["recovered"]} </h3>

            </div>
          </div>`;
    } 
    console.log();
    })
  .catch((err) => {})
