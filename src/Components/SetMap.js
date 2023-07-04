import { useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'

import '../App.css'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';

import {selectedLocations} from './Home'
import { retMap, renderBFS, renderRandom} from './MapFunctions'
import { bfsColor, randomColor} from '../assets/Colors'
import SelectList from './SelectList'

export default function SetMap(props) {

    const [map, setMap] = useState({})
    const [latitude] = useState(selectedLocations[0].lngLat.lat)
    const [longitude] = useState(selectedLocations[0].lngLat.lng)

    // var renderCount = 0
    
    useEffect(() => {
        
        // console.log("SetMap: ", renderCount++)
        var map = retMap(props.mapElement, longitude, latitude)
        setMap(map)
        map.addControl(new tt.NavigationControl())

        const renderPaths = async ()=>
        {
            await renderRandom(map, 'random', randomColor, 8) 
            
            await renderBFS(map, 'bfs', bfsColor, 4)
        }
        renderPaths()

        return () => map.remove()

    }, [latitude, longitude, props.mapElement])

    return (
        <>
            {map && <div className="app">
                <div id="search-panel" className="col"></div>
                <div ref={props.mapElement} className="map" id="map" />
                <div className='list-div'>
                    <label id='selected-list-label'>Selected Locations: </label>
                    <SelectList list={selectedLocations} />
                </div>
                <div className='text-center my-4'>
                    <a type="button" className='btn btn-secondary btn-lg' href='/'>Home</a>
                </div>
            </div>}
        </>
    )
}
