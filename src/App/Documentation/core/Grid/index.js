import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, Property } from "#";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>The grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <p>The above example creates three equal-width columns on small, medium, large, extra large, and extra extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <Property value=".container" />.</p>
        <p>Breaking it down, here’s how it works:</p>
        <ul>
            <li>
                Containers provide a means to center and horizontally pad your site’s contents. Use <Property value=".container" /> for a responsive pixel width or <Property value=".container-fluid" /> for <Property value="width: 100%" /> across all viewport and device sizes.
            </li>
            <li>
                Rows are wrappers for columns. Each column has horizontal <Property value="padding" /> (called a gutter) for controlling the space between them. This <Property value="padding" /> is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
            </li>
            <li>
                In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
            </li>
            <li>
                Thanks to flexbox, grid columns without a specified <Property value="width" /> will automatically layout as equal width columns. For example, four instances of <Property value=".col-sm" /> will each automatically be 25% wide from the small breakpoint and up. See the <a href="#auto-layout-columns">auto-layout</a> columns section for more examples.
            </li>
            <li>
                Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use <Property value=".col-4" />.
            </li>
            <li>
                Column <Property value="width" />s are set in percentages, so they’re always fluid and sized relative to their parent element.
            </li>
            <li>
                Columns have horizontal <Property value="padding" /> to create the gutters between individual columns, however, you can remove the <Property value="margin" /> from rows and <Property value="padding" /> from columns with <Property value=".no-gutters" /> on the <Property value=".row" />.
            </li>
            <li>
                To make the grid responsive, there are six grid breakpoints, one for each <Link to="/docs/core/breakpoints">responsive breakpoint</Link>: all breakpoints (extra small), small, medium, large, extra large, and extra extra large.
            </li>
            <li>
                Grid breakpoints are based on minimum width media queries, meaning they <b>apply to that one breakpoint and all those above it</b> (e.g., <Property value=".col-sm-4" /> applies to small, medium, large, extra large and extra extra large devices, but not the first <Property value="xs" /> breakpoint).
            </li>
        </ul>
    </>
);

const GridOptions = () => (
    <>
        <h2 id="grid-options">Grid options</h2>
        <p>Most sizes in the PayEx DesignGuide is defined using <Property value="rem" />s, <Property value="px" />s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.</p>
        <p>Use this table to see how aspects of the grid system work across multiple devices.</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">
                        Extra small
                        <p><small>{"<"}576px</small></p>
                    </th>
                    <th scope="col">
                        Small
                        <p><small>{"≥"}576px</small></p>
                    </th>
                    <th scope="col">
                        Medium
                        <p><small>{"≥"}768px</small></p>
                    </th>
                    <th scope="col">
                        Large
                        <p><small>{"≥"}992px</small></p>
                    </th>
                    <th scope="col">
                        Extra large
                        <p><small>{"≥"}1200px</small></p>
                    </th>
                    <th scope="col">
                        Extra extra large
                        <p><small>{"≥"}1600px</small></p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Max container width</th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                    <td>1460px</td>
                </tr>
                <tr>
                    <th scope="row">Class prefix</th>
                    <td><Property value=".col-" /></td>
                    <td><Property value=".col-sm-" /></td>
                    <td><Property value=".col-md-" /></td>
                    <td><Property value=".col-lg-" /></td>
                    <td><Property value=".col-xl-" /></td>
                    <td><Property value=".col-xxl-" /></td>
                </tr>
                <tr>
                    <th scope="row"># of columns</th>
                    <td colSpan="6">12</td>
                </tr>
                <tr>
                    <th scope="row">Gutter width</th>
                    <td colSpan="6">30px (15px on each side of a column)</td>
                </tr>
                <tr>
                    <th scope="row">Nestable</th>
                    <td colSpan="6">Yes</td>
                </tr>
                <tr>
                    <th scope="row">Column ordering</th>
                    <td colSpan="6">Yes</td>
                </tr>
            </tbody>
        </table>
    </>
);

const AutoLayoutColumns = () => (
    <>
        <h2 id="auto-layout-columns">Auto-layout columns</h2>
        <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <Property value=".col-sm-6" />.</p>
        <h3>Equal-width</h3>
        <p>For example, here are two grid layouts that apply to every device and viewport, from <Property value="xs" /> to <Property value="xxl" />. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 2
                        </div>
                        <div className="col">
                            2 of 2
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Setting one column width</h3>
        <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col-6">
                            2 of 3 (wider)
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col-5">
                            2 of 3 (wider)
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Variable width content</h3>
        <p>Use <Property value="col-{breakpoint}-auto" /> classes to size columns based on the natural width of their content.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-2">
                            1 of 3
                        </div>
                        <div className="col-md-auto">
                            Variable width content
                        </div>
                        <div className="col col-lg-2">
                            3 of 3
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col-md-auto">
                            Variable width content
                        </div>
                        <div className="col col-lg-2">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Equal-width multi-row</h3>
        <p>Create equal-width columns that span multiple rows by inserting a <Property value=".w-100" /> where you want the columns to break to a new line. Make the breaks responsive by mixing the <Property value=".w-100" /> with some <Link to="/docs/utilities/display">responsive display utilities</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="w-100"></div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const ResponsiveClasses = () => (
    <>
        <h2 id="responsive-classes">Responsive classes</h2>
        <p>Our grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, extra large, or extra extra large devices however you see fit.</p>

        <h3>All breakpoints</h3>
        <p>For grids that are the same from the smallest of devices to the largest, use the <Property value=".col" /> and <Property value=".col-*" /> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <Property value=".col" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                    </div>
                    <div className="row">
                        <div className="col-8">col-8</div>
                        <div className="col-4">col-4</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Stacked to horizontal</h3>
        <p>Using a single set of <Property value=".col-sm-*" /> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<Property value="sm" />).</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">col-sm-8</div>
                        <div className="col-sm-4">col-sm-4</div>
                    </div>
                    <div className="row">
                        <div className="col-sm">col-sm</div>
                        <div className="col-sm">col-sm</div>
                        <div className="col-sm">col-sm</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Mix and match</h3>
        <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    {"<!-- Stack the columns on mobile by making one full-width and the other half-width -->"}
                    <div className="row">
                        <div className="col-12 col-md-8">.col-12 .col-md-8</div>
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                    </div>

                    {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
                    <div className="row">
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                    </div>

                    {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
                    <div className="row">
                        <div className="col-6">.col-6</div>
                        <div className="col-6">.col-6</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Alignment = () => (
    <>
        <h2 id="alignment">Alignment</h2>
        <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
        <h3>Vertical alignment</h3>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid showcase-vertical-space">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid showcase-vertical-space">
                <div className="container">
                    <div className="row">
                        <div className="col align-self-start">
                            1 of 3
                        </div>
                        <div className="col align-self-center">
                            1 of 3
                        </div>
                        <div className="col align-self-end">
                            1 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <h3>Horizontal alignment</h3>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Grid = () => (
    <DocContainer docToc>
        <p className="lead">Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, and dozens of predefined classes.</p>
        <p>The grid system is heavily based on Bootstrap{"'"}s grid. Click <a href="http://getbootstrap.com/docs/4.1/layout/grid/" target="_blank" rel="noopener noreferrer">here</a> to read more about it.</p>
        <HowItWorks />
        <GridOptions />
        <AutoLayoutColumns />
        <ResponsiveClasses />
        <Alignment />
    </DocContainer>
);

export default Grid;

/* For testing */
export { HowItWorks, GridOptions, AutoLayoutColumns, ResponsiveClasses, Alignment };
