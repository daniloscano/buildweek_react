const NavigationProfile = () => {
    return (
        <div className="d-none d-md-flex flex-column align-items-center pe-4">
            <img
                alt="Profile Photo"
                className="nav-profile-photo"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <small className="nav-icons-list d-none d-lg-block">Me</small>
        </div>
    );
};

export default NavigationProfile;
