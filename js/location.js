// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
// script.async = true;

// // Attach your callback function to the `window` object
// window.initMap = function() {
//   // JS API is loaded and available
// };

// // Append the 'script' element to 'head'
// document.head.appendChild(script);

function initMap(){
    var location1 = {lat:43.8975558, lng:-78.8635324};
    var location2 = {lat:43.2560802, lng:-79.8728583};
    var location3 = {lat:43.6541457, lng:-79.3807928};
    var map1 = new google.maps.Map(document.getElementById("location1"),{
        zoom: 8,
        center: location1
    });
    
    var map2 = new google.maps.Map(document.getElementById("location2"),{
        zoom: 8,
        center: location2
    });

    var map3 = new google.maps.Map(document.getElementById("location3"),{
        zoom: 8,
        center: location3
    });
}