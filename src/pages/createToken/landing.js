import React from 'react'
import { useLocation } from 'react-router-dom'
import { Layout } from '../../components'

export default function Landing() {
    const {state} = useLocation()
    console.log("Location",state)

  return (
    <Layout>
    <div style={{height:"300px",width:"50%", border:"1px solid black"}}>
        <h3>Name: <span>{state.name}</span></h3>
        <br/>
        <h3>Symbol: <span>{state.symbol}</span></h3>
        <br/>
        <h3>Decimals: <span>{state.decimals}</span></h3>
        <br/>
        <h3>Total Supply: <span>{state.totalSupply}</span></h3>
        <br/>
        <h3>Token Address: <span>{state.address}</span></h3>
        <br/>
        <h3>Transaction Hash:<span>{state.hash}</span></h3>
        <br/>

    </div>
    </Layout>
 
  )
}
