
import React, { useState } from 'react';
import Select from 'react-select'


export default function ChooseTree() {

  const options = [
    { value: 'chocolate', label: 'Tree1_CDA' },
    { value: 'strawberry', label: 'Tree2_ABC' },
    { value: 'vanilla', label: 'Tree3_AAA' }
  ]
  
    return (
      <div className="">
        <div className='py-2'>
          <label>
          <Select placeholder={"Choose Tree"} options={options}/>
          </label>
        </div>
        <div className='flex justify-center items-center'>
          or click to scan QR code: 
          <svg className='px-2 text-lg ' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path className='fill-current text-slate-500' d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/>
          </svg>
        </div>
    </div>
    );
  }
  
