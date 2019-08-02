exports.command = 'edit';
exports.desc = 'open Godot editor';
exports.builder = {
    /*
    game: {
        alias: 'p',
        default: '.'
    }
    */
};
exports.handler = (args) => {
    console.log('opening editor');
}