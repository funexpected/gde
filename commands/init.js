const Path = require('path')
const State = require.main.require('./state.js');

exports.command = 'init';
exports.desc = 'init Godot Dev Environment project';
exports.builder = {
    game: {
        alias: 'p',
        default: '.',
        desk: 'Godot Project path'
    }
};
exports.handler = async (args) => {
    console.log('calling init');
    let state = await State.init(args.game);
    if (state){
        console.log('gde initialized at ', state.location);
    }
}