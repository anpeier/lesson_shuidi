import React, { Component } from "react";
import * as THREE from "three"; // 组件
// THREE.js 组件
import React3 from "react-three-renderer";
// three.js 更简单
export default class GameContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPositon = new THREE.Vector3(0, 0, 5); //三维空间
    this.state = {};
  }
  render() {
    const width = window.innerWidth,
      height = window.innerHeight;
    return (
      <React3 mainCamera="camera" width={width} height={height}>
        <scene>
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPositon}
          />
          <mesh>
            <boxGeometry width={1} height={1} depth={1}></boxGeometry>
            <meshBasicMaterial color={0x00ff00} />
          </mesh>
        </scene>
      </React3>
    );
  }
}
