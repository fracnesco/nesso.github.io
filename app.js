
const audio = new AudioContext(); // const is for fix variables, let is for chainging variable
  let osc = audio.createOscillator();

function play () {
  // alert("It Works");
  // console.log("You have been hacked");
  osc = audio.createOscillator();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(100, audio.currentTime);
  osc.connect(audio.destination);
  osc.start(audio.currentTime);
  osc.frequency.setValueAtTime(20, audio.currentTime + 1);
}

document.getElementById('makeSound').addEventListener("click", play);

function stopAction () {
  osc.stop();
}

document.getElementById('stopSound').addEventListener("click", stopAction)
