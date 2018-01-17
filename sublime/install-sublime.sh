sublimeDir=~/dotfiles/sublime
sublimeDestination=~/.config/sublime-text-3/Packages/User
sublimeFiles=("snippets" "Emmet" "Default\ \(Linux\).sublime-keymap" "Package Control.sublime-settings" "Preferences.sublime-settings" "Soda\ Dark.sublime-theme" "Seti.sublime-theme" "Emmet.sublime-settings")
IFS=""

mkdir $sublimeDestination
for file in ${sublimeFiles[*]}; do
	mv $sublimeDestination/$file ~/dotfiles_sublime_old/ -f
	echo "Symlinking $sublimeDir/$file to $sublimeDestination/$file"
	ln -s $sublimeDir/$file $sublimeDestination/$file
done
