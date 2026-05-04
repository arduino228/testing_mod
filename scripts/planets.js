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

const sector = new SectorPreset("Посев", myPlanet, 10);

sector.alwaysUnlocked = true;
sector.addStartingItems = true;
sector.captureWave = 20;

//вместо nodeRoot:
TechTree.node(Planets.sun, myPlanet, () => {});
print(">>> PLANET LOADED");
