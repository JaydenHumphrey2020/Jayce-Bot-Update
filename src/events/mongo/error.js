const chalk = require('chalk');

module.exports = {
    name: "error",
    execute() {
        console.log(chalk.red("[Database Status]: Error"))
    }
}