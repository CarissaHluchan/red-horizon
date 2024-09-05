// I dropped this line becasue of undiagnosed OCD.

fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=1995-06-16`)
    .then(response => response.json())
    .then(data => console.log(data, '<-- HERE'))
    .catch(err => console.log(err))