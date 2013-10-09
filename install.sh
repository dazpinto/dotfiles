#!/bin/bash
############################
# .make.sh
# This script creates symlinks from the home directory to any desired dotfiles in ~/dotfiles
############################

########## Variables

dir=~/dotfiles                    # dotfiles directory
olddir=~/dotfiles_old             # old dotfiles backup directory
files="bash_aliases bash_login bashrc gitconfig profile vimrc"    # list of files/folders to symlink in homedir


##########

# create dotfiles_old in homedir
echo "Creating $olddir for backup of any existing dotfiles in ~"
mkdir -p $olddir
echo "...done"

# change to the dotfiles directory
echo "Changing to the $dir directory"
cd $dir
echo "...done"

# move any existing dotfiles in homedir to dotfiles_old directory, then create symlinks 
for file in $files; do
    mv ~/.$file ~/dotfiles_old/ -f 
    echo "Symlinking $dir/$file to ~/.$file"
    ln -s $dir/$file ~/.$file
done


#####Sublime Text stuff
sublimeDestination=~/.config/sublime-text-3/Packages/User
sublimeFiles=("Default (Linux).sublime-keymap" "Package Control.sublime-settings" "Preferences.sublime-settings" "Ruby.sublime-settings" "Side Bar.sublime-settings" "Soda Dark.sublime-theme")
IFS=""
for file in ${sublimeFiles[*]}; do
	mv $sublimeDestination/$file ~/dotfiles_old/ -f
	echo "Symlinking $dir/$file to $sublimeDestination/$file"
	ln -s $dir/$file $sublimeDestination/$file
done