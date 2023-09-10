
import React, { useState } from 'react';
import Sidebar from '../../../partials/Sidebar';
import Header from '../../../partials/Header';
import ChooseTree from '../components/ChooseTree';

export default function CreateRecord() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    return (
      <div className="flex h-screen overflow-hidden">
  
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
  
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
          <main className='m-4 rounded bg-white p-2'>
              <h1 className='text-3xl font-semibold pb-5'>Add new record</h1>
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8 '>
                <div className='flex justify-center border-t '>
                <div className='w-full'>
                <div className='border border-slate-50 bg-slate-50 w-fit px-2 my-2 shadow text-xl font-semibold'>
                  1. Choose Tree:
                </div>
                  <ChooseTree />
                </div>
                </div>
                <div className='border-t flex justify-center'>
                  <div className='w-full'>
                  <div className='border border-slate-50 bg-slate-50 w-fit px-2 my-2 shadow text-xl font-semibold'>2. Health Check:</div>
                  <div className='flex'>
  
                    <div className="flex">
                        <input type="checkbox" id="healthy" className="peer hidden" />
                        <label for="healthy" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">
                        <div className='flex  items-center'>
                          <svg className='pr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                          {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                          <path className="fill-current text-green-700 dark:text-slate-400" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg>
                          Healthy  
                        </div>
                      </label>
                      </div>
  
                    <div className="flex">
                        <input type="checkbox" id="felling" className="peer hidden" />
                        <label for="felling" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">
                        <div className='flex  items-center'>
                        <svg className='pr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path className="fill-current text-red-700 dark:text-slate-400"
                    d="M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"/>
                    </svg>
                          Illegal felling  
                        </div>
                      </label>
                      </div>
  
                  
  
                  <div className="flex">
                        <input type="checkbox" id="alert" className="peer hidden" />
                        <label for="alert" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">
                        <div className='flex  items-center'>
                        <svg className='pr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path className="fill-current text-amber-700 dark:text-slate-400"
                    d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
                    </svg>
                          Set Alert  
                        </div>
                      </label>
                      </div>
                      </div>
  
                  </div>
                </div>
                <div className='border-t flex justify-center'>
                  
                  <div className=' w-full'>
                    <div className='border border-slate-50 bg-slate-50 w-fit px-2 my-2 shadow text-xl font-semibold'>3. Physical check:</div>
                  <div className='py-2'>
                    <label className='px-2'>
                      Est. Height (sm): 
                    </label>
                    <div className='flex'>
                      <div className="flex">
                        <input type="checkbox" id="h-1" className="peer hidden" />
                        <label for="h-1" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> &lt;5m </label>
                      </div>
                      <div className="flex">
                        <input type="checkbox" id="h-2" className="peer hidden" />
                        <label for="h-2" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> 6-20m </label>
                      </div>
                      <div className="flex">
                        <input type="checkbox" id="h-3" className="peer hidden" />
                        <label for="h-3" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> 21-50m </label>
                      </div>
                      <div className="flex">
                        <input type="checkbox" id="h-4" className="peer hidden" />
                        <label for="h-4" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> &gt;51m </label>
                      </div>
                    </div>
                    <div className='inline flex justify-center text-sm text-gray-600'>or click to enter exact size </div>
                                      {/* <input type='text' className='border border-slate-200 w-24 h-8 rounded shadow '  /> */}
                  </div>
                  <div className=''>
                    <label className='px-2'>
                      Circumference(sm): 
                    </label>
                    <div className='flex'>
                      {/* 1-20sm */}
                    <div className="flex">
                      <input type="checkbox" id="c-1" className="peer hidden" />
                      <label for="c-1" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                      mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> &lt;20cm </label>
                    </div>
                    <div className="flex">
                      <input type="checkbox" id="c-2" className="peer hidden" />
                      <label for="c-2" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                      mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> 21-50cm </label>
                    </div>
                    <div className="flex">
                      <input type="checkbox" id="c-3" className="peer hidden" />
                      <label for="c-3" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                      mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> 51-100cm </label>
                    </div>
                    <div className="flex">
                      <input type="checkbox" id="c-4" className="peer hidden" />
                      <label for="c-4" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                      mx-1 py-2 px-4 font-bold text-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> &gt;101cm </label>
                    </div>
                    </div>
                    <div className='inline flex justify-center text-sm text-gray-600'>or click to enter exact size </div>
                    {/* <input type='text' className='border border-slate-200 w-24 h-8 rounded shadow '  /> */}
                  </div>
                  </div>
                </div>
                <div className='border-t lg:col-span-3 '>
                    <div className=' w-full'>
                      <div className='border border-slate-50 bg-slate-50 w-fit px-2 my-2 shadow text-xl font-semibold'>
                        4. Any Comments:
                      </div>
                      <div>
                        <textarea  className='w-full'/>
                        
                      </div>
                    </div>
                </div>
                <div className='border-t lg:col-span-3 '>
                    <div className=' w-full'>
                      <div className='border border-slate-50 bg-slate-50 w-fit px-2 my-2 shadow text-xl font-semibold'>
                        5. Any Image
                      </div>
                      <div className='md:inline-flex items-center'>
                        <input type='file'/>
                        <div className='flex items-center'>
                        or Take a picture
                        <svg className='px-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                          {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                          <path className="fill-current text-slate-700 dark:text-slate-400" d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                          </div>
                      </div>
                    </div>
                </div>
                
              </div>
                <div className='md:flex border-t justify-center items-center my-2'>
                  <button 
                  className='inline-flex justify-center border m-2 py-2 px-4 w-24 shadow rounded bg-slate-400 text-white hover:bg-slate-600'>Save</button>
                  <button 
                  className='inline-flex justify-center border m-2 py-2 px-4 w-fit shadow rounded bg-slate-400 text-white hover:bg-slate-600'>Save and Create new</button>
                  <button 
                  className='inline-flex justify-center border m-2 py-2 px-4 w-24 shadow rounded bg-slate-400 text-white hover:bg-slate-600'>Cancel</button>
                  
                  </div>
          </main>
        </div>
      </div>
    );
  }
  
