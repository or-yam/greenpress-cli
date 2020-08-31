const { execSync } = require('child_process');
const { existsSync, mkdirSync } = require('fs');
const devDir = process.cwd() + "/dev";
const repos = {
	'authentication': 'https://github.com/greenpress/authentication-service',
	'admin-panel': 'https://github.com/greenpress/admin-panel',
	'secrets': 'https://github.com/greenpress/secrets-service',
	'assets': 'https://github.com/greenpress/assets-service',
	'content': 'https://github.com/greenpress/content-service',
	'blog-front': 'https://github.com/greenpress/blog-front'
};

function setServiceCommand(program) {
	program
	.command('service')
	.option('-c, --create <services>', 'create services for local development')
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
			case '-c, --create <services>':
				createOptionFunc(options.create.split(','));
			}
		}
	});
}

async function createOptionFunc(services) {
	console.log(services)
	for (let service of services) {
		let cloneCommand = `cd ${devDir} && git clone ${repos[service]}`;
		execSync(cloneCommand, (error, stdout, stderr) => {
			if (error) {
				console.log(error.message);
				return;
			}

			if (stderr) {
				console.log(stderr);
				return;
			}

			console.log(stdout);
		});
	}
}

module.exports = setServiceCommand;
