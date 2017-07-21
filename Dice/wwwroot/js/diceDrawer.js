var DiceDrawer = function (elementDOM, dice) {
    var element, width, height, scene, camera, renderer;

    var diceMesh = [];

    var dice = dice;

    start();

    function start() {
        element = $(elementDOM);

        width = element.innerWidth();
        height = width * 0.5;

        scene = buildScene();

        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, -1, 0);
        camera.lookAt(new THREE.Vector3(0, 0, -10));

        renderer = new THREE.WebGLRenderer();

        renderer.setSize(width, height);

        element.append(renderer.domElement);

        //window.addEventListener('resize', onWindowResize, false);

        draw();
    }

    function buildScene() {
        var scene = new THREE.Scene();

        scene.add(new THREE.AmbientLight(0x404040));

        var light = new THREE.PointLight(0xffffff, 0.8);
        light.position.set(-5, 5, 0);
        scene.add(light);

        light = new THREE.PointLight(0xffffff, 0.6);
        light.position.set(5, -5, 0);
        scene.add(light);

        addBackground(scene);
        
        var numDice = dice.length;
        var spacing = 2.5;
        var size = 1;
        var offset;

        if (numDice % 2 === 0) {
            offset = (size + spacing) / 2 + (numDice / 2 - 1) * (size + spacing);
        }
        else {
            offset = size * Math.floor(numDice / 2) + spacing * Math.floor(numDice / 2);
        }

        var currentOffset = -offset;

        dice.map(function (d) {
            addDie(scene, d, size, currentOffset);
            currentOffset += spacing + size;
        });

        return scene;
    };

    function addBackground(scene) {
        var geometry = new THREE.PlaneGeometry(width * 2, height * 2, 1);
        var material = new THREE.MeshPhongMaterial({ color: 0x006600 });
        var plane = new THREE.Mesh(geometry, material);

        plane.translateZ(-100);

        scene.add(plane);
    }

    function addDie(scene, value, size, offset) {

        var geometry = new THREE.BoxGeometry(size, size, size);
        var material = new THREE.MeshPhongMaterial({ color: 0xaa0000 });
        var mesh = new THREE.Mesh(geometry, material);

        mesh.translateZ(-5);
        mesh.translateX(offset);
        diceMesh.push(mesh);

        scene.add(mesh);
    }

    function draw() {
        requestAnimationFrame(draw);

        renderer.render(scene, camera);
    };

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    };
};

DiceDrawer.prototype = {
    constructor: DiceDrawer
}