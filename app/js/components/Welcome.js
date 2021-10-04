import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h3> {this.props.fname} {this.props.lname} Number: {this.props.number}</h3>
                <h4>{this.props.elementz}</h4>
            </div>
        )
    }
}

const lengthChecker = ((props, propName, component) => {
    console.log('props: ' + props);
    console.log('propName: ' + propName);
    console.log('component: ' + component);

    if (props[propName]) {
        let val = props[propName]
        if (typeof val === 'string') {
            return val.length >= 5 ? null : new Error(`${propName} in ${component} is too short`); //new Error(propName + component + 'is too short')
        }
    }
    return null;
})

Welcome.propTypes = {
    fname: lengthChecker,
    lname: React.PropTypes.string,
    number: React.PropTypes.string,
    elementz: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.element,
    ])
}

Welcome.defaultProps = {
    number: "i dont have number"
}

// React.PropTypes.number, //element
// React.PropTypes.string, //bool //element //object
// string.isRequired, //element //number