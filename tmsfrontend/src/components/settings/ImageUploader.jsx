import React, { useState } from "react";

import useUser from '../../context/UserContext'
import useWeb from "../../context/WebContext";

const ImageUploader = ({image, w, h}) => {
    const {setProfileImage} = useUser()
    const {baseApiUrl} = useWeb()

    const [imageSrc, setImageSrc] = useState( image ? `${baseApiUrl}${image}`: '/user.svg');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(file)
        }
    };

    return (
        <div className="flex flex-row items-center justify-center ">
            <label className="bg-lightButton dark:bg-darkButton text-white py-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-600">
                Upload Image
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </label>
            {imageSrc && (
                <div className={`w-${w} h-${h} rounded-lg overflow-hidden ml-10`}>
                    <img
                        src={imageSrc}
                        alt="Uploaded Preview"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
