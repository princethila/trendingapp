// components/JobTable.js
"use client";
import React from 'react';
import styles from './InfluencerTable.module.css';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { TbDelta } from "react-icons/tb";


async function TrendingTable({ data }) {

  const formatMillions = (value) => {
    const formatter = new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(value);
  
  
    return formatter;
  };
  

  return (
    <table className="m-2 text-left">
      <thead className="sticky text-xs overflow-y-auto top-0 bg-white border-2">
        <tr className="border-solid border-black">
          <th>#</th>
          <th>Username 👨‍💻</th>
          {/* <th>Name 👨‍💻</th> */}
          <th>Followers 🚀</th>
          <th>1D 🆙</th>
          <th>5D 💫</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody className="text-xs border-2">
        {data.map((user) => (
          <tr key={user.key}>
            <td>{user.key}</td>
            <td>@{user.username}</td>
            {/* <td>
                {user.full_name}
            </td> */}
            <td>
            {formatMillions(user.follower_count)}
            </td>
            <td> 
                <div className={user.diff_followers > 0 ? styles.highViewsContainer : styles.lowViewsContainer}>
                {user.diff_followers >0 ? <FiArrowUp className={styles.arrow} /> : <FiArrowDown className={styles.arrow} />}{user.diff_followers}
                </div>
            </td>
            <td>
            <div className={user.diff_followers_5_days > 0 ? styles.highViewsContainer : styles.lowViewsContainer}>
                {user.diff_followers_5_days >0 ? <FiArrowUp className={styles.arrow} /> : <FiArrowDown className={styles.arrow} />}{user.diff_followers_5_days}
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



export default TrendingTable;
