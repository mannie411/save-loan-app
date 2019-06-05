import React from 'react'
import {Icon} from 'antd'

const goBack = () =>   window.history.back();

const goNext = () =>   window.history.forward();

export default function Nav() {
  return (
    <div>
       <div className="">
          <div className=" ma1 pa1 dib f3 nav">
            <span onClick={goBack}> 
            <Icon type="left-circle"/>
            </span>
          </div>
          <div className="ma1 pa1 dib f3 nav">
            <span onClick={goNext}>
            <Icon type="right-circle" />
            </span>
          </div>
        </div>
    </div>
  )
}
