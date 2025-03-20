"use client"
import React from 'react';
import Link from 'next/link';

const Home = () => {

    return (
      <Link legacyBehavior href='/blogs'>
        <h2 className="text-xl cursor-pointer underline font-semibold">Blog</h2>
      </Link>
    );
};


export default Home;