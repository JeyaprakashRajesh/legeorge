import React ,{useState, useEffect} from 'react';
const TshirtSVGBack = ({ color, uploadedImage , designOption}) => {
    const [image , setImage] = useState(null)
    useEffect(()=> {
        if(uploadedImage !=null){
            if(designOption === 1) {
                setImage(<image
                    x="145"
                    y="90"
                    width="250"
                    height="270"
                    href={uploadedImage}
                    preserveAspectRatio="xMidYMid slice"
                />)
            }else if(designOption === 2) {
                setImage(<image
                    x="185"
                    y="100"
                    width="180"
                    height="180"
                    href={uploadedImage}
                    preserveAspectRatio="xMidYMid slice"
                />)
            }else if(designOption === 3) {
                setImage(<image
                    x="215"
                    y="100"
                    width="120"
                    height="120"
                    href={uploadedImage}
                    preserveAspectRatio="xMidYMid slice"
                />)
            } else if( designOption === 4) {
                setImage(<image
                    x="130"
                    y="70"
                    width="280"
                    height="100"
                    href={uploadedImage}
                    preserveAspectRatio="xMidYMid slice"
                />)
            }
        }
    },[uploadedImage,designOption])
    return (
        <svg width="100%" height="auto" viewBox="0 0 539 531" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
        d="M100.88 209C104.31 244.41 104.3 286.66 100.88 322C100.88 390.67 100.88 459.33 100.88 528C106.93 525.02 115.95 530.62 122.89 529.99C129.83 529.36 139.44 531.17 146.88 531C154.32 530.83 161.98 532.64 169.88 532C177.78 531.36 185.79 533.61 193.88 533C201.97 532.39 209.74 533.26 217.88 533C226.02 532.74 234.72 533.1 242.88 533C251.04 532.9 258.72 533 266.88 533C275.04 533 283.72 532.91 291.88 533C300.04 533.09 307.74 532.74 315.88 533C324.02 533.26 332.79 532.42 340.88 533C348.97 533.58 356 531.44 363.88 532C371.76 532.56 380.46 530.98 387.88 531C395.31 531.02 403.99 529.27 410.88 530C417.77 530.73 427.77 524.99 433.88 528C433.9 480.34 433.88 432.66 433.88 385C433.88 375.33 433.88 365.67 433.88 356C433.88 336.67 433.88 317.33 433.88 298C432.25 281.19 432.88 262.55 432.88 245C432.88 238.67 432.88 232.33 432.88 226C432.88 221.26 433.49 215.99 433.88 212C433.88 195.78 434.36 177.37 435.88 162C437.41 146.63 438.21 130.2 440.89 116.01C443.57 101.82 446.9 87.72 450.9 75.02C454.91 62.33 465.87 47.58 451.96 41.92C438.04 36.27 428.02 33.08 414.95 27.93C401.88 22.77 390.06 19.81 377.57 14.31C365.09 8.8 352.03 6.61 339.88 1C330.57 1.47 324.21 10.28 314.55 11.67C304.9 13.07 295.27 17.31 284.88 18C274.49 18.69 259.84 17.43 249.55 17.33C239.26 17.23 228.96 12.91 219.57 11.31C210.19 9.7 203.88 1.46 194.88 1C182.65 6.64 169.71 8.87 157.1 14.22C144.5 19.57 133.21 23.1 119.95 28.07C106.7 33.05 97.0896 36.34 82.9596 42.08C68.8296 47.81 79.9396 61.17 83.8996 73.98C87.8696 86.78 91.2196 100.92 93.8796 115C96.5496 129.07 97.5196 145.88 98.9496 160.93C100.38 175.98 100.88 193.25 100.88 209Z"
        fill={color} stroke={color === "black" ? "white" : "black"} />
    <path
        d="M1 191C5.71 194.31 10.4 197.71 15.08 200.92C19.77 204.13 24.59 207.65 29.25 210.75C33.9 213.86 40.18 216.38 44.7 219.31C49.21 222.23 57.08 223.96 60.69 227.31C64.31 230.65 75.6 230.75 77 235C88.59 217.25 104.11 202.22 103 179C101.89 155.78 100.27 127.59 95.78 105.22C91.29 82.85 85.39 63.86 77 43C58.8 63.06 50.51 91.14 37.31 115.31C24.1 139.47 14.02 166.62 1 191Z"
        fill={color} stroke={color === "black" ? "white" : "black"} />
    <path
        d="M458.062 235C459.882 230.85 470.512 230.48 474.292 227.23C478.072 223.98 485.842 222.39 490.292 219.23C494.742 216.07 501.192 213.95 505.762 210.7C510.332 207.44 515.292 203.71 520.142 201.08C524.992 198.46 528.792 192.47 534.062 191C521.552 166.28 510.712 139.72 497.832 115.23C484.952 90.74 476.242 64.03 458.062 43C449.602 63.98 443.522 83.55 439.062 106C434.592 128.44 433.252 156.81 432.062 180C430.872 203.19 447.152 217.1 458.062 235Z"
        fill={color} stroke={color === "black" ? "white" : "black"} />
            {/* Uploaded image area */}
            {image}
        </svg>
    );
};
export default TshirtSVGBack