const myStar = new Planet("my-star", null, 4);

//myStar.radius = 4;

myStar.bloom = true;
myStar.accessible = false;
myStar.visible = true;

myStar.meshLoader = () => new StarMesh(
    myStar,
    5,
    5,
    0.3,
    1.7,
    1.2,
    1,
    Color.valueOf("ffcc33"),
    Color.valueOf("ff9933"),
    Color.valueOf("ff5500")
);
