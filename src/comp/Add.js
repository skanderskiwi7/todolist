import React, { useState } from "react";

const Add = ({ addFilm }) => {
  const [name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addFilm({
      id: Math.floor(Math.random() * 100),
      name,
      Date,
      image,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>Titre</h1> */}
      <input
        placeholder="name"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <input
        placeholder="date"
        type="text"
        name="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <input
        placeholder="image"
        name="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <input
        placeholder="description"
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input value="add" type="submit" />
    </form>
  );
};

export default Add;
