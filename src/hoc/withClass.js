import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// }

const withClass = (WrappedCompnent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedCompnent {...this.props} />
        </div>
      )
    }
  }
}

export default withClass;