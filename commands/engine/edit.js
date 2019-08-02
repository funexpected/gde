exports.command = 'edit';
exports.desc = 'edit engine source using VSC';
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