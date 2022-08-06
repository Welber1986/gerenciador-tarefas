import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Login } from '../containers/Login'
import { Home } from '../containers/Home';
import { useEffect, useState } from 'react'

const Index: NextPage = () => {

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const token = localStorage.getItem('accessToken');
      if(token){
        setAccessToken(token);
      }
    }

  }, [accessToken]);

  return (
     !accessToken ? <Login setAccessToken={setAccessToken} /> : <Home />
  );
}

export default Index
