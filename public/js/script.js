const buttons = document.querySelectorAll('button')

// Get all rating buttons
const ratingButtons = document.querySelectorAll('.rating-btn')

// Add event listener to each rating button
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Set the value of the hidden input field
    document.getElementById('rating-input').value = button.dataset.rating

    // Add the rating value to the submit button link
    document.getElementById('submit-btn').href = `/thank-you?rating=${button.dataset.rating}`;

    // Remove the "active" class from all rating buttons
    ratingButtons.forEach(button => {
      button.classList.remove('active')
    })

    // Add the "active" class to the clicked rating button
    button.classList.add('active')

    // Enable the submit button
    document.getElementById('submit-btn').disabled = false

    // Get the selected rating
    const selectedRating = document.querySelector('.active').textContent

    console.log(selectedRating)
  })
})