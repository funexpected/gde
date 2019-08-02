exports.command = 'list';
exports.desc = 'list available engine versions';
exports.builder = {
    /*
    game: {
        alias: 'p',
        default: '.'
    }
    */
};
exports.handler = (args) => {
    console.log('')
    console.log('  fun - Funexpected master');
    console.log('* godot - official latest stable');
    console.log('  godot.master - oficial latest master');
    console.log('')
}