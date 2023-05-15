const gptResponse = document.getElementById("gpt-response");
const cardData = document.getElementById("card-data");
const flip = document.getElementById("flip");
let card;
async function askGPT() {
  //   console.log(prompt);

  const request = await fetch("/joke/gpt");
  const res = request.json();
  console.log(JSON.stringify(res));

  return res;
}

gptResponse.addEventListener("click", async (event) => {
  event.target;

  //   const reply = await askGPT(question);
  //   const reply = question;
  //   const prompt = makeJSON(reply);
  //   gtpInput.innerText = "";
  //   gptResponse.innerText = makeJSON(reply);
  await askGPT().then((res) => {
    card = res;
    cardData.innerText = res.front;
    // console.log("REsponnnseee: ", res);
  });
});

flip.addEventListener("click", (event) => {
  const currentData = cardData.innerHTML;
  if (currentData === card.front) {
    cardData.innerHTML = card.back;
  } else {
    cardData.innerHTML = card.front;
  }
});
