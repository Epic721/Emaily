// Saves settings to chrome.storage
function save_settings() {
    chrome.storage.sync.set({
        apikey: document.getElementById('apikey').value,
    }, function() {
        // Update status to let user know settings were saved.
        var status = document.getElementById('status');
        status.textContent = 'Settings saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

//Restores select box and checkbox state using the preferences
//stored in chrome.storage.
// function restore_settings() {
//     // Use default value color = 'red' and likesColor = true.
//     chrome.storage.sync.get({
//         configs: JSON.stringify(DEFAULT_CONFIGS),
//     }, function(items) {
//         document.getElementById('configs').value = items.configs;
//     });
// }
// document.addEventListener('DOMContentLoaded', restore_settings);
document.getElementById('save').addEventListener('click',
    save_settings);