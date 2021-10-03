var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDIFmx3hr6yEOiUD6XRbtUwCmE5SrWz3p8&callback=initMap";
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available

  houseSearch()
  
};

// Append the 'script' element to 'head'
document.head.appendChild(script);




async function houseSearch(e) {
 e.preventDefault();
  
  const city = document.querySelector("#search").value.toUpperCase();
  const locationElement = document.querySelector("#location");
  const location = locationElement.options[locationElement.selectedIndex].value;
  
  if (city && location) {
    const response = await fetch("/api/forsale", {
      method: "post",
      body: JSON.stringify({
        city,
        location,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // turns raw data into JSON data
    const data = await response.json();
    
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: data.listings[0].lat, lng: data.listings[0].lon },
      zoom: 14,
    });


    $(".house-data").empty();
    data.listings.forEach((house) => {

      new google.maps.Marker({
        position: {lat: house.lat , lng: house.lon },
        map,
        title: "this is the mark",
      })

      
      $(".house-data").append(`<div class="col-6 margin-pic">
        
        <article>
        <div class="card-top-img">
                <div>
                <a href=${house.rdc_web_url}>
                <img class="real-pic" src=${house.photo} />
                </a>
                </div>
                </div>
                <div class="card-info">
                <div class="card-header">
                <span class="price">Price : ${house.price}</span>
                </div>
                <div>
                <span class="description">
                    ${house.beds}
                    beds
                    ${house.baths}
                    ba
                    ${house.sqft}
                    sqft 
                    </span>
                    </div>
                    <div>
                    <address class="address">${house.address}</address>
                    </div>
                    <div class="card-footer">${house.office_name}</div>
                </div>
                </article>
                
                </div>`);
    });
  }
}


document.querySelector(".btn-search").addEventListener("click", houseSearch);


$(document).ready(function () {
  $(".btn-search").click(function () {
    $("#infos").show();
  });
});
