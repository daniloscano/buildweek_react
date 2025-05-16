import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProfileInfo.css";
import { ProfileInfoContext } from "../../../contexts/ProfileContextInfo";

const ProfileInfo = () => {
  const { myProfile, setMyProfile, getMyProfile } =
    useContext(ProfileInfoContext);

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
