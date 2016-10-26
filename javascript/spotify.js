SpotifyApp.myTrackList = []

SpotifyApp.SpotifySong = function(name){
  this.name = name;
}

SpotifyApp.SpotifySong.prototype.getTrackInfo = function(){
  var song = this;
  $.get('https://api.spotify.com/v1/search?type=track&q=' + song.name, function(response){
    song.info = response.tracks.items[0];
    song.setSong();
    SpotifyApp.currentSong = song;
  });
}

SpotifyApp.SpotifySong.prototype.setSong = function(){
  SpotifyApp.audio.src = this.info.preview_url;
  document.getElementsByClassName('title')[0].innerHTML = this.info.name;
  document.getElementsByClassName('author')[0].innerHTML = this.info.artists[0].name;
  document.getElementsByClassName('cover')[0].children[0] = this.info
}

SpotifyApp.playSong = function(){
  this.audio.play();
}

SpotifyApp.pauseSong = function(){
  this.audio.pause();
}

SpotifyApp.changeSongStatus = function(){
  var button = document.getElementsByClassName('btn-play')[0]
  !button.className.includes('playing') ? this.playSong() : this.pauseSong();
  button.classList.toggle('disabled');
  button.classList.toggle('playing');
}

SpotifyApp.updateProgressBar = function(){
  document.getElementsByTagName('progress')[0].value = this.audio.currentTime
}

SpotifyApp.createSong = function(event){
  event.preventDefault();

  var trackName = document.getElementsByClassName("artist-search")[0].value;
  var song = new SpotifyApp.SpotifySong(trackName);

  song.getTrackInfo();
}

window.onload = function(){
  SpotifyApp.audio = document.getElementsByClassName("audio-song");
  var searchButton = document.getElementsByClassName('search-song');
  var audioButton = document.getElementsByClassName('btn-play');

  searchButton[0].addEventListener('click', SpotifyApp.createSong)

  audioButton[0].addEventListener('click', function(){
    SpotifyApp.changeSongStatus()
  })

  SpotifyApp.audio.addEventListener('timeupdate', function(){
    SpotifyApp.updateProgressBar();
  })

};
