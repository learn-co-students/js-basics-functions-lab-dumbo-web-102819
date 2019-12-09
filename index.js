function distanceFromHqInBlocks(someValue) {
    let blocksVariable = 0
    if (someValue > 42) {
        blocksVariable = (someValue - 42)
    } else if (someValue < 42) {
        blocksVariable = (42 - someValue)
    }
    return blocksVariable  
}

function distanceFromHqInFeet(someValue) {
    let blockVar = distanceFromHqInBlocks(someValue);
    let feetVar = blockVar * 264
    return feetVar
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    let blocksVariable = 0
    if (startingBlock > endingBlock) {
        blocksVariable = (startingBlock - endingBlock)
    } else if (startingBlock < endingBlock) {
        blocksVariable = (endingBlock - startingBlock)
    }
    return (blocksVariable * 264)
}

function calculatesFarePrice(start, destination) {
    let distFeet = distanceTravelledInFeet(start, destination)
    if (distFeet < 400) {
        return 0
    } else if (distFeet > 400 && distFeet < 2000) {
        return ((distFeet - 400) * .02)
    } else if (distFeet > 2000 && distFeet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}