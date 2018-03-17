const _ = require('lodash');
const shell = require('shelljs');

const sublimeConfigFolder = `${shell.pwd()}/config/sublime`
const sublimeDestination = "~/.config/sublime-text-3/Packages/User"
const backupFolder = "dotfile_backup"

const folders = ["Emmet", "snippets"];
const files = [
  'Default (Linux).sublime-keymap',
  'Emmet.sublime-settings',
  'Package Control.sublime-settings',
  'Preferences.sublime-settings',
  'Ruby.sublime-settings',
  'Seti.sublime-theme',
  'Soda Dark.sublime-theme'
];

let removeOldConf = function (path) {
  if (shell.test('-L', path)) { // If symbolic link
    shell.rm(path);
  }
  else if(shell.test('-d', path) || shell.test('-f', path)) { // If directory or regular file
    shell.echo(`backing up ${path} to ${backupFolder}/`);
    shell.mv('-n', path, `${backupFolder}/`);
  }
}

shell.echo(`installing to ${sublimeDestination}:\n  ` + _.join(_.concat(folders, files), '\n  '));
shell.mkdir('-p', sublimeDestination);
shell.mkdir(backupFolder);

_.forEach(folders, function (folder) {
  removeOldConf(`${sublimeDestination}/${folder}`);
  shell.ln('-sf', `${sublimeConfigFolder}/${folder}`, `${sublimeDestination}/${folder}`);
});

_.forEach(files, function (file) {
  removeOldConf(`${sublimeDestination}/${file}`);
  shell.ln('-sf', `${sublimeConfigFolder}/${file}`, `${sublimeDestination}/${file}`);
});


shell.echo('done!');
shell.exit(0);