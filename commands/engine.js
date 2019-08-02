exports.command = 'engine [command]';
exports.desc = 'working with Godot engine versions & sources';
exports.builder = function (yargs) {
    return yargs.commandDir('engine')
};
exports.handler = (args) => {
    console.log('opening editor');
}