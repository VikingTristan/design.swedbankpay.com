import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import InputGroup from "@components/InputGroup";
import { inputShowCase, textareaShowCase } from "./constants";

const Overview = () => (
    <section id="input-field-overview">
        <h2 id="input-field">Input field</h2>
        <p>Use a Input field when the expected user input is a single line of text. A Input field must always have a Input label that clearly describes the type of input a field requires and it may also have a Placeholder example text, refer to <a href="#content-guidelines">content guidelines</a> for more information.</p>

        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={inputShowCase} codeFigure />

        <h3>When to consider something else</h3>
        <ul className="pl-3 list list-bullet">
            <li>Use a <b>Textarea</b> when the expected user input is more than one sentence</li>
        </ul>
    </section>
);

const Textarea = () => (
    <section id="textarea-overview">
        <h2 id="textarea">Textarea</h2>
        <p>Use a Textarea when the expected user input is more than one sentence. Textareas must always have a Input label that clearly describes the type of input a field requires and it may also have a Placeholder example text, refer to <a href="#content-guidelines">content guidelines</a> for more information. </p>

        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={textareaShowCase} codeFigure />

        <h3>When to consider something else</h3>
        <ul className="pl-3 list list-bullet">
            <li>Use a <b>Input field</b> when the expected user input is a short text</li>
        </ul>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>

        <div className="slab slab-plain h-100 mb-2">
            <div className="d-flex flex-column align-items-center">
                <div className="py-3">
                    <InputGroup type="text" label="Input label" defaultValue="Input text" validationState="error" errorMessage="Error message" helpBlock tooltip/>
                    <InputGroup type="textarea" label="Input label" optional placeholder="Placeholder text"/>
                </div>
            </div>
        </div>

        <h3>Input label</h3>
        <p>A input field must have a label that clearly describes the type of input a field requires. </p>
        <ul className="list list-bullet">
            <li>Use a label that is meaningful, clear, and concise.</li>
            <li>When a text field is not required to be filled by the user, label it as “optional”.</li>
            <li>If there is a need for a more detailed description, a help icon which triggers a Popover on click can be added after the label. </li>
        </ul>

        <h3>Placeholder text</h3>
        <p>A placeholder text may be used inside of the input field to serve as an example of what the user can enter, consider to start with “e.g.” or similar abbreviation in corresponding language. </p>

        <div className="row placeholder-guideline">
            <div className="col-6">
                <div className="slab slab-plain slab-border-success pb-4">
                    {/* <span className="h3 mb-3">Do</span> */}
                    <h3 className="mb-3 mt-0">Do</h3>
                    <InputGroup type="text" label="Personal authentication number" placeholder="YYYYMMDDNNNN"/>
                </div>
                <p>Use the placeholder text as an example of what to enter.</p>
            </div>
            <div className="col-6">
                <div className="slab slab-plain slab-border-error pb-4">
                    <h3 className="mb-3 mt-0">Don&#x27;t</h3>
                    <InputGroup type="text" label="Personal authentication number" placeholder="Enter with 10 digits"/>
                </div>
                <p>Don’t use the placeholder text as an instruction of what to enter.</p>
            </div>
        </div>

        <h3>Error message</h3>
        <p>When input isn’t accepted, input fields should display a short and concise error message, it should be no more than a single sentence</p>

        <div className="row placeholder-guideline">
            <div className="col-6">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h3 className="mb-3 mt-0">Do</h3>
                    <InputGroup type="text" validationState="error" helpBlock errorMessage='The email address must include "@"' label="Email address" defaultValue="Name.com"/>
                </div>
                <p>Do explain what went wrong and how to fix it.</p>
            </div>
            <div className="col-6">
                <div className="slab slab-plain slab-border-error pb-4">
                    <h3 className="mb-3 mt-0">Don&#x27;t</h3>
                    <InputGroup type="text" validationState="error" helpBlock errorMessage="Invalid input" label="Email address" defaultValue="Name.com"/>
                </div>
                <p>Don&#x27;t use technical jargong </p>
            </div>
        </div>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation mb-3">Developer documentation</h2>
        <h3 className="mt-3">Autocomplete</h3>
        <p>Add <CodeTags type="primary" code="autocomplete"/> attributes to input fields when it is possible to make a form easier for users to fill. </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <InputGroup type="text" label="Name" autocomplete="on" />
        </ComponentPreview>

        <h3>Validation</h3>
        <p>To use our validation, start by adding the attribute <CodeTags type="primary" code="novalidate"/> to your desired input field. If you wish to validate an entire form, add the validate attribute to the <CodeTags type="primary" code="form"/> tag.</p>

        <h3>Error message</h3>
        <p>Insert the error message in the attribute <CodeTags type="primary" code="data-error"/> in the <CodeTags type="primary" code=".help-block"/> element. </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <InputGroup type="text" label="Input label" defaultValue="Input text" validationState="error" errorMessage="Descriptive helpful error message." helpBlock />
        </ComponentPreview>

        <h3>Disabled state</h3>
        <p>Disable a input field by adding <CodeTags type="primary" code="disabled"/> attribute to the desired input field. You can also disable the <CodeTags type="primary" code="form-group"/> or <CodeTags type="primary" code="fieldset"/> in which the input field is located, refer to <Link to="/components/forms">forms</Link> for more info.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <InputGroup type="text" label="Input label" placeholder="Placeholder text" disabled />
        </ComponentPreview>

        <h3>Javascript methods</h3>
        <p><CodeTags type="primary" code="dg.validation.init()"/> can be used on a form tag to initialize all fields contained in the form, or you can pass a single field to initialize just that one.</p>
    </section>
);

const InputField = () => (
    <DocContainer>
        <section id="input-field-doc">
            <p className="lead">Input fields typically reside in forms and enable the user to interact with and input words, characters or numbers. Depending on the expected length of the user input use either a Input field for shorter input or a Textarea for longer input.</p>
            <Overview />
            <Textarea />
            <ContentGuidelines />
            <DeveloperDocumentation />
        </section>
    </DocContainer>
);

export default InputField;

export { Overview, Textarea, ContentGuidelines, DeveloperDocumentation };
