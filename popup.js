/* Gross functions */

function speed_15(){
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 1.5;"});
});}

function speed_125(){
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 1.25;"});
});}


function speed_normal(){
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 1;"});
});}

function speed_85(){
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 0.85;"});
});}

function speed_75(){
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 0.75;"});
});}

/* Gross event listeners */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("fast15").addEventListener("click", speed_15);
  document.getElementById("fast125").addEventListener("click", speed_125);
  document.getElementById("normal").addEventListener("click", speed_normal);
  document.getElementById("slow85").addEventListener("click", speed_85);
  document.getElementById("slow75").addEventListener("click", speed_75);
});