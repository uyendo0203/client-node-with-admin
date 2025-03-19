"use client"
import React, { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {

    return (
      <Link legacyBehavior href={`/blog`}>
        <h2 className="text-xl cursor-pointer underline font-semibold">Blog</h2>
    </Link>
    );
};


export default Home;