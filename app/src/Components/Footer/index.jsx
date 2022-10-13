
import './footerStyle.css'

import DeveloperSocialMedia from '../DeveloperSocialMedia'

const Footer = () => {

    return(
        <footer>
            <div className='footerContainer'>
                <section className='infosFooter'>
                    <div>
                        <p>
                            © 2022 Copyright: Pedro Lara
                        </p>
                    </div>
                </section>
                <section className='socialMediaFooter'>
                    <DeveloperSocialMedia />
                </section>
            </div>
            <div className='toTopBtn'>
                <button className='btn btn-dark'><a href='#home'>▲</a></button>
            </div>
        </footer>
    )

};

export default Footer;