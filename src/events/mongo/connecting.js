const chalk = require('chalk');

module.exports = {
    name: "connecting",
    execute() {
        console.log(chalk.red("[Database Status]: Connecting to database"))
    }
}