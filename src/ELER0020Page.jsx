import React from 'react';

const windowsFont = 'font-[\'MS UI Gothic\'], font-sans';

const TopNav = () => (
  <div className={`w-full bg-[#f8f8f8] border-b border-gray-300 px-2 py-1 text-[13px] ${windowsFont}`}
    style={{ minHeight: 32 }}>
    <div className="flex items-center">
      <span className="flex items-center gap-1 mr-2 text-[13px]">
        <span role="img" aria-label="app-icon" className="mr-1">🖨️</span>
        <span>e-ロジシーコノ(帳票印刷条件(ELCI0010G1))</span>
      </span>
      <div className="flex gap-1 ml-2">
        {[...Array(4)].map((_, i) => (
          <input key={i} className="w-[90px] h-[22px] border border-gray-300 rounded-sm bg-[#f4f4f4] px-1 text-[13px]" disabled />
        ))}
        <button className="ml-2 px-2 py-0.5 border border-gray-400 rounded-sm bg-[#f4f4f4] text-[13px]">マスタ検索(F4)</button>
        <button className="px-2 py-0.5 border border-gray-400 rounded-sm bg-[#f4f4f4] font-bold text-[13px]">参照(F5)</button>
        <button className="px-2 py-0.5 border border-gray-400 rounded-sm bg-[#f4f4f4] font-bold text-[13px]">アソシ変更(F6)</button>
        <button className="px-2 py-0.5 border border-gray-400 rounded-sm bg-[#f4f4f4] text-[13px]">印刷(F9)</button>
        <button className="px-2 py-0.5 border border-blue-500 rounded-sm bg-[#e6f0ff] font-bold text-[13px]">プレビュー(F10)</button>
        <button className="px-2 py-0.5 border border-gray-400 rounded-sm bg-[#f4f4f4] text-[13px]">ファイル出力(F11)</button>
        <button className="px-2 py-0.5 border border-gray-400 rounded-sm bg-[#f4f4f4] text-[13px]">終了(F12)</button>
      </div>
    </div>
  </div>
);

const BlueHeader = () => (
  <div className="bg-[#0033cc] text-white text-[18px] font-bold px-2 py-1 flex items-center h-[32px] border-b-2 border-blue-800">
    <span className="mr-2 tracking-wide">外部データ取込エラーリスト</span>
    <span className="text-[15px] font-normal ml-2">作成(ELER0020)</span>
  </div>
);

const FormSection = () => (
  <div className="bg-white border border-gray-300 rounded-sm px-4 pt-3 pb-2 mt-3 mx-1 min-h-[220px] relative" style={{ fontFamily: 'MS UI Gothic, sans-serif' }}>
    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 items-center">
      <span className="text-[#0033cc] font-bold text-[13px]">識別</span>
      <div className="flex items-center gap-1">
        <select className="border border-gray-400 rounded-sm px-1 py-0.5 text-[13px] w-[40px] h-[22px]">
          <option>6</option>
        </select>
        <input className="border border-gray-400 rounded-sm px-1 py-0.5 text-[13px] w-[180px] h-[22px]" value="招定出庫(EL_SHIP)" readOnly />
      </div>
      <button className="bg-[#18804b] text-white rounded-sm px-4 py-0.5 text-[15px] font-bold tracking-widest w-[110px] h-[28px]">取込日</button>
      <div className="flex items-center gap-1">
        <input className="border border-gray-400 rounded-sm px-1 py-0.5 text-[13px] w-[110px] h-[22px]" value="2001/01/01" readOnly />
        <span className="ml-1 text-[13px]">から</span>
        <input className="border border-gray-400 rounded-sm px-1 py-0.5 text-[13px] w-[110px] h-[22px] ml-2" value="2025/06/06" readOnly />
        <span className="ml-1 text-[13px]">まで</span>
      </div>
      <button className="bg-[#18804b] text-white rounded-sm px-4 py-0.5 text-[15px] font-bold tracking-widest w-[110px] h-[28px]">EDI－ID</button>
      <div className="flex items-center gap-1">
        <input className="border border-gray-400 rounded-sm px-1 py-0.5 text-[13px] w-[110px] h-[22px]" />
        <span className="ml-1 text-[13px]">から</span>
        <input className="border border-gray-400 rounded-sm px-1 py-0.5 text-[13px] w-[110px] h-[22px] ml-2" />
        <span className="ml-1 text-[13px]">まで</span>
      </div>
    </div>
    <div className="absolute bottom-2 right-4 text-[13px] text-[#0033cc] leading-tight whitespace-pre">
      <span className="font-bold">識別</span> 1=商品マスタ　(M_SHOHIN)
      <br />2=入出庫先マスタ　(M_NYUSHUKO)
      <br />3=予定人庫　(P_NYUKO)
      <br />4=予定出庫　(P_SHUKO)
    </div>
  </div>
);

const FileOutputSection = () => (
  <div className="flex flex-row items-start gap-4 px-1 mt-2 mb-1">
    <div className="flex flex-col gap-1 text-[13px]">
      <div className="flex items-center gap-1">
        <span>出力プリンタ</span>
        <span className="ml-1">（通常使うプリンタ）</span>
      </div>
      <div className="flex gap-1 mt-1">
        <button className="border border-gray-400 rounded-sm px-2 py-0.5 bg-[#f4f4f4] text-[13px]">初期設定用目表示</button>
        <button className="border border-gray-400 rounded-sm px-2 py-0.5 bg-[#f4f4f4] text-[13px]">初期設定用ユーザ</button>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-5 ml-8">
      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 align-middle" defaultChecked />
      <span className="text-[13px]">ファイル出力見出し(M)</span>
      <span className="ml-8 text-[13px]">ファイル出力先：</span>
      <span className="border-b border-gray-400 text-[13px]">C:\elog\CSV\ELER0020P6.CSV</span>
    </div>
  </div>
);

const ELER0020Page = () => (
  <div className={`min-h-screen bg-[#f4f4f4] text-[13px] ${windowsFont}`} style={{ fontFamily: 'MS UI Gothic, sans-serif' }}>
    <TopNav />
    <BlueHeader />
    <div className="px-2 pt-2 pb-4">
      <FormSection />
      <FileOutputSection />
    </div>
  </div>
);

export default ELER0020Page; 