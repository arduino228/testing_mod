print(">>>PLANET IS LOADING");
print("...");
const myPlanet = new Planet("my-planet", Planets.sun, 1);

myPlanet.localizedName = "My Planet";

myPlanet.generator = extend(PlanetGenerator, {

    getHeight(pos){
        return 0.5; // ОБЯЗАТЕЛЬНО
    },

    generateTile(tile){
        // просто земля без математики
        tile.floor = Blocks.stone;
        tile.block = Blocks.air;
    }

});

myPlanet.meshLoader = () => new HexMesh(myPlanet, 6);

myPlanet.atmosphereColor = Color.valueOf("4da6ff");

myPlanet.startSector = 10;
myPlanet.accessible = true;
myPlanet.alwaysUnlocked = true;
myPlanet.visible = true;

myPlanet.orbitRadius = 60;
myPlanet.defaultEnv = Env.terrestrial;

const sector = new SectorPreset("Посев", myPlanet, 10);

sector.alwaysUnlocked = true;
sector.addStartingItems = true;
sector.captureWave = 20;

TechTree.node(Planets.sun, myPlanet, () => {
    TechTree.node(myPlanet, sector, () => {});
});
print(">>> PLANET LOADED");
