chrome.mangement.getAll().forEach(e=>{
  var button = document.createElement('button');
  button.textContent = e.name,
    button.setAttribute('onclick',e.uninstall);
})
