require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var command = process.argv[2];
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var getArtist = function(artist) {
  return artist.name;
};

var getSongName = function(song) {
  if (song === undefined) {
    song = "Greatest";
  }
};

var song = process.argv[3];
console.log(song);

spotify.search({ type: "track", query: song }, function(err, data) {
  if (err) {
    console.log("Error occurred: " + err);
    return;
  }
  var songs = data.tracks.items;
  for (var i = 0; i < songs.length; i++) {
    console.log(i);
    console.log("artist(s): " + songs[i].artists.map(getArtist));
    console.log("song name: " + songs[i].name);
    console.log("preview song: " + songs[i].preview_url);
    console.log("album: " + songs[i].album.name);
    console.log("-----------------------------------");
  }
});
