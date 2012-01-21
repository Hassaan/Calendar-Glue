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
         
          //var screenWidth = $(window).width();
          //var screenHeight = $(window).height();
          var screenWidth = screen.height;
          var screenHeight = screen.width;
          var popupWidth = 550;
          var popupHeight = 705;
         
          var leftPosition =  Math.floor(screenWidth/2);
          var topPosition = Math.floor(screenHeight/2 - popupHeight);

          // Create a new window to the add event page.
          chrome.windows.create({
               url: url,
               type: "popup", 
               left: leftPosition,
               top: topPosition,
               width: popupWidth,
               height: popupHeight,
               focused: true
          });
    
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