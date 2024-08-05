const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
modelContainer.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff); 
scene.add(light);

camera.position.z = 5;

const loader = new THREE.GLTFLoader();

loader.load('../models/LaptopFinal.glb', function(gltf) {
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);
    scene.add(model);
}, undefined, function(error) {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();