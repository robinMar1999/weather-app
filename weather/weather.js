const request = require('request');


let getWeather = (results,callback)=>{
    request({
        url:`https://api.openweathermap.org/data/2.5/onecall?lat=${results.latitude}&lon=${results.longitude}&exclude=hourly,daily,minutely&appid=f955c7808bee805bff67772331ed72b3&units=metric`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('Unable to fetch weather');
        } else if(body.cod){
            callback('Please enter valid latitude and longitude');
        } 
        else{
            callback(undefined,body);
        }
    });
};

module.exports={
    getWeather 
}