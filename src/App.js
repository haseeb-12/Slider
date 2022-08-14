import React from 'react'
import ImageSlider from './Carousal/ImageSlider'
import { SliderData } from './Carousal/ImageData'
import './App.css'


function App() {
  return (

    <ImageSlider slides={SliderData} />
  )
}

export default App