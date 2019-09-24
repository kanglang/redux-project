
import React, { PureComponent } from 'react'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

// 引入action
import { setPageTitleAction, setInfoListAction } from '../../redux/action/todo-action';

import './css/App.scss';
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  changeValue = () => {
    // 触发setPageTitle action,向store中保存数据
    this.props.setPageTitle('看我72变');
    // 触发setInfoList action，
    this.props.setInfoList({
      id: "4",
      name: "我是老五",
      age: "22岁"
    })
  }
  render() {
    // 从props中解构store，从store中拿数据
    let { pageTitle, infoList = [] } = this.props;//此处函数来自reduces.js
    return (
      <div>
        <button onClick={this.changeValue}>改变值</button>
        <h1>{pageTitle}</h1>
        <ul>
          {
            infoList && infoList.user.map((item, index) => {
              return <li key={index}>
                <span style={{ color: "blue" }}>{item.name}</span> 今年<span style={{ color: "blue" }}>{item.age}</span>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 执行setPageTitle会返回一个函数
    // 这正是redux-thunk的所用之处:异步action
    setPageTitle(data) { dispatch(setPageTitleAction(data)) },
    setInfoList(data) { dispatch(setInfoListAction(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)