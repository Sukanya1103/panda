import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {

    return (
        <>
            <Header />
            <>
                <div className="about-box">
                    <div className="about-text-box">
                        <img src="./assest/Panda-removebg-preview3.png" alt="" />
                        <h5>Panda</h5>
                        <p>
                            The giant panda, also known as the panda bear or simply panda, is a bear
                            species endemic to China. It is characterised by its white coat with
                            black patches around the eyes, ears, legs and shoulders. Its body is
                            rotund; adult individuals weigh 100 to 115 kg and are typically 1.2 to
                            1.9 m long.
                        </p>
                        <p>
                            Newborn giant panda cubs are born pink, hairless and blind. They weigh
                            3-5 ounces and are about the size of a stick of butter. At 1/900th the
                            size of its mother, a giant panda baby is the smallest mammal newborn
                            relative to its mother's size, except for a marsupial, such as a
                            kangaroo or opossum.
                        </p>
                    </div>
                    <div className="about-image-box">
                        <img src="./assest/Images/img12.jpeg" alt="" />
                    </div>
                </div>https
                <div className="faded-image-box">
                    <div className="faded-image">
                        <img src="./assest/Images/img13.jpg" alt="" />
                    </div>
                    <div className="middle">
                        <div className="faded-text">
                            <img src="./assest/Panda-removebg-preview3.png" alt="" />
                            <h5>Panda</h5>
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </>
    )
};

export default About;