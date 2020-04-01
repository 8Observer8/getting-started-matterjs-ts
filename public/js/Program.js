define(["require", "exports", "matter-js"], function (require, exports, matter_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            // Create an engine
            var engine = matter_js_1.Engine.create();
            // Create a renderer
            var render = matter_js_1.Render.create({
                element: document.body,
                engine: engine
            });
            // Create two boxes and a ground
            var boxA = matter_js_1.Bodies.rectangle(400, 200, 80, 80);
            var boxB = matter_js_1.Bodies.rectangle(450, 50, 80, 80);
            var ground = matter_js_1.Bodies.rectangle(400, 410, 810, 60, { isStatic: true });
            // Add all of the bodies to the world
            matter_js_1.World.add(engine.world, [boxA, boxB, ground]);
            console.log(engine.world.bounds.min.x);
            console.log(engine.world.bounds.min.y);
            console.log(engine.world.bounds.max.x);
            console.log(engine.world.bounds.max.y);
            // Run the engine
            matter_js_1.Engine.run(engine);
            // Run the renderer
            matter_js_1.Render.run(render);
        };
        return Program;
    }());
    Program.Main();
});
//# sourceMappingURL=Program.js.map