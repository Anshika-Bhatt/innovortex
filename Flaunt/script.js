const initialVideos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
    "video6.mp4"
];

let videos = [...initialVideos];
let currentIndex = 0;
const videoPlayer = document.getElementById('videoPlayer');

// Function to play the current video immediately
function playCurrentVideo() {
    videoPlayer.src = videos[currentIndex];
    videoPlayer.play();
}

// Play the first video immediately
window.onload = () => {
    currentIndex = 0; // Ensure the index starts at 0
    playCurrentVideo();
};

// Function to update the video player
function updateVideo() {
    videoPlayer.src = videos[currentIndex];
    videoPlayer.play();
}

// Upload button functionality
document.getElementById('uploadButton').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

// File input change event to add the uploaded video
document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videos.push(videoURL); // Add the new video URL to the videos array
        alert("Video uploaded! You can now navigate to it using the arrow keys.");
    }
});

// Navigation with arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % videos.length;
        updateVideo();
    } else if (event.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        updateVideo();
    }
});
