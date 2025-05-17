const ExperiencesList = ({ experience }) => {
    const { area, company, description, startDate, endDate, role } = experience;

    const editedStartDate = startDate.split("T")[0];

    return (
        <div className="mt-3 d-flex justify-content-between">
            <div>
                <h6 className="mb-0 fw-bold">
                    {role} <small className="fw-normal">at {company}</small>
                </h6>
                <div className="d-flex gap-2">
                    <small className="fst-italic">{area}</small>
                    <small>•</small>
                    <small>{description}</small>
                </div>
            </div>
            <div className="d-flex flex-column">
                <small>{editedStartDate}</small>
                <small>{endDate ?? "Lavoro attuale"}</small>
            </div>
        </div>
    );
};

export default ExperiencesList;
