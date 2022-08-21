import { Selector } from "testcafe";

class elementsPage{
    constructor() {
        this.homepageHeader = Selector('h1') .withText ("Welcome to the-internet")
        this.dropdown = Selector('a') .withText ('Dropdown')
        this.dropdownlistHeader = Selector('h3') .withText('Dropdown List')
        this.dropdownlist = Selector('select#dropdown')
        this.dropdownlistoption1 = Selector('option'). withText('Option 1')
        this.dropdownlistoption2 = Selector('option'). withText('Option 2');
        this.addRemoveHeader = Selector('h3') .withText('Add/Remove Elements')
        this.addElement = Selector('button') .withText('Add Element')
        this.addRemovePage = Selector('a') .withText('Add/Remove Elements')
        this.deletebutton = Selector('button.added-manually')
        this.entryAdPage = Selector('a') .withText('Entry Ad')
        this.entryAd = Selector('div.modal-title')
        this.entryAdHeader = Selector('h3') .withText('Entry Ad')
        this.entryAdClose = Selector('p') .withText('Close')
        this.entryAdEnable = Selector('a#restart-ad')
    
    }
}
export default new elementsPage();