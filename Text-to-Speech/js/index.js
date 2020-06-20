function textToSpeech(){
// Get the write up
let write=document.getElementById("write").value;
// Variable for speech
let speech=new SpeechSynthesisUtterance();
// Preferred language
speech.lang="en-US";

speech.text=write;

// For configuration
speech.volume=2;
speech.rate=1;
speech.pitch=10;

window.speechSynthesis.speak(speech);
}
