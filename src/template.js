const vscode = require('vscode');
const fs = require('fs');

const reg = /\/([^/]*?)\.([a-z]*)$/;
const nameReg = /{{name}}/g;
const templateArr = ['vue'];

function template(context) {
    //文件创建时触发，回调接受一个uir
    let handler = vscode.workspace.onDidCreateFiles((uri) => {
        console.log(uri)
        let info = uri.files[0],
            path = info.path,
            formatPath = info.fsPath,
            result = path.match(reg);

        if (result != null) {
            let suffix = RegExp.$2,
                filename = RegExp.$1;
                
            if (templateArr.indexOf(suffix) === -1) return

            fs.readFile(__dirname + '/assets/template/vue.txt', 'utf-8', function (err, data) {
                data = data.replace(nameReg, filename)
                fs.writeFile(formatPath, data, function () { })
            })
        }
    })
    context.subscriptions.push(handler)
}

module.exports = template