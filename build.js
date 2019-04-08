var fs = require('fs');
const config = require('./source.json');

function camelize(str) {
    return str.replace('-','');
  }

let output = `let stylesBlock = {};`;
for(page in config){
    // console.log(config[page]);
    const thisPage = config[page];
    output += `describe('${thisPage.pageTitle}', () => {
    stylesBlock['${thisPage.pageTitle}'] = {};
    beforeAll(async () => {
        await page.goto('${thisPage.url}');
        `;
    
        for(element in thisPage.els){
            output += `
            stylesBlock['${thisPage.pageTitle}']['${element}'] = await page.$$eval("[data-test='${element}']", els => {
                const list = [];
                els.forEach(el => {
                    list.push({
            `;
            
            for(feature in thisPage.els[element]){                
                output += `${camelize(feature)}: window.getComputedStyle(el, null).getPropertyValue("${feature}"),`;
            }

            output += `
                    });
                })
                return list;
            });            
            `;
        }
    output += `});`; // close beforeall

    for(element in thisPage.els){
        output += `
        it('${element} should exist on page', async () => {
            expect(stylesBlock['${thisPage.pageTitle}']['${element}'].length).toBeGreaterThan(0);
        });
        `;
        for(feature in thisPage.els[element]){
            output += `
            it('${element} should have correct ${feature}', async () => {
                stylesBlock['${thisPage.pageTitle}']['${element}'].forEach(el=>{
                    expect(el.${camelize(feature)}).toContain('${thisPage.els[element][feature]}');
                });
            });`;
        }
    }

output += `});` // close each page block
}

fs.writeFile('output.spec.js', output, function (err) {
if (err) throw err;
console.log('Saved!');
});