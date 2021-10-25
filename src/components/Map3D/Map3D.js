import React, {useEffect, useRef, useState} from 'react';
import {Cesium3DTileset, Viewer as ViewerResium} from "resium";
import {Cartesian3, OpenStreetMapImageryProvider} from "cesium";
import Load3DModels from "../Files3D/Files3D";
import Loading from "../Loading/Loading";
import Buttons from "../Buttons/Buttons";

function Map3D() {
    const [isLoading, setLoading] = useState(true)
    const [city, setCity] = useState('almaty')
    const [viewerConst, setViewerConst] = useState(null)
    const [firstTimeRendered, setFirstTimeRendered] = useState(false)
    const ref = useRef(null);


    const homeCoordinates = {
        astana: [71.416167, 51.089247],
        almaty: [76.933226, 43.212292]
    }


    useEffect(() => {
        if (ref.current && ref.current.cesiumElement) {
            let viewer = ref.current.cesiumElement;
            setViewerConst(viewer)
            viewer._container.firstChild.children[1].style.display = "none";
            viewer.camera.setView({
                destination: Cartesian3.fromDegrees(
                    homeCoordinates[city][0],
                    homeCoordinates[city][1],
                    600
                ),
            })
            viewer.scene.skyBox.show = false;
            viewer.scene.requestRender()

            const eventLoaded = (tiles) => {

                if (tiles === 0) {
                    setLoading(false)
                    setFirstTimeRendered(true)
                }
            };
            const loader = viewer.scene.globe.tileLoadProgressEvent;
            loader.addEventListener(eventLoaded);
        }

    }, [])

    useEffect(() => {
        if (viewerConst && firstTimeRendered) {
            viewerConst.camera.flyTo({
                destination: Cartesian3.fromDegrees(
                    homeCoordinates[city][0],
                    homeCoordinates[city][1],
                    600
                ),
                duration: 0.5,
            });
        }

    }, [city])


    return (
        <>

            {isLoading ? <Loading/> : null}
            <div style={isLoading ? {visibility: 'hidden'} : null}>
                <Buttons setCity={setCity} city={city}/>
                <ViewerResium
                    ref={ref}
                    requestRenderMode={true}
                    maximumRenderTimeChange={'Infinity'}
                    homeButton={false}
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
                    <Load3DModels city={city}/>
                </ViewerResium>
            </div>
        </>
    )
        ;
}

export default Map3D;