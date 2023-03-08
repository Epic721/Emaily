// Define the menu configurations
const menuConfigs = [
  {
    id: "Emaily-respond-email",
    title: "Respond to Emaily",
  },
  {
    id: "Emaily-fix-grammar",
    title: "Fix Grammar with Emaily",
  },
  {
    id: "Emaily-fill-text",
    title: "Fill Text using Emaily",
  }
];

// Create a context menu for Emaily
chrome.contextMenus.create({
  id: "Emaily",
  title: "Emaily",
  contexts: ["all"],
});

// Create context menus for each menu configuration
for (let i = 0; i < menuConfigs.length; i++) {
  chrome.contextMenus.create({
    id: menuConfigs[i].id,
    title: menuConfigs[i].title,
    contexts: ["all"],
  });
}

// Listen for when the user clicks on a context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId.startsWith("Emaily")) {
    // Send a message to the content script
    chrome.tabs.sendMessage(tab.id, { type: info.menuItemId });
  }
});