import founder from './founder.jpg';
import classes from './Main-app.module.css';

const Main = () =>{
    return(
        <div className={`container ${classes.mainWrapper}`}>
            <div className={classes.mainLeft}>
            <h3><h1 className={classes.underline}>Building role models worldwide </h1><br />
            <div className={classes.title}>
                <h1>Y</h1>
                <h2>O</h2>
                <h3>U</h3>
                <h4>T</h4>
                <h5>H</h5>
                <h2>IN</h2>
                <h5>I</h5>
                <h4>S</h4>
                <h3>L</h3>
                <h2>A</h2>
                <h1>M</h1>
            </div>
                <ul><li>Change in community comes from youth</li><br /> <hr />
                <li>Youth the changing agents</li><br /> <hr />
                </ul>
                What We Do? <br></br><hr></hr>
                <ul>
                <li>Best online free Counseling portal</li><br /> <hr />
                <li>Perfect Guidance for youth</li><br /><hr />
                <li>Special counselings in</li><br /><hr />
                <li>Porn addiction</li><br /><hr />
                <li>Music addiction</li><br /><hr />
                <li>Music addiction</li><br />
                </ul>
            </h3>
            </div>
            <div className={`container-fluid ${classes.mainRight}`}>
                <div className={classes.rightHeading}>
                <div className={classes.first}>
                <h1>We Give :-</h1>
                    <ul>
                        <h3 className={classes.listItem}><li>Free Counseling</li></h3>
                        <h3 className={classes.listItem}><li>Islamic Reminder</li></h3>
                    </ul>
                </div>
                <div className={classes.second}>
                <p className={classes.flexItem}>
                    <h1>Why We Do?</h1>Only to please<h3 className={classes.adjust}>AllAH</h3>
                    </p>
                </div>
                </div>
                <div className={classes.details}>
                <h2>About YouthInIslam</h2>
                </div>
                <div className={classes.subDetails}>
                <h2>Founder:- Farhan Aziz</h2>
                <img className={classes.founder} src={founder} alt="founder" />
                </div>
                <div className={classes.about}>
                    <ul>
                        <li><h4>Student of Knowledge</h4></li>
                        <li><h4>Trainee and Life coach</h4></li>
                    </ul>
                </div>
                
                <div className={classes.moreDetails}>
                    <h4>Contact Details</h4>
                    <a href='https://www.instagram.com/the.aziz_/'> <i className={`bi bi-instagram ${classes.instaIcon}`}> </i> Instagram</a> <span className='text-muted'>(Personal)</span><br></br>
                    <a href='https://www.instagram.com/youthinislam/'> <i className={`bi bi-instagram ${classes.instaIcon}`}> </i> Instagram</a> <span className='text-muted'>(YouthInIslam)</span>
                </div>
                <br></br>
                <h2 style={{textDecoration : "underline"}}>Vision and Mission</h2><br></br>
                <h4>To help youth fight their worldly desires</h4><hr></hr>
                <h4>To set up long term goal of Akhirah</h4><hr></hr>
                <h4>To bring youngsters close to Islam</h4><hr></hr>
                <h4>Utilise skills of youth to achieve success in duniya and here after</h4><hr></hr>
            </div>
            <div><h1>Just to check</h1></div>
        </div>
    )
}
export default Main;