import React from 'react';
import './NFTPage.css';

const NFTPage = () => {
  return (
    <div className="nft-container">
      <div className="nft-image-box" />
      <p className="nft-caption">
        <span className="nft-underline">___</span> 부스의 NFT 이미지가 담겨 있습니다.
      </p>

      <input
        type="text"
        className="nft-input"
        placeholder="코드를 입력해주세요"
      />
    </div>
  );
};

export default NFTPage;
