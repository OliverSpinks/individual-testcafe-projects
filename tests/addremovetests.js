import { ClientFunction } from 'testcafe';
import elementsPage from '../pages/elementsPage';

const URL = "http://the-internet.herokuapp.com/";

fixture("Checkbox Test")
    .page(URL)

test ('Assert home page', async t =>{
    await t
        .expect(elementsPage.homepageHeader.exists).ok()
    
});       

test ('Add Remove test', async t =>{
    await t
    .click(elementsPage.addRemovePage)
    .expect(elementsPage.addRemoveHeader.exists).ok()
    .click(elementsPage.addElement)
    .expect(elementsPage.deletebutton.exists).ok()
    .click(elementsPage.deletebutton)
    .expect(elementsPage.deletebutton.exists).notOk()

});