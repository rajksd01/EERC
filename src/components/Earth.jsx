import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

// Import your texture images
import earthMapTexture from "../../public/texture/earthmap1k.jpg";
import earthBumpTexture from "../../public/texture/earthbump.jpg";
import earthCloudTexture from "../../public/texture/earthCloud.png";
import galaxyTexture from "../../public/texture/galaxy.png";
import "../CSS/earth.css"

function Earth() {
  const canvasRef = useRef(null);
  let scene, camera, renderer, controls;

  useEffect(() => {
    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    const fov = 55;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.2;
    const far = 2000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 2);
    scene.add(camera);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha:true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    renderer.autoClear = false;
    

    // Orbit control setup
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled=false;

    // Earth geometry
    const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);

    // Earth material
    const earthMaterial = new THREE.MeshPhongMaterial({

      map: new THREE.TextureLoader().load(earthMapTexture),
      bumpMap: new THREE.TextureLoader().load(earthBumpTexture),
      bumpScale: 0.3,
    });

    // Earth mesh
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);
    earthMesh.position.x = 1;

    // Cloud geometry
    const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

    // Cloud material
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(earthCloudTexture),
      transparent: true,
    });

    // Cloud mesh
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);
    cloudMesh.position.x = 1;

    // Galaxy geometry
    const starGeometry = new THREE.SphereGeometry(80, 64, 64);

    // Galaxy material
    const starMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(galaxyTexture),
      side: THREE.BackSide,
    });

    // Galaxy mesh
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starMesh);

    // Ambient light
    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientlight);

    // Point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Point light helper
    const Helper = new THREE.PointLightHelper(pointLight);
    scene.add(Helper);



   //  Handling resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    };

    window.addEventListener("resize", handleResize, false);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      starMesh.rotation.y -= 0.002;
      earthMesh.rotation.y -= 0.0015;
      cloudMesh.rotation.y -= 0.001;
      controls.update();
      render();
    
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      // Additional cleanup, if needed
    };
  }, []);

  const render = () => {
    if (renderer) {
      renderer.render(scene, camera);
    }
  };

  return <canvas ref={canvasRef} className="webgl earth" />;
}

export default Earth;
