const { createOptionFunc, createDevDir } = require('../services/service')

async function serviceCommand(options) {
	// create dev folder if not existing
	createDevDir();

	// iterate over options and activate relevent function
	for (let option of options.options) {
		switch(option.flags)
		{
		case '-c, --create <services>':
			createOptionFunc(options.create.split(','));
		}
	}
}

module.exports = {
	serviceCommand
}