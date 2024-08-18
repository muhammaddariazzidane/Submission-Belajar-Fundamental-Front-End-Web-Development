class NoteForm extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
       <form id="noteForm" method="post">
          <div class="input-container">
            <label for="noteFormTitle">Judul</label>
            <input id="noteFormTitle" name="title" placeholder="title" type="text" required 
             minlength="6"
             pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
             aria-describedby="titleValidation"
            />
            <small id="titleValidation" class="validation-message" aria-live="polite"></small>
          </div>
          <div class="input-container">
            <label for="noteFormBody">Isi</label>
            <textarea id="noteFormBody" type="text" placeholder="body" name="body" required
             aria-describedby="bodyValidation"
            ></textarea>
            <small id="bodyValidation" class="validation-message" aria-live="polite"></small>
          </div>
          <div class="input-container">
            <label for="noteFormArchived">Arsipkan</label>
            <input id="noteFormArchived" type="checkbox" name="archived" />
          </div>
          <button id="noteFormSubmit" class="btn" type="submit">Buat Catatan</button>
        </form>
        `;
  }
}

customElements.define('note-form-component', NoteForm);
