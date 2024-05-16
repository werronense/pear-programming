import './MainPage.scss';

function MainPage({pears}) {
    return (
        <div className="main-page">
            <div className="content">
                <h1 className="content__title">🍐 Pear Programming 🍐</h1>
                <h3 className="content__subtitle">Here are the pears we made along the way...</h3>
                <div className="pears">
                    {/* //pear cards go here... */}
                </div>
            </div>
        </div>
    );
}

export default MainPage;