
import "../style sheets/TopToolsIcons.css";


const TopToolsBox = ({name, logo}) => {

    return (
        <section className="top-tools-icons">
            <div className="icon-grid">
                    <div  className="icon-box" >
                        <img src={logo} alt={name} />
                        <span className="tooltip">{name}</span>
                    </div>
            </div>
        </section>
    );
};

export default TopToolsBox
