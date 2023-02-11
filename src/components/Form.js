import axios from "axios";
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addPicture } from "./../store/pictures/pictures.slice";

const Form = () => {
  const inputArt = useRef();
  const inputYear = useRef();
  const formRef = useRef();

  const dispatch = useDispatch();
  // const picsData = useSelector((state) => state.pictures.pictures);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const lastPicId = picsData[picsData.length-1];
    // console.log("lastPicsId =>", lastPicId);

    const data = {
      artist: inputArt.current.value,
      year: inputYear.current.value,
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
      // id:
    };

    axios.post("http://localhost:5000/pictures", data).then(() => {
      dispatch(addPicture(data));
      formRef.current.reset();
    });
  };

  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="Artiste" ref={inputArt} />
          <input type="text" placeholder="Année" ref={inputYear} />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
