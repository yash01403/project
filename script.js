function yash(value) {
  audioElement.src = `songs/${value}.mp3`;
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
}

console.log("welcome to music ");
let songindex = 0;
let audioElement = new Audio("/songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
let songitems = Array.from(document.getElementsByClassName("songitems"));

let songs = [
  {
    songname: "let me love you",
    filepath: "/songs/1.mp3",
    coverpath: "/covers/1.jpg ",
  },
  {
    songname: "cialo-huma",
    filepath: "/songs/2.mp3",
    coverpath: "/covers/2.jpg ",
  },
  {
    songname: "DEAF KAF",
    filepath: "/songs/3.mp3",
    coverpath: "/covers/3.jpg ",
  },
  {
    songname: "different heaven",
    filepath: "/songs/4.mp3",
    coverpath: "/covers/4.jpg ",
  },
  {
    songname: "janji-heroes",
    filepath: "/songs/5.mp3",
    coverpath: "/covers/5.jpg ",
  },
  {
    songname: "black-magic ",
    filepath: "/songs/6.mp3",
    coverpath: "/covers/6.jpg ",
  },
  {
    songname: "love you-at-night ",
    filepath: "/songs/7.mp3",
    coverpath: "/covers/7.jpg ",
  },
  {
    songname: "shoulder-down",
    filepath: "/songs/8.mp3",
    coverpath: "/covers/8.jpg ",
  },
  {
    songname: "heart-break",
    filepath: "/songs/9.mp3",
    coverpath: "/covers/9.jpg ",
  },
  {
    songname: "mashup",
    filepath: "/songs/10.mp3",
    coverpath: "/covers/10.jpg ",
  },
];
songitems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsBytagname("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

masterplay.addEventListener("click ", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log("X");

      makeAllplays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      songindex = 4;
      audioElement.src = "songs/${songindex+1}.mp3";
      // audioElement.src = "songs/songs[i].mp3";
      // console.log("$songs[songindex].filepath");
      // audioElement.src = "$songs[songindex].filepath";

      mastersongname.innerText = songs[songindex].songname;
      audioElement.currentTime = 0;
      audioElement.play();

      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 9) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioElement.src = "songs/${songindex+1}.mp3";
  mastersongname.innerText = songs[songindex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioElement.src = "songs/${songindex+1}.mp3";
  mastersongname.innerText = songs[songindex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
