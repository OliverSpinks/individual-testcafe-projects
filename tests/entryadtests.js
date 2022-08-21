import { ClientFunction } from 'testcafe';
import elementsPage from '../pages/elementsPage';

const URL = "http://the-internet.herokuapp.com/";

fixture("Checkbox Test")
    .page(URL)

test ('Assert home page', async t =>{
    await t
        .expect(elementsPage.homepageHeader.exists).ok()
    
});       

test ('Entry Ad Test', async t =>{
    await t
        .click(elementsPage.entryAdPage)
        .expect(elementsPage.entryAd.exists).ok()
        .click(elementsPage.entryAdClose)
        .expect(elementsPage.entryAdHeader.exists).ok()
        .click(elementsPage.entryAdEnable)
        .expect(elementsPage.entryAd.exists).ok()

});

