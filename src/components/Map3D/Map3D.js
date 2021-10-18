import React, {useEffect, useRef} from 'react';
import {Cesium3DTileset, Viewer as ViewerResium} from "resium";
import {Cartesian3, OpenStreetMapImageryProvider} from "cesium";
import Load3DModels from "../Files3D/Files3D";

function Map3D() {
    const ref = useRef(null);
    const initialImageryProvider3D = new OpenStreetMapImageryProvider({
        url: "https://a.tile.openstreetmap.org/",
    });

    useEffect(()=>{
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

                if (tiles === 0) {console.log('finished')
                }
            };
            const loader = viewer.scene.globe.tileLoadProgressEvent;
            loader.addEventListener(eventLoaded);
        }

    },[

    ])


    return (
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
            {/*<Cesium3DTileset url="http://localhost:8000/media/sector107/Cesium_107_1_Cesium.json" />*/}
            <Load3DModels/>
        </ViewerResium>
    );
}

export default Map3D;