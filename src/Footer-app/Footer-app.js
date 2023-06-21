import classes from './Footer-app.module.css';

const Footer = () => {
    return(
        <div className={`container ${classes.footerContainer}`}>
            <h1 className={"text-muted"}>Feel free to Join us</h1>
            <h3 className={"text-muted"}>Helping youth to lead a healthy life</h3>
            <p className={"text-muted"}>YouthInIslam (Yii) is a non-profit, non-sectarian, non-political organization, which provides a unique platform for the youth and provides them avenues to channel their potential in accordance with Islamic values. Since its inception in March 26 2023, YouthInIslam is working to create well-balanced individuals, who are not only skilled in their respective fields but also recognize and fulfil their religious obligations and participate actively in their communities.</p>
        </div>
    )
}
export default Footer;