const skinTone = ['🏻', '🏼', '🏽', '🏾', '🏿'];

const babyLoop = () => {
  let baby = '';

  for (let index = 0; index < 10; index++) {
    const rando = Math.floor(skinTone.length * ((Math.sin(Date.now() / 100 + index) + 1) / 2));
    baby += `👶${skinTone[rando]}`;
  }

  window.location.hash = baby;
  document.title = baby;

  setTimeout(babyLoop, 50);
};

export default babyLoop;
