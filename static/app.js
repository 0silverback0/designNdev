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