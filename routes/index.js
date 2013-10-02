
/*
 * GET home page.
 */

exports.index = function(req, res) {
	require('../sub')(io, 'MyChannel');
	res.render('index', {
		ip: app.get('url'),
		port: app.get('port'),
		title: 'Redis subscription' 
	});
};