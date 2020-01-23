import React from "react";
import { Link, navigate } from 'gatsby';
import Header from '../component/Header';
import Layout from '../component/Layout';
export default () => (<Layout>
     <Header title ="Test Page" />

    <button onClick={() => navigate('/')}>go to Home Page</button>
</Layout>
);