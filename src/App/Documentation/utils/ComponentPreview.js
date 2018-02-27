import React from "react";
import PropTypes from "prop-types";
import ReactDOMServer from "react-dom/server";
import PrismCode from "react-prism";
import jsbeautifier from "js-beautify";

const ComponentPreview = ({ children, language, removeOuterTag, showCasePanel, codeFigure }) => {
    const CodeFigure = () => {
        let code = "";

        if (language === "html" && typeof children.map === "function") {
            children.map(child => {
                if (removeOuterTag) {
                    // TODO: This is stupid, find a better way to do this [EH]
                    // should be possible with React 16.2
                    // https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
                    const div = document.createElement("div");
                    div.innerHTML = ReactDOMServer.renderToStaticMarkup(child);
                    code += div.firstElementChild.innerHTML;
                } else {
                    code += ReactDOMServer.renderToStaticMarkup(child);
                }
            });

        } else {
            code = ReactDOMServer.renderToStaticMarkup(children);
        }

        switch (language) {
            case "html":
                code = jsbeautifier.html_beautify(code);
                break;
            case "css":
                code = jsbeautifier.css_beautify(code);
                break;
            case "javascript":
                code = jsbeautifier.js_beautify(code);
                break;
            default:
                return "update switchcase!";
        }

        return (
            <figure>
                <pre>
                    <PrismCode className={`language-${language}`}>
                        {code}
                    </PrismCode>
                </pre>
            </figure>
        );
    };


    const ShowCasePanel = () => (
        <div className="showcase-panel">
            {children}
        </div>
    );

    return (
        <div>
            {showCasePanel ? <ShowCasePanel /> : null}
            {codeFigure ? <CodeFigure /> : null}
        </div>
    );
};

ComponentPreview.propTypes = {
    language: PropTypes.string.isRequired,
    removeOuterTag: PropTypes.bool,
    showCasePanel: PropTypes.bool,
    codeFigure: PropTypes.bool
};

const Attribute = ({ data, name, value }) => (
    <code>
        {data ? <span className="token attr-name">data-</span> : null}
        <span className="token attr-name">{name}</span>
        <span className="token attr-value">
            <span className="token punctuation">{"=\""}</span>
            {value}
            <span className="token punctuation">{"\""}</span>
        </span>
    </code>
);

Attribute.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.bool
};

const PxScript = ({ component, func, params }) => {
    let renderedParams;

    if (params) {
        renderedParams = params.map((param, i) => (
            <span key={i}>{param}
                {(i < params.length - 1) ? <span className="token punctuation">, </span> : null}
            </span>
        ));
    }

    return (
        <code>
            <span>px</span>
            <span className="token punctuation">.</span>
            <span>{component}</span>
            <span className="token punctuation">.</span>
            <span className="token function">{func}</span>
            <span className="token punctuation">(</span>
            {renderedParams}
            <span className="token punctuation">);</span>
        </code>
    );
};

PxScript.propTypes = {
    component: PropTypes.string.isRequired,
    func: PropTypes.string.isRequired,
    params: PropTypes.array
};

export default ComponentPreview;

export { Attribute, PxScript };
