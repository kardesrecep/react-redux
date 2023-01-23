import { Dropdown } from 'bootstrap'
import React from 'react'
import { langs } from '../../helpers/locale-helper'

const LangSwitcher = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {langs.map(item=> <Dropdown.Item href="#/action-1">Action</Dropdown.Item>)}
       
        
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default  LangSwitcher