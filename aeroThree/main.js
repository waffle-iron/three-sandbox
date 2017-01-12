document.addEventListener("DOMContentLoaded", function(event) {
    // Set the scene size.
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // Set some camera attributes.
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 10000;

  // Get the DOM element to attach to
  const container =
      document.querySelector('#container');

  // Create a WebGL renderer, camera
  // and a scene
  const renderer = new THREE.WebGLRenderer();
  const camera =
      new THREE.PerspectiveCamera(
          VIEW_ANGLE,
          ASPECT,
          NEAR,
          FAR
      );

  const scene = new THREE.Scene();

  // Add the camera to the scene.
  scene.add(camera);

  // Start the renderer.
  renderer.setSize(WIDTH, HEIGHT);

  // Attach the renderer-supplied
  // DOM element.
  container.appendChild(renderer.domElement);

  //Assign sphere variables
  const RADIUS = 60;
  const SEGMENTS = 20;
  const RINGS = 20;

  // create the sphere's material
  const sphereMaterial = new THREE.MeshLambertMaterial(
    { color: 0xCC0000 }
  );

  //Create a new mesh with SphereGeometry
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
      RADIUS,
      SEGMENTS,
      RINGS),
  sphereMaterial);

  // Move the sphere on z axis into view.
  sphere.position.z = -300;

  //Add the sphere to the scene.
  scene.add(sphere);

  // create a point light
const pointLight =
  new THREE.PointLight(0x99ff99);

// set its position
pointLight.position.x = 500;
pointLight.position.y = 10;
pointLight.position.z = 30;


const pointLight2 =  new THREE.PointLight();

pointLight2.position.x = 600;
pointLight2.position.y = 300;
pointLight2.position.z = 30;


// add to the scene
scene.add(pointLight, pointLight2);

console.log(sphere.position, "POSITION");
console.log(sphere.geometry, "GEOMETRY");
console.log(sphere.geometry.faces, "FACES");
console.log(sphere.geometry.scale, "SCALE");
//Render loop
function render() {
  // Set interval - defaults to 60 fps
  requestAnimationFrame( render );

  //Rotate cube
  sphere.rotation.x += 0.02;
  sphere.rotation.y += 0.02;
  //Render
  renderer.render( scene, camera );
}
render();
});
