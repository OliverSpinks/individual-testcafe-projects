import { ClientFunction } from 'testcafe';
import elementsPage from '../pages/elementsPage';

const URL = "http://the-internet.herokuapp.com/";

fixture("Checkbox Test")
    .page(URL)

test ('Assert home page', async t =>{
    await t
        .expect(elementsPage.homepageHeader.exists).ok()
    
});       

test ('Dropdown Test', async t =>{
    await t

        .click(elementsPage.dropdown)
        .expect(elementsPage.dropdownlistHeader.exists).ok()
        .click(elementsPage.dropdownlist)
        .click(elementsPage.dropdownlistoption1)
        .expect(elementsPage.dropdownlistoption1.selected).ok()
        .click(elementsPage.dropdownlist)
        .click(elementsPage.dropdownlistoption2)
        .expect(elementsPage.dropdownlistoption2.selected).ok()

});

    