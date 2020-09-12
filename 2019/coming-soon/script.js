const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
const winMessage = document.querySelector(".win");
const container = document.querySelector(".container");
const arrowUp = document.querySelector("#arrowUp");
const arrowDown = document.querySelector("#arrowDown");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");
const tooltip = document.querySelector(".tooltipText");
const tooltip1 = document.querySelector(".tooltipText1");
let width = 500,
  height = 500,
  rows = 12,
  cols = 12;
if (window.innerWidth <= 768) {
  width = window.innerWidth;
  height = window.innerWidth;
  tooltip1.classList.add("hidden");
  rows = 10;
  cols = 10;
  console.log(width);
}
const wallThiccness = 10,
  unitLengthX = width / cols,
  unitLengthY = height / rows,
  gridWall = 5;
// --------------------Matter JS Boilerplate---------------------
const engine = Engine.create();
// Switching off gravity
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: container,
  engine: engine,
  options: {
    width,
    wireframes: false,
    height,
    background: "#ffe7e3",
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// ------------------Creating Walls of the canvas-------------------
const walls = [
  Bodies.rectangle(width / 2, 0, width, wallThiccness, {
    isStatic: true,
    render: {
      fillStyle: "#ff6633",
    },
  }),
  Bodies.rectangle(0, height / 2, wallThiccness, height, {
    isStatic: true,
    render: {
      fillStyle: "#ff6633",
    },
  }),
  Bodies.rectangle(width / 2, height, width, wallThiccness, {
    isStatic: true,
    render: {
      fillStyle: "#ff6633",
    },
  }),
  Bodies.rectangle(width, height / 2, wallThiccness, height, {
    isStatic: true,
    render: {
      fillStyle: "#ff6633",
    },
  }),
];

World.add(world, walls);

// ------------------Creating grid-------------------------
const grid = Array(rows)
  .fill(null)
  .map(() => Array(cols).fill(false));

// Veticals Array
const verticals = Array(rows)
  .fill(null)
  .map(() => Array(cols - 1).fill(false));

// Horizontals Array
const horizontals = Array(rows - 1)
  .fill(null)
  .map(() => Array(cols).fill(false));

// -------------------Starting Point--------------------

const startRow = Math.floor(Math.random() * rows);
const startCol = Math.floor(Math.random() * cols);

// ---------------------Functions-----------------------

function shuffle(arr) {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
}

// Functionality to move inside the grid
function movingInGrid(row, column) {
  //  Visited Cell then Return
  if (grid[row][column]) {
    return;
  }
  // Mark the current cell as visited
  grid[row][column] = true;
  // Asseembling list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);

  for (let neighbor of neighbors) {
    const [nextRow, nextCol, direction] = neighbor;
    // Checking if neighbor is out of bounds
    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
      continue;
    }

    // Checking if the next cell is visited or not
    if (grid[nextRow][nextCol]) {
      continue;
    }

    // Remove horizontal walls
    if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }

    // Removing Verical walls
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    }
    movingInGrid(nextRow, nextCol);
  }
}
movingInGrid(startRow, startCol);

// ---------------------Displaying horizontal grid walls--------------------
horizontals.forEach((row, rowIndex) => {
  row.forEach((openWall, columnIndex) => {
    if (openWall === true) {
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      gridWall,
      {
        isStatic: true,
        label: "wall",
        render: {
          fillStyle: "#ff6633",
        },
      }
    );
    World.add(world, wall);
  });
});

// -----------------Displaying vertical grid walls----------------
verticals.forEach((row, rowIndex) => {
  row.forEach((openWall, columnIndex) => {
    if (openWall === true) {
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      gridWall,
      unitLengthY + gridWall,
      {
        isStatic: true,
        label: "wall",
        render: {
          fillStyle: "#ff6633",
        },
      }
    );
    World.add(world, wall);
  });
});

// -----------------Displaying Goal----------------
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    isStatic: true,
    label: "goal",
    render: {
      fillStyle: "green",
    },
  }
);
World.add(world, goal);

//-----------------Displaying Ball-----------------
const radius = Math.min(unitLengthX, unitLengthY) / 2;
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, radius * 0.7, {
  label: "ball",
  render: {
    fillStyle: "#003250",
  },
});
World.add(world, ball);

// ==================Event Listener================
const { x, y } = ball.velocity;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "w") {
    Body.setVelocity(ball, { x, y: y - 3 });
  }
  if (e.key === "ArrowDown" || e.key === "s") {
    Body.setVelocity(ball, { x, y: y + 3 });
  }
  if (e.key === "ArrowRight" || e.key === "d") {
    Body.setVelocity(ball, { x: x + 3, y });
  }
  if (e.key === "ArrowLeft" || e.key === "a") {
    Body.setVelocity(ball, { x: x - 3, y });
  }
});
arrowUp.addEventListener("click", () => {
  Body.setVelocity(ball, { x, y: y - 3 });
});
arrowDown.addEventListener("click", () => {
  Body.setVelocity(ball, { x, y: y + 3 });
});
arrowLeft.addEventListener("click", () => {
  Body.setVelocity(ball, { x: x - 3, y });
});
arrowRight.addEventListener("click", () => {
  Body.setVelocity(ball, { x: x + 3, y });
});

setTimeout(() => {
  tooltip.classList.add("hidden");
  tooltip1.classList.add("hidden");
}, 5000);

document.querySelector(".btn").addEventListener("click", () => {
  location.reload();
});

// -----------------Win Scenario----------------------

Events.on(engine, "collisionStart", (e) => {
  e.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      world.gravity.y = 1;
      winMessage.classList.remove("hidden");
      world.bodies.forEach((element) => {
        if (element.label === "wall") {
          Body.setStatic(element, false);
        }
      });
    }
  });
});

//  alert("Coonected");

// -----------------Countdown Timer----------------------

// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// // Update the count down every 1 second
// setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

//     // If the count down is finished, write some text
//     if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);
