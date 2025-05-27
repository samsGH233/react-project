

const Card = ({ Icon, card_title, description}) => {
    return (

            <div className="info-box">
                {Icon && (
                    <div className="info-box-icon" style={{ marginRight: '12px' }}>
                        <Icon size={20} style={{ color: '#2563eb' }} />
                    </div>
                )}
                <div className="info-box-details">
                    <h2 className="info-box-title">{card_title}</h2>
                    <p className="info-box-description">{description}</p>
                </div>
            </div>



    );

}


export default Card;