const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const {assert} = require('chai');

describe('headings.js', function() {
  describe('#setupHeadingChangeButton()', function() {
    let dom;
    beforeEach(async function() {
      dom = await JSDOM.fromFile('./js/test-data/jsdom-test-page.html', {
        resources: 'usable',
        runScripts: 'dangerously',
      });

      await new Promise((resolve) =>
        dom.window.addEventListener('load', resolve)
      );
    });

    it('should add font-blue class when the changeable-heading button is clicked once', function() {
      dom.window.document.querySelector('#heading-change-button').dispatchEvent(new dom.window.MouseEvent('click'));
      assert.include(dom.window.document.querySelector('#changeable-heading').className, 'font-blue');
    });

    it('should remove the class font-blue when the changeable-heading button is clicked twice', function() {
      // Click the button twice. Once to add the class, once to remove it.
      for (let i = 1; i <=2; i++) {
        dom.window.document.querySelector('#heading-change-button').dispatchEvent(new dom.window.MouseEvent('click'));
      }

      assert.equal(dom.window.document.querySelector('#changeable-heading').className, '');
    });
  });
});
