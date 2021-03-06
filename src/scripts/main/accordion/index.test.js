import React from "react";
import ReactDOM from "react-dom";

import accordion from "./index";

jest.useFakeTimers();

describe("scripts: accordion", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    const AccGrpComponent = ({ id, open, accId }) => (
        <div className="accordion-group" id={id} >
            <AccordionComponent id={accId} />
            <AccordionComponent open={open} />
        </div>
    );

    const AccordionComponent = ({ id, open }) => (
        <div className={`accordion${open ? " show accordion-open" : ""}`} id={id} >
            <div className="accordion-header">
                Foo
            </div>
            <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );

    it("is defined", () => {
        expect(accordion).toBeDefined();
    });

    describe("init()", () => {
        it("is defined", () => {
            expect(accordion.init).toBeDefined();
        });

        it("returns a single object when an accordion ID is passed", () => {
            ReactDOM.render(<AccordionComponent id="accordion-test"/>, div);

            const returnVal = accordion.init("accordion-test");

            expect(returnVal).not.toBeNull();
            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns a single object when a accordion-group ID is passed", () => {
            ReactDOM.render(<AccGrpComponent id="accordion-group-test" />, div);

            const returnVal = accordion.init("accordion-group-test");

            expect(returnVal).not.toBeNull();
            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of accordion objects when more than one accordion is initialized", () => {
            ReactDOM.render(
                <>
                    <AccordionComponent />
                    <AccordionComponent />
                </>
                , div);

            const returnVal = accordion.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
            expect(returnVal.every(instance => instance.elem.classList.contains("accordion"))).toBeTruthy();
        });

        it("returns an array of accordion-group objects when more than one accordion-group is initialized", () => {
            ReactDOM.render(
                <>
                    <AccGrpComponent />
                    <AccGrpComponent />
                </>
                , div);

            const returnVal = accordion.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
            expect(returnVal.every(instance => instance.elem.classList.contains("accordion-group"))).toBeTruthy();
        });

        it("returns an array of both accordion-group objects and accordion objects when more than one element is initialized", () => {
            ReactDOM.render(
                <>
                    <AccGrpComponent />
                    <AccordionComponent />
                </>
                , div);

            const returnVal = accordion.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
            expect(returnVal[0].elem.classList.contains("accordion-group")).toBeTruthy();
            expect(returnVal[1].elem.classList.contains("accordion")).toBeTruthy();
        });

        describe("warning messages", () => {
            beforeEach(() => console.warn = jest.fn());

            it("prints a warning message if no accordion-group or accordion exist", () => {
                console.warn = jest.fn();

                accordion.init();

                expect(console.warn).toHaveBeenCalled();
            });

            it("prints a warning message if no  matching the passed ID exist", () => {
                console.warn = jest.fn();

                accordion.init("invalid-id");

                expect(console.warn).toHaveBeenCalled();
            });

            it("prints a warning if an accordion-group without accordions is initialized", () => {
                console.warn = jest.fn();
                ReactDOM.render(<div id="empty-accordion-group" className="accordion-group"/>, div);

                accordion.init("empty-accordion-group");

                expect(console.warn).toHaveBeenCalledWith("accordion-group: No accordion children found");
            });

            it("prints a warning when an accordion without .accordion-header is initialized", () => {
                console.warn = jest.fn();
                ReactDOM.render(<div id="acc-no-header" className="accordion" />, div);

                accordion.init("acc-no-header");

                expect(console.warn).toHaveBeenCalledWith("accordion: No .accordion-header found");
            });

            it("prints a warning if an accordion-group contains accordions without accordion-header", () => {
                ReactDOM.render(
                    <div id="accGrpNoHead" className="accordion-group">
                        <div className="accordion" />
                    </div>
                    , div);

                accordion.init("accGrpNoHead");

                expect(console.warn).toHaveBeenCalledWith("accordion-group: An accordion is missing a header");
            });
        });
    });

    describe("class Accordion", () => {
        it("click opens the accordion", () => {
            ReactDOM.render(<AccordionComponent />, div);

            const accElem = document.querySelector(".accordion");
            const accHeaderElem = accElem.querySelector(".accordion-header");

            accordion.init();

            expect(accElem.classList.contains("accordion-open")).toBeFalsy();

            accHeaderElem.dispatchEvent(new Event("click"));

            expect(accElem.classList.contains("accordion-open")).toBeTruthy();
        });

        it("click closes the accordion", () => {
            ReactDOM.render(<AccordionComponent open />, div);

            const accElem = document.querySelector(".accordion");
            const accHeaderElem = accElem.querySelector(".accordion-header");

            accordion.init();

            expect(accElem.classList.contains("accordion-open")).toBeTruthy();

            accHeaderElem.dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(accElem.classList.contains("accordion-open")).toBeFalsy();
        });

        it("clicking in quick succession to open an accordion will print a warning", () => {
            console.warn = jest.fn();

            ReactDOM.render(<AccordionComponent />, div);

            const accObj = accordion.init()[0];

            accObj.header.dispatchEvent(new Event("click"));
            accObj.header.dispatchEvent(new Event("click"));

            expect(console.warn).toHaveBeenCalledWith("accordion: The given accordion is expanding");
        });

        it("clicking in quick succession to close an accordion will print a warning", () => {
            console.warn = jest.fn();

            ReactDOM.render(<AccordionComponent open />, div);

            const accObj = accordion.init()[0];

            accObj.header.dispatchEvent(new Event("click"));
            accObj.header.dispatchEvent(new Event("click"));

            expect(console.warn).toHaveBeenCalledWith("accordion: The given accordion is collapsing");
        });
    });

    describe("class Accordion-Group", () => {
        it("click opens an accordion", () => {
            ReactDOM.render(<AccGrpComponent />, div);

            const accGrpObj = accordion.init()[0];

            expect(accGrpObj.openAcc).toBeFalsy();

            accGrpObj.accordions[0].header.dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(accGrpObj.openAcc).toBeTruthy();
        });

        it("clicking an open accordion closes it", () => {
            ReactDOM.render(<AccGrpComponent open />, div);

            const accGrpObj = accordion.init()[0];
            const openAcc = accGrpObj.openAcc;

            expect(openAcc.elem.classList.contains("accordion-open")).toBeTruthy();

            openAcc.header.dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(openAcc.elem.classList.contains("accordion-open")).toBeFalsy();
        });

        it("only one accordion can be open at the same time", () => {
            ReactDOM.render(<AccGrpComponent open />, div);

            const accGrpObj = accordion.init()[0];
            const openAcc = accGrpObj.openAcc.elem;
            const closedAcc = document.querySelector(".accordion:not(.accordion-open)");

            expect(openAcc.classList.contains("accordion-open")).toBeTruthy();
            expect(closedAcc.classList.contains("accordion-open")).toBeFalsy();

            closedAcc.querySelector(".accordion-header").dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(openAcc.classList.contains("accordion-open")).toBeFalsy();
            expect(closedAcc.classList.contains("accordion-open")).toBeTruthy();
        });

        it("clicking in quick succession to open an accordion wrapped by accordion-group will print a warning", () => {
            console.warn = jest.fn();

            ReactDOM.render(<AccGrpComponent />, div);

            const accGrp = accordion.init()[0];

            accGrp.accordions[0].header.dispatchEvent(new Event("click"));
            accGrp.accordions[0].header.dispatchEvent(new Event("click"));

            expect(console.warn).toHaveBeenCalledWith("accordion-group: The accordion-group contains an expanding element");
        });
    });

    describe("open", () => {
        it("opens the accordion matching the passed ID and returns the accordion object", () => {
            ReactDOM.render(<AccordionComponent id="test-open" />, div);

            const accObj = accordion.init()[0];

            expect(accObj.elem.classList).not.toContain("accordion-open");

            const returnVal = accordion.open("test-open");

            expect(accObj.elem.classList).toContain("accordion-open");
            expect(returnVal).toEqual(accObj);
        });

        it("opens the accordion matching the given ID in a accordion-group", () => {
            ReactDOM.render(<AccGrpComponent accId="acc-test" />, div);

            const accGrpObj = accordion.init()[0];
            const acc = document.getElementById("acc-test");

            expect(accGrpObj.openAcc).toBeFalsy();
            expect(acc.classList).not.toContain("accordion-open");

            const returnVal = accordion.open("acc-test");

            jest.runAllTimers();

            expect(accGrpObj.openAcc).toBeTruthy();
            expect(acc.classList).toContain("accordion-open");
            expect(returnVal).toEqual(accGrpObj.openAcc);
        });

        it("closes the open accordion in a accordion-group if open is called on another accordion", () => {
            ReactDOM.render(<AccGrpComponent open accId="acc-id" />, div);

            const accGrpObj = accordion.init()[0];
            const closedAcc = document.getElementById("acc-id");

            expect(accGrpObj.openAcc).toBeTruthy();

            accordion.open("acc-id");

            jest.runAllTimers();

            expect(accGrpObj.openAcc.elem).toEqual(closedAcc);
            expect(document.querySelectorAll(".accordion-open").length).toEqual(1);
        });

        describe("warning messages", () => {
            beforeEach(() => console.warn = jest.fn());

            it("returns false and prints a warning if no accordion matching the ID was found", () => {
                accordion.init();

                const returnVal = accordion.open("test");

                expect(console.warn).toHaveBeenCalledWith("accordion.open: accordion with id test was not found");
                expect(returnVal).toBeFalsy();
            });

            it("returns false and prints a warning if the accordion is open", () => {
                ReactDOM.render(<AccordionComponent open id="is-open" />, div);
                accordion.init();

                const returnVal = accordion.open("is-open");

                expect(console.warn).toHaveBeenCalledWith("accordion.open: accordion with id is-open is open");
                expect(returnVal).toBeFalsy();
            });
        });
    });

    describe("close", () => {
        it("closes the open accordion matching the passed ID and returns the accordion object", () => {
            ReactDOM.render(<AccordionComponent id="acc-close" open />, div);

            const accObj = accordion.init()[0];

            expect(accObj.isOpen).toBeTruthy();

            const returnVal = accordion.close("acc-close");

            expect(accObj.isOpen).toBeFalsy();
            expect(returnVal).toBeTruthy();
            expect(returnVal).toEqual(accObj);
        });

        it("closes the open accordion matching the passed ID in an accordion-group and returns the accordion object", () => {
            ReactDOM.render(
                <div className="accordion-group">
                    <AccordionComponent id="test-close" open/>
                    <AccordionComponent />
                </div>
                , div);

            const accGrpObj = accordion.init()[0];

            expect(accGrpObj.openAcc).toBeTruthy();

            const returnVal = accordion.close("test-close");

            expect(accGrpObj.openAcc).toBeFalsy();
            expect(returnVal.elem).toEqual(document.getElementById("test-close"));
        });

        describe("warninge messages", () => {
            beforeEach(() => console.warn = jest.fn());

            it("prints a warning message and returns false if the passed ID doesn't match an existing accordion", () => {
                const returnVal = accordion.close("testing");

                expect(console.warn).toHaveBeenCalledWith("accordion.close: accordion with id testing was not found");
                expect(returnVal).toBeFalsy();
            });

            it("prints a warning message and returns false if the accordion is closed", () => {
                ReactDOM.render(<AccGrpComponent accId="closed-acc" />, div);
                accordion.init();

                const returnVal = accordion.close("closed-acc");

                expect(console.warn).toHaveBeenCalledWith("accordion.close: accordion with id closed-acc is closed");
                expect(returnVal).toBeFalsy();
            });
        });
    });
});
