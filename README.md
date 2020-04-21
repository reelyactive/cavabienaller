cavabienaller
=============

Ça va bien aller.  Uplifting projects in times of crisis, combining art and technology.


hue-rainbow-loop
----------------

Cycle Philips Hue Lights through the colours of the rainbow.

### Installation and Configuration

Clone this repository then: 

    cd hue-rainbow-loop
    npm install

Ensure the computer and the Philips Hue bridge are on the same network, press the Link button on the bridge and quickly thereafter:

    node huelink

If successful, copy the generated username to the HUE_BRIDGE_USERNAME constant of the __config.js__ file.  The program will use this username to connect and authenticate with the Hue bridge.

### Running from the command line

Using npm:

    npm start

Or alternatively:

    node huerainbowloop

### Running as a systemd service on the Raspberry Pi

Follow the instructions in our [Raspberry Pi Tutorial](https://reelyactive.github.io/diy/pi-suite/#step03) to run as a systemd service, instead using the file __hue-rainbow-loop.service__



License
-------

MIT License

Copyright (c) 2020 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
