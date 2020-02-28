# Tap tempo

This is a console app that computes BPM from keypresses.

Hit the `x` key on the keyboard to establish a tempo. Running bpm is displayed to the console as inputs are collected.
Only up to the last 5 inputs are averaged to compute the tempo.

There are some key handlers there for starting and stopping and nudging. Ultimately this is going to be a metronome I think.
I haven't totally decided. This is an experiment for doing an arduino clock circuit for some looping hardware I'm designing.

$ npm install
$ node index.js
