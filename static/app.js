const $hamburger = $('.hamburger')
const $modal = $('.modal')
const $closeModal = $('.close')
const $body = $('body')

// SHOW MODAL
$hamburger.click( () => {
    $modal.show()
})

// CLOSE MODAL
$closeModal.click( () => {
    $modal.hide()
})

// $body.click( () => {
//     $modal.hide()
// })


// video window

function openVideoWindow() {
    // Define the URL of the video file
    var videoUrl = '../static/Images/high-roller-video.mp4';
    
    // Define the width and height of the video player as a percentage of the window size
    var windowWidth = window.innerWidth * 0.8;
    var windowHeight = window.innerHeight * 0.8;
    
    // Open a new window and embed the video player in it
    var videoWindow = window.open('', '', 'width=' + windowWidth + ',height=' + windowHeight);
    videoWindow.document.write('<video src="' + videoUrl + '" style="width: 100%; height: 100%;" controls></video>');
  }
  