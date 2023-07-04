import {selectedLocations, customLocations, bfsCost, randomCost} from './Home'
import { fillMatrix} from './MapFunctions'


let n
let visited = []
let matrix 


export const calculate = async () => {

    n = selectedLocations.length
    for(let i=0; i<n; i++)  {visited[i] = 0;}
    matrix = await fillMatrix()
    
    // // To print BFS cost matrix
    // var matStr = "Bfs Cost Matrix:<br>"
    // for(let i=0; i<n; i++)
    // {
    //     matStr += "["
    //     for(let j=0; j<n; j++)
    //     {
    //         if(j!==n-1)
    //             matStr += matrix[i][j] + ", "
    //         else
    //             matStr += matrix[i][j] + "]"
    //     }
    //     matStr += "<br>"
    // }
    // const bfsMatrixElement = document.getElementById('bfsMatrix')
    // bfsMatrixElement.innerHTML = matStr

    var bfsOP = await bfs(0);
    const path = bfsOP.path;
    const cost = bfsOP.cost;

    if(bfsCost.length === 0)
        bfsCost.push(cost)

    const bfsDistStartElement = document.getElementById('bfsDistStart')
    bfsDistStartElement.innerHTML = 'BFS Path Distance: ' 
    const bfsDistValElement = document.getElementById('bfsDistVal')
    bfsDistValElement.innerHTML = bfsCost[0]
    const bfsDistEndElement = document.getElementById('bfsDistEnd')
    bfsDistEndElement.innerHTML = ' meters'


    const distSavedStartElement = document.getElementById('distSavedStart')
    distSavedStartElement.innerHTML = 'Distance Saved: ' 
    const distSavedValElement = document.getElementById('distSavedVal')
    distSavedValElement.innerHTML = (randomCost[0] - bfsCost[0])
    const distSavedEndElement = document.getElementById('distSavedEnd')
    distSavedEndElement.innerHTML = ' meters'


    const petrolPrice = 0.0053333 //per meter
    const costSavedStartElement = document.getElementById('costSavedStart')
    costSavedStartElement.innerHTML = 'Cost Saved: ₹'
    const costSavedValElement = document.getElementById('costSavedVal')
    costSavedValElement.innerHTML = ((randomCost[0] - bfsCost[0])*petrolPrice.toFixed(2))
    const costSavedEndElement = document.getElementById('costSavedEnd')
    costSavedEndElement.innerHTML = ' (₹96/L)'


    customLocations.push(selectedLocations[0])

    for(let i=1; i<n; i++)  
    {
        customLocations.push(selectedLocations[path[i]]);
    }
}



function getMin(source)
{
    let minCost = Number.MAX_SAFE_INTEGER
    let minIndex = -1;
    for(let i = 0; i < n; i++)
    {
        if(visited[i] === 0 && matrix[source][i] !== 0 && matrix[source][i] < minCost)
        {
            minCost = matrix[source][i];
            minIndex = i
        }
    }
    
    return {dest: minIndex, cost: minCost}
}

// BFS Code
async function bfs(source)
{    
    visited[source] = 1;

    let path = []
    let cost = 0

    path.push(source);

    var node = source
    while(node !== -1)
    {
        var next = getMin(node);
        node = next.dest;
        if(node !== -1)
        {
            path.push(node)
            visited[node] = 1;
            cost += next.cost;
        }
    }

    return {path: path, cost: cost}
}
































