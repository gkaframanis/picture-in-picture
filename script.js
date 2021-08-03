const video = document.getElementById('video');
const button = document.getElementById("button");


// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // Working with Screen Capture API.
        // We get our mediastream data.
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // We pass the mediaStream the user select as video src.
        video.srcObject = mediaStream;
        // When the video has loaded its metadata it's gonna call a function to play the video.
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.error(`Whoops, error here: ${error}`);
    }
};

button.addEventListener("click", async () => {
    // Disable the button when clicked
    button.disabled = true;
    // Start Picture in Picture
    await video.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

// On Load
selectMediaStream();