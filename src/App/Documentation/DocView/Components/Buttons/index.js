import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import ComponentPreview, { Attribute, PxScript } from "../../../utils/ComponentPreview";
import DocToc from "../../../utils/DocToc";

import ButtonComponent from "../../../../components/Button";
import { button } from "../../../../../px-script";

const Examples = () => (
    <div>
        <h2 id="examples">Examples</h2>
        <p>Several button styles etc...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent color="default" label="Default" />{"\n"}
            <ButtonComponent color="brand" label="Brand" />{"\n"}
            <ButtonComponent color="neutral" label="Neutral" />{"\n"}
            <ButtonComponent color="success" label="Success" />{"\n"}
            <ButtonComponent color="warning" label="Warning" />{"\n"}
            <ButtonComponent color="danger" label="Danger" />{"\n"}
            <ButtonComponent color="light" label="Light" />{"\n"}
            <ButtonComponent color="link" label="Link" />{"\n"}
        </ComponentPreview>
    </div>
);

const UsageWithOtherTags = () => (
    <div>
        <h2 id="usage-with-other-tags">Usage with other tags</h2>
        <p>The <code className="token property">.btn</code> class can also be used with other html-tags like <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<input>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent color="brand" label="Anchor" href="#" />{"\n"}
            <ButtonComponent color="brand" label="Button" />{"\n"}
            <ButtonComponent color="brand" input={true} value="Input" type="button" />{"\n"}
            <ButtonComponent color="brand" input={true} value="Submit" type="submit" />{"\n"}
            <ButtonComponent color="brand" input={true} value="Reset" type="reset" />{"\n"}
        </ComponentPreview>
    </div>
);

const OutlineButtons = () => (
    <div>
        <h2 id="outline-buttons">Outline buttons</h2>
        <p>Several button styles etc...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent outline={true} color="default" label="Default" />{"\n"}
            <ButtonComponent outline={true} color="brand" label="Brand" />{"\n"}
            <ButtonComponent outline={true} color="neutral" label="Neutral" />{"\n"}
            <ButtonComponent outline={true} color="success" label="Success" />{"\n"}
            <ButtonComponent outline={true} color="warning" label="Warning" />{"\n"}
            <ButtonComponent outline={true} color="danger" label="Danger" />{"\n"}
            <ButtonComponent outline={true} color="light" label="Light" />{"\n"}
        </ComponentPreview>
    </div>
);

const Sizes = () => (
    <div>
        <h2 id="sizes">Sizes</h2>
        <p>Several button sizes etc...</p>
        <h3>Large buttons</h3>
        <p>...<code className="token property">.btn-lg</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent size="lg" color="default" label="Large button" />{"\n"}
            <ButtonComponent size="lg" color="brand" label="Large button" />{"\n"}
        </ComponentPreview>
        <h3>Small buttons</h3>
        <p>...<code className="token property">.btn-sm</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent size="sm" color="default" label="Small button" />{"\n"}
            <ButtonComponent size="sm" color="brand" label="Small button" />{"\n"}
        </ComponentPreview>
        <h3>Extra small buttons</h3>
        <p>...<code className="token property">.btn-xs</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent size="xs" color="default" label="Extra small button" />{"\n"}
            <ButtonComponent size="xs" color="brand" label="Extra small button" />{"\n"}
        </ComponentPreview>
        <h3>Block level</h3>
        <p>...<code className="token property">.btn-block</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent fullWidth={true} color="default" label="Block level button" />{"\n"}
            <ButtonComponent fullWidth={true} color="brand" label="Block level button" />{"\n"}
        </ComponentPreview>
    </div>
);

const ActiveState = () => (
    <div>
        <h2 id="active-state">Active state</h2>
        <p>Active state with <code className="token property">.active</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent active={true} color="default" label="Default" />{"\n"}
            <ButtonComponent active={true} color="brand" label="Brand" />{"\n"}
            <ButtonComponent active={true} color="neutral" label="Neutral" />{"\n"}
            <ButtonComponent active={true} color="success" label="Success" />{"\n"}
            <ButtonComponent active={true} color="warning" label="Warning" />{"\n"}
            <ButtonComponent active={true} color="danger" label="Danger" />{"\n"}
            <ButtonComponent active={true} color="light" label="Light" />{"\n"}
        </ComponentPreview>
    </div>
);

const DisabledState = () => (
    <div>
        <h2 id="disabled-state">Disabled state</h2>
        <p>Disabled state with <Attribute name="disabled" value="true" />...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent disabled={true} color="default" label="Default" />{"\n"}
            <ButtonComponent disabled={true} color="brand" label="Brand" />{"\n"}
            <ButtonComponent disabled={true} color="neutral" label="Neutral" />{"\n"}
            <ButtonComponent disabled={true} color="success" label="Success" />{"\n"}
            <ButtonComponent disabled={true} color="warning" label="Warning" />{"\n"}
            <ButtonComponent disabled={true} color="danger" label="Danger" />{"\n"}
            <ButtonComponent disabled={true} color="light" label="Light" />{"\n"}
        </ComponentPreview>
    </div>
);

const UsageWithIcons = () => (
    <div>
        <h2 id="usage-with-icons">Usage with icons</h2>
        <p>To use a button with an icon... Read more about icon usage here <Link to="/docs/core/icons">here</Link>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent icon="cloud" color="default" label="Default" />{"\n"}
            <ButtonComponent icon="cloud" color="brand" label="Brand" />{"\n"}
        </ComponentPreview>
    </div>
);

const ButtonLoader = () => (
    <div>
        <h2 id="button-loader">Button loader</h2>
        <p>To use a button with a loader simply add the attribute <Attribute data={true} name="loader" value="true" /> to add the required markup for the loader component. Add class <code className="token property">.loading</code> to display the loader.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent id="test" color="default" label="Default" loader={true} loading={true} />{"\n"}
            <ButtonComponent color="brand" label="Brand" loader={true} loading={true} />{"\n"}
        </ComponentPreview>
        <p>Adding the attribute <Attribute data={true} name="loader" value="true" /> to a button component will produce the following html:</p>
        <ComponentPreview language="html" showCasePanel={false} codeFigure={true}>
            <button className="btn btn-default loading" type="button" data-px-loader="true">{"\n\t"}
                <div className="btn-loader-label">Default</div>{"\n\t"}
                <div className="loader">{"\n\t\t"}
                    <ul className="loader-icon">{"\n\t\t\t"}
                        <li></li>{"\n\t\t\t"}
                        <li></li>{"\n\t\t\t"}
                        <li></li>{"\n\t\t"}
                    </ul>{"\n\t"}
                </div>{"\n"}
            </button>
        </ComponentPreview>
        <p>If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you <b>dont</b> add the attribute <Attribute data={true} name="loader" value="true" />.</p>
    </div>
);

const UsageWithJavascript = () => (
    <div>
        <h2 id="usage-with-javascript">Usage with javascript</h2>
        <p>To interact with the alert-component with javascript...</p>
        <h3>Show loader</h3>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.button.loader.show();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.button.loader.show(id);"}
        </ComponentPreview>
        <h3>Hide loader</h3>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.button.loader.hide();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.button.loader.hide(id);"}
        </ComponentPreview>
        <h3>Methods</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <PxScript component="button" func="init" />
                    </td>
                    <td>
                        Renders the HTML for the loader component for buttons that has the attribute <Attribute data={true} name="loader" value="true" />. This is done automatically when the <code className="token property">px-script.js</code> loads, but might have to be used if you are not rendering your alerts right away. For instance, in react, you might want to call this function within the <PrismCode className="language-javascript">{"componentDidMount()"}</PrismCode> method.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="show" />
                    </td>
                    <td>
                        Gives all rendered buttons the class <code className="token property">.loading</code>, displaying the loader component within the buttons (<b>if present</b>).
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="show" params={["id"]} />
                    </td>
                    <td>
                        Gives the specified button the class <code className="token property">.loading</code>. If no alert with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="hide" />
                    </td>
                    <td>
                        Removes the class <code className="token property">.loading</code> from all rendered buttons, hiding the loader component.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="button" subComponents={["loader"]} func="hide" params={["id"]} />
                    </td>
                    <td>
                        Removes the class <code className="token property">.loading</code> from the button specified by id, hiding the loader component within the button. If no button with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

const ButtonsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Use buttons...</p>
        <Examples />
        <UsageWithOtherTags />
        <OutlineButtons />
        <Sizes />
        <ActiveState />
        <DisabledState />
        <UsageWithIcons />
        <ButtonLoader />
        <UsageWithJavascript />
    </div>
);

class Buttons extends Component {
    componentDidMount () {
        button.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ButtonsText />
                    <DocToc component={ButtonsText} />
                </div>
            </div>
        );
    }
}

export default Buttons;
