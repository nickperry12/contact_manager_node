export class APIHandler {
  constructor(inputValidator) {
    this.inputValidator = inputValidator;
  }

  async getContacts() {
    let response = await fetch('http://www.drumsofliberation.ca/api/contacts');
    return await response.json();
  }

  async getContactByID(id) {
    let response = await fetch(`http://www.drumsofliberation.ca/api/contacts${id}`);
    return await response.json();
  }

  async deleteContact(id) {
    let data = { id: id };
    let options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    await fetch(`http://www.drumsofliberation.ca/api/contacts/${id}`, options)
      .then(response => {
        if (response.ok) {
          alert('Contact has been successfuly deleted.');
        } else {
          alert(response.statusText);
        }
      })
      .catch(error => console.error('Error:', error));
  }

  async addContact() {
    const formData = new FormData();
    const tags = document.querySelector('#tags').value.split(' ');
    formData.append('full_name', document.getElementById('name').value);
    formData.append('phone_number', document.getElementById('phone-number').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('tags', tags);
  
    let data = {};

    formData.forEach((key, value) => {
      data[value] = key;
    });

    if (!this.inputValidator.validateData(data)) {
      alert('Please ensure you provide the following:\n' +
      'First and last name with no digits.\n A valid email.\n' +
      'The phone number in (xxx)-xxx-xxxx format.');

      return;
    }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    }

    await fetch('http://www.drumsofliberation.ca/api/contacts/', options)
      .then((response) => {
        if (response.ok) {
          alert('The contact has been successfully added.');
        } else {
          alert(response.statusText);
        }
      })
      .catch(error => console.error('There was an error:', error));
  }

  async updateContact(id, newData) {
    newData.id = parseInt(id);
    let options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    }

    await fetch(`http://www.drumsofliberation.ca/api/contacts/${id}`, options)
      .then((response) => {
        if (response.ok) {
          alert('Contact info has been successfully updated.');
        } else {
          alert(response.statusText);
        }
      })
      .catch((error) => console.error('Error:', error));
  }
}
