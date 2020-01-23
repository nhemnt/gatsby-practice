import React from "react"
import { Link } from 'gatsby';
import Header from '../component/Header';
import Layout from '../component/Layout'
export default () => <Layout>
    <Header title ="Home Page" />
    Hello world!
    <Link to="/test/">GO to test</Link>
    
    </Layout>
