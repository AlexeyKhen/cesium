import React from "react";
import { Cesium3DTileset } from "resium";

export default function Files3D() {
  return (
    <div>
      <Cesium3DTileset url="./Milenium_Park_Cesium/index.json" />
    </div>
  );
}
