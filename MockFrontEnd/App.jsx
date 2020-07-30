import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/app.scss'
import MainContainer from './containers/MainContainer.jsx'
import TopContainer from './containers/TopContainer.jsx'
import LeftContainer from './containers/LeftContainer.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }

  handleGetBooks(data) {
    this.setState({data: data})
  }

    render(){
        return(
            <div>
              <TopContainer />
              <div className='MainBody'>
                <LeftContainer handleGetBooks={this.handleGetBooks.bind(this)}/>
                <MainContainer data={this.state.data}/>
              </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App