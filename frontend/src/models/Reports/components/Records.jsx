
import React, { useEffect, useState } from 'react';



export default function Records() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('../data.json',
      {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(function(response){

      console.log(response)

      return response.json();

    }).then(function(myJson) {
        setData(myJson)
      });

  }, [])

  useEffect(()=>{
    console.log("set data is ", data)
  }, [data])
  
    return (
      <div className="col-span-full ">

        <div className='bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">My Records</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Tree</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Type</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Location</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Age</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Height</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Circumference</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Healthy</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Illigal fell</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Alert</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Viewed by</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Viewed on</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
              {data && data.trees && data.trees.map(tree=>(
                
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">{tree.name}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">{tree.type}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{tree.Location}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{tree.age}y</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{tree.Circumference}cm</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{tree.Height}cm</div>
                </td>
                <td className="p-2">
                  
                    {tree.IsHealthy ? (
                      <div className="text-center text-emerald-500">Yes</div>
                      ) : (
                      <div className="text-center text-red-500">No</div>
                      )}
                  
                </td>
                <td className="p-2">
                {tree.IsCut ? (
                      <div className="text-center text-emerald-500">Yes</div>
                      ) : (
                      <div className="text-center text-red-500">No</div>
                      )}
                </td>
                <td className="p-2">
                {tree.SetAlert ? (
                      <div className="text-center text-emerald-500">Yes</div>
                      ) : (
                      <div className="text-center text-red-500">No</div>
                      )}
                </td>
                <td className="p-2">
                  <div className="text-center">{tree.LastViewedBy}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{tree.LastViewedOn}</div>
                </td>
              </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
    );
  }
  
