import React, {useRef, useEffect, useState} from "react";
import {Cesium3DTileset} from "resium";

import {Matrix4, Cartographic, Cartesian3} from "cesium";


export default function Load3DModels({city}) {
    const ref = useRef(null);
    const urls = {
        astana: 'assets/astana/Cesium_107_1_Cesium.json',
        almaty: 'assets/almaty/Alm_Sector5_Cesium.json'
    }

    const matrixCity = {
        astana: new Cartesian3(-64.05935763055459, -190.50901036104187, -249.00344509910792),
        almaty: new Cartesian3(-140.00766026158817, - 603.47667964641, -561.9911959739402)
    }


    return <Cesium3DTileset
        modelMatrix={Matrix4.fromTranslation(matrixCity[city])}
        maximumScreenSpaceError={1}
        ref={ref}
        url={urls[city]}/>
}