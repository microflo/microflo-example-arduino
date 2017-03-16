var path = require('path');

var arduinoDir = "/home/jon/projects/microflo/arduino-1.8.1";
var board = 'arduino:avr:uno';
var sketch = 'build/blink/blink.ino';
var buildDir = 'build/builder/blink';

var cmd = "arduino-builder -compile -verbose" +
    " -hardware " + path.join(arduinoDir, 'hardware') +
    ' -tools ' + path.join(arduinoDir, 'tools-builder') +
    ' -tools ' + path.join(arduinoDir, 'hardware', 'tools') +
    ' -fqbn ' + board +
    ' -libraries ' + './node_modules/microflo' +
    ' -libraries ' + './node_modules/microflo-core' +
    ' ' + sketch;
    
console.log(cmd);
