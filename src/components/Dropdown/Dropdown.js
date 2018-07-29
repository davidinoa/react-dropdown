import React, { Component } from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import {
  faAngleDown as down,
  faAngleUp as up,
  faCheck as check,
} from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css'

export default class Dropdown extends Component {
  static getDerivedStateFromProps(nextProps) {
    const count = nextProps.list.filter(listItem => listItem.selected).length

    if (count === 0) {
      return { headerTitle: nextProps.title }
    } else if (count === 1) {
      return { headerTitle: `${count} ${nextProps.titleHelper}` }
    } else if (count > 1) {
      return { headerTitle: `${count} ${nextProps.titleHelper}s` }
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
    }
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }

  render() {
    const { list, toggleItem } = this.props
    const { listOpen, headerTitle } = this.state
    const listItems = list.map(({ title, id, key, selected }) => (
      <li
        className="ui-dropdown__list-item"
        key={title}
        onClick={() => toggleItem(id, key)}>
        {title} {selected && <Fa icon={check} />}
      </li>
    ))
    return (
      <div className="ui-dropdown__wrapper">
        <div className="ui-dropdown__header" onClick={this.toggleList}>
          <div className="ui-dropdown__header-title">{headerTitle}</div>
          {listOpen ? <Fa icon={up} /> : <Fa icon={down} />}
        </div>
        {listOpen && <ul className="ui-dropdown__list">{listItems}</ul>}
      </div>
    )
  }
}
