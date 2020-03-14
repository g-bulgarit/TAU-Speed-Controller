
function go_faster(){
  var current_playback_rate;
  //current_playback_rate = document.getElementsByTagName('video')[0].playbackRate;
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 1.5;"});
});
}

function go_slower(){
  var current_playback_rate;
  //current_playback_rate = document.getElementsByTagName('video')[0].playbackRate;
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 0.5;"});
});
  
  
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("faster_button").addEventListener("click", go_faster);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("slower_button").addEventListener("click", go_slower);
});


