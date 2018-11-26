'use strict';

const COM = "COM3";
const BAUDRATE = 9600;
var SerialPort = require('serialport');
const commandOpenDoor = '\xAB\xB5\x48\x00\x03\x00\x15\x01\x01\xEB\x66';
var serialPort = new SerialPort(COM, {
    baudRate: BAUDRATE
  });

serialPort.write(commandOpenDoor);
serialPort.on( "data", function( data ) {
  alert(data);
});
