
const JobCard  = ({image, roleName, courseName, description}) => {
    return (
        <div className="job-card">
            <div className="job-card-image-container">
                <img src={image} alt="" className="job-card-image"/>
            </div>
            <div className="job-card-content">
                <span className="job-role-label">{roleName}</span>
                <h2 className="job-card-title">{courseName}</h2>
                <p className="job-card-description">{description}</p>
            </div>

        </div>
    );
}

export default JobCard;