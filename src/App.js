import { useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";

import { useDispatch, useSelector } from "react-redux";
import { setPicturesData } from "./store/pictures/pictures.slice";

const App = () => {
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.pictures);
  // const picsData = useSelector(({pictures}) => pictures.pictures);

  const getPictures = () => {
    axios.get("http://localhost:5000/pictures").then((res) => {
      dispatch(setPicturesData(res.data));
    });
  };

  console.log("render in App.js");

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
