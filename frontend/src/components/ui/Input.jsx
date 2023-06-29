import React from 'react';

export default function Input ({type,placeholder, label, value, onChange ,index}){
  return (
    <div className="group flex flex-col">
      <label className="group-focus-within:text-indigo-500 text-sm tracking-widest ml-2 text-slate-500 transition-all ">{label}</label>
      <input
      className="transition-all group-active:text-indigo-500 p-2 rounded-xl shadow-md font-mono border-transparent border-2 focus:outline-none  hover:border-indigo-200 focus:border-indigo-400 focus:shadow-indigo-100 outline-slate-200"
        type={type?type:"text"}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};