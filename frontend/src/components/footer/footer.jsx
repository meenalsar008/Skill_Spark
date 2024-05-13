import React from "react";
import "./footer.css";
import fb from '../../assets/fbimg.png'
import twitter from '../../assets/twitterimg.png'
import linkedin from '../../assets/linkedinimg.png'
import instagram from '../../assets/instagramimg.png'


const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employee">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>  

                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/becomepartner">
                            <p>Become a Partner</p> 
                        </a>
                        <a href="/integrationapidocs">
                            <p>Integration API Docs</p> 
                        </a>
                        <a href="/afterclassblog">
                            <p>After Class Blog</p> 
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>

                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/howitworks">
                            <p>How it works</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Coming Soon On</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={instagram} alt=""/></p>

                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} SkillSpark. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer;