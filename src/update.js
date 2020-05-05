const child_process = require('child_process')

function cp() {
    child_process.exec('npm i').then(() => console.log('✓ npm i'))
    child_process.exec('npm update').then(() => console.log('✓ npm update'))
    child_process.exec('npm i @hugovidafe/hugovidafe-db@latest').then(() => console.log('✓ npm i @hugovidafe/hugovidafe-db@latest'))
    child_process.exec('nvm install latest').then(() => console.log('✓ nvm install latest'))
}

module.exports = cp;