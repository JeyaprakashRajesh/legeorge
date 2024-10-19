import React, { useState } from "react";
import "../App.css";
import TshirtSVG from "./TshirtSVG";
import TshirtSVGBack from "./TshirtSVGBack";

export default function Home() {
    const [rating, setRating] = useState(5);
    const [price, setPrice] = useState(300);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedImage2, setUploadedImage2] = useState(null)
    const [selectedFrontDesign, setSelectedFrontDesign] = useState(null);
    const [selectedBackDesign, setSelectedBackDesign] = useState(null);

    const sizes = ["S", "M", "L", "XL", "XXL"];
    const colors = ["black", "red", "blue"];
    const options = [null, 1, 2, 3, 4];

    const tshirts = [
        require("../assets/tshirt-1.png"),
        require("../assets/tshirt-2.png"),
        require("../assets/tshirt-3.png"),
        require("../assets/tshirt-group.png"),
    ];

    const [selectedTshirt, setSelectedTshirt] = useState(tshirts[0]);

    const handleSizeClick = (index) => setSize(index + 1);
    const handleColorClick = (selectedColor) => setColor(selectedColor);
    const handleTshirtClick = (index) => setSelectedTshirt(tshirts[index]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setUploadedImage(reader.result);
            reader.readAsDataURL(file);
        }
    };
    const handleImageUpload2 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setUploadedImage2(reader.result);
            reader.readAsDataURL(file);
        }
    }
    return (
        <section className="container">
            <section className="home">
                <section className="display-container">
                    <div className="display">
                        <img src={selectedTshirt} alt="Selected T-shirt" className="selected-tshirt" />
                    </div>
                    <div className="display-options">
                        {tshirts.map((tshirt, index) => (
                            <img
                                key={index}
                                src={tshirt}
                                alt={`T-shirt ${index + 1}`}
                                className="option-image"
                                onClick={() => handleTshirtClick(index)}
                            />
                        ))}
                    </div>
                </section>

                <section className="header">
                    <div className="header-text">Half Sleeve T-shirt for Men</div>
                    <div className="header-rating">
                        <div className="rating">
                            {Array(5).fill(0).map((_, index) => (
                                <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="price">₹{price}</section>

                <section className="description">
                    <div className="description-heading">DESCRIPTION</div>
                    <div className="description-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </section>

                <section className="size">
                    <div className="size-text">SIZE</div>
                    <div className="size-selection">
                        {sizes.map((sizeLabel, index) => (
                            <div
                                key={index}
                                className={`size-box ${size === index + 1 ? "selected" : ""}`}
                                onClick={() => handleSizeClick(index)}
                            >
                                {sizeLabel}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="color">
                    <div className="color-text">COLOR</div>
                    <div className="color-selection">
                        {colors.map((colorOption, index) => (
                            <div
                                key={index}
                                className={`color-box ${color === colorOption ? "selected-color" : ""}`}
                                style={{ backgroundColor: colorOption }}
                                onClick={() => handleColorClick(colorOption)}
                            ></div>
                        ))}
                    </div>
                </section>

                <section className="upload">
                    <div className="upload-text">Image for front</div>
                    <label htmlFor="upload-button-1" className="upload-label">Choose Image</label>
                    <input id="upload-button-1" type="file" accept="image/*" onChange={handleImageUpload} />

                    <div className="custom-tshirt">
                        <div className="custom-tshirt-front">
                            <div>Front Design Options</div>
                            <div className="custom-tshirt-front-options">
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`option-box ${selectedFrontDesign === option ? "selected" : ""}`}
                                        onClick={() => setSelectedFrontDesign(option)}
                                    >
                                        {option === null ? "None" : option}
                                    </div>
                                ))}
                            </div>
                            <TshirtSVG color={color} uploadedImage={uploadedImage} designOption={selectedFrontDesign} />
                        </div>
                    </div>

                    <div className="upload-text">Image for back</div>
                    <label htmlFor="upload-button-2" className="upload-label">Choose Image</label>
                    <input id="upload-button-2" type="file" accept="image/*" onChange={handleImageUpload2} />

                    <div className="custom-tshirt">
                        <div className="custom-tshirt-back">
                            <div>Back Design Options</div>
                            <div className="custom-tshirt-back-options">
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`option-box ${selectedBackDesign === option ? "selected" : ""}`}
                                        onClick={() => setSelectedBackDesign(option)}
                                    >
                                        {option === null ? "None" : option}
                                    </div>
                                ))}
                            </div>
                            <TshirtSVGBack color={color} uploadedImage={uploadedImage2} designOption={selectedBackDesign} />
                        </div>
                    </div>
                </section>


                <section className="buy">
                    <button className="buy-button">BUY NOW</button>
                </section>
            </section>
        </section>
    );
}
