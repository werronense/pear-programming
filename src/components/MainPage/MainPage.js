import './MainPage.scss';
import PearCard from '../PearCard/PearCard';
import { Link, useNavigate } from 'react-router-dom';

function MainPage({ developers }) {
    const navigate = useNavigate();

    const handleRandomButtonClick = (event) => {
        console.log(event.target.value);
        console.log('Navigating to homepage...');
        navigate("/pears/random");
    }

    return (
        <div className="main-page">
            <div className="content">
                <h1 className="content__title">🍐 Pear Programming 🍐</h1>
                <h3 className="content__subtitle">
                    Here are the pears we made along the way...
                </h3>
                <div className="card-container">
                    {/* //pear cards go here... */}
                    {developers.map((dev) => (
                        <Link to={`/pears/${dev.id}`} key={dev.id}>
                            <PearCard developer={dev} />
                        </Link>
                    ))}
                </div>
                <div className="random">
                    <button className='random__button' onClick={handleRandomButtonClick}>Random Pear</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
