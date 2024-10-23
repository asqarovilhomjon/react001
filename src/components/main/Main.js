import "./Main.css"
import man from "../assets/man.svg"
import frame from "../assets/Frame.svg"

function Main(){
    return (
        <div className="posts">
            <div className="container">
                <h2 className="posts__title">Featured Posts</h2>
                <div className="body">
                    <div className="road">
                        <h2>The Road Ahead</h2>
                        <p>The road ahead might be paved - it might not be.</p>
                        <div className="road__bottom">
                            <div className="person">
                                <img src={man} alt="man" />
                                <p className="man__name">Mat Vogels</p>
                            </div>
                            <p className="data">September 25, 2015</p>
                        </div>
                    </div>
                    <div className="adventure">
                        <h2>From Top Down</h2>
                        <p>Once a year, go someplace you’ve never been before.</p>
                        <div className="road__bottom">
                            <div className="person">
                                <img src={man} alt="man" />
                                <p className="man__name">William Wong</p>
                            </div>
                            <p className="data">September 25, 2015</p>
                        </div>
                    </div>
                </div>
                <div className="recent">
                    <h2 className="recent__title">Most recent</h2>
                    <div className="recent__items">
                        <div className="recent__item">
                            <img src={frame} alt="ballon" />
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                            <div className="recent__bottom">
                                <div className="recent__person">
                                    <img src={man} alt="man" />
                                    <p className="rman__name">William Wong</p>
                                </div>
                                <p className="rdata">September 25, 2015</p>
                            </div>
                        </div>
                        <div className="recent__item">
                            <img src={frame} alt="ballon" />
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                            <div className="recent__bottom">
                                <div className="recent__person">
                                    <img src={man} alt="man" />
                                    <p className="rman__name">William Wong</p>
                                </div>
                                <p className="rdata">September 25, 2015</p>
                            </div>
                        </div>
                        <div className="recent__item">
                            <img src={frame} alt="ballon" />
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                            <div className="recent__bottom">
                                <div className="recent__person">
                                    <img src={man} alt="man" />
                                    <p className="rman__name">William Wong</p>
                                </div>
                                <p className="rdata">September 25, 2015</p>
                            </div>
                        </div>
                        <div className="recent__item">
                            <img src={frame} alt="ballon" />
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                            <div className="recent__bottom">
                                <div className="recent__person">
                                    <img src={man} alt="man" />
                                    <p className="rman__name">William Wong</p>
                                </div>
                                <p className="rdata">September 25, 2015</p>
                            </div>
                        </div>
                        <div className="recent__item">
                            <img src={frame} alt="ballon" />
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                            <div className="recent__bottom">
                                <div className="recent__person">
                                    <img src={man} alt="man" />
                                    <p className="rman__name">William Wong</p>
                                </div>
                                <p className="rdata">September 25, 2015</p>
                            </div>
                        </div>
                        <div className="recent__item">
                            <img src={frame} alt="ballon" />
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                            <div className="recent__bottom">
                                <div className="recent__person">
                                    <img src={man} alt="man" />
                                    <p className="rman__name">William Wong</p>
                                </div>
                                <p className="rdata">September 25, 2015</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main