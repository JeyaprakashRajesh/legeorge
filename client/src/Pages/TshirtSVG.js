import React, { useEffect, useState } from 'react';
const TshirtSVG = ({ color, uploadedImage , designOption}) => {
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
                d="M102.796 200C102.796 200.5 102.796 201.5 102.796 202C107.856 213.89 102.356 231.65 103.796 245C105.236 258.35 104.026 275.31 102.796 288C102.796 367 102.796 446 102.796 525C108.966 521.93 118.546 527.94 125.796 527C133.046 526.06 142.996 528.47 150.796 528C158.596 527.53 166.666 529.31 174.796 529C182.926 528.69 191.366 530.7 199.796 530C208.226 529.3 216.326 530.32 224.796 530C233.266 529.68 242.306 530.18 250.796 530C259.286 529.82 267.306 530.15 275.796 530C284.286 529.86 293.326 530.21 301.796 530C310.266 529.79 318.366 530.43 326.796 530C335.226 529.57 344.456 530.89 352.796 530C361.136 529.11 369.176 529 377.796 529C381.856 528.61 387.056 528 391.796 528C398.466 528 407.396 526.3 413.796 527C420.196 527.7 429.996 522.14 435.796 525C435.776 458.33 435.796 391.67 435.796 325C435.796 307.33 435.796 289.67 435.796 272C434.016 253.56 434.796 233.19 434.796 214C434.796 208.94 435.376 203.32 435.796 199C435.796 181.51 436.816 162.73 438.796 146C440.776 129.27 441.376 112.74 445.816 97.02C450.256 81.31 451.456 69.05 459.016 54.22C466.586 39.4 446.826 35.46 433.816 30.98C420.816 26.49 406.226 20.37 392.816 15.98C379.416 11.58 365.466 4.79 351.796 1C353.116 7.89 343.276 15.1 339.876 21.08C336.476 27.06 328.296 31.23 322.096 35.3C315.906 39.38 306.766 43.27 298.726 44.93C290.676 46.58 278.596 48.14 269.796 48C260.996 47.86 248.766 46.82 240.776 45.02C232.776 43.23 223.186 39.96 217.046 35.75C210.916 31.53 202.526 27.64 199.046 21.75C195.566 15.86 185.506 7.79 186.796 1C172.876 4.86 158.706 11.8 145.016 16.22C131.336 20.65 117.516 26.89 104.026 31.23C90.5361 35.56 72.0361 39.97 79.8661 54.93C87.7061 69.88 88.6761 82.13 92.8161 97.98C96.9661 113.82 98.5461 129.61 100.466 146.33C102.386 163.05 102.796 182.64 102.796 200ZM416.796 389C416.766 341.75 416.226 290.92 415.796 244C419.196 291.05 418.146 341.24 416.796 389Z"
                fill={color} stroke={color === "black" ? "white" : "black"} />
            <path
                d="M1 194C8.77 198.55 16.55 206.48 24.25 210.75C31.94 215.03 42.84 222.91 50.69 225.31C58.55 227.7 71.53 240.52 79 236C90.36 217.8 104.5 203.2 103 180C101.5 156.8 100.14 129.82 95.33 107.67C90.52 85.52 85.94 66.52 77 46C58.82 66.11 50.48 94.07 37.31 118.31C24.13 142.54 14 169.65 1 194Z"
                fill={color} stroke={color === "black" ? "white" : "black"} />
            <path
                d="M462.048 238C463.398 233.88 474.688 233.5 478.278 230.23C481.868 226.96 489.838 225.23 494.278 222.23C498.708 219.23 505.158 216.81 509.748 213.7C514.338 210.58 519.358 206.77 524.128 204.08C528.908 201.39 532.818 195.46 538.048 194C525.508 169.31 514.688 142.58 501.818 118.23C488.948 93.88 479.888 66.22 462.048 46C453.668 67 447.448 86.54 443.048 109C438.648 131.46 437.088 159.78 436.048 183C435.008 206.22 451.098 220.03 462.048 238Z"
                fill={color} stroke={color === "black" ? "white" : "black"} />

            {/* Uploaded image area */}
            {image}
            
        </svg>
    );
};


export default TshirtSVG;
