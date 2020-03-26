/* Functions */

function speed_normal(){
  // Set video playback speed to 1x
  
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 1;"});
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.querySelector('video').playbackRate = 1;"});
    document.getElementById("slider").value = "1";
    document.getElementById("slider_value").innerHTML = "1";
  });}

function update_slider(){
  // Update slider label based on slider position,
  // Set video playback rate to slider value.

  var slider_value = document.getElementById("slider").value;
  var action_str_unicko = "document.getElementsByTagName('video')[0].playbackRate =" + slider_value;
  var action_str_zoom = "document.querySelector('video').playbackRate =" + slider_value;
  document.getElementById("slider_value").innerHTML = document.getElementById("slider").value;
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: action_str_unicko});
    chrome.tabs.executeScript(activeTabs[0].id, { code: action_str_zoom});})
  }

function update_number(){
  // Update text value on slider move, but don't update playback speed.
  document.getElementById("slider_value").innerHTML = document.getElementById("slider").value;
}

/* Event Listeners */

document.addEventListener('DOMContentLoaded', function() {
  // Add an event listener for the slider and for the reset button
  document.getElementById("reset").addEventListener("click", speed_normal);
  document.getElementById("slider").addEventListener("change", update_slider);
  document.getElementById("slider").addEventListener("input", update_number);
});
