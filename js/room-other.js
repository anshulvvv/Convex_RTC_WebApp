let leavebtn = document.getElementById('leave-btn')
    leavebtn.addEventListener('click', (e) =>
    {
        console.log("i am clicked")
        window.location = `lobby.html`
       localStorage.removeItem("username2")
        
    })


document.getElementsByClassName('member_name')[1].innerHTML = localStorage.getItem("username2")
