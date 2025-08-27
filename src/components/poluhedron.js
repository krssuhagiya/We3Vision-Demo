import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroPolyhedron() {
  const mountRef = useRef(null);
  const isSmallScreen = window.innerWidth < 1200;
  

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Shared material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      opacity: 0.15,
      transparent: true
    });

    // Function to create a small polyhedron
    const createPolyhedron = (size, position) => {
      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const mesh = new THREE.LineSegments(wireframe, lineMaterial.clone());
      mesh.position.set(position.x, position.y, position.z);
      return mesh;
    };

    // Create multiple polyhedrons
    const polyhedrons = isSmallScreen
    ? [createPolyhedron(1, { x: -4, y: 1.5, z: 0 })] // only 1 in center
    : [
      createPolyhedron(0.8, { x: -6, y: 1, z: 0 }),
    ];

    polyhedrons.forEach(mesh => scene.add(mesh));

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      polyhedrons.forEach((mesh, i) => {
        mesh.rotation.x += 0.001 + i * 0.001;
        mesh.rotation.y += 0.002 + i * 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0
      }}
    />
  );
}
