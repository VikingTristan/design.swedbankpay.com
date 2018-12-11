import React from "react";

import { ComponentPreview, Property, DocContainer } from "#";

const Sizing = () => (
    <DocContainer>
        <p className="lead">Easily make an element as wide or as tall (relative to its parent) with our width and height utilities.</p>
        <p>
        Width and height utilities are generated with support for values; <Property value="25%" />, <Property value="50%" />, <Property value="75%" />, <Property value="100%" />, and <Property value="auto" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="w-25 p-3 sc-highlight">Width 25%</div>
            <div className="w-50 p-3 sc-highlight">Width 50%</div>
            <div className="w-75 p-3 sc-highlight">Width 75%</div>
            <div className="w-100 p-3 sc-highlight">Width 100%</div>
            <div className="w-auto p-3 sc-highlight">Width auto</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="sc-highlight" style={{ height: "100px" }}>
                <div className="h-25 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 25%</div>
                <div className="h-50 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 50%</div>
                <div className="h-75 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 75%</div>
                <div className="h-100 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 100%</div>
                <div className="h-auto d-inline-block sc-highlight" style={{ width: "120px" }}>Height auto</div>
            </div>
        </ComponentPreview>

        <p>You can also use <Property value="max-width: 100%;" /> and <Property value="max-height: 100%;" /> utilities as needed.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="sc-highlight" style={{ height: "100px" }}>
                <div className="mh-100 sc-highlight" style={{ width: "100px", height: "200px" }}>Max-height 100%</div> {/* eslint-disable-line object-property-newline */}
            </div>
        </ComponentPreview>
    </DocContainer>
);

export default Sizing;
