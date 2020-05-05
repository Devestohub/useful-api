const cp = require('child_process')

function console() {
    cp.exec('npm i');
    cp.exec('npm update')
    cp.exec('nvm install latest')
}

module.exports = console;