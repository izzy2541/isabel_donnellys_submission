// Get the robot image element and its parent container
const image = document.getElementById('robotImage');
const parent = image.parentElement;

function moveRobot(direction, isMoveForwards = false) {
  //initialise currentDirection variable
  let currentDirection;

  // Determine the current direction if moving forwards
  if (isMoveForwards) {
    // Check which class the image currently has to determine its direction when forwards button is selected
    currentDirection = image.classList.contains('north') ? 'north' :
      image.classList.contains('south') ? 'south' :
        image.classList.contains('east') ? 'east' :
          image.classList.contains('west') ? 'west' : null;
  } else {
    // Use the provided direction if not moving forwards
    currentDirection = direction;
  }

  // Get current position and parent boundaries
  const currentX = parseFloat(image.getAttribute('x')) || 0; // Get current x position of the robot
  const currentY = parseFloat(image.getAttribute('y')) || 0; // Get current y position of the robot
  const imageRect = image.getBoundingClientRect(); // Get the bounding rectangle of the image
  const parentRect = parent.getBoundingClientRect(); // Get the bounding rectangle of the parent container

  // Move the robot or update its image based on the current direction
  switch (currentDirection) {
    case 'west':
      if (isMoveForwards) {
        // Move the robot left if it's within the parent's left boundary - add 5 because width includes the border.
        if (imageRect.left > parentRect.left + 5) {
          image.setAttribute('x', (currentX - 5) + 'px'); // Move left by 10px
        }
      } else {
        // Update the image to face west
        image.setAttribute('class', 'robot_image west');
        image.setAttribute('href', 'img/west.svg');
      }
      break;
    case 'east':
      if (isMoveForwards) {
        // Move the robot right if it's within the parent's right boundary - minus 5 to account for the border.
        if (imageRect.right < parentRect.right - 5) {
          image.setAttribute('x', (currentX + 5) + 'px'); // Move right by 10px
        }
      } else {
        // Update the image to face east
        image.setAttribute('class', 'robot_image east');
        image.setAttribute('href', 'img/east.svg');
      }
      break;
    case 'north':
      if (isMoveForwards) {
        // Move the robot up if it's within the parent's top boundary
        if (imageRect.top > parentRect.top + 5) {
          image.setAttribute('y', (currentY - 5) + 'px'); // Move up by 10px
        }
      } else {
        // Update the image to face north
        image.setAttribute('class', 'robot_image north');
        image.setAttribute('href', 'img/north.svg');
      }
      break;
    case 'south':
      if (isMoveForwards) {
        // Move the robot down if it's within the parent's bottom boundary
        if (imageRect.bottom < parentRect.bottom - 5) {
          image.setAttribute('y', (currentY + 5) + 'px'); // Move down by 10px
        }
      } else {
        // Update the image to face south
        image.setAttribute('class', 'robot_image south');
        image.setAttribute('href', 'img/south.svg');
      }
      break;
    default:
      // Log an error if an unknown direction is provided
      console.log('Unknown direction');
  }
}
