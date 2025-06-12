import image from '../images/homepage-image.jpg';


const HomePage = () => {
    return (

        <div className="homepage">
            <div className="homepage-intro">
                <div className="headers">
                    <h1>The Contemporary learning platform</h1>
                    <h1 className="blue-header">Empowering you to learn at your own pace</h1>
                </div>

                <p className="course-paragraph">Welcome to ConnectinSkillz, where your path to knowledge and skill mastery begins.
                    Our innovative Learning Experience Platform <br/> offers a personalized, engaging, and immersive educational
                    experience designed to empower learners at every level.
                </p>
            </div>
                <button className="homepage-button">Start Your Free Trial</button>
                <div className="image-container">
                    <img src={image} alt="Visual description" className="background-image" />
                    <div className="image-text">
                        <h2 className="statistics-header">We are building a community</h2>
                        <div className="statistics">
                            <div>
                                <h2 className="statistic-number">10k+</h2>
                                <p className="statistic-text">WorldWide Learners</p>
                            </div>
                            <div>
                                <h2 className="statistic-number">168k+</h2>
                                <p className="statistic-text">Master Class Trainers</p>
                            </div>
                            <div>
                                <h2 className="statistic-number">10k+</h2>
                                <p className="statistic-text">Courses</p>
                            </div>
                            <div>
                                <h2 className="statistic-number">2hrs+</h2>
                                <p className="statistic-text">Training Courses</p>
                            </div>

                        </div>

                    </div>
            </div>


        </div>

);
}


export default HomePage;

