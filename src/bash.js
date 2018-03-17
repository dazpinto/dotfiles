const _ = require('lodash');
const shell = require('shelljs');

const bashPromptFolder = "~/.bash-git-prompt";
const configFolder = `${shell.pwd()}/config`;
const oldDotfilesFolder = "dotfile_backup";
const files = ['bash_aliases', 'bash_login', 'gitconfig', 'profile', 'vimrc'];

let removeOldConf = function (path) {
  if (shell.test('-L', path)) { // If symbolic link
    shell.rm(path);
  }
  else if (shell.test('-d', path) || shell.test('-f', path)) { // If directory or regular file
    shell.echo(`backing up ${path} to ${oldDotfilesFolder}`);
    shell.mv(path, oldDotfilesFolder);
  }
}

shell.echo(`installing to ~/:\n  ` + _.join(_.concat(files), '\n  '));
shell.mkdir(oldDotfilesFolder);

_.forEach(files, function (file) {
  removeOldConf(`~/.${file}`);
	shell.ln('-sf', `${configFolder}/${file}`, `~/.${file}`);
});


shell.echo("installing bash-git-prompt");
if (shell.which('git')) {
  removeOldConf(bashPromptFolder);
  shell.exec(`git clone https://github.com/magicmonty/bash-git-prompt.git ${bashPromptFolder} --depth=1`);
}
else { shell.echo('Sorry, this script requires git'); }

shell.echo('done!');
shell.exit(0);