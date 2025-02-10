const jsonPath = "data/sounds.json";
async function getJson() {
  const response = await fetch(jsonPath);
  const data = await response.json();
  console.log(data);
  return data;
}

const container = document.getElementById("drumkit");

async function sounds() {
  const sounds = await getJson();

  sounds.forEach((sound) => {
    const audio = document.createElement("audio");
    audio.id = sound.name;
    audio.src = sound.path;
    const button = document.createElement("button");
    button.textContent = sound.name;
    button.classList = sound.name;

    button.addEventListener("click", () => {
      audio.play();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === sound.key) {
        audio.play();
      }
    });
    container.appendChild(audio);
    container.appendChild(button);
  });
}
sounds();
