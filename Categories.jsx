import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Categories = () => {

    return (
        <>
            <Header />

            <>
                <div className="categories-main-container">
                    <div className="categories-container">
                        <h2>Categories</h2>
                        <ul>
                            <li>
                                <Link>Cute</Link>
                            </li>
                            <li>
                                <Link>Drawing</Link>
                            </li>
                            <li>
                                <Link>Wallpaper</Link>
                            </li>
                            <li>
                                <Link>Anime</Link>
                            </li>
                            <li>
                                {" "}
                                <Link>Sketch</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="categories-box">
                        <div className="categories-flash-card">
                            <img src="https://i.pinimg.com/736x/79/93/21/7993211d8980249cfa7059daf45abeb4.jpg" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://community-lens.storage.googleapis.com/preview-media/thumbnail_poster/d03f74a9-a0ce-48b1-b920-47edf56cc092.jpg" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://i.etsystatic.com/50470297/r/il/57a98c/5824803689/il_300x300.5824803689_6t8o.jpg" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://t3.ftcdn.net/jpg/07/60/28/58/360_F_760285821_Vm2ri7BRdXMmVsdxoLUZs4jj1EPD3xc5.jpg" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://img.freepik.com/premium-photo/cute-panda-colorful-drawingspanda-character-designdecorative-paintingsferrania-pandas-bamboo_743758-2037.jpg" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://img.freepik.com/premium-vector/cute-baby-panda_93811-40.jpg?w=360" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://t4.ftcdn.net/jpg/07/72/61/97/360_F_772619777_q4llLQkMDC6RxKPy8Tw9oyf9kXmrWBgH.jpg" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://img.freepik.com/free-vector/cute-panda-with-bamboo-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-9277.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728950400&semt=ais_hybrid-rr-similar" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_HscNASSSzflctpIl0VQV9El2wY93BqWdw&s" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvESM3t3Mf-z3-pcpzAHEpFrjf9COsg5BvKA&s" alt="" />
                        </div>
                        <div className="categories-flash-card">
                            <img src="https://www.shutterstock.com/image-vector/cute-panda-on-white-background-260nw-2292930557.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <Footer />
            </>

        </>
    )
};

export default Categories;