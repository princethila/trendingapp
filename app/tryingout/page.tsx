"use client";
import React from 'react';
import {useState} from 'react';
import TrendingTable from 'components/InfluenceTable';
import latest_records from 'data/latest_records.json';
import StatsCard from 'components/statsCard';


export default function Page(){
    return(
        <>
            {/* <div class="py-8 px-8 my-12 mx-8 text-3xl font-bold text-center bg-white border-0">
                Trending up 🚀
            </div> */}
            <div className='h-16 align-center bg-black'>
            </div>
            <div className=" bg-black">
                <div className="text-3xl font-bold text-center text-white">
                Who is really trending?
                </div>
                <p className="py-4 text-base text-center text-white">Here is who is gaining the most Instagram followers in near real time.</p>
            </div>
            {/* <div className='sticky top-0 h-9 align-center'>
                <p className='align-center text-xs px-2 m-1 rounded-md bg-slate-100 text-black border-2'> Trending last 5 days</p>
            </div> */}
            <div className="py-1 px-2 md:w-3/5 w-11/12 md:mx-2/4 mx-auto border-0">
                <StatsCard data="latest_records"></StatsCard>
            </div>
            
            
        </>
        
        
    )
}