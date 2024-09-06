export class DisplayHandler {
  constructor(apiHandler) {
    this.apiHandler = apiHandler;
  }

  compileTemplate(template, position, context) {
    let compiledTemplate = Handlebars.compile(template);
    let container = document.querySelector('main');
    let html = context === undefined ? compiledTemplate() : compiledTemplate(context);
    container.insertAdjacentHTML(position, html);
  }

  renderContacts(contacts) {
    contacts.forEach(contact => {
      if (contact.tags) {
        contact.tags = contact.tags.split(',');
      }
    });

    let template = document.querySelector('#contact-list-template').innerHTML;
    let position = 'beforeend';
    let context = { contacts: contacts };
    this.compileTemplate(template, position, context);
  }

  renderAddBtnSearchBar() {
    let template = document.querySelector('#add-and-search-template').innerHTML;
    let position = 'afterbegin';
    this.compileTemplate(template, position);
  }

  renderAddContactForm() {
    let template = document.querySelector('#add-contact-template').innerHTML;
    let position = 'beforeend';
    this.compileTemplate(template, position);
  }

  renderEditContactForm() {
    let template = document.querySelector('#edit-contact-template').innerHTML;
    let position = 'beforeend';
    this.compileTemplate(template, position);
  }

  toggleEditContactView(event) {
    event.preventDefault();
    let ele = document.querySelector('#edit-contact-div');
    ele.classList.toggle('hide');
  }

  toggleContactView(event) {
    event.preventDefault();
    let ele = document.querySelector('#add-contact-div');
    ele.classList.toggle('hide');
  }
}