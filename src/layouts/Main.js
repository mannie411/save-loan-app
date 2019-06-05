import React from 'react'
import { Avatar, Layout, Row } from 'antd';


import logo1 from '../assets/img/logo1.png'
import logo2 from '../assets/img/logo2.png'




const Main = (props) => {

  return (
    <Layout className="bg-washed-green vh-100" >
         
        
        <div className="ma3 pa4" >
            <Row type="flex" justify="center">
              {props.children}
            </Row>
            
        </div>
          <div className="fr  fixed bottom-1 right-0 pa4">

            <div className="dib v-mid ">
              <Avatar src={logo1} size={45}/>
            </div>
            <div className="dib v-mid ">
              <Avatar src={logo2} size={45} />
            </div>
          
            <div className="ml4 dib v-mid">
              <div className="ttu tl">
              Nigeria Shippers Council
              </div>
              <div className="ttu tl">
              Multi Cooperative Society
              </div>        
            </div>
            <div className="v-mid dib ml1">
              <span className="f1 ">©2019</span>
            </div> 
           
            
          </div>
     

    </Layout>
   
  )
}

export default Main
