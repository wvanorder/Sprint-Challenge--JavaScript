// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(cubeAttributes) {
        this.length = cubeAttributes.length;
        this.width = cubeAttributes.width;
        this.height = cubeAttributes.height;
    };
    volume() {
        return this.length * this.width * this.height;
    };
    surfaceArea() {
        return (this.length * this.width + this.length * this.height + this.width * this.height) * 2;
    };
};

const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

 /* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.*/

class CubeMaker extends CuboidMaker {
    constructor(cubeMakerStats) {
    super(cubeMakerStats);
    this.side = cubeMakerStats.side
    }
    cubeVolume() {
        return this.side * this.side * this.side;
    }
    cubeSurfaceArea() {
        return this.side * this.side * 6;
    }
};


const perfectCube = new CubeMaker ({
    side: 4,
    length : 4,
    width: 4,
    height: 4,
})

console.log(perfectCube.cubeVolume());
console.log(perfectCube.volume());
console.log(perfectCube.cubeSurfaceArea());
console.log(perfectCube.surfaceArea());