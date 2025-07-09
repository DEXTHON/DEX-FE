import React, { useState } from 'react'; // useState 임포트
import './admintag.css';

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [hall, setHall] = useState('');
  const [booth, setBooth] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUri(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    alert(`업체명: ${companyName}\n위치: ${hall} - ${booth}`);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">🏷 업체 등록</h1>

      <label className="form-label">업체 이름</label>
      <input
        type="text"
        className="form-input"
        placeholder="예: 네이버"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <label className="form-label">부스 이미지</label>
      <input type="file" accept="image/*" id="companyImage" hidden onChange={handleImageChange} />
      <label htmlFor="companyImage" className="image-upload-button">
        {imageUri ? (
          <img src={imageUri} className="uploaded-image-preview" alt="부스 이미지" />
        ) : (
          <div className="image-placeholder-box">
            <span className="image-placeholder-text">이미지 선택하기</span>
          </div>
        )}
      </label>

      <label className="form-label">장소 선택</label>
      <div className="form-row">
        <select className="form-select" value={hall} onChange={(e) => setHall(e.target.value)}>
          <option value="">홀 선택</option>
          <option value="A홀">A홀</option>
          <option value="B홀">B홀</option>
        </select>

        <select className="form-select" value={booth} onChange={(e) => setBooth(e.target.value)}>
          <option value="">위치 선택</option>
          <option>C1</option>
            <option>C2</option>
            <option>C3</option>
            <option>C4</option>
            <option>C5</option>
            <option>C6</option>
            <option>C7</option>
            <option>C8</option>
            <option>C9</option>
            <option>C10</option>
            <option>C11</option>
            <option>C12</option>
            <option>C13</option>
            <option>C14</option>
            <option>C15</option>
            <option>C16</option>
            <option>C17</option>
            <option>C18</option>
            <option>C19</option>
            <option>C20</option>
        </select>
      </div>

      <div className="form-button-group">
        <button className="form-button primary" onClick={handleSubmit}>
          업체 등록하기
        </button>
      </div>
    </div>
  );
};

export default CompanyForm;
