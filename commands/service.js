const { serviceCommand } = require('../controllers/service');

function setServiceCommand(program) {
	program
	.command('service')
	.option('-c, --create <services>', 'create services for local development')
	.description('Handles operations related to individual services')
	.action(serviceCommand);
}

module.exports = setServiceCommand;