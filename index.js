#!/usr/bin/env node

var http = require('http')
var opn = require('opn')
var rc = module.require('rc')
var config = rc('hcat', {
	port: 0,
	hostname: 'localhost',
	contentType: 'text/html'
})

if (config.usage) {
	console.log(require('./usage.js'))
	process.exit(1)
}

function handler(request, response) {
	// Only accept one request
	this.close();

	var stream = process.stdin

	response.setHeader('Content-Type', config.contentType)

	stream.pipe(response)
}

var server = http.createServer();
server.once('request', handler);

server.on('listening', function() {
  require('child_process').spawn(process.env.BROWSER, ['http://' + config.hostname +':' + server.address().port])
})

server.listen(config.port, config.hostname)
