import React from 'react';
import * as Tone from 'tone';

// instruments
let bassSynth, cymbalSynth, casio;
// time variables
let loopBeat;
let counter;

export default function App() {
  //---------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------
  // demonstrate sounds
  // function play() {
  //   const now = Tone.now();

  //   cymbalSynth = new Tone.MetalSynth({
  //     frequency : 100 ,
  //     envelope : {
  //       attack : 0.001 ,
  //       decay : 0.1 ,
  //       release : 0.01
  //     },
  //     harmonicity : 3.1 ,
  //     modulationIndex : 12,
  //     resonance : 8000,
  //     octaves : 0.5
  //   }).toDestination();
  //   cymbalSynth.triggerAttackRelease('16n', now);

  //   bassSynth = new Tone.MembraneSynth().toDestination();
  //   bassSynth.triggerAttackRelease('F#3', '16n', now + 1);

  //   bassSynth.triggerAttackRelease('F#0', '16n', now + 2);
  // };
  //---------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------
  // function play() {
  //   counter = 0;

  //   cymbalSynth = new Tone.MetalSynth({
  //     frequency : 100 ,
  //     envelope : {
  //       attack : 0.001 ,
  //       decay : 0.1 ,
  //       release : 0.01
  //     },
  //     harmonicity : 3.1 ,
  //     modulationIndex : 12,
  //     resonance : 8000,
  //     octaves : 0.5
  //   }).toDestination();

  //   bassSynth = new Tone.MembraneSynth().toDestination();

  //   loopBeat = new Tone.Loop(song, '16n');

  //   Tone.Transport.bpm.value = 130;

  //   Tone.Transport.start();
  //   loopBeat.start(0);
  // };
  //---------------------------------------------------------------------------------------------------
  // function song(time) {
  //   // set currentBeat variable using Tone.Transport
  //   let currentBeat = Tone.Transport.position.split(':');
  //   console.log(currentBeat);

  //   if (counter % 4 === 0) {
  //     bassSynth.triggerAttackRelease('F#0', '16n', time, 1);
  //   }

  //   if (counter % 4 === 2) {
  //     if (counter === 2) {
  //       cymbalSynth.envelope.decay= '2n';
  //     } else {
  //       cymbalSynth.envelope.decay= 0.05;
  //     }
  //     cymbalSynth.triggerAttackRelease('16n', time);
  //   }

  //   // use modulo to loop counter in step increments
  //   counter = ( counter + 1 ) % 16;
  // };
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
  function play() {
    counter = 0;
    casio = new Tone.Sampler({
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
    bassSynth = new Tone.MembraneSynth().toDestination();
    cymbalSynth = new Tone.MetalSynth({
        frequency : 100 ,
        envelope : {
          attack : 0.001 ,
          decay : 0.1 ,
          release : 0.01
        },
        harmonicity : 3.1 ,
        modulationIndex : 12,
        resonance : 8000,
        octaves : 0.5
      }).toDestination();

    loopBeat = new Tone.Loop(song, '16n');

    Tone.Transport.bpm.value = 130;

    Tone.Transport.start();
    loopBeat.start(0);
  };
// //---------------------------------------------------------------------------------------------------
  function song(time) {
    // set currentBeat variable using Tone.Transport
    let currentBeat = Tone.Transport.position.split(':');
    console.log(currentBeat);

    // set conditional for chords to play on each beat
    if (counter % 16 === 0) {
      if (currentBeat[0] % 4 === 0) {
        casio.triggerAttackRelease(['Bb1', 'D2', 'F2', 'A2'], '1n', time);
      } else if (currentBeat[0] % 4 === 1) {
        casio.triggerAttackRelease(['C2', 'E2', 'G2', 'Bb1'], '1n', time);
      } else if (currentBeat[0] % 4 === 2) {
        casio.triggerAttackRelease(['F0', 'A1', 'C2', 'E2'], '1n', time);
      } else {
        casio.triggerAttackRelease(['F0', 'C2', 'D2', 'F2'], '1n', time);
      }
    }

    if (counter % 4 === 0) {
      bassSynth.triggerAttackRelease('F#0', '16n', time, 1);
    }

    if (counter % 2 === 0) {
      if (counter === 2) {
        cymbalSynth.envelope.decay= '2n';
      } else {
        cymbalSynth.envelope.decay= 0.05;
      }
      cymbalSynth.triggerAttackRelease('16n', time);
    }

    // use modulo to loop counter in step increments
    counter = ( counter + 1 ) % 16;
  };
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

  function stop() {
    Tone.Transport.cancel();
    Tone.Transport.stop();
  };

  return (
    <div>
      <button className='button' onClick={() => play()}>
        Play
      </button>
      <button className='button' onClick={() => stop()}>
        Stop
      </button>
    </div>
  );
}
