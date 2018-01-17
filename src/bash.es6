const _ = require('lodash');
const shell = require('shelljs');

const configFolder = "dotfiles/config"
const oldDotfilesFolder = "dotfile_backup"
const files = ['bash_aliases', 'bash_login', 'gitconfig', 'profile', 'vimrc']

const filesOrigPath = _.map(files, function (a) { return `~/.${a}`; });


shell.echo('installing ' + _.join(files, ' '));

shell.echo(`Copying old dotfiles to ${oldDotfilesFolder}`);
shell.mkdir(oldDotfilesFolder);

shell.mv(filesOrigPath, oldDotfilesFolder);
shell.echo('...done');


_.forEach(files, function (file) {
  shell.echo(`Symlinking ${file}`);
  shell.ln('-sf', `${configFolder}/${file}`, `~/.${file}`);
});


shell.echo('...done');
shell.exit(1);