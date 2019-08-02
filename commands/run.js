exports.command = 'run [game]';
exports.desc = 'Run game or selected game';
exports.builder = {
    dir: {
      default: '.'
    }
};
exports.handler = (args) => {
    console.log('run called for dir', args.dir);
}
