import './MainPage.scss';
import PearCard from '../PearCard/PearCard';
import { Link } from 'react-router-dom';

function MainPage({ developers }) {
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
                        <Link to={`/developer/${dev.id}`} key={dev.id}>
                            <PearCard developer={dev} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
