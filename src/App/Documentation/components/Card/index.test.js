import React from "react";
import { shallow } from "enzyme";

import Card, { DefaultBehaviour, CardVariants, CardText } from "./index";

describe("Documentation: Card", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Card />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("DefaultBehaviour", () => {
        it("is defined", () => {
            expect(DefaultBehaviour).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DefaultBehaviour />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CardVariants", () => {
        it("is defined", () => {
            expect(CardVariants).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CardVariants />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CardText", () => {
        it("is defined", () => {
            expect(CardText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CardText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
