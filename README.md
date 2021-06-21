# tone.js demo 🎵🎹🎧

[![](https://img.shields.io/badge/tone.js-F734D7?style=for-the-badge)](https://tonejs.github.io/) is a JavaScript library that utilizes the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to allow musical arrangement and synthesis in the browser

---

## Current Status of the Repo 🤔

This repository serves as a demonstration of a variety of functionalities available using tone.js

The repo in its current state holds separated code blocks that incrementally add more complexity to 3 initialized sounds

---

## This demo covers the following topics 🧑🏻‍🏫

1. Importing the tone.js library
```js
import * as Tone from 'tone';
```

2. Sounds can only be initialized by user action - such as clicking a 'play' button ▶️

3. Initializing instrument variables
```js
let bassSynth, cymbalSynth, casio;
```

4. Using the Membrane Synth
```js
const bassSynth = new Tone.MembraneSynth().toDestination();
```

5. Using the Metal Synth
```js
const cymbalSynth = new Tone.MetalSynth().toDestination();
```

6. Triggering sound events
```js
bassSynth.triggerAttackRelease('F#3', '16n', now + 1);
```

7. Starting tone.js's event timing
```js
Tone.Transport.start();
```
8. Using Tone.Transport.position to view measure:beat:step time increments
```js
let currentBeat = Tone.Transport.position.split(':');
```

9. Stopping tone.js's event timing
```js
Tone.Transport.cancel();
Tone.Transport.stop();
```

10. Creating an event loop
```js
let loopBeat = new Tone.Loop(song, '16n');
loopBeat.start(0); // to begin looping sequence
```

11. Using modulo to loop counter in step increments
```js
counter = ( counter + 1 ) % 16;
```

12. Using Tone.Sampler to map out notes from .mp3 files available via the tone.js API
```js
const casio = new Tone.Sampler({
      urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/casio/",
      onload: () => {
        this.setState({
          isLoaded: true
        })
      }
    }).toDestination();
```

---

## Tools

[![](https://img.shields.io/badge/tone.js-F734D7?style=for-the-badge)](https://tonejs.github.io/)
[![](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://www.javascript.com/)
[![](https://img.shields.io/badge/ReactJS-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![](https://img.shields.io/badge/HTML-DD4B24?logo=HTML5&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![](https://img.shields.io/badge/Webpack-539AC8?logo=webpack&logoColor=white&style=for-the-badge)](https://webpack.js.org/)
[![](https://img.shields.io/badge/Babel-F9DC3F?logo=babel&logoColor=black&style=for-the-badge)](https://babeljs.io/)
