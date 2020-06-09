
function activate(context) {
	console.log('start')
	require('./template')(context);
	//require('./copyPath.js')(context);

}
exports.activate = activate;


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
