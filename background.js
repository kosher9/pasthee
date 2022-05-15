let color = '#3aa757'
// Get data from clipboard
// Set localStorage
// Check if data is text or anything else
// Hard to work on this
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color})
    console.log('Default background color set to %cgreen', `color: ${color}`)
    console.log(navigator.clipboard.readText())
})