
/*
 * GET home page.
 */

exports.index = function(req, res) {
	require('../sub')(io, 'MyChannel');
	res.render('index', { title: 'Redis subscription' });
};