import React, { useRef } from 'react'
import '../App.css'
import SelectMap from './SelectMap'
import { createMatrix } from './MapFunctions'

export var selectedLocations = []
export var customLocations = []
export const distMatrix = createMatrix(1000);
export var bfsCost = []
export var randomCost = []


export default function Home() {

    const mapElement = useRef()

    return (
        <>
            <div className="mapShow">
                <div className="row">

                    <div className="col">
                        <div className="map-container container">
                            <SelectMap mapElement={mapElement} />
                        </div>
                    </div>

                    <div className="col">
                        <div className='details'>

                            <h1 id='detailsHeading'>Instructions</h1>

                            <div id='instructions'>
                                <p className='details-para'>1. Select POI's on map or from SearchBox.</p>
                                <p className='details-para'>2. Click on calculate button to show results.</p>
                                <p className='details-para'>Note: Calculating BFS path takes a few seconds.</p>
                            </div>

                            <div className='detailsBox'>
                                <div className='d-flex flex-row bd-highlight mb-3 details-para'>
                                    <p className='p-2 bd-highlight' id="randomDistStart">⠀</p>
                                    <p className='p-2 bd-highlight red' id="randomDistVal">⠀</p>
                                    <p className='p-2 bd-highlight' id="randomDistEnd">⠀</p>
                                </div>
                                <div className='d-flex flex-row bd-highlight mb-3 details-para'>
                                    <p className='p-2 bd-highlight' id="bfsDistStart"></p>
                                    <p className='p-2 bd-highlight green' id="bfsDistVal">⠀</p>
                                    <p className='p-2 bd-highlight' id="bfsDistEnd">⠀</p>
                                </div>

                                <div className='d-flex flex-row bd-highlight mb-3 details-para'>
                                    <p className='p-2 bd-highlight' id="distSavedStart">⠀</p>
                                    <p className='p-2 bd-highlight yellow' id="distSavedVal">⠀</p>
                                    <p className='p-2 bd-highlight' id="distSavedEnd">⠀</p>
                                </div>

                                <div className='d-flex flex-row bd-highlight mb-3 details-para'>
                                    <p className='p-2 bd-highlight' id="costSavedStart">⠀</p>
                                    <p className='p-2 bd-highlight yellow' id="costSavedVal">⠀</p>
                                    <p className='p-2 bd-highlight' id="costSavedEnd">⠀</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
