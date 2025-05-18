import "./profileStats.css";

const ProfileStats = () => {
    const createRandomStat = () => Math.floor(Math.random() * 500);

    return (
        <div className="profile-stats-container mt-2 fw-medium py-3 px-4 rounded-3 d-flex flex-column gap-2">
            <p className="mb-0 d-flex justify-content-between">
                Visitatori del profilo{" "}
                <span className="profile-stats">{createRandomStat()}</span>
            </p>
            <p className="mb-0 d-flex justify-content-between">
                Impressioni del post{" "}
                <span className="profile-stats">{createRandomStat()}</span>
            </p>
        </div>
    );
};

export default ProfileStats;
