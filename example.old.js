
// let stylesBlock = {};


// describe('Homepage', () => {
//   stylesBlock['homepage'] = {};
//   beforeAll(async () => {
//     await page.goto('http://localhost:3000/');
//     stylesBlock['homepage']['headstrap'] = await page.$$eval("[data-punk='headstrap']", els => {
//         const list = [];
//         els.forEach(el => {
//             list.push({
//                 text: el.innerText,
//                 color: window.getComputedStyle(el, null).getPropertyValue("color"),
//                 width: el.offsetWidth
//             });
//         })
//         return list;
//     });
//   });

//   it('should be titled "PSEUDO ELEMENT"', async () => {
//     stylesBlock['homepage']['headstrap'].forEach(el=>{
//         expect(el.text).toBe('PSEUDO ELEMENT');
//     });
//   });
//   it('should be color blue', async () => {
//     stylesBlock['homepage']['headstrap'].forEach(el=>{
//         expect(el.color).toBe('rgb(46, 147, 210)');
//     });
//   });
// });


// describe('blog', () => {
//     stylesBlock['blog'] = {};
//     beforeAll(async () => {
//       await page.goto('http://localhost:3000/post/designers-should-learn-to-code-thing');
//       stylesBlock['blog']['h1'] = await page.$eval('h1', el => {
//           return {
//               text: el.innerText,
//               color: window.getComputedStyle(el, null).getPropertyValue("color"),
//           }
//       });
//       stylesBlock['blog']['h2'] = await page.$$eval('h2', els => {
//             const list = [];
//             els.forEach(el =>{
//                 list.push({
//                     color: window.getComputedStyle(el, null).getPropertyValue("color")
//                 })
//             });
//             return list;
//         });
//     });
  
//     it('should be titled proper', async () => {
//       expect(stylesBlock['blog']['h1'].text).toBe('THAT DESIGNERS SHOULD LEARN TO CODE THING');
//     });
//     it('should be color grey', async () => {
//       expect(stylesBlock['blog']['h1'].color).toBe('rgb(68, 79, 88)');
//     });
//     it('should have blue h2', async () => {
//         stylesBlock['blog']['h2'].forEach(el=>{
//             expect(el.color).toBe('rgb(68, 79, 88)');
//         });
//     });
//   });

// /*
// * make dynamic style results block from request
// * make dynamic tests from text
// * make test abstraction structure
// * make path adaptable (for suite of tests)
// * build test from ui interface
// * output results in html page which open in browser
// * make published package and writeup
// */