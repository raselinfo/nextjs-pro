'use client'

import React from 'react';
import Link from "next/link"
const Navbar = () => {
    console.log("Navbar is here")
    return (
        <nav>
            <Link href={"/"}>Home</Link> | 
            <Link href={"/about"}>About</Link> |
            <Link href={"/about/mission"}>Mission</Link> |
            <Link href={"/blog"}>Blog</Link> |
            <Link href={"/post"}>Post</Link> |
            <Link href={"/comments"}>Comments</Link> |
        </nav>
        
    );
};

export default Navbar;