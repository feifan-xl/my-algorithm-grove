const fs = require('fs')

const path = require('path'); 

const static = require('./static.js');
const rootPath = path.join(__dirname, '../');

const ORI = path.join(rootPath, './src')
const TARGET = path.join(rootPath, './docs')

fs.rmSync(path.join(rootPath, './docs/example'), {
    force: true,
    recursive: true
})

const copyList = static.copyList;
const transList = static.transList;
const staticMap = static.map;

const dir = fs.readdirSync(ORI, 'utf8')
const map = {};

dir.forEach(i => {
    if (copyList.includes(i)) {
        const oriPath = path.join(ORI, i)
        const target = path.join(TARGET, '../', i)
        copy(oriPath, target)
    }
    else if (transList.includes(i)) {
        transDir(ORI, i)
    }
})
buildMenu();

function copy (ori, target) {
    fs.cp(ori, target, {
        recursive: true,
        force: true,
     }, () => {
        buildMenu()
    })
}

function transDir(rootDir, cur) {
    const dir = path.join(rootDir, cur)
    fs.readdirSync(dir, 'utf8').forEach(i => {
        const url = path.join(dir, i)
        if (path.basename(url).includes('.md')){
            copyFile(url)
        }
    })
}

function copyFile(filePath) {
    const file = fs.readFileSync(filePath, 'utf8')
    const a = file.split('---');
    const tmp = {};
    if (!a[1]) return;
    (a[1].split('\n') || []).forEach(i => {
        if (i) {
            const tags = i.split('=');
            tmp[tags[0].trim()] = tags[1].trim()
        }
    });
    tmp.file = path.basename(filePath);
    for (const i in tmp) {
        if (i === 'title' || i === 'file') {
            break
        }
        const fileDir = path.join(rootPath, './docs/example', tmp[i], path.basename(filePath))
        const arr = path.parse(fileDir).dir.split('/')
        const menu = arr[arr.length - 1];
        const dirPath = path.join(rootPath, './docs/example', menu)
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true})
        }
        fs.writeFileSync(fileDir, a[2], 'utf8')
    }
    if (!map[filePath]) {
        map[filePath] = tmp;
    }
}

function buildMenu () {
    let tmp = {}
    for (let i in map) {
        let idx = 1
        for (let sub in map[i]) {
            if (sub === 'title' || sub === 'file' ) break
            if (!tmp[map[i][sub]]) {
                const title = staticMap[map[i][sub]] || map[i][sub]
                tmp[map[i][sub]] = `## ${title}`
            }
            tmp[map[i][sub]] += `
${idx}. [${map[i].title}](../${map[i][sub]}/${map[i].file})`;
        }
        idx++;
    }
    for (let i in tmp) {
        const dir = path.join(rootPath, './docs/example', i, 'index.md')
        fs.writeFileSync(dir, tmp[i], 'utf8')
    }

    let str = `# ${staticMap.example}
    `
    let idx = 1;
    for (let i in tmp) {
        const title = staticMap[i] || i;
        str += `
${idx}. [${title}](./${i})`;
        idx++;
    }
    fs.writeFileSync(path.join(rootPath, './docs/example', 'index.md'), str, 'utf8')
}
