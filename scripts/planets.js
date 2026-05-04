Events.run(EventType.ContentInitEvent, () => {

    const myPlanet = new Planet("my-planet", Planets.sun, 1);

    myPlanet.generator = extend(SerpuloPlanetGenerator, {});
    myPlanet.meshLoader = () => new HexMesh(myPlanet, 6);

    myPlanet.atmosphereColor = Color.valueOf("4da6ff");

    myPlanet.startSector = 10;
    myPlanet.accessible = true;
    myPlanet.alwaysUnlocked = true;
    myPlanet.visible = true;

    myPlanet.orbitRadius = 60;
    myPlanet.defaultEnv = Env.terrestrial;

    new SectorPreset("start", myPlanet, 10, {
        alwaysUnlocked: true,
        addStartingItems: true,
        captureWave: 10
    });

    TechTree.nodeRoot("my-planet", myPlanet, () => {});
    print("PLANET LOADED");
});
