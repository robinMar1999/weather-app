const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js')

const argv=yargs
    .options({
        a:{
            demand : true,
            alias : 'address',
            describe : 'Address to fetch weather for',
            string : true
        }
    })
    .help()
    .alias('help','h')
    .argv;
geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    } else{
        weather.getWeather(results,(err,body)=>{
            if(err){
                console.log(err);
            } else{
                console.log(`Place : ${results.address}`);
                console.log(`Temperature : ${body.current.temp} degree celsius`);
                console.log(`Weather : ${body.current.weather[0].main} --- ${body.current.weather[0].description}`);
            }
        });
    }
});
