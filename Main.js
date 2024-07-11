var restaurant = [];

var restaurants ={

    id:0,
    name:"",
    city:"",
    address:"",
    cuisine:"",
    rating:0

}
function getrestaurant(){

    fetch("http://localhost:8080/restaurants")
    .then(response => response.json())
    .then(data =>{
         restaurant = data
         mapRest()
        })

}

function mapRest()
{

    var cards = `<div class="row">`

    for (let i = 0; i < restaurant.length; i++) {


        var ratingStr =""
        for (let j = 0; j < 5; j++) {
       
            if(j < restaurant[i].rating)
            ratingStr +=`<i class="bi bi-star-fill text-warning me-1"></i>`
            else
            ratingStr +=`<i class="bi bi-star text-warning me-1"></i>`

        }
        
      cards += `<div class="card col-3 m-1 ">
      <div class="card-body">
        <h4 class="card-title text-primary">${restaurant[i].name}</h5>
        <h6 class="card-subtitle text-secondary mb-2">${restaurant[i].city}</h6>
        <p class="card-text">${restaurant[i].address}</p>

      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${restaurant[i].cuisine}</li>
        <li class="list-group-item">${ratingStr}</li>
      </ul>
      </div>`

    }

    cards+=`</div>`
    console.log(cards);
    document.getElementById("restautantCard").innerHTML = cards 

}


function sendDataToResto() {

   restaurants.name = document.getElementById("name").value
   restaurants.address = document.getElementById("address").value
   restaurants.city = document.getElementById("city").value
   restaurants.cuisine = document.getElementById("cuisine").value
   restaurants.rating = document.getElementById("rating").value


//    console.log(restaurants);

    fetch("http://localhost:8080/restaurants",{
        
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(restaurants)}).then(response => response.json()).then(data=> {

        // getrestaurant()
    })
    
    
}
