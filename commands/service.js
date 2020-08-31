const { execSync } = require('child_process');
const { existsSync, mkdirSync } = require('fs');
const devDir = process.cwd() + "/dev";
const repos = {
	'auth': 'https://github.com/greenpress/authentication-service',
	'admin': 'https://github.com/greenpress/admin-panel',
	'secrets': 'https://github.com/greenpress/secrets-service',
	'assets': 'https://github.com/greenpress/assets-service',
	'content': 'https://github.com/greenpress/content-service',
	'front': 'https://github.com/greenpress/blog-front'
};

function setServiceCommand(program) {
	program
	.command('service')
	.option('-c, --create')
	.description('')
	.action(async function (options) {
		// create dev folder if not existing
		if (!existsSync(devDir)) {
			mkdirSync(devDir);
		}

		// iterate over options and activate relevent function
		for (let option of options.options) {
			switch(option.flags)
			{
			case '-c, --create':
				createOptionFunc(options.create.split(','));
			}
		}
	});
}

async function createOptionFunc(services) {
	for (let service of services) {
		console.log(repos[service])
		// let cloneCommand = `cd ${devDir} && git clone ${repos[service]}`
	}
}
module.exports = setServiceCommand;