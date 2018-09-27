import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ModalHeading = ({ title, subTitle }) => (
    <header>
        {title ? <h2 className="modal-title">{title}</h2> : null}
        {subTitle ? <p className="modal-sub-title">{subTitle}</p> : null}
    </header>
);

const OpenModalButton = ({ id }) => (
    <button data-modal-open={id} className="btn btn-primary">Open modal</button>
);

const Modal = ({ title, subTitle, id, footerText, footerAlignment, type, size, visible, isStatic, button, children }) => {
    const modalClasses = classnames(
        "modal",
        type ? `modal-${type}` : null,
        size ? `modal-${size}` : null,
        isStatic ? "static" : null,
        visible ? "d-block" : null
    );

    return (
        <>
            <section className={modalClasses} id={id} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-container">{"\n"}
                        <a href="#" className="modal-close" onClick={e => e.preventDefault()}>{"\n\t\t\t\t"}
                            <i className="material-icons">close</i>{"\n\t\t\t"}
                        </a>
                        {title || subTitle ? <ModalHeading title={title} subTitle={subTitle} /> : null}
                        <div className="modal-body">
                            {children}
                        </div>
                        {footerText ? (
                            <footer className={`${footerAlignment ? `modal-footer-${footerAlignment}` : ""}`}>{"\n"}
                                <button type="button" className="btn btn-secondary" data-modal-close={id}>Close</button>{"\n"}
                                <button type="submit" className="btn btn-primary">Submit</button>
                                {/* <p className="text-muted">{footerText}</p> */}
                            </footer>
                        ) : null}
                    </div>
                </div>
            </section>{button ? "\n\n" : null}
            {button ? <OpenModalButton id={id} /> : null}
        </>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    id: PropTypes.string,
    footerText: PropTypes.string,
    footerAlignment: PropTypes.oneOf(["centered", "right"]),
    type: PropTypes.oneOf(["brand", "default"]).isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    visible: PropTypes.bool,
    isStatic: PropTypes.bool,
    button: PropTypes.bool
};

export default Modal;