/*
 * Copyright reelyActive 2020
 * We believe in an open Internet of Things
 */


const nodeHueApi = require('node-hue-api');
const config = require('./config.js');


let rainbowHueIndex = 0;
let transitionMilliseconds = Math.round(config.cycleTimeMilliseconds *
                                        Math.min(0.9, Math.max(0.1,
                                               config.cycleTransitionRatio)));


/**
 * Attempt to connect to the first bridge in the given list, then run the
 * rainbow loop.
 * @param {Array} bridges The discovered bridges.
 */
function rainbowLoop(bridges) {
  if(bridges.length) {
    let host = bridges[0].ipaddress;
    let hueApi = new nodeHueApi.HueApi(host, config.hueBridgeUsername);

    console.log('Hue bridge found at', host);

    hueApi.lights().then(initiateLoop).done();

    function initiateLoop(result) {
      let lights = [];

      result.lights.forEach(function(light) {
        lights.push(light.id);
      });

      setInterval(cycleColor, config.cycleTimeMilliseconds, hueApi, lights);
    }
  }
  else {
    return console.log('No Hue bridges found.');
  }
}


/**
 * Display the current rainbow color then cycle the index to the next.
 */
function cycleColor(hueApi, lights) {
  let currentHue = config.rainbowHues[rainbowHueIndex];
  let lightState = nodeHueApi.lightState.create()
                                        .hue(currentHue)
                                        .bri(255)
                                        .sat(255)
                                        .transition(transitionMilliseconds);

  lights.forEach(function(light) {
    hueApi.setLightState(light, lightState.on()).then().done();
  });

  rainbowHueIndex = (rainbowHueIndex + 1) % config.rainbowHues.length;
}


// Search for bridges using uPnP, then attempt to run the rainbow loop
nodeHueApi.upnpSearch(config.searchTimeMilliseconds).then(rainbowLoop).done();