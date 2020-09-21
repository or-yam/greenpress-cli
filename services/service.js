const { execSync } = require('child_process');
const { existsSync, mkdirSync } = require('fs');
const devDir = process.cwd() + '/dev';
const repos = {
	'auth': 'https://github.com/greenpress/authentication-service',
	'admin': 'https://github.com/greenpress/admin-panel',
	'secrets': 'https://github.com/greenpress/secrets-service',
	'assets': 'https://github.com/greenpress/assets-service',
	'content': 'https://github.com/greenpress/content-service',
	'front': 'https://github.com/greenpress/blog-front'
};

function createDevDir() {
	if (!existsSync(devDir)) {
		mkdirSync(devDir);
	}
}

async function createOptionFunc(services) {
	console.log(services)
	for (let service of services) {
		let cloneCommand = `cd ${devDir} && git clone ${repos[service]}`
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

module.exports = {
	createOptionFunc,
	createDevDir
}