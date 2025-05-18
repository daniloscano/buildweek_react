import "./youMightLike.css";
import Group from "./partials/Group.jsx";

const YouMightLike = () => {
    return (
        <div className="might-like-container rounded pt-3">
            <div className="d-flex flex-column px-4">
                <h6 className="mb-0">Potrebbe interessarti</h6>
                <small className="text-white-50">Gruppi per te</small>
            </div>
            <div className="px-4">
                <Group
                    usersNum="284,316"
                    text="Artificial Intelligence, Java, React, Angular, Node, Data
                    Science, Fintech, IoT, Robotics, Cloud AI"
                    img="https://media.licdn.com/dms/image/v2/D5607AQHW2djv37dxrg/group-logo_image-shrink_48x48/B56ZaZ2uuAG4AQ-/0/1746337984607?e=1748185200&v=beta&t=U97ERlW5rmQIFKpSHGQVMG7hvn0j6i1BaOLJ-2TEiQc"
                />
                <Group
                    usersNum="591,573"
                    text="Developers - Android, iOS developer, Blockchain, Ethereum, Java, Ruby, .net, php, django, etc"
                    img="https://media.licdn.com/dms/image/v2/C4D07AQGqZ1PBhLQe7w/group-logo_image-shrink_48x48/group-logo_image-shrink_48x48/0/1630999644296?e=1748185200&v=beta&t=LD3gbbIaSC9ParBcjBitVAW11wpYDmkkcLE0h9wXwIw"
                />
            </div>
            <div className="show-all-btn py-2 rounded-bottom">
                <a href="#" className="text-decoration-none fw-medium">
                    Mostra tutto
                </a>
            </div>
        </div>
    );
};

export default YouMightLike;
