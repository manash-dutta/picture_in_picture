const videoEl = document.getElementById("video");
const btnEl = document.getElementById("btn");

// Prompt to select video stream, pass to video element then play video
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    console.log("Oops! you hit a rock... ", error);
  }
}

btnEl.addEventListener("click", async () => {
  try {
    // Disable the button
    btnEl.disabled = true;
    // Start Picture-in-Picture
    await videoEl.requestPictureInPicture();
  } catch (error) {
    console.log("Failed to enter Picture-in-Picture mode: ", error);
  } finally {
    // Reset the button
    btnEl.disabled = false;
  }
});

selectMediaStream();
