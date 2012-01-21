var GOOGLE_CALENDAR_URL = 'http://www.google.com/calendar/render';


function onClickAction() {
  chrome.tabs.getAllInWindow(null, function(tabs) {
    chrome.tabs.create({url: GOOGLE_CALENDAR_URL});
  });
};


/**
 * Returns a handler which will open a new window when activated.
 */
function getClickHandler() {
  return function(info, tab) {

    var url = 'event.html';

    // Create a new window to the add event page.
    chrome.windows.create({ url: url, type: "popup"});
    
  };
};

/**
 * Create a context menu which will only show up for text selections.
 */
chrome.contextMenus.create({
  "title" : "Add to Calendar",
  "type" : "normal",
  "contexts" : ["selection"],
  "onclick" : getClickHandler()
});

  chrome.browserAction.onClicked.addListener(function(tab) {
    onClickAction();
  });