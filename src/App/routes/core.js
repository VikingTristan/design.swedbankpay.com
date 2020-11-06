module.exports = [
    /**
     * Core
     */
    {
        title: "Core",
        path: "/core",
        redirect: "/core/color",
        appFolder: "Core",
        routes: [
            {
                title: "Color",
                path: "/core/color",
                componentPath: "core/Color"
            },
            {
                title: "Logotype",
                path: "/core/logotype",
                componentPath: "core/Logotype",
                statusBadges: ["updated"]
            },
            {
                title: "Grid",
                path: "/core/grid",
                componentPath: "core/Grid"
            },
            {
                title: "Iconography",
                path: "/core/iconography",
                componentPath: "core/Iconography"
            },
            {
                title: "Images",
                path: "/core/images",
                componentPath: "core/Images"
            },
            {
                title: "Page layout",
                path: "/core/page-layout",
                componentPath: "core/Page-layout"
            },
            {
                title: "Typography",
                path: "/core/typography",
                componentPath: "core/Typography"
            }
        ]
    }
];
