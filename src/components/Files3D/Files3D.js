import React, {useRef, useEffect, useState} from "react";
import {Cesium3DTileset} from "resium";

import {Matrix4, Cartographic, Cartesian3} from "cesium";



export default function Load3DModels({city,quality}) {
    const ref = useRef(null);




    const urls = {
        full_3: '/assets/full/Sector45_Cesium/Scene/Sector45_Cesium.json', // 3cm full
        full_7: '/assets/full/Sector45_Cesium_7cm/Scene/Sector45_Cesium_7cm.json', // 7cm full
        cut_3: '/assets/cut/Sector45_Cesium/Scene/Sector45_Cesium.json', // 3cm cut
        cut_7: '/assets/full/Sector45_Cesium_7cm/Scene/Sector45_Cesium_7cm.json', // 7cm cut

    }
    // if (!Object.keys(urls).includes(location.pathname.substring(1))) {
    //
    //     location = 'full_3'
    // }else {
    //     location = location.pathname
    // }
    // console.log(location)

    const matrixCity = {
        astana: new Cartesian3(-64.05935763055459, -190.50901036104187, -249.00344509910792),
        almaty: new Cartesian3(-140.00766026158817, -603.47667964641, -561.9911959739402)
    }


    return <Cesium3DTileset
        modelMatrix={Matrix4.fromTranslation(matrixCity['astana'])}
        maximumScreenSpaceError={quality}
        // immediatelyLoadDesiredLevelOfDetail = {true}
        // skipScreenSpaceErrorFactor={1}
        // skipLevelOfDetail={true}
        // skipLevels={10}
        ref={ref}
        url={urls[city]}/>
}