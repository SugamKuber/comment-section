/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { data } from "../utils/data.js"
import React, { useState } from 'react';
import Child1 from "./child1"

export default function DropDown() {

  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen(current => !current);

  }
  return (
    <>
      <div className="pl-4">
        <div className="flex">
          <button className="p-2" onClick={openDropDown}><img src="https://img.icons8.com/windows/16/null/resize-diagonal--v1.png" /></button>
          <img src={data.author.avatar} alt="img" width={40} height={40}></img>
          <div className="border">{data.author.name}</div>
          <div>
            {data.author.text}
          </div>
        </div>
        <div className="ml-4 border-l-4 pl-4 border-slate-500 hover:border-blue-400">
          {open && <Child1 />}
        </div>
      </div>
    </>
  );
}
