

function addingEventListener() {
    
    const input = document.getElementById('input');
    const OtherDiv = document.getElementById('newmsg');
    
    function clickAlert() {
      alert('I was clicked!');
    }
    
    function eventListener() {
        alert("Hee hee, that tickles!");
      }
    
    input.addEventListener('click', clickAlert);
    OtherDiv.addEventListener("click",eventListener);
    clickAlert();
    

}


