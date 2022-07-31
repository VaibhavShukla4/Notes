import React from "react";

// Functional Component or Stateless component
const Notes = ({ items, onEdit, onDelete }) =>
  items.length ? (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="card">
        <h4 className="card__title">{title} :  </h4>
        <br/>
        <br/>
        <p className="card__notes">{note}</p>

        <div className="card__action">
          <button className="delete" onClick={() => onDelete(id)}>Delete</button>
          <br/>
          
          <button className="edit" onClick={() => onEdit(index)}>Edit</button>
        </div>
      </div>
    ))
  ) : (
    <h3 className="title_notes">Please create a notes with title</h3>
  );

export default Notes;
