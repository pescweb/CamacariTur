var myApp = new Framework7({
    pushState: true,
    pushStateSeparator: ''
});

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true
});

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

myApp.onPageInit('article', function (page) {
var mySwiper = myApp.swiper('.swiper-container', {
    speed: 600,
    spaceBetween: 100
}); 
$$('.ac-1').on('click', function () {
    var target = this;
    var buttons = [
        {
            text: 'Facebook',
            onClick: function () {
                window.open('https://www.facebook.com/sharer/sharer.php?u='+window.location.href+'','_blank');
            },
            bold: true
        },
        {
            text: 'Twitter',
            onClick: function () {
                window.open('https://twitter.com/home?status=Read%20this%20! '+window.location.href+'','_blank');
            },
            bold: true
        },
        {
            text: 'Google Plus',
            onClick: function () {
                window.open('https://plus.google.com/share?url='+window.location.href+'','_blank');
            },
            bold: true
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(target, buttons);
});
});

myApp.onPageInit('profile', function (page) {
$$('i.fa.fa-heart').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('fav');
});
});

var mySwiper = myApp.swiper('.swiper-container', {
    speed: 600,
    spaceBetween: 100
});    
$$('.ac-1').on('click', function () {
    var target = this;
    var buttons = [
        {
            text: 'Facebook',
            onClick: function () {
                window.open('https://www.facebook.com/sharer/sharer.php?u='+window.location.href+'','_blank');
            },
            bold: true
        },
        {
            text: 'Twitter',
            onClick: function () {
                window.open('https://twitter.com/home?status=Read%20this%20! '+window.location.href+'','_blank');
            },
            bold: true
        },
        {
            text: 'Google Plus',
            onClick: function () {
                window.open('https://plus.google.com/share?url='+window.location.href+'','_blank');
            },
            bold: true
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(target, buttons);
});


myApp.onPageInit('weather', function (page) {
$(document).ready (function() {
	navigator.geolocation.getCurrentPosition(function(position) {
		loadWeather(position.coords.latitude+','+position.coords.longitude); 
	});
});
$(document).ready(function() {
  loadWeather('Camacari, Bahia, BR','458947'); //@params location, woeid
});
function loadWeather(location, woeid) {
$.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      html = '<li class="date">Today '+weather.forecast[0].date+'</li><br>';
      html += '<li class="city">'+weather.city+'</li><br>';
      html += '<li class="country">'+weather.country+'</li><br>';
      html += '<h2><i class="icon-'+weather.code+'"></i></h2>';
      html += '<li class="currently">'+weather.currently+'</li><br>';
      html += '<li class="temp">'+weather.temp+'&deg;</li><br>';
      html += '<li class="high-low">High '+weather.forecast[0].high+' Low '+weather.forecast[0].low+'</li><br>';
      html += '<li class="visibility">Visibility '+weather.visibility+'</li><br>';
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
});

myApp.onPageInit('map', function (page) {
var map;
var marker;


function initialize() {

	var mapOptions = {
		center: new google.maps.LatLng(-12.6964,-38.3234),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);


function searchAddress() {

  var addressInput = document.getElementById('address-input').value;

	var geocoder = new google.maps.Geocoder();

	geocoder.geocode({address: addressInput}, function(results, status) {

		if (status == google.maps.GeocoderStatus.OK) {

      var myResult = results[0].geometry.location;

      createMarker(myResult);

      map.setCenter(myResult);

      map.setZoom(17);
		}
	});

}

function createMarker(latlng) {

  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }

  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
}
});

myApp.onPageInit('traffic', function (page) {
map = new google.maps.Map(document.getElementById('traffic'), {
  center: {lat: -12.69717, -38.33319},
  zoom: 11
});
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
});

myApp.onPageInit('login-screen', function (page) {
  var pageContainer = $$(page.container);
  pageContainer.find('a.done').on('click', function () {
    var email = pageContainer.find('input[name="email"]').val();
    var password = pageContainer.find('input[name="password"]').val();
    // Handle username and password
    myApp.alert('E-mail: ' + email + ', Password: ' + password, function () {
      mainView.goBack();
    });
  });
});

myApp.onPageInit('chat', function (page) {
// Conversation flag
var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});
 
// Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');
 
// Handle message
$$('.messagebar .link').on('click', function () {
  // Message text
  var messageText = myMessagebar.value().trim();
  // Exit if empy message
  if (messageText.length === 0) return;
 
  // Empty messagebar
  myMessagebar.clear()
 
  // Random message type
  var messageType = (['sent', 'received'])[Math.round(Math.random())];
 
  // Avatar and name for received message
  if(messageType === 'received') {
  }
  // Add message
  myMessages.addMessage({
    // Message text
    text: messageText,
    // Random message type
    type: messageType,
  })
 
  // Update conversation flag
  conversationStarted = true;
});                 
});

