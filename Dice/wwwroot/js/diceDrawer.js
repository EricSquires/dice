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
        light.position.set(-20, 20, 5);
        scene.add(light);

        light = new THREE.PointLight(0xffffff, 0.8);
        light.position.set(20, 20, 5);
        scene.add(light);

        addBackground(scene);

        dice.map(function (d) {
            addDie(scene, d);
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

    function addDie(scene, value) {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshPhongMaterial({ color: 0xaa0000 });
        var mesh = new THREE.Mesh(geometry, material);

        mesh.translateZ(-5);
        mesh.translateX(-2.5 + 5 * diceMesh.length);
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