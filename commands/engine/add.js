const Git = require('nodegit');
const Path = require('path');

const State = require.main.require('./state.js');

exports.command = 'add <name> <repo|path>';
exports.desc = 'Clone engine from <repo> or open cloned engine at <path> and associate it with <name>';
exports.builder = {
    'branch': {
        alias: "b",
        default: "master",
        desc: "Default fetch branch"
    },
    'desc': {
        desc: "Description visible in `engine list`",
        default: ""
    },
    'basepath': {
        alias: "p",
        default: ".",
        desc: "Base path for cloning engine"
    }
};
exports.handler = async (args) => {
    /** @type {Git.Repository} */
    let repo
    if (args.path){
        repo = await Git.Repository.open(args.path)
    } else {
        repo = await cloneRepo(url, Path.join(args.basepath, args.name));
    };
    let ref = await repo.getCurrentBranch();
    let commit = await ref.peel(1)
    console.log("Repo opened, last commit: ", ref.shorthand(), " ", commit.id().toString().substr(0,8));
}

var cloneRepo = async (url, path) => {
    console.log("Cloning ", url, " into ", path);
    let cloneOptions = {};
    cloneOptions.fetchOpts = {
        callbacks: {
            certificateCheck: function() { return 1; },
            credentials: function(url, userName) {
                return Git.Cred.sshKeyFromAgent(userName);
            },
            transferProgress: (progress) => {
                console.log("Cloning: ", progress.receivedObjects, "/", progress.totalObjects)
            }
        }
    };
    return await Git.Clone(url, path, cloneOptions); 
}