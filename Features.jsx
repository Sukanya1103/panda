import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


// Add all icons to the library so you can use them in your components
library.add(fas);

const Features = () => {
    return (
        <>
            <Header />

            <div className="features-container">
                <div className="features-container-box">
                    <h5>Panda</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
                        <br /> non at vero laborum aliquam exercitationem qui eius! Doloremque,
                        quam praesentium.
                    </p>
                </div>
                <div className="features-container-button">
                    <button>Download Now</button>
                    <button>See Features</button>
                </div>
            </div>
            <div className="services-box">
                <div className="services-text-box">
                    <h1>Services</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
                        quaerat modi ducimus deserunt impedit eaque
                        <br /> facere veniam, natus, sunt temporibus, laborum totam culpa
                        expedita dicta!
                    </p>
                </div>
                <div className="sevices-icons-container">
                    <div className="services-icon-box">
                        <FontAwesomeIcon icon="image" />
                        <p>Photos</p>
                    </div>
                    <div className="services-icon-box">
                        <FontAwesomeIcon icon="film" />
                        <p>Videos</p>
                    </div>
                    <div className="services-icon-box">
                        <FontAwesomeIcon icon= {faYoutube} />
                        <p>Youtube Channel</p>
                    </div>
                    <div className="services-icon-box">
                        <FontAwesomeIcon icon="download" />
                        <p>Downloads</p>
                    </div>
                </div>
            </div>
            <div className="feature-box">
                <div className="feature-text-box">
                    <h1>Feature</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
                        assumenda accusamus veritat
                        <br />
                        dolore ex magnam rem temporibus totam aliquid corporis!
                    </p>
                </div>
                <div className="feature-image-text-container">
                    <div className="feature-image-text-box">
                        <div className="feature-text">
                            <FontAwesomeIcon icon="palette" />
                            <div className="txt-box">
                                <h3>Creative Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                    fuga maiores commodi possimus sapiente. Nemo minus voluptatibus
                                    sint cum doloremque?
                                </p>
                            </div>
                        </div>
                        <div className="feature-text">
                            <FontAwesomeIcon icon="pen-to-square" />
                            <div className="txt-box">
                                <h3>Latest Updates</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repudiandae, magnam! Perferendis ratione eum aut magni aspernatur,
                                    commodi exercitationem eius obcaecati?
                                </p>
                            </div>
                        </div>
                        <div className="feature-text">
                            <FontAwesomeIcon icon="quote-left" />
                            <div className="txt-box">
                                <h3>Quotes About Panda</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                    numquam impedit quibusdam sit vero voluptatem optio quod illo
                                    libero nisi.
                                </p>
                            </div>
                        </div>
                        <div className="feature-text">
                            <FontAwesomeIcon icon="file-lines" />
                            <div className="txt-box">
                                <h3>Facts About Pandas</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
                                    dicta facere itaque mollitia fugiat incidunt esse minima
                                    architecto eligendi? Tempora.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-image">
                        <img src="./assest/screens-removebg-preview (3).png" alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Features;
