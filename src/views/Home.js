import React, { Component } from 'react'
import { Col, Row, Card, Icon } from 'antd'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="ma3 pa4 bg-white shadow-2">
          <Row gutter={16} type="flex" justify="center">
              <Col span={6}>
                <Row>
                  <Col span={18} >
                    <Link to="/content/savings">
                      <Card className="bg-light-blue item ma2 pa2 tc" bordered={false} >
                        <i className="f1 white tc"><Icon type="wallet" /></i>
                        <span className="tc absolute white bottom-1 left-1" >Savings</span>
                        <i className="fr absolute bottom-1 right-1" ><Icon type="arrow-right" /></i>
                        
                      </Card>
                    </Link>
                  </Col>
                  <Col span={18}>
                  <Link to="/content/history">
                      <Card className="bg-mid-gray item ma2 pa2 tc" bordered={false} >
                        <i className="f1 white tc"><Icon type="file-sync" /></i>
                        <span className="tc absolute white bottom-1 left-1" >History</span>
                        <i className="fr white absolute bottom-1 right-1" ><Icon type="arrow-right" /></i>
                        
                      </Card>
                    </Link>
                  </Col>

                </Row>
               
              </Col>
              <Col span={6} >
               <Row>
                  <Col span={18}>
                    <Link to="/content/loans">
                      <Card className="bg-light-green item ma2 pa2 tc" bordered={false} >
                        <i className="f1 white tc"><Icon type="credit-card" /></i>
                        <span className="absolute white bottom-1 left-1" >Loans</span>
                        <i className="fr absolute bottom-1 right-1" ><Icon type="arrow-right" /></i>
                        
                      </Card>
                    </Link>
                    
                  </Col>
                  <Col span={18}>
                    <Link to="/content/settings">
                      <Card className="bg-near-white item ma2 pa2 tc" bordered={false}>
                          <i className="f1 tc"><Icon type="setting" /></i>
                          <span className="tc absolute bottom-1 left-1">Settings</span>
                          <i className="fr absolute bottom-1 right-1" ><Icon type="arrow-right" /></i>
                          
                        </Card>
                    </Link>
                    
                  </Col>

                </Row>
              </Col>
              
          </Row>


        </div>
       
      </div>
    )
  }
}

export default Home
