///Draft with Drawbacks....///

 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LOLify</title>
</head>
 <title>HEHEE 😁</title>
 
  <style>
    body {
      margin: 0;
      font-family: 'Comic Neue', cursive;
      background: linear-gradient(135deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
      color: #fefefe;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 1rem;
      overflow: hidden;
    }

  @keyframes gradientBG {
      0% {background-position: 0% 50%;}
      50% {background-position: 100% 50%;}
      100% {background-position: 0% 50%;}
    }

   video.bg-video {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      z-index: -2;
      filter: brightness(0.3);
    }

  video.overlay-animation {
      position: fixed;
      top: 0;
      left: 0;
      width: 120px;
      height: auto;
      z-index: 1000;
      pointer-events: none;
      transition: transform 0.1s ease-out;
    }

    audio.bg-audio {
      display: none;
    }

  .container {
      max-width: 480px;
      width: 100%;
      background: rgba(0,0,0,0.6);
      border-radius: 20px;
      padding: 1.2rem;
      box-shadow: 0 0 20px rgba(255,255,255,0.1);
      backdrop-filter: blur(12px);
      position: relative;
      animation: popFade 1s ease-in-out;
    }

   @keyframes popFade {
      0% {transform: scale(0.8); opacity: 0;}
      100% {transform: scale(1); opacity: 1;}
    }

   header {
      text-align: center;
    }

  h1 {
      font-size: 2.2rem;
      margin-top: 2rem;
      text-shadow: 2px 2px 5px #000;
    }

   .subtitle {
      font-size: 1.1rem;
      color: #ddd;
    }

   .chat-box {
      margin-top: 2rem;
    }

  .whatsapp-chat {
    display: flex;
      flex-direction: column;
      gap: 10px;
    }

   .sender, .receiver {
      max-width: 80%;
      padding: 10px 15px;
      border-radius: 20px;
      font-size: 1rem;
      white-space: pre-wrap;
    }

  .sender {
      background: #dcf8c6;
      align-self: flex-end;
      color: #222;
    }

   .receiver {
      background: #fff;
      align-self: flex-start;
      color: #000;
    }

   .btn-animate {
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      font-size: 1.1rem;
      color: white;
      background: linear-gradient(45deg, #ff416c, #ff4b2b);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 0 10px #ff4b2b;
      transition: transform 0.3s;
    }

   .btn-animate:hover {
      transform: scale(1.1);
    }

  .user-input {
      margin-top: 2rem;
    }

   .user-input textarea {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      border-radius: 10px;
      border: none;
      margin-top: 1rem;
      resize: vertical;
    }

  .user-input button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 10px;
      background: #00c6ff;
      border: none;
      color: white;
      cursor: pointer;
    }
  footer {
      text-align: center;
      margin-top: 3rem;
      font-size: 0.9rem;
      color: #aaa;
    }
  </style>
</head>
<body>
  <video class="bg-video" autoplay muted loop>
    <source src="background.mp4" type="video/mp4">
  </video>

  <video id="cursor-bot" class="overlay-animation" autoplay muted loop>
    <source src="Animation.mov" type="video/quicktime">
  </video>

  <audio class="bg-audio" autoplay loop>
    <source src="bg-music.mp3" type="audio/mp3">
  </audio>

  <div class="container">
    <header>
      <h1>🔥 He Hee</h1>
      <p class="subtitle">Peace begins with a smile</p>
    </header>

    <main>
 <section class="chat-box">
        <div class="whatsapp-chat" id="joke-response">
          <div class="receiver">Press the button to LOL 🤣</div>
        </div>
        <button id="generate-joke" class="btn-animate" onclick="generateJoke()">Next Joke! 😎</button>
      </section>

 <section class="user-input">
        <h2>👂? You Too..</h2>
        <textarea id="userJoke" placeholder="Sireenga Sireenga Santhosama Irunga"></textarea>
        <button onclick="addUserJoke()"> Add Yours🎤</button>
      </section>
    </main>

 <footer>
      <p> Siricha Nee Rombha Alagha Iruppa Paari </p>
    </footer>
  </div>

  <script>
   function generateJoke() {
      const chatBox = document.getElementById('joke-response');
      chatBox.innerHTML = '';
      const convo = jokes[Math.floor(Math.random() * jokes.length)];
      convo.forEach((line, index) => {
        const bubble = document.createElement('div');
        bubble.className = index % 2 === 0 ? 'receiver' : 'sender';
        bubble.textContent = line;
        chatBox.appendChild(bubble);
      });
    }

    function addUserJoke() {
      const userJoke = document.getElementById('userJoke').value.trim();
      if (userJoke) {
        jokes.push([userJoke]);
        document.getElementById('userJoke').value = '';
      }
    }
  </script>
  <body>
  <video class="bg-video" autoplay muted loop>
    <source src="background.mp4" type="video/mp4">
  </video>

  <video id="cursor-bot" class="overlay-animation" autoplay muted loop>
    <source src="Animation.mov" type="video/quicktime">
  </video>

  <audio class="bg-audio" autoplay loop>
    <source src="bg-music.mp3" type="audio/mp3">
  </audio>

  <div class="container">
    <header>
      <h1>🔥 He Hee</h1>
      <p class="subtitle">Peace begins with a smile</p>
    </header>

    <main>
      <section class="chat-box">
        <div class="whatsapp-chat" id="joke-response">
          <div class="receiver">Press the button to LOL 🤣</div>
        </div>
        <button id="generate-joke" class="btn-animate" onclick="generateJoke()">Next Joke! 😎</button>
      </section>

      <section class="user-input">
        <h2>👂? You Too..</h2>
        <textarea id="userJoke" placeholder="Sireenga Sireenga Santhosama Irunga"></textarea>
        <button onclick="addUserJoke()"> Add Yours🎤</button>
      </section>
    </main>
    <footer>
      <p> Siricha Nee Rombha Alagha Iruppa Paari </p>
    </footer>
  </div>
</body>
</html>

    const bot = document.getElementById('cursor-bot');
    document.addEventListener('mousemove', (e) => {
      bot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  </script>
