import React from 'react';
import '../styles/bookingStyles.css';

const Booking = () => (
  <div className="container">
    <div className="logo">
      <button>Logo</button>
      <button style={{ backgroundColor: '#4a4a8f', color: 'white', borderRadius: '50%', width: '30px', height: '30px', cursor: 'default' }}></button>
    </div>
    <div className="header">BOOKING NOW</div>

    <div className="section-title">Tentukan Lokasi</div>
    <div className="content-section">
      <div className="form-group">
        <div className="select-box">
          Pilih Lokasi Terdekat
          <select>
            <option value="1">Lokasi 1</option>
            <option value="2">Lokasi 2</option>
            <option value="3">Lokasi 3</option>
          </select>
        </div>
        <div className="map-box">
          Cari Di Peta
          <div style={{ border: '1px dashed #888', height: '150px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Peta
          </div>
          <button style={{ marginTop: '10px', padding: '8px 12px', backgroundColor: '#4a4a8f', color: 'white', border: 'none', borderRadius: '4px' }}>Gunakan Lokasi</button>
        </div>
      </div>
    </div>
    {/* Tambahkan bagian lain sesuai kebutuhan */}
  </div>
);

export default Booking;
