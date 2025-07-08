import React, { useState } from 'react';
import './AdminPage.css'; // AdminPage 전용 CSS 파일

const AdminPage = () => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageUri(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // 여기에 등록 로직을 추가합니다.
    // 예: API 호출, 데이터 저장 등
    console.log('행사 이름:', eventName);
    console.log('장소:', location);
    console.log('이미지 URI:', imageUri);
    alert('행사가 등록되었습니다!');
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">관리자 페이지 입니다.</h1>

      <label className="admin-label">행사 이름을 알려주세요.</label>
      <input
        className="admin-input"
        type="text"
        placeholder="행사 이름 입력"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <label className="admin-label">장소를 알려주세요.</label>
      <input
        className="admin-input"
        type="text"
        placeholder="장소 입력"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label className="admin-label">부스 이미지를 넣어주세요.</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }} // Hide the default file input
        id="imageUpload"
      />
      <button
        className="admin-image-button"
        onClick={() => document.getElementById('imageUpload').click()}
      >
        {imageUri ? (
          <img src={imageUri} alt="Selected Booth" className="admin-image" />
        ) : (
          <div className="admin-image-box">
            <p className="admin-image-placeholder">이미지 선택하기</p>
          </div>
        )}
      </button>

      <button className="submit-button" onClick={handleSubmit}>
        등록하기
      </button>
    </div>
  );
};

export default AdminPage;