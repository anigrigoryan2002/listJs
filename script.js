
function myFunction(event) {
    event.preventDefault(); 
    
    const info = document.getElementById('info'); 
    const list = document.getElementById('list'); 
    
    const messageSpan = document.getElementById("message");

    if (info.value.trim() !== '') { 
        const listItem = document.createElement('li'); 
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'; 
        
        checkbox.addEventListener('click', function() {
            listItem.remove(); 
        });
        
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(info.value)); 
        

        list.appendChild(listItem); 
        messageSpan.textContent = "successfully!";

        messageSpan.className = "success"; 
    } else {
        messageSpan.textContent = "Please enter some information.";
        messageSpan.className = "error"; 
    }
    info.value = "";

    setTimeout(() => {
        messageSpan.textContent = ""; 
        messageSpan.className = ""; 
    }, 2000);
}
