const _ = require('lodash');
const shell = require('shelljs');

const sublimeConfigFolder = "dotfiles/config/sublime/"
const sublimeDestination = "~/.config/sublime-text-3/Packages/User/"
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

let getOriginalPath = function (filename) {
  return sublimeDestination + filename;
}

shell.echo('installing ' + _.join(_.concat(folders, files), ', '));

_.forEach(folders, function (folder) {
  shell.mv('-R', sublimeDestination + folder, backupFolder);
  shell.ln('-sf', `${sublimeConfigFolder}${file}`, sublimeDestination + folder);
});

_.forEach(files, function (file) {
  shell.mv(getOriginalPath(file), backupFolder);
  shell.ln('-sf', `${sublimeConfigFolder}${file}`, getOriginalPath(file));
});


shell.echo('...done');
shell.exit(1);