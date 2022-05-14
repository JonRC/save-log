# save-log 📄✏️

save-log is a CLI to **saving a command log** as text and **show it in terminal** as you are used to.

The log file is writhen in real-time.

## Install
`$ npm install save-log -g`

## Usage
`$ save-log <command> -- <command args>`

In current directory, it will create a file named *command_isoDate.txt* which the log will be writhen in real-time.

### Flags
|  Flag  | alias | Description                        |
|--------|-------|------------------------------------|
| --path | -p    | Specify a path or file to save log |


### Example:

`$ save-log ls`

`$ save-log ls -p test.txt -- -la`

### Disclaiming
save-log works for all commands except for some CLIs which needs complexly user iteration.

For example, it works for `sudo su` but don't work for `npm init`.