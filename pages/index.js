import React from 'react'
import { Grid } from '../components/Grid'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Infinite Scrolling</title>
      </Head>
      <div className="container mx-auto px-5 md:px-0">
        <h1 className="text-3xl md:text-5xl font-black text-center my-5 md:my-10">Infinite Scrolling</h1>
        <Grid />
      </div>
    </>
  )
}

export default index
