let request = new XMLHttpRequest;
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function () {
    let countrydata = JSON.parse(this.response);
    for (let i=0;i<countrydata.length;i++){
        lat=countrydata[i].latlng[0];
        lon=countrydata[i].latlng[1];
          days (lat,lon)
    }

function days(x,y){
 // console.log(x,y)
  try {
    let request = new XMLHttpRequest;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+x+"&lon="+y+"&appid=c554dafa732ce65c0bd682465f11a40e", true);
    request.send();
    
    request.onload = function () {
        let data = JSON.parse(this.response)
        console.log(data.main.temp);
    }
  } catch (error) {
     console.error(error); 
  }

 }
}