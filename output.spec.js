let stylesBlock = {};describe('Home', () => {
    stylesBlock['Home'] = {};
    beforeAll(async () => {
        await page.goto('http://localhost:3000/');
        
            stylesBlock['Home']['heading'] = await page.$$eval("[data-test='heading']", els => {
                const list = [];
                els.forEach(el => {
                    list.push({
            color: window.getComputedStyle(el, null).getPropertyValue("color"),fontsize: window.getComputedStyle(el, null).getPropertyValue("font-size"),
                    });
                })
                return list;
            });            
            });
        it('heading should exist on page', async () => {
            expect(stylesBlock['Home']['heading'].length).toBeGreaterThan(0);
        });
        
            it('heading should have correct color', async () => {
                stylesBlock['Home']['heading'].forEach(el=>{
                    expect(el.color).toContain('rgb(46, 147, 210)');
                });
            });
            it('heading should have correct font-size', async () => {
                stylesBlock['Home']['heading'].forEach(el=>{
                    expect(el.fontsize).toContain('12px');
                });
            });});describe('something', () => {
    stylesBlock['something'] = {};
    beforeAll(async () => {
        await page.goto('http://localhost:3000/post/designers-should-learn-to-code-thing');
        
            stylesBlock['something']['heading'] = await page.$$eval("[data-test='heading']", els => {
                const list = [];
                els.forEach(el => {
                    list.push({
            color: window.getComputedStyle(el, null).getPropertyValue("color"),textdecoration: window.getComputedStyle(el, null).getPropertyValue("text-decoration"),
                    });
                })
                return list;
            });            
            
            stylesBlock['something']['link'] = await page.$$eval("[data-test='link']", els => {
                const list = [];
                els.forEach(el => {
                    list.push({
            color: window.getComputedStyle(el, null).getPropertyValue("color"),cursor: window.getComputedStyle(el, null).getPropertyValue("cursor"),
                    });
                })
                return list;
            });            
            });
        it('heading should exist on page', async () => {
            expect(stylesBlock['something']['heading'].length).toBeGreaterThan(0);
        });
        
            it('heading should have correct color', async () => {
                stylesBlock['something']['heading'].forEach(el=>{
                    expect(el.color).toContain('rgb(46, 147, 210)');
                });
            });
            it('heading should have correct text-decoration', async () => {
                stylesBlock['something']['heading'].forEach(el=>{
                    expect(el.textdecoration).toContain('underline');
                });
            });
        it('link should exist on page', async () => {
            expect(stylesBlock['something']['link'].length).toBeGreaterThan(0);
        });
        
            it('link should have correct color', async () => {
                stylesBlock['something']['link'].forEach(el=>{
                    expect(el.color).toContain('rgb(68, 79, 88)');
                });
            });
            it('link should have correct cursor', async () => {
                stylesBlock['something']['link'].forEach(el=>{
                    expect(el.cursor).toContain('pointer');
                });
            });});