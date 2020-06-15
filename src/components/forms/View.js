import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import Edit from './Edit.js'

class View extends Component {
  state = {
    isOpen: false,
    id: '',
  }

  onClose = () => {
    this.setState({ isOpen: false })
  }

  onOpen = () => {
    this.setState({ isOpen: true, id: this.props.id })
  }

  render() {
    const { isOpen, id } = this.state
    const { data, deleteRow, updateRow, getUserById } = this.props
    return (
      <div>
        <Edit
          onClose={this.onClose}
          isOpen={isOpen}
          id={id}
          updateRow={updateRow}
          getUserById={getUserById}
        />
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <Button
                    style={{marginRight: '0.5em'}} 
                    variant="primary"
                    onClick={() => {
                      this.setState({ isOpen: true, id: row.name })
                    }}
                    >Edit
                  </Button>
                  <Button 
                    variant="primary"
                      onClick={() => {
                        deleteRow(row.name)
                      }}
                    >Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default View
