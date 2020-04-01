import { Engine, Render, Bodies, World } from "matter-js";

// Playground: https://plnkr.co/edit/i74EujzRkHExTX6b?preview

class Program
{
    public static Main(): void
    {
        // Create an engine
        let engine = Engine.create();
        
        // Create a renderer
        let render = Render.create({
            element: document.body,
            engine: engine
        });

        // Create two boxes and a ground
        let boxA = Bodies.rectangle(400, 200, 80, 80);
        let boxB = Bodies.rectangle(450, 50, 80, 80);
        let ground = Bodies.rectangle(400, 410, 810, 60, { isStatic: true });

        // Add all of the bodies to the world
        World.add(engine.world, [boxA, boxB, ground]);

        // Run the engine
        Engine.run(engine);

        // Run the renderer
        Render.run(render);
    }
}

Program.Main();
