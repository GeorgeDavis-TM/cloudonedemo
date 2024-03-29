//config.js
var convict = require('convict'),
    check = require('validator').check;

var conf = convict({
	env: {
		doc: 'The Server Environment',
		format: ['development','production'],
		default: 'production',
		env: 'NODE_ENV'
	},
	service: {
        url: {
			doc: 'Service Host IP Address',
			default: '127.0.0.1'
		},
		port: 
		{
			doc: 'Service Host Port',
			default: '3000'
		}
    },
	db: {
		host: {
			doc: 'DB Host IP Address',
			default: '127.0.0.1'
		},
		user: {
			doc: 'DB User',
			default: 'tm_db_user'	
		},
		password: {
			doc: 'DB Password',
			default: 'tm_db_pass'
		},
		database: {
			doc: 'DB database',
			default: 'tm_appsec_demo'
		},
		connectionLimit: {
			doc: 'DB Max. Connections',
			default: '100'
		}
	}
});

var env = conf.get('env');
var envConfigFile = './config/' + env + '.json';

try {
	var files = [ envConfigFile];

	conf.loadFile(files);
}
catch(e) {
	console.error('Could not load configuration: %s', e);
}

conf.validate();

module.exports = conf;