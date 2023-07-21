import React, { useState, useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { Helmet } from 'react-helmet';

const ShareButton = ({ image }) => {
    const url = window.location.href;

    return (
        <div>
            <FacebookShareButton url={url} quote="Check out this image!" hashtag="#randomimage">
                Share on Facebook
            </FacebookShareButton>

            <TwitterShareButton url={url} title="Check out this image!" hashtags={['randomimage']}>
                Share on Twitter
            </TwitterShareButton>

            <WhatsappShareButton url={url} title="Check out this image!">
                Share on WhatsApp
            </WhatsappShareButton>
        </div>
    );
};

const ImageDisplay = () => {
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await fetch('https://source.unsplash.com/1400x500/?nature');
                const data = await response.json();
                const randomImage = data[Math.floor(Math.random() * data.length)].url;
                setImage(randomImage);
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        };

        fetchRandomImage();
    }, []);

    return (
        <div>
            <Helmet>
                <meta property="og:image" content={image} />
                <meta name="twitter:image" content={image} />
            </Helmet>
            {image && <img src={image} alt="Random" />}
            {image && <ShareButton image={image} />}
        </div>
    );
};

const Apprits = () => {
    return (
        <div>
            <h1>Random Image Viewer</h1>
            <ImageDisplay />
        </div>
    );
};

export default Apprits;
