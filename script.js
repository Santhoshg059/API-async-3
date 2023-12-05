const factCard = document.getElementById('factCard');

// Function to fetch a random math fact
const getRandomMathFact = () => {
  fetch('http://numbersapi.com/random/math')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.text();
    })
    .then(data => {
      displayMathFact(data);
    })
    .catch(error => {
      console.error('Error fetching math fact:', error);
      displayMathFact('Failed to fetch a math fact. Please try again.');
    });
};

// Function to display the math fact on the webpage
const displayMathFact = fact => {
  factCard.innerHTML = `<div class="fact">${fact}</div>`;
};

// Initial display of a random math fact
getRandomMathFact();
