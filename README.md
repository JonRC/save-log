# save-log 📄✏️

save-log is a CLI to **save a command log** as text and **show it in the terminal** as usual.

The log file is written in real-time.

## Install
`$ npm install save-log -g`

## Usage
`$ save-log <command> -- <command args>`

In the current directory, it will create a file named *command_isoDate.txt* where the log will be written in real-time.


### Example:

`$ save-log ls`

`$ save-log ls -- -la`

### Disclaimer
save-log works for all commands except for some CLIs which need complex user interaction.

For example, it works for `sudo su` but not for `npm init`.