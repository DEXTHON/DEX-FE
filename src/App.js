import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AdminPage from './AdminPage.js';

function App() {
  const [status, setStatus] = useState('안전');
  const navigate = useNavigate();

  const toggleStatus = () => {
    setStatus(prev => (prev === '안전' ? '위험' : '안전'));
  };

  const goToAdminPage = () => {
    navigate('/admin');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <header className="header">
              <div>관리자 페이지</div>
              <div>
                <button className="button" onClick={goToAdminPage}>
                  행사 등록하러 가기
                </button>
                <select className="event-dropdown">
                  <option>행사 이름</option>
                </select>
              </div>
            </header>

            <main className="main">
              <div className="grid-container">
                <div
                  className="grid-box"
                  style={{
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateRows: 'repeat(6, 1fr)',
                  }}
                >
                  {/* 1행 */}
                  <div className="cell" style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 2 }}>C1</div>
                  <div className="cell" style={{ gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 2 }}>C2</div>
                  <div className="cell" style={{ gridColumnStart: 4, gridColumnEnd: 6, gridRowStart: 1, gridRowEnd: 3 }}>C3</div>

                  {/* 2행 */}
                  <div className="cell" style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 4 }}>C4</div>
                  <div className="cell" style={{ gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 3 }}>C5</div>
                  <div className="cell" style={{ gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 3, gridRowEnd: 4 }}>C6</div>
                  <div className="cell" style={{ gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 3, gridRowEnd: 4 }}>C7</div>
                  <div className="cell" style={{ gridColumnStart: 5, gridColumnEnd: 6, gridRowStart: 3, gridRowEnd: 4 }}>C8</div>

                  {/* 3행 */}
                  <div className="cell" style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 4, gridRowEnd: 5 }}>C9</div>
                  <div className="cell" style={{ gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 4, gridRowEnd: 5 }}>C10</div>
                  <div className="cell" style={{ gridColumnStart: 4, gridColumnEnd: 6, gridRowStart: 4, gridRowEnd: 6 }}>C11</div>

                  {/* 4행 */}
                  <div className="cell" style={{ gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 5, gridRowEnd: 7 }}>C12</div>
                  <div className="cell" style={{ gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 5, gridRowEnd: 6 }}>C13</div>
                  <div className="cell" style={{ gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 6, gridRowEnd: 7 }}>C14</div>
                  <div className="cell" style={{ gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 6, gridRowEnd: 7 }}>C15</div>
                  <div className="cell" style={{ gridColumnStart: 5, gridColumnEnd: 6, gridRowStart: 6, gridRowEnd: 7 }}>C16</div>

                  {/* 5행 */}
                  <div className="cell" style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 7, gridRowEnd: 9 }}>C17</div>
                  <div className="cell" style={{ gridColumnStart: 2, gridColumnEnd: 5, gridRowStart: 7, gridRowEnd: 8 }}>C18</div>
                  <div className="cell" style={{ gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 8, gridRowEnd: 9 }}>C19</div>
                  <div className="cell" style={{ gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 8, gridRowEnd: 9 }}>C20</div>
                </div>

                <div className="box-title">혼잡도 한눈에 보기</div>
              </div>

              <div className="status-container">
                <div className="status-box"></div>
                <span
                  className="status-text"
                  onClick={toggleStatus}
                  style={{ cursor: 'pointer', color: status === '위험' ? 'red' : 'green' }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') toggleStatus();
                  }}
                >
                  {status}
                </span>
              </div>
            </main>
          </>
        } />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
