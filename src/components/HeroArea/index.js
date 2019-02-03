import React from 'react'
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

import { ArrowDownCircle } from 'react-feather';

import './style.scss'

import foxMesh from '../../assets/fox.glb'

const splitUrl = foxMesh.split('/')

export default class HeroArea extends React.Component {
  render() {
    return <div className='hero-area'>
      <button onClick={this._scrollDown} className='hero-area__scroll-down'><ArrowDownCircle /></button>
      <canvas className="hero-area__canvas" id="renderCanvas"></canvas>
    </div>
  }

  componentDidMount() {


    var canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});


    // CreateScene function that creates and return the scene
    var createScene = function(){
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 2, 0), scene);
        var light2 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, -1, 0), scene);
        light2.intensity = 0.4;

        return scene;
    }
    // call the createScene function
    var scene = createScene();
    scene.clearColor = new BABYLON.Color3(0.45, 0.37, 0.58);

    let fox = null;

    BABYLON.SceneLoader.LoadAssetContainer(splitUrl[1] + '/', splitUrl[2], scene, (container) => {

      container.meshes[0].rotate(BABYLON.Axis.Y, 2.34 * Math.PI/2, BABYLON.Space.WORLD);
      fox = container.meshes[0]

      container.addAllToScene()

      const skeleton = scene.getSkeletonByName("skeleton0");


      container.animationGroups[0].stop()

      const head = skeleton.bones[3]
      const tail1 = skeleton.bones[8]
      const tail2 = skeleton.bones[9]

     
      let mouseInput = 0.5;
      let mouseInputX = 0.5;

      console.log(tail2.rotation)

      // run the render loop  
      engine.runRenderLoop(function(){
          const scale = mouseInput
          const tail = 0.2 * Math.sin((new Date).getTime() / 500)
          head.rotation = new BABYLON.Vector3(mouseInput, 0, -mouseInputX + 0.5)
          tail1.rotation = new BABYLON.Vector3(0.8955724317899673, -3.141591221603576 + tail * 2 ,-3.1415918397922766)
          tail2.rotation = new BABYLON.Vector3(0, -tail , -tail / 2)

          scene.render();
      });

      let currentAnimation = 0

      window.addEventListener("touchmove", function (e) {
        const valX = e.touches[0].clientX
        const valY = e.touches[0].clientY
        mouseInput = (valY / window.innerHeight - 0.5) * -2
        mouseInputX = (valX / window.innerWidth - 0.5) * -2
      })

      
      window.addEventListener("touchstart", function (e) {
        const valX = e.touches[0].clientX
        const valY = e.touches[0].clientY
        mouseInput = (valY/ window.innerHeight - 0.5) * -2
        mouseInputX = (valX / window.innerWidth - 0.5) * -2
      })

      window.addEventListener("mousemove", function (e) {

        mouseInput = (e.clientY / window.innerHeight - 0.5) * -2
        mouseInputX = (e.clientX / window.innerWidth - 0.5) * -2

      })
          //When click event is raised
      window.addEventListener("click", function () {
        // We try to pick an object
        var pickResult = scene.pick(scene.pointerX, scene.pointerY);

        if(pickResult.hit === true) {


          // If we hit the fox
          if(pickResult.pickedMesh.name === "Circle.001_2") {
            console.log('oi')
            if(currentAnimation === 0) {
              container.animationGroups[0].stop()
              container.animationGroups[1].play()
              currentAnimation = 1
            } else {
              container.animationGroups[1].stop()
              container.animationGroups[0].play()
              currentAnimation = 0

            }
          }
        }
        console.log(pickResult)
      })
    })



 
    // the canvas/window resize event handler
    window.addEventListener('resize', function(){
        engine.resize();
    });

 
  }

  _scrollDown = () => {
    $('html, body').animate({
      scrollTop: window.innerHeight
    }, 1000)
  }
}
