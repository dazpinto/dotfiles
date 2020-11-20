const _ = require('lodash');
const shell = require('shelljs');

const configFolder = `${shell.pwd()}/config`;
const oldDotfilesFolder = "dotfile_backup";
const files = ['bash_aliases', 'gitconfig', 'vimrc'];

let removeOldConf = function (path) {
  if (shell.test('-L', path)) { // If symbolic link
    shell.rm(path);
  }
  else if (shell.test('-d', path) || shell.test('-f', path)) { // If directory or regular file
    shell.echo(`backing up ${path} to ${oldDotfilesFolder}`);
    shell.mv('-n', path, `${oldDotfilesFolder}/`);
  }
}

shell.echo(`installing to ~/:\n  ` + _.join(_.concat(files), '\n  '));
shell.mkdir(oldDotfilesFolder);

_.forEach(files, function (file) {
  removeOldConf(`~/.${file}`);
	shell.ln('-sf', `${configFolder}/${file}`, `~/.${file}`);
});

shell.echo(`echo "source ~/.bash_aliases" >> ~/.zshrc`);

shell.echo('done!');
shell.exit(0);