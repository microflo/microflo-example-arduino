# microflo-example-arduino

Starting point for programming [Arduino](http://arduino.cc) devices with [MicroFlo](http://microflo.org).

## Prerequisites

You need to have the following software already installed.

* [Arduino IDE](https://www.arduino.cc/en/main/software) (version 1.6+)
* [Node.js](https://nodejs.org/) (version 4.2+) installed.
* A modern web-browser. For example Mozilla Firefox or Chrome

MicroFlo should work on any modern desktop OS, including Windows, Mac OSX and Linux.

You will also need an Arduino device like an Arduino Uno, Nano or Lenoardo.
Other Arduino-compatible devices should also work, but has not been tested.

## Setting up

### Download this repository

You can download this example either using git:

    git clone https://github.com/microflo/microflo-example-arduino.git

or [download as a ZIP](https://github.com/microflo/microflo-arduino/archive/master.zip) from Github.

### Install dependencies

MicroFlo is available via the [NPM](https://npmjs.org) package manager (included with Node.js).

The dependencies are already set up in the [package.json](./package.json). Install them using:

    npm install

### Generate the MicroFlo firmware

This will create an Arduino sketch which includes: the MicroFlo runtime, the components and the initial/default graph. 

    npm run generate

### Upload to the board

Open the Arduino sketch in the Arduino IDE.

    arduino build/blink/blink.ide

Then upload it to the board like normal.
First check the board details under `Tools`, then run `Sketch -> Upload`.

If the upload was successful, the on-board LED should now be blinking around 3 times per second.

## Programming with Flowhub

### Start the runtime adapter

To let the Flowhub IDE talk to the microcontroller, need to run `microflo runtime`.
This is configured in package.json, so you can start it using:

    npm start

If the port is not autodetected correctly, you can specify it manually using `npm start --port /dev/ttyUSB99`.

### Open in Flowhub

Open [app.flowhub.io](http://app.flowhub.io) and log in with Github.

And then add a new runtime at `Runtimes -> New -> Add manually`.
Enter host=`localhost`, port=`3569`, type=`microflo`.

Create a new project, for type `Microcontroller`.
Select your newly added runtime in top-right corner.

## Using custom components

    TODO: document

## Using a modified graph as the default program on startup

    TODO: document

## Running automated test with fbp-spec

    TODO: document

## Live mode

    TODO: document
