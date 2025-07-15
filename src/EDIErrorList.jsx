
import React from "react";

export default function EDIErrorList() {
  // Style constants for pixel-perfect Windows app look
  const buttonStyle = {
    border: '1px solid #184dc6',
    background: '#fff',
    color: '#184dc6',
    fontWeight: 'bold',
    fontFamily: 'MS Gothic, Meiryo, sans-serif',
    fontSize: 15,
    height: 26,
    minWidth: 110,
    padding: '0 12px',
    marginRight: 8,
    borderRadius: 0,
    boxSizing: 'border-box',
    cursor: 'pointer',
    outline: 'none',
    lineHeight: '24px',
    transition: 'background 0.1s',
  };
  const buttonGrayStyle = {
    ...buttonStyle,
    border: '1px solid #888',
    background: '#e0e0e0',
    color: '#222',
    minWidth: 170,
  };
  const inputStyle = {
    border: '1px solid #888',
    height: 22,
    fontSize: 15,
    fontFamily: 'MS Gothic, Meiryo, sans-serif',
    padding: '0 4px',
    borderRadius: 0,
    background: '#fff',
    marginLeft: 0,
    marginRight: 0,
    boxSizing: 'border-box',
    width: 120,
    verticalAlign: 'middle',
    display: 'inline-block',
  };
  const inputReadOnlyStyle = {
    ...inputStyle,
    background: '#f3f3f3',
  };
  const selectStyle = {
    ...inputStyle,
    width: 60,
    minWidth: 60,
    maxWidth: 60,
    padding: '0 2px',
  };
  const labelGreenStyle = {
    background: '#009150',
    color: '#fff',
    fontWeight: 'bold',
    width: 28,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    border: '1px solid #fff',
    letterSpacing: '2px',
    fontFamily: 'MS Gothic, Meiryo, sans-serif',
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
    boxSizing: 'border-box',
  };
  const labelGreenWideStyle = {
    ...labelGreenStyle,
    width: 56,
  };
  const madeLabelStyle = {
    width: 28,
    textAlign: 'left',
    fontFamily: 'MS Gothic, Meiryo, sans-serif',
    fontSize: 15,
    color: '#222',
    fontWeight: 'bold',
    height: 22,
    lineHeight: '22px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 6,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-[Meiryo,MS Gothic,sans-serif] text-base">
      {/* Header */}
      <div className="bg-[#184dc6] flex items-center px-2 py-2 border-b-2 border-[#184dc6]">
        <h1 className="text-white font-bold text-xl tracking-wide ml-2" style={{fontFamily:'MS Gothic, Meiryo, sans-serif', fontSize:20}}>
          外部データ取込エラーリスト　作成（ELER0020）
        </h1>
      </div>

      {/* Form Box (pixel-perfect) */}
      <div style={{position:'absolute', left:18, top:60, width:312, height:82, background:'#f8f9fa'}}>
        <div style={{width:312, height:82, background:'#f8f9fa', display:'flex', flexDirection:'column', gap:0, justifyContent:'flex-start'}}>
          {/* 識別 */}
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:22, marginBottom:0}}>
            <span style={labelGreenStyle}>識</span>
            <span style={labelGreenStyle}>別</span>
            <select
              id="識別"
              style={selectStyle}
              defaultValue="6"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
            <input
              type="text"
              value="拠点出庫(EL_SHIP)"
              readOnly
              style={inputReadOnlyStyle}
            />
          </div>
          {/* 取込日 */}
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:22, marginBottom:0}}>
            <span style={labelGreenStyle}>取</span>
            <span style={labelGreenStyle}>込日</span>
            <input
              type="text"
              defaultValue="2001/01/01"
              style={inputStyle}
            />
          </div>
          {/* EDI-ID */}
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:22}}>
            <span style={labelGreenWideStyle}>ＥＤＩ－ＩＤ</span>
            <input
              type="text"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Thêm phần ngày 'から' và 'まで' */}
      <div style={{position:'absolute', left:350, top:60, width:180, height:44, background:'#f8f9fa', display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
        <div style={{display:'flex', flexDirection:'column', gap:0, justifyContent:'flex-start'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:22, marginBottom:0}}>
            <span style={{width:28, textAlign:'right', fontFamily:'MS Gothic, Meiryo, sans-serif', fontSize:15, color:'#222', fontWeight:'bold', height:22, lineHeight:'22px', display:'flex', alignItems:'center', margin:0, padding:0}}>から</span>
            <input type="text" defaultValue="2025/06/06" style={inputStyle} />
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:22}}>
            <span style={{width:28, textAlign:'right', fontFamily:'MS Gothic, Meiryo, sans-serif', fontSize:15, color:'#222', fontWeight:'bold', height:22, lineHeight:'22px', display:'flex', alignItems:'center', margin:0, padding:0}}>から</span>
            <input type="text" style={inputStyle} />
          </div>
        </div>
        {/* Label 'まで' */}
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', marginLeft:2, gap:0}}>
          <span style={madeLabelStyle}>まで</span>
          <span style={madeLabelStyle}>まで</span>
        </div>
      </div>
    </div>
  );
}
