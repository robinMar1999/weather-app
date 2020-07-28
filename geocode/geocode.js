const request = require('request');

let geocodeAddress = (address,callback)=>{
    address=encodeURIComponent(address);
    request({url:`https://us1.locationiq.com/v1/search.php?key=pk.a92cf98dfae8747c1bbcc81d61b828b0&q=${address}&format=json`,
    json:true
    },(error,response,body)=>{
        if(error){
            callback('Unable to connect Google servers');
        } else if(body.error && body.error==="Unable to geocode"){
            callback('Please type valid address');
        }
        else{
            callback(undefined,{
                address : body[0].display_name,
                longitude : body[0].lon,
                latitude : body[0].lat
            });
        }
    });
};

module.exports={
    geocodeAddress
}