const _ = require('lodash');
const shell = require('shelljs');

const bashPromptFolder = "~/.bash-git-prompt";
const configFolder = `${shell.pwd()}/config`;
const oldDotfilesFolder = "dotfile_backup";
const files = ['bash_aliases', 'bash_login', 'gitconfig', 'profile', 'vimrc'];

const filesOrigPath = _.map(files, function (a) { return `~/.${a}`; });

shell.echo('installing ' + _.join(files, ' '));

shell.echo(`Copying old dotfiles to ${oldDotfilesFolder}...`);
shell.mkdir(oldDotfilesFolder);

_.forEach(filesOrigPath, function (file) {
	if (!shell.test('-f', file)) {
		shell.mv(file, oldDotfilesFolder);
	}
});


_.forEach(files, function (file) {
	shell.echo(`Symlinking ${configFolder}/${file} to ~/.${file}`);
	shell.ln('-sf', `${configFolder}/${file}`, `~/.${file}`);
});


shell.echo("installing bash-git-prompt");
if (shell.which('git')) {
  shell.exec(`git clone https://github.com/magicmonty/bash-git-prompt.git ${bashPromptFolder} --depth=1`);
}
else { shell.echo('Sorry, this script requires git'); }

shell.echo('done!');
shell.exit(0);