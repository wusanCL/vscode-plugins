const vscode = require('vscode');

const reg = /\/([^/]*?).js$/

/**
 * 因简单命令不支持传递参数，弃用
 */

module.exports = function (context) {
    let handler = vscode.commands.registerCommand('extension.copyPath', (uri) => {
        let path = uri.path;      
        if (path.match(reg)) {
            vscode.commands.executeCommand('copyFilePath', RegExp.$1)
        }
    })

    context.subscriptions.push(handler)
}