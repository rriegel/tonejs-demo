# tone.js demo 🎵🎹🎧

[![](https://img.shields.io/badge/tone.js-F734D7?style=for-the-badge)](https://tonejs.github.io/) is a JavaScript library that utilizes the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to allow musical arrangement and synthesis in the browser

## Current Status of the Repo 🤔

This repository serves as a demonstration of a variety of functionalities available using tone.js

The repo in its current state holds separated code blocks that incrementally add more complexity to 3 initialized sounds: bassSynth, cymbalSynth, casio

## This demo covers the following topics 🧑🏻‍🏫

```js
Import * as Tone
```

- Sounds can only be initialized by user action such as clicking a 'Play' button

- Initializing instrument variables

- Tone.MembraneSynth()

- Tone.MetalSynth()

- .triggerAttackRelease() to synthesize sound

- Tone.Transport.start()

- Tone.Transport.cancel()

- Tone.Transport.stop()

- Tone.Loop() to loop through an incrementing sequence

- Tone.Loop.start(startValue) to begin looping sequence

- Tone.Transport.position to view measure:beat:step time

- use modulo to loop counter in step increments
