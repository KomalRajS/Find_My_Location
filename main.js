const findMyLoc = () => {
    const status = document.querySelector('.location');

    const success = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            status.innerHTML =  "Latitude : " + lat +
            "<br> Longitude : " + long + 
            "<br> Area : " + data.locality +
            "<br> City : " + data.city +
            "<br> State : " + data.principalSubdivision + 
            "<br> Country : " + data.countryName ;
        })
    }

    const error = () => {
        status.textContent = 'Unable to retrieve your location';
    }

    navigator.geolocation.getCurrentPosition(success, error);

}

document.querySelector('.find_location').addEventListener('click',findMyLoc);