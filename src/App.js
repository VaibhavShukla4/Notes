import React, { useState,useEffect } from "react";
import Notes from "./components/Notes";
import Form from "./components/Form";
import initialState from "./components/Items";
import './App.css';
function App() {
  const [mode, setMode] = useState("create");
  const [items, setItems] = useState(initialState);
  const [formItem, setFormItem] = useState(JSON.parse(localStorage.getItem({ title: "", note: "" })) || []);
  
  const handleInputChange = (name, value) => {
    setFormItem({ ...formItem, [name]: value });
  };


  useEffect(() => {
    localStorage.setItem({ title: "", note: "" }, JSON.stringify({ title: "", note: "" }));
  }, [{title: "", note: ""}]);
  const handleCreate = () => {
    const { title, note } = formItem;

    const newItems = {
      id: items.length + 1,
      title,
      note
    };

    setItems([...items, newItems]);
    setFormItem({ title: "", note: "" });
  };

  const handleEdit = index => {
    setMode("edit");
    setFormItem(items[index]);
  };

  const handleUpdate = () => {
    const index = items.findIndex(item => item.id === formItem.id);
    const updatedItems = [...items];
    updatedItems[index] = formItem;

    setMode("create");
    setItems(updatedItems);
    setFormItem({ title: "", note: "" });
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);

    setItems(newItems);
  };

  return (
    <>
      <Form
        mode={mode}
        item={formItem}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onInputChange={handleInputChange}
      />

      <br />
      <Notes items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default App;
