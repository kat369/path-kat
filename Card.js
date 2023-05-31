import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Card({data}) {
  return (
    <>
    <Link className='buttt' to={`/volume-${data.volume}/issue-${data.issue}`}>volume-{data.volume}/issue-{data.issue}</Link>
    </>
  )
}

export default Card