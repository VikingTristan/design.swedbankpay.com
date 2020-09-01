import React from "react";
import { shallow } from "enzyme";

import Buttons, { Overview, DestructiveButton, DeveloperDocumentation } from "./index";

describe("Documentation: Buttons", () => {
    it("is defined", () => {
        expect(Buttons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Buttons />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Destructive button", () => {
        it("is defined", () => {
            expect(DestructiveButton).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DestructiveButton />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Developer documentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
