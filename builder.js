const fs = require('fs')
const ejs = require('ejs')
const values = require('./values')
const outputDir = './out';
const template = ejs.compile(fs.readFileSync(__dirname + '/template.ejs.tex', 'utf8'));
const data = template(values)

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

fs.writeFile('./out/invoice.tex', data, (err) => {
  if (err) return console.log(err)
})
