let username;
let inviteCode;

let button = document.getElementById('lobby__form')

  button.addEventListener('submit', (e) => {
        console.log(e)
        e.preventDefault()

         username = e.target.name.value
         inviteCode = e.target.room.value
        console.log(inviteCode)
        localStorage.setItem("username",username)
        window.location = `room.html?room=${inviteCode}`
       
        
 })

  

  

  
