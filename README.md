# save-log 📄✏️

save-log is a CLI to **saving a command log** as text and **show it in terminal** as you are used to.

The log file is writhen in real-time.

## Install
`$ npm install save-log -g`

## Usage
`$ save-log <command> -- <command args>`

In current directory, it will create a file named *command_isoDate.txt* which the log will be writhen in real-time.


### Example:

`$ save-log ls`
`$ save-log ls -- -la`

### Disclaiming
save-log do not work with some iterative CLI command as `npm init`.