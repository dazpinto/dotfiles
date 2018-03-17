const _ = require('lodash');
const shell = require('shelljs');

const configFolder = `${shell.pwd()}/config`
const oldDotfilesFolder = "dotfile_backup"
const files = ['bash_aliases', 'bash_login', 'gitconfig', 'profile', 'vimrc']

const filesOrigPath = _.map(files, function (a) { return `~/.${a}`; });

shell.echo('installing ' + _.join(files, ' '));

shell.echo(`Copying old dotfiles to ${oldDotfilesFolder}...`);
shell.mkdir(oldDotfilesFolder);

_.forEach(filesOrigPath, function (file) {
	if (!shell.test('-f', file)) {
		shell.mv(file, oldDotfilesFolder);
	}
});
shell.echo('...done');


_.forEach(files, function (file) {
	shell.echo(`Symlinking ${configFolder}/${file} to ~/.${file}`);
	shell.ln('-sf', `${configFolder}/${file}`, `~/.${file}`);
});


shell.echo('...done');
shell.exit(1);