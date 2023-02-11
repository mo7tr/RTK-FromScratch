import { useRef, useState } from "react";
import axios from "axios";
import Delete from "./Delete";
import { FaRegEdit } from "react-icons/fa";

const PicCard = ({ pic }) => {
  const [edit, setEdit] = useState(false);
  console.log("edit =>", edit);

  const artistInput = useRef();

  const handleEdit = () => {
    setEdit(false);

    const data = {
      artist: artistInput.current.value,
      year: pic.year,
      photo: pic.photo,
    };

    axios.put("http://localhost:5000/pictures/" + pic.id, data);
  };

  return (
    <div className="pic-card">
      <img src={pic.photo} alt={"photo de " + pic.artist} />
      <div className="infos">
        <div className="title">
          {edit ? (
            <div>
              <input
                defaultValue={pic.artist}
                ref={artistInput}
                autoFocus
              ></input>
              <button onClick={() => handleEdit()}>Valider</button>
            </div>
          ) : (
            <h4>
              {artistInput.current ? artistInput.current.value : pic.artist}
            </h4>
          )}
          <p>{pic.year}</p>
        </div>
        <div className="btn-container">
          <div className="edit-icon" onClick={() => setEdit(!edit)}>
            <FaRegEdit />
          </div>
          <Delete id={pic.id} />
        </div>
      </div>
    </div>
  );
};

export default PicCard;