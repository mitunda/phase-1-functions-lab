
function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    return Math.abs(location - hqLocation);
  }
  console.log(distanceFromHqInBlocks(50));

  function distanceFromHqInFeet(block, ft) {
    return distanceFromHqInBlocks(block) * 264; 
    // the * is to multiply by the number of blocks
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
    // the mathabs returns a positive because distance cant be negative 
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    }
  }