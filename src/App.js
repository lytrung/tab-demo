import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  handleTabsSelect = (tab,e)=>{
    console.log(tab)
    console.log(e.target)
  }
  render(){
    return (
      <Tabs defaultActiveKey="business" transition={false} onSelect={this.handleTabsSelect}>
        <Tab eventKey="business" title="Business">
          <div class="articles">

            <div class="card">
              <img class="card-img-top" src="https://picsum.photos/id/237/300/200" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card">
              <img class="card-img-top" src="https://picsum.photos/id/27/300/200" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
          </div>
        </Tab>
        <Tab eventKey="world" title="World">
          <div class="articles">

            <div class="card">
              <img class="card-img-top" src="https://picsum.photos/id/232/300/200" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="https://picsum.photos/id/137/300/200" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
          </div>
        </Tab>
        <Tab eventKey="politics" title="Politics">
          <div class="articles">

            <div class="card">
              <img class="card-img-top" src="https://picsum.photos/id/237/300/200" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>
        </Tab>
      </Tabs>
    )
  }
}

export default App
