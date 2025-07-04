class Music {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  musicInfo() {
    return `"${this.title}" by ${this.artist}`;
  }
}

class Playlist {
  constructor() {
    this.songs = [];
    this.currentIndex = 0;
    this.isPlaying = false;
  }

  addMusic(title, artist) {
    const song = new Music(title, artist);
    this.songs.push(song);
    console.log(`Music Added: ${song.musicInfo()}`);
  }

  play() {
    if (this.songs.length === 0) {
      console.log("Playlist is empty.");
      return;
    }

    this.isPlaying = true;
    console.log(`Now Playing: ${this.songs[this.currentIndex].musicInfo()}`);
  }

  stop() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log(" Music stopped.");
    } else {
      console.log(" No music is playing.");
    }
  }

  next() {
    if (this.songs.length === 0) return console.log(" Playlist is empty.");

    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.play();
  }

  prev() {
    if (this.songs.length === 0) return console.log("Playlist is empty.");

    this.currentIndex =
      (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.play();
  }
}

const myPlaylist = new Playlist();

myPlaylist.addMusic("Intelligence", "king Jaja");
myPlaylist.addMusic("Anything", "Davido");
myPlaylist.addMusic("Someone Like You", "Adele");

myPlaylist.play();
myPlaylist.next();
myPlaylist.stop();
myPlaylist.prev();


    

