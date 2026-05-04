const myPlanet = new Planet("my-planet", Planets.sun, 1);

myPlanet.generator = extend(SerpuloPlanetGenerator, {});
myPlanet.meshLoader = () => new HexMesh(myPlanet, 6);

myPlanet.atmosphereColor = Color.valueOf("4da6ff");

myPlanet.startSector = 10;
myPlanet.accessible = false;
myPlanet.alwaysUnlocked = true;
myPlanet.visible = true;

myPlanet.orbitRadius = 60;

myPlanet.defaultEnv = Env.terrestrial;

new SectorPreset("start", myPlanet, 10, {
    alwaysUnlocked: true,
    addStartingItems: true,
    captureWave: 10,
    difficulty: 1
});

// 🔥 ключевая строка
TechTree.nodeRoot("my-planet", myPlanet, () => {});
//  ОБЯЗАТЕЛЬНО
//TechTree.node(Planets.serpulo, myPlanet, () => {});
/*
// ===== генератор =====
const myGen = extend(SerpuloPlanetGenerator, {

    noise1: new Simplex();
    noise2: new Simplex();

    generateTile(tile, sector){

        let x = tile.v.x, y = tile.v.y, z = tile.v.z;

        let base = this.noise1.octaveNoise3D(4, 0.5, 1/10, x, y, z);
        let detail = this.noise2.octaveNoise3D(6, 0.6, 1/25, x, y, z);

        let height = base + detail * 0.3;

        // вода
        if(height < 0.3){
            tile.floor = Blocks.water;
            return;
        }

        // берег
        if(height < 0.4){
            tile.floor = Blocks.sand;
        }

        // равнины
        else if(height < 0.7){
            tile.floor = Blocks.grass;
        }

        // горы
        else{
            tile.floor = Blocks.stone;

            if(height > 0.8){
                tile.block = Blocks.boulder;
            }
        }

        // реки
        let river = Math.abs(this.noise2.octaveNoise3D(1, 1, 1/30, x, y, z));
        if(river < 0.02 && height > 0.35){
            tile.floor = Blocks.water;
        }

    }

});


// ===== планета =====
const myPlanet = new Planet("my-planet", Planets.sun, 1);

myPlanet.generator = myGen;

// внешний вид
myPlanet.meshLoader = () => new NoiseMesh(
    myPlanet,
    6,
    0.6,
    1.2,
    1.3,
    3,
    Color.valueOf("6ecdec"),
    Color.valueOf("2b6db2"),
    Color.valueOf("1c2f5b")
);

// атмосфера
myPlanet.atmosphereColor = Color.valueOf("4da6ff");
myPlanet.atmosphereRadIn = 0.02;
myPlanet.atmosphereRadOut = 0.3;

// доступ
myPlanet.startSector = 10;
myPlanet.alwaysUnlocked = true;
myPlanet.accessible = true;


// ===== сектор =====
new SectorPreset("my-sector", myPlanet, 10, {
    alwaysUnlocked: true,
    captureWave: 15,
    difficulty: 3
});

*/
