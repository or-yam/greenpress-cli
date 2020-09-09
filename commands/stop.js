const { execSync } = require('child_process');
const { green, blue } = require('../utils/colors');

function setStopCommand(program) {
	program
		.command('stop')
		.description('stop greenpress application')
		.action(function () {

			console.log(blue('Stopping greenpress...'));
			try {
				execSync('npx pm2 stop db', () => {});
			} catch (e) {
				//
			}
			execSync(`npx pm2 stop all`, (error, stdout, stderr) => {
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
			execSync(`npx pm2 kill`, (error, stdout, stderr) => {
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

			console.log(green("Greenpress stopped"));
			process.exit(0);
		});
}

module.exports = setStopCommand;
