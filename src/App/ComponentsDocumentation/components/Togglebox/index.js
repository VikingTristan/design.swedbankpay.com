import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Togglebox from "@components/FormComponents/Togglebox";
import CodeTags from "~/src/App/components/CodeTags";

import { toggleboxShowCase, howToUse } from "./constants";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Toggleboxes are used to enable or disable a mode, feature, or function. Most common toggles are used to switch between on/off in preferences or settings, in forms or for other on/off functionality. Toggles are similar to radio groups in function but optimized for toggling between two states. A togglebox can also be similar to a checkobox with the difference being that a toggle-switch will trigger a state change directly when you toggle it, while a checkbox is generally used for state marking together with a submit action.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={toggleboxShowCase}/>

        <span className="h3 d-inline-block mt-3">When to consider something else</span>
        <ul className="list list-bullet">
            <li>
                Use a <Link to="/components/radio-button">Radio Button</Link> group if users need to select one item from a list of options.
            </li>
            <li>
                Use a <Link to="/components/checkbox">Checkbox</Link> group if users can select multiple items from a list of options.
            </li>
        </ul>

        <span className="h3 d-inline-block mb-3">How to use Toggleboxes</span>
        <div className="row">
            {howToUse.map(({ type, component, text, heading }, i) => (
                <div className="col-6 px-3" key={i}>
                    <div className={`slab slab-plain slab-border-${type}`}>
                        <h3>{type === "error" ? "Don’t" : "Do"}</h3>
                        <div className="slab-content p-3">
                            {heading && <span className="h5">{heading}</span>}
                            {component}
                        </div>
                    </div>
                    {text}
                </div>
            ))}
        </div>
    </>
);

const ContentGuidelines = () => (
    <>
        <h2 id="content-guidelines">Content guidelines</h2>
        <ul className="list list-bullet">
            <li>The label should be short and concise, preferably three words or less.</li>
            <li>Label should be written as to describe the on state of the toggle.</li>
            <li>Avoid using negations such as “Notifications Off”, which would mean the user would have to turn the switch on to turn the setting off.</li>
        </ul>
    </>
);

const DeveloperDocumentation = () => (
    <>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h3 d-inline-block mt-3">Checked</span>
        <p>Use the <CodeTags type="primary" code="checked" /> attribute to enable a toggle.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="checked-example-container m-auto">
                <Togglebox label="Label" id="toggle-checked-example" checked labelTop/>
            </div>
        </ComponentPreview>

        <span className="h3 d-inline-block mt-3">Disabled</span>
        <p>Disable a toggle by adding <CodeTags type="primary" code="disabled" /> attribute to the desired toggle.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="w-25 p-3 m-auto">
                <Togglebox label="Label" id="toggle-disabled-example" checked disabled />
                <Togglebox label="Label" id="toggle-disabled-example-2" disabled />
            </div>
        </ComponentPreview>

        <span className="h3 d-inline-block mt-3">Form groups</span>
        <p><CodeTags type="secondary" code=".form-group" /> s and/or <CodeTags type="primary" code="form" /> allow you to gather user input components like input fields, radio buttons, checkboxes and toggleboxes in various ways. For more information on how this works refer to the <Link to="/components/forms">Forms</Link> section.</p>
    </>
);

const Toggle = () => (
    <DocContainer>
        <div id="togglebox-doc">
            <p className="lead">The togglebox is a representation of a physical switch that allows users to toggle between two states, commonly to turn something on/off.</p>
            <Overview />
            <ContentGuidelines />
            <DeveloperDocumentation />
        </div>
    </DocContainer>
);

export default Toggle;

/* for testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
