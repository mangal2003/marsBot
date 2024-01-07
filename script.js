//  newQuery queryResponse queryResponse1 queryResponse2 queryResponse3 queryResponse4 cancleResponse
function newQuery() {
  let previousRes = document.getElementById("queryResponse");
  previousRes.style.display = "none";
  let animator = document.getElementById("responseGPT");
  animator.innerHTML = `<div id="animationLoading">
                        <div id="circle1" class="circle"></div>
                        <div id="circle2" class="circle"></div>
                        <div id="circle3" class="circle"></div>
                        <div id="circle4" class="circle"></div>
                        <div id="circle5" class="circle"></div>
                    </div>`;
}

function queryResponse() {
  let queryBox = document.getElementById("queryEntered");
  let queryUser = document.getElementById("queryUser");
  let responseBox = document.getElementById("responseGPT");
  queryBox.innerText = queryUser.value;
  let previousRes = document.getElementById("queryResponse");
  previousRes.style.display = "block";

  let response = fetch("https://chatgpt-gpt5.p.rapidapi.com/ask", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "chatgpt-gpt5.p.rapidapi.com",
    },
    body: JSON.stringify({
      query: queryUser.value,
    }),
  });

  response
    .then((gpt) => {
      return gpt.json();
    })
    .then((data) => {
      responseBox.innerText = data.response;
    })
    .catch((err) => {
      console.log("Some error occurred:", err);
    });
}

function queryResponse1() {
  let queryBox = document.getElementById("queryEntered");
  let responseBox = document.getElementById("responseGPT");
  queryBox.innerText = "Come up with concepts for a retro-style arcade game";
  let previousRes = document.getElementById("queryResponse");
  previousRes.style.display = "block";

  let response = fetch("https://chatgpt-gpt5.p.rapidapi.com/ask", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "chatgpt-gpt5.p.rapidapi.com",
    },
    body: JSON.stringify({
      query: "Come up with concepts for a retro-style arcade game",
    }),
  });

  response
    .then((gpt) => {
      return gpt.json();
    })
    .then((data) => {
      responseBox.innerText = data.response;
    })
    .catch((err) => {
      console.log("Some error occurred:", err);
    });
}
function queryResponse2() {
  let queryBox = document.getElementById("queryEntered");
  let responseBox = document.getElementById("responseGPT");
  queryBox.innerText = "Write a thank-you note to my interviewer";
  let previousRes = document.getElementById("queryResponse");
  previousRes.style.display = "block";

  let response = fetch("https://chatgpt-gpt5.p.rapidapi.com/ask", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "chatgpt-gpt5.p.rapidapi.com",
    },
    body: JSON.stringify({
      query: "Write a thank-you note to my interviewer",
    }),
  });

  response
    .then((gpt) => {
      return gpt.json();
    })
    .then((data) => {
      responseBox.innerText = data.response;
    })
    .catch((err) => {
      console.log("Some error occurred:", err);
    });
}
function queryResponse3() {
  let queryBox = document.getElementById("queryEntered");
  let responseBox = document.getElementById("responseGPT");
  queryBox.innerText =
    "Compare marketing strategies for sunglasses for Gen Z and Millennials";
  let previousRes = document.getElementById("queryResponse");
  previousRes.style.display = "block";

  let response = fetch("https://chatgpt-gpt5.p.rapidapi.com/ask", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "chatgpt-gpt5.p.rapidapi.com",
    },
    body: JSON.stringify({
      query:
        "Compare marketing strategies for sunglasses for Gen Z and Millennials",
    }),
  });

  response
    .then((gpt) => {
      return gpt.json();
    })
    .then((data) => {
      responseBox.innerText = data.response;
    })
    .catch((err) => {
      console.log("Some error occurred:", err);
    });
}
function queryResponse4() {
  let queryBox = document.getElementById("queryEntered");
  let responseBox = document.getElementById("responseGPT");
  queryBox.innerText =
    "Help me pick a birthday gift for my mom who likes gardening";
  let previousRes = document.getElementById("queryResponse");
  previousRes.style.display = "block";

  let response = fetch("https://chatgpt-gpt5.p.rapidapi.com/ask", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "chatgpt-gpt5.p.rapidapi.com",
    },
    body: JSON.stringify({
      query: "Help me pick a birthday gift for my mom who likes gardening",
    }),
  });

  response
    .then((gpt) => {
      return gpt.json();
    })
    .then((data) => {
      responseBox.innerText = data.response;
    })
    .catch((err) => {
      console.log("Some error occurred:", err);
    });
}
