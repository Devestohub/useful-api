const { exec } = require('child_process')

function cp(param, callback) {
    exec(param, (error, stdout, stderr) => {
        callback = stdout;
    })
}

function update() {
    cp('npm i', cb => {
        console.log(cb)
    })
    
    cp('npm update', cb => {
        console.log(cb)
    })
    
    cp('npm i @hugovidafe/hugovidafe-db@latest', cb => {
        console.log(cb)
    })
    
    cp('nvm install latest', cb => {
        console.log(cb)
    })
}

module.exports = update;