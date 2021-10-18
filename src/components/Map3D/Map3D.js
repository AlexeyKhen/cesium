import React, {useEffect, useRef, useState} from 'react';
import {Cesium3DTileset, Viewer as ViewerResium} from "resium";
import {Cartesian3, OpenStreetMapImageryProvider} from "cesium";
import Load3DModels from "../Files3D/Files3D";

function Map3D() {
    const [isLoading, setLoading] = useState(true)
    const ref = useRef(null);
    const initialImageryProvider3D = new OpenStreetMapImageryProvider({
        url: "https://a.tile.openstreetmap.org/",
    });

    useEffect(() => {
        if (ref.current && ref.current.cesiumElement) {
            let viewer = ref.current.cesiumElement;
            viewer._container.firstChild.children[1].style.display = "none";
            viewer.camera.setView({
                destination: Cartesian3.fromDegrees(
                    71.416167,
                    51.089247,
                    600
                ),
            })
            const eventLoaded = (tiles) => {

                if (tiles === 0) {
                    setLoading(false)
                    console.log('loaded')
                }
            };
            const loader = viewer.scene.globe.tileLoadProgressEvent;
            loader.addEventListener(eventLoaded);
        }

    }, [])


    return (
        <>
            {isLoading ? <img src={'load.gif'} style={{height: 'calc(100vh)', width: 'calc(100vw)'}}/> : null}
            <div style={isLoading ? {visibility: 'hidden'} : null}>
                <ViewerResium
                    ref={ref}
                    homeButton={false}
                    // imageryProvider={initialImageryProvider3D}
                    navigationHelpButton={false}
                    geocoder={false}
                    fullscreenButton={false}
                    timeline={false}
                    sceneModePicker={false}
                    baseLayerPicker={false}
                    vrButton={false}
                    selectionIndicator={false}
                    infoBox={false}
                    animation={false}
                    style={{height: 'calc(100vh)'}}
                >
                    {/*<Load3DModels/>*/}
                </ViewerResium>
            </div>
        </>
    )
        ;
}

export default Map3D;