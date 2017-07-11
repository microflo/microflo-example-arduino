# microflo-example-arduino

Starting point for programming [Arduino](http://arduino.cc) devices with [MicroFlo](http://microflo.org).

## Prerequisites

You need to have the following software already installed.

* [Arduino IDE](https://www.arduino.cc/en/main/software) (version 1.6+)
* [Node.js](https://nodejs.org/) (version 4.2+) installed.
* A modern web-browser. For example Mozilla Firefox or Chrome

MicroFlo should work on any modern desktop OS, including Windows, Mac OSX and Linux.

### Supported boards
Any board with Arduino IDE support should work.
For some boards you may need to install additional Arduino "cores" using the Arduino "board manager".

Tested boards:

* Arduino Leonardo
* NodeMCUv3 ESP8266 (change LED pin to 2)

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

When the runtime has started, it will show a URL in the console like

`http://app.flowhub.io#runtime/endpoint?protocol%3Dwebsocket%26address%3Dws%3A%2F%2Flocalhost%3A3569%26id%3D7ed165ff-3f5c-498b-b5ef-14fbbd739165`

Copy/paste the URL shown into your browser, and load the page. You should now see the default "Blink" graph.

To make changes, hit the "Edit as Project" button. Try to click on the first node, and change how often the timer changes.

## Using custom components

You can add/remove components to be included in the build in `components.json`.
Components that are specific to your project should be put in `components/` folder.

See [components/Custom.hpp](components/Custom.hpp) for an example.

## Using a modified graph as the default program

Want your edited program to start automatically when the microcontroller is reset or power-cycled.

* In Flowhub, click the graph settings and then the download button
* Save this file as `graphs/myprogram.json`
* In `package.json` update all occurrences of `graphs/blink.fbp` with `graphs/myprogram.json`
* Rebuild by doing `npm run generate` and upload it using Arduino IDE

## Running automated test with fbp-spec

    TODO: document

