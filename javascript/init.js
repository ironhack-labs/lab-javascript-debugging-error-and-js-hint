if(window.SpotifyApp === undefined){
  window.SpotifyApp = {}
}

SpotifyApp.init = function(){
  console.log('Running SpotyApp')
}

window.onload = function(){
  SpotifyApp.init();
};
