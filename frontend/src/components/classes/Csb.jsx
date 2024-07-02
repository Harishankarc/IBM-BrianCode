import { Link } from "react-router-dom";
function Csb(){
    return (
        <>
            <div className="timetable-background">
                <div className="days">
                    <h3>S</h3>
                    <h3>M</h3>
                    <h3>T</h3>
                    <h3>W</h3>
                    <h3>T</h3>
                    <h3>F</h3>
                    <h3>S</h3>
                </div>
                <div className="syllabus">
                    <div className="mon-syllbus">
                        
                        <Link to="/de">
                            <div className="one">
                                DE
                            </div>
                        </Link>
                        <Link to="/de">
                            <div className="two">
                                DE
                            </div>
                        </Link>
                        <Link to="/oops">
                            <div className="three">
                                OOPS
                            </div>
                        </Link>
                        <Link to="/latt">
                            <div className="four">
                                LATT
                            </div>
                        </Link>
                        
                        <Link to="/els">
                            <div className="five">
                                ELS
                            </div>
                        </Link>
                        <Link to="/els">
                            <div className="five">
                                ELS
                            </div>
                        </Link>
                        
                    </div>
                    <div className="mon-syllbus">
                        <Link to="/che">
                            <div className="six">
                                CHE
                            </div>
                        </Link>
                        <Link to="/che">
                            <div className="seven">
                                ICPS
                            </div>
                        </Link>
                        <Link to="/oops">
                            <div className="three">
                                OOPS
                            </div>
                        </Link>
                        <Link to="/che">
                            <div className="seven">
                                ICPS
                            </div>
                        </Link>
                        <Link to="/els">
                            <div className="five">
                                ELS
                            </div>
                        </Link>
                        <Link to="/che">
                            <div className="six">
                                CHE
                            </div>
                        </Link>
                    </div>
                    <div className="mon-syllbus">
                        <Link to="/de">
                            <div className="one">
                                DE
                            </div>
                        </Link>
                        <Link to="/icps">
                            <div className="seven">
                                ICPS
                            </div>
                        </Link>
                        <Link to="/de">
                            <div className="two">
                                DE
                            </div>
                        </Link>
                        <Link to="/che">
                            <div className="six">
                                CHE
                            </div>
                        </Link>
                        <Link to="/oops">
                            <div className="three">
                                OOPS
                            </div>
                        </Link>
                        <Link to="/oops">
                            <div className="three">
                                OOPS
                            </div>
                        </Link>
                    </div>
                    <div className="mon-syllbus">
                        <Link to="/icps">
                            <div className="seven">
                                ICPS
                            </div>
                        </Link>
                        <Link to="/latt">
                            <div className="four">
                                LATT
                            </div>
                        </Link>
                        <Link to="/oops">
                            <div className="three">
                                OOPS
                            </div>
                        </Link>
                        <Link to="/lab">
                            <div className="four">
                                LAB ( BE / DE )
                            </div>
                        </Link>
                        <Link to="/lab">
                            <div className="four">
                                LAB ( BE / DE )
                            </div>
                        </Link>
                        <Link to="/lab">
                            <div className="four">
                                LAB ( BE / DE )
                            </div>
                        </Link>
                        
                        
                    </div>
                    <div className="mon-syllbus">
                        <Link to="/lab">
                            <div className="four">
                                LAB ( BE / DE )
                            </div>
                        </Link>
                        <Link to="/lab">
                            <div className="four">
                                LAB ( BE / DE )
                            </div>
                        </Link>
                        <Link to="/lab">
                            <div className="four">
                                LAB ( BE / DE )
                            </div>
                        </Link>
                        <Link to="/latt">
                            <div className="four">
                                LATT
                            </div>
                        </Link>
                        <Link to="/che">
                            <div className="seven">
                                ICPS
                            </div>
                        </Link>
                        <Link to="/latt">
                            <div className="four">
                                LATT
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Csb