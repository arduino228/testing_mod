const myStar = new Planet("my-star", null, 4);

myStar.radius = 6;
myStar.orbitRadius = 0;

myStar.bloom = true;
myStar.lightRadius = 30;

myStar.accessible = false;
myStar.visible = true;

myStar.meshLoader = () => new SunMesh(
    myStar,
    5,
    5, 0.3, 1.7, 1.2, 1,
    Color.valueOf("ffcc33"),
    Color.valueOf("ff9933"),
    Color.valueOf("ff5500")
);

TechTree.nodeRoot("my-star", myStar, () => {});
