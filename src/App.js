import React, { Component } from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { FacebookShareButton, WhatsappShareButton, WhatsappIcon, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { Helmet } from 'react-helmet'
import img from './image/mysorepalace.jpeg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      imageUrl: img,
      shareTitle: 'Sharing the image',
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen, imageUrl, shareTitle } = this.state;

    return (
      <div className="flex flex-col justify-center items-center">
        <Helmet>
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:secure_url" content={imageUrl} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="500" />
          <meta property="og:title" content={shareTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Check out this image!" />
          <meta property="og:site_name" content="Your Website Name" />
          <meta property="og:url" content={window.location.href} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={shareTitle} />
          <meta name="twitter:description" content="Check out this image!" />
          <meta name="twitter:image" content={imageUrl} />
        </Helmet>
        <div className="text-center font-bold text-4xl p-2 pb-4">Random Image Sharing</div>
        <img className="text-center object-cover w-1/2 pb-4 h-42 md:h-64 xl:h-80" src={imageUrl} alt="" />
        <div style={{ background: '#0000', height: '100vh', width: '100%' }}>
          <div className="px-2 py-2 text-center">
            <button
              onClick={this.openModal}
              className="inline-flex items-center justify-center h-12 px-5 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 hover:text-white hover:border-2 border-white focus:shadow-outline focus:outline-none"
              aria-label="Share"
              title="Share"
            >
              Share
            </button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Share Modal"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <div className="modal-content">
              <h1 className="text-center pb-4">Share Image</h1>
              <div className="share-icons pb-4">
                <FacebookShareButton url={imageUrl} quote={shareTitle} hashtag={'#portfolio'}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton url={imageUrl} title={shareTitle} separator=" - ">
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

                <TwitterShareButton url={imageUrl} title={shareTitle} hashtags={['portfolio']}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
              </div>

              <div className="image-preview">
                <img src={imageUrl} alt="Preview" />
              </div>
            </div>
            <button
              onClick={this.closeModal}
              className="inline-flex items-center justify-center h-10 px-5 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-500 hover:text-white hover:border-2 border-white focus:shadow-outline focus:outline-none"
            >
              Close
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}
