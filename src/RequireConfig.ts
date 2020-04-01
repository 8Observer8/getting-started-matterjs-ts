requirejs.config({
    baseUrl: "js",
    paths: {
        "matter-js": "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min"
    }
});

requirejs(["Program"], () => { });
