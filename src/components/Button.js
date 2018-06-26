import React, { PureComponent } from 'react'

class Button extends PureComponent {
  render () {
    return <div><button>{this.props.children}</button></div>
  }
}

export default { Button }
