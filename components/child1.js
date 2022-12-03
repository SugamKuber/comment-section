/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { data } from "../utils/data.js"
import React, { useState } from 'react';
export default function child1() {

    const [open, setOpen] = useState(false);

    const openDropDown = () => {
        setOpen(current => !current);
    }
    return (
        <>
            <>
                <div  >
                    <div className="flex">
                        <button className="p-2" onClick={openDropDown}><img src="https://img.icons8.com/windows/16/null/resize-diagonal--v1.png" /></button>
                        <img src={data.author.avatar} alt="img" width={40} height={40}></img>
                        <div className="border">{data.author.name}</div>
                    </div>
                    <div className="mr-4">
                        {open && <div className="ml-4 border-l-4 pl-4 border-slate-500 hover:border-blue-400">
                            {
                                data.replies.map((replies, key) =>
                                    <>
                                        <div className="flex" key={key}>
                                            <img src={replies.author.avatar} alt="img" width={40} height={40}></img>
                                            <div>
                                                {replies.author.name}
                                            </div>

                                            <div>
                                                {replies.author.text}
                                            </div>
                                            <div>
                                                {replies.author.replies}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>}
                    </div>
                </div>
            </>
            <div>{data.text}</div>
        </>
    );
}
