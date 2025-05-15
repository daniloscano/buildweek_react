import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  const [myProfile, setMyProfile] = useState([]);

  const getMyProfile = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRIVE_TOKEN}`,
        },
      });
      const data = await response.json();

      setMyProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <Card className="mt-3 text-white custom-card-profile ">
        <div className="img-top-bg">
          <Card.Img className="card-img-custom" src={myProfile.image} />
        </div>
        <Card.Body>
          <Card.Title>
            {myProfile.name} {myProfile.surname}
          </Card.Title>
          <Card.Text>{myProfile.email}</Card.Text>
          <Card.Text>
            Ciao sono {myProfile.name} e sono uno studente della migliore classe
            di EPICODE!!!
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileInfo;
