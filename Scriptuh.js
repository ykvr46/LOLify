    const jokes = [
      [" Can you swim?", " No.", " Even a dog can swim.", " Can *you* swim?", ": Yes.", " Then what’s the difference between you and the dog? 🐶"],
      [" So you can flirt but not commit?", "I do pushups too, doesn’t mean I’m ready for Olympics. 🏋️"],
      [" Hello", " I don’t talk to ugly people", " But I do. 😎"],
      [" Am I ugly?", "God made no one ugly.", " Thank you!", " But Then who the hell made you? 😬"],
      ["How was your day?", "Good... until a sec ago 🙄"],
      [" You're cute", " No, you're cute", " Oh thanks 🙈", " I was correcting your grammar, stupid. ✍️"],
      ["Friend: What is the main reason for divorse "," Marriage 🤔"],[" She: You deserve better", "Me: Then be better 😩"],[" What are you doing?","  Ignoring red flags 🏳️"],
      ["ME: Sometimes I Talk to Myself for no Reason", " Also Me: Mee Too"], [" What's IDEK Mean?", "I Don't Even Know", " Then Why You Commenter 😩"],
      ["Why are Men only nice to u for 3 weeks LOL", " That's The end of the Free Trial ☕"], ["I am a Private Person. If you don't ask I won't Tell", " Who Asked you This ??"]
    ];

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

    const bot = document.getElementById('cursor-bot');
    document.addEventListener('mousemove', (e) => {
      bot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });