# aliases
alias l='ls -lah'
alias c='cd'
alias d='cd ..'

alias ss="script/server"
alias sc="script/console"
alias rs="bundle exec rails server"
alias ru="bundle exec rackup"
alias rc="bundle exec rails console"
alias rr="bundle exec rake routes"
alias restart="touch tmp/restart.txt"
alias pss="passenger start"
alias psq="sudo -u postgres psql"
alias rndFile="dd if=/dev/zero of=testfile.txt count=1 bs="
alias pys="python -m SimpleHTTPServer 3100"
alias ms="bundle exec middleman server"

alias gita="git add ."
alias gits="git status"
alias gitps="git push"
alias gitc="git commit -am"
alias gitca="git commit --amend -am"
alias gitl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
alias gitb="git branch"
alias gitba="git branch -a"
alias giti="!([ ! -e .gitignore ] && touch .gitignore) | echo $1 >>.gitignore"
alias gitnb="git checkout -b"
alias gitd="git diff"
alias gitco="git checkout"
alias gitumb="git branch --no-merged"
alias gitmb="git branch --merged"
