
const Path = require('path');
const FS = require('fs');

exports.hello = () => {
    console.log("State!");
}

exports.getPath = () => {
    let f = './.gde';
    while (Path.resolve(f) != '/.gde') {
        if (FS.existsSync(f)) {
            return Path.resolve(Path.join(f, ".."))
        }
    }
    return Path.resolve('.')
}

exports.load = async () => {
    let f = Path.join(getPath(), '.gde');
    let state = null;
    try {
        state = JSON.parse(FS.readFileSync(f));
    } catch (err) {
        return null;
    }
    if (state) state.location = Path.resolve(f);
    return state;
}

exports.save = (state) => {
    let f = Path.join(getPath(), '.gde')
    console.log('saving to ', f);
    delete state.location;
    FS.writeFileSync(f, JSON.stringify(state));
}

exports.init = (game) => {
    let godotProject = Path.join(game, 'project.godot')
    if (!FS.existsSync(godotProject)){
        console.log('Unable find Godot project at', Path.resolve(godotProject));
        return null;
    }
    let state = {
        game: game
    }
    save(state);
    return state;
}