import { notesData as notes } from '../data/notes.js';
import { customValidationTitleHandler, customValidationBodyHandler } from '../validations/note-custom-validation.js';

export default function Home() {
  const createNoteItemElement = (note) => {
    return `
    <article>
       <h3>${note.title}</h3>
        <p>${note.body}</p>
        <small>${new Date(note.createdAt).toLocaleString()}</small>
    </article>
  `;
  };

  const updateNotesDisplay = () => (noteList.innerHTML = notes.map((note) => createNoteItemElement(note)).join(''));

  const form = document.getElementById('noteForm');

  const titleInput = form.elements['title'];
  const bodyInput = form.elements['body'];

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = `notes-${Math.floor(Math.random() * 1000000)}`;
    const title = form.title.value;
    const body = form.body.value;
    const createdAt = new Date().toISOString();
    const archived = form.archived.checked;
    notes.unshift({ id, title, body, archived, createdAt });
    form.reset();
    updateNotesDisplay();
  });

  titleInput.addEventListener('change', customValidationTitleHandler);
  titleInput.addEventListener('invalid', customValidationTitleHandler);

  titleInput.addEventListener('blur', (event) => {
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidationEl = connectedValidationId ? document.getElementById(connectedValidationId) : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
    } else {
      connectedValidationEl.innerText = '';
    }
  });

  bodyInput.addEventListener('change', customValidationBodyHandler);
  bodyInput.addEventListener('invalid', customValidationBodyHandler);

  bodyInput.addEventListener('blur', (event) => {
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidationEl = connectedValidationId ? document.getElementById(connectedValidationId) : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
    } else {
      connectedValidationEl.innerText = '';
    }
  });

  updateNotesDisplay();
}
