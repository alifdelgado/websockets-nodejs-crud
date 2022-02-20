const socket = io();
const form = document.getElementById("form");
const notes = document.getElementById("notes");
const title = document.getElementById("title");
const description = document.getElementById("description");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("client:newnote", {
    title: title.value,
    description: description.value,
  });
  socket.on("server:newnote", (data) => {
    const note = document.createElement("div");
    note.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-start"
    );
    note.innerHTML = `
    <div class="ms-2 me-auto">
      <div class="fw-bold">${data.title}</div>
      ${data.description}
    </div>`;
    notes.append(note);
  });
});
