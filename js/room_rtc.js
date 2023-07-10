const APP_ID = "a80d302b8571483abf34b98ce9481ba3"

let uid = sessionStorage.getItem('uid')

if(!uid){
    uid=String(Math.floor(Math.random()*10000))
    
        sessionStorage.setItem('uid',uid);
    
    
}

let token = null;
let client;

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let roomId = urlParams.get('room')

if(!roomId){
    roomId='main'
}

let localTracks = []
let remoteUsers = {}

let joinRoomInit = async() => {
    client =AgoraRTC.createClient({mode:'rtc',codec:'vp8'})
    await client.join(APP_ID,roomId,token,uid)
    joinStream()
}

let joinStream = async () => {
    localTracks =await AgoraRTC.createMicrophoneAndCameraTracks()
    let player = 
    `<div class="camera-area" id="member_no_${uid}">
        <div class="video-player" id="user-${uid}">
        </div>
    </div>`;
    document.getElementById('conatiner-camera-id').insertAdjacentHTML('beforeend',player)
    localTracks[1].play(`user-${uid}`)
}

joinRoomInit()


