import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

console.log(OrbitControls)

console.log(THREE);

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1,1,1)

const cubeMaterial = new THREE.MeshBasicMaterial({color : "Red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)


console.log(cubeMesh)
scene.add(cubeMesh)
console.log(scene)
console.log(window.innerWidth,window.innerHeight)


// initialize camera

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  6
)

// orthoGraphic Camera

const aspectRatio = window.innerWidth / window.innerHeight

// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   10
// )

camera.position.z = 5


// initialize renderer

const canvas = document.querySelector('canvas.threejs') 

console.log(canvas)

const renderr = new THREE.WebGLRenderer(
  {
    canvas: canvas,
    antialias: true,
  }
)

renderr.setSize(window.innerWidth,window.innerHeight);
// renderr.setPixelRatio(Math.min(window.devicePixelRatio,2))
// console.log(window.devicePixelRatio)


const controls = new OrbitControls(
  camera,
  canvas
)

controls.enableDamping = true
controls.autoRotate = true

window.addEventListener('resize', () => 
{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix()
  renderr.setSize(window.innerWidth,window.innerHeight);
})

const renderloop = () =>
{
  controls.update();
  renderr.render(scene,camera);
  window.requestAnimationFrame(renderloop);
}

renderloop()