import React, { Component } from "react";
import PropTypes from "prop-types";

class Tabs extends Component {
    constructor (props) {
        super(props);

        this.state = { active: 1 };
    }

    setActive (e, i) {
        e.preventDefault();
        this.setState({ active: i });
    }

    render () {
        const { mode, items } = this.props;

        return (
            <div className="tabs">
                <ul className={`tabs-${mode}`}>
                    {items.map((name, i) => (
                        <li key={`tab-item-${name}-${i}`} className={this.state.active === i ? "active" : null}>{"\n"}
                            <a href="#" onClick={e => this.setActive(e, i)}>{name}</a>{"\n"}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Tabs.propTypes = {
    mode: PropTypes.oneOf(["auto", "stacked", "collapsed"]).isRequired,
    items: PropTypes.array.isRequired
};

export default Tabs;