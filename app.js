fetch("https://icanhazdadjoke.com/slack")
  .then((response) => response.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.querySelector("#jokeElement");

    jokeElement.innerHTML = jokeText;
  });
