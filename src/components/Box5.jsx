import React, {useState} from 'react'
import {motion, useAnimation} from 'framer-motion'

const Box5 = () => {

    const control = useAnimation()

  return (
  <div className="box-container">
      <button
      onClick={()=>{
          control.start({
            x : 1000,
            transition : {
                duration : 2
            }
          })
      }}    
      >Move right</button>
      <button
      onClick={()=>{
        control.start({
          x : -100,
          transition : {
              duration : 2
          }
        })
        }}>
        Move left</button>
      <button
      onClick={()=>{
        control.start({
          borderRadius : "50%",
          transition : {
              duration : 1
          }
        })
        }}
    >circle</button>
      <button
      onClick={()=>{
        control.start({
          borderRadius : "0%",
          transition : {
              duration : 1
          }
        })
        }}
      >square</button>
      <button>stop</button>
      <motion.div 
      className="test-div"
        animate={control}
      >

      </motion.div>
  </div>
  )
}

export default Box5;