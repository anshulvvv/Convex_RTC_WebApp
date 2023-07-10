let leavebtn = document.getElementById('leave-btn')
    leavebtn.addEventListener('click', (e) =>
    {
        console.log("i am clicked")
        window.location = `lobby.html`
       
        
        localStorage.removeItem("username")
        localStorage.removeItem("username2")
        
    })










