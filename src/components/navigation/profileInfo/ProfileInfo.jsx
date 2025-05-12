import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProfileInfo = () => {
  const [myProfile, setMyProfile] = useState([]);
  console.log(myProfile);

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
      <Card>
        <Card.Img variant="top" src="nisnisn" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileInfo;
