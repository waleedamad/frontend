import React from 'react'
import Hero from '../Components/hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import NewCollection from '../Components/newCollections/NewCollection'
import NewsLetter from '../Components/newsLetter/NewsLetter'


export default function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
        
    </div>
  )
}
