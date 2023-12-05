"use client";
import React, { useState, useMemo }  from 'react';
import { Fragment } from 'react'
import {
    UserGroupIcon,
    UsersIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ExclamationTriangleIcon
  } from '@heroicons/react/20/solid'
import Select from 'react-select';
import latest_records from 'data/latest_records.json';

  

  const people = latest_records

  
  
  export default function StatsCard() {

    const formatMillions = (value) => {
      const formatter = new Intl.NumberFormat("en-GB", {
        notation: "compact",
        compactDisplay: "short",
      }).format(value);
    
    
      return formatter;
    };

    const getColor = (number) => {
      return number > 0 ? 'green' : 'red';
    };

    const uniqueCategories = useMemo(() => {
      const categoriesSet = new Set();
      people.forEach((person) => {
        categoriesSet.add(person.category_name);
      });
      return Array.from(categoriesSet);
    }, [people]);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (selectedOptions) => {
      setSelectedCategories(selectedOptions);
    };

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const filterPeopleByCategoryAndSearch = (person) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((category_name) => person.category_name === category_name.value);
  
        const matchesSearch =
        (person.username && person.username.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (person.category_name && person.category_name.toLowerCase().includes(searchQuery.toLowerCase()));
  
      return matchesCategory && matchesSearch;
    };

    return (
      <>
        <div className='flex flex-auto justify-between py-8 sticky top-0 bg-white'>

            <input className=''
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by username..."
          />
          <Select className=""
            isMulti
            options={uniqueCategories.map((category_name) => ({ value: category_name, label: category_name }))}
            value={selectedCategories}
            onChange={handleCategoryChange}
            placeholder="Category..."
            />
        </div>
      
      
      <ul role="list" className="divide-y divide-gray-100">
        {people.filter(filterPeopleByCategoryAndSearch).map((user) => (
          <li key={user.key} className="flex justify-between gap-x-6 py-5">
            <div className="flex flex-auto min-w-0 gap-x-4">
                        <div className="flex-none h-12 w-6 mx-2 rounded-md align-center">
                            <p className="text-lg font-semibold text-center">{user.key}</p>
                        </div>
                        <div class="min-w-0 flex-auto flex-row">
                          <div className='p-0 m-0 flex felx-col flex-wrap items-center'>
                            <p class="md:text-sm sm:text-xs font-semibold leading-6 text-gray-900">@{user.username}</p>
                            <p className='align-center text-xs px-2 m-1 rounded-md bg-slate-100 border-2'>{user.category_name}</p>
                          </div>
                          <div className='flex flex-auto'>
                            <div class="mt-0 pr-2 flex items-center text-sm text-gray-500">
                                  <UserGroupIcon className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <p class="mt-1 truncate text-xs leading-5 text-gray-500">{formatMillions(user.follower_count)}</p>
                              </div>
                              <div class="mt-0 pl-1 flex items-center text-sm text-gray-500">
                                  <UsersIcon className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <p class="mt-1 truncate text-xs leading-5 text-gray-500">{formatMillions(user.following_count)}</p>
                              </div>
                          </div>
                            
                        </div>
                        <div class="sm:flex sm:flex-col sm:items-end align-right">
                          {/* <div className='p-0 m-0 flex flex-row align-right'>
                            {user.diff_followers>0 && <ChevronUpIcon className='align-center mr-0.5 h-5 w-5 text-green-700'/>}
                            {user.diff_followers<0 && <ChevronDownIcon className='align-center mr-0.5 h-5 w-5 text-red-500'/>}
                            {user.diff_followers==0 && <ExclamationTriangleIcon className='align-center mr-0.5 h-5 w-5 text-amber-400'/>}
                            <p class="text-xs text-right leading-6 text-gray-900" style={{ color: getColor(user.diff_followers) }}>{user.diff_followers}</p>
                          </div> */}
                          {user.diff_followers>0 && <p class="text-xs text-right leading-6 text-gray-900" style={{ color: getColor(user.diff_followers) }}>+{user.diff_followers}</p>}
                          {user.diff_followers<=0 && <p class="text-xs text-right leading-6 text-gray-900" style={{ color: getColor(user.diff_followers) }}>{user.diff_followers}</p>}
                          
                          {user.diff_followers_5_days>0 && <p class="mt-1 text-xs text-right leading-5 text-gray-500" style={{ color: getColor(user.diff_followers_5_days) }}>+{user.diff_followers_5_days} last 5 days</p>}
                          {user.diff_followers_5_days<=0 && <p class="mt-1 text-xs text-right leading-5 text-gray-500" style={{ color: getColor(user.diff_followers_5_days) }}>{user.diff_followers_5_days} last 5 days</p>}
                        </div>
              </div>
          </li>
        ))}
      </ul>
      </>
    )
  }
  


