// Quynh Ai Nguyen
// Homework 3
// Database

var AM = new AssetManager();
var socket = io.connect("http://24.16.255.56:8888");
var clickedButton = null;

// no inheritance
function Background(game) {
	this.x = 0;
	this.y = 0;
	this.game = game;
  this.ctx = game.ctx;
};

Background.prototype.draw = function () {
	this.ctx.fillStyle = 'black';
	this.ctx.fillRect(this.x, this.y, 800, 600);
};

Background.prototype.update = function () {
};

// GameOfLife class
function GameOfLife(game,width, height) {
	this.width = width;
	this.height = height;
	this.resolution = 10;
	this.cols = this.width / this.resolution;
	this.rows = this.height/ this.resolution;
	
  this.grid = make2DArray(this.cols, this.rows);
  this.grid = random(this.grid, this.cols, this.rows);
  //console.table(this.grid);
	this.game = game;
  this.ctx = game.ctx;
  this.time = 0;
}

function random(grid, cols, rows){
  for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = Math.floor(Math.random() * 2);
		}
  }
  return grid;
}
function gliderGun (grid, cols, rows){
for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // glider gun
        if ((i === 1 && j === 5)  ||  (i === 1 && j === 6)
            || (i === 2 && j === 5) || (i === 2 && j === 6)

            ||  (i === 11 && j === 5) ||  (i === 11 && j === 6)||  (i === 11 && j === 7)
            ||  (i === 12 && j === 4) ||  (i === 12 && j === 8)
            ||  (i === 13 && j === 3) ||  (i === 13 && j === 9)
            ||  (i === 14 && j === 3) ||  (i === 14 && j === 9)
            ||  (i === 15 && j === 6)
            ||  (i === 16 && j === 4) ||  (i === 16 && j === 8)
            ||  (i === 17 && j === 5) ||  (i === 17 && j === 6) ||  (i === 17 && j === 7)
            ||  (i === 18 && j === 6)

            ||  (i === 21 && j === 5) ||  (i === 21 && j === 4) ||  (i === 21 && j === 3)
            ||  (i === 22 && j === 5) ||  (i === 22 && j === 4) ||  (i === 22 && j === 3)
            ||  (i === 23 && j === 2) ||  (i === 23 && j === 6)
            ||  (i === 25 && j === 1) ||  (i === 25 && j === 2)||  (i === 25 && j === 6) ||  (i === 25 && j === 7)

            ||  (i === 35 && j === 3) ||  (i === 35 && j === 4)
            ||  (i === 36 && j === 3) ||  (i === 36 && j === 4) 

            ) {
          grid[i][j] = 1;

        } else {
            grid[i][j] = 0;
        }
      }
    }

  return grid;
}
function spaceShip (grid, cols, rows){
  for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
 
          if ((i === 4 && j === 36) || (i === 4 && j === 37) 
          || (i === 5 && j === 34) || (i === 5 && j === 35) || (i === 5 && j === 37) || (i === 5 && j === 38) 
          || (i === 6 && j === 34) || (i === 6 && j === 35) || (i === 6 && j === 36) || (i === 6 && j === 37)
          || (i === 7 && j === 35) || (i === 7 && j === 36) ||
              
          
          (i === 44 && j === 36) || (i === 44 && j === 37) 
          || (i === 45 && j === 34) || (i === 45 && j === 35) || (i === 45 && j === 37) || (i === 45 && j === 38) 
          || (i === 46 && j === 34) || (i === 46 && j === 35) || (i === 46 && j === 36) || (i === 46 && j === 37)
          || (i === 47 && j === 35) || (i === 47 && j === 36)
              
          ||
              
          
          (i === 24 && j === 36) || (i === 24 && j === 37) 
          || (i === 25 && j === 34) || (i === 25 && j === 35) || (i === 25 && j === 37) || (i === 25 && j === 38) 
          || (i === 26 && j === 34) || (i === 26 && j === 35) || (i === 26 && j === 36) || (i === 26 && j === 37)
          || (i === 27 && j === 35) || (i === 27 && j === 36)
          
          ||
          (i === 64 && j === 36) || (i === 64 && j === 37) 
          || (i === 65 && j === 34) || (i === 65 && j === 35) || (i === 65 && j === 37) || (i === 65 && j === 38) 
          || (i === 66 && j === 34) || (i === 66 && j === 35) || (i === 66 && j === 36) || (i === 66 && j === 37)
          || (i === 67 && j === 35) || (i === 67 && j === 36)

          ) {
            grid[i][j] = 1;
  
          } else {
              grid[i][j] = 0;
          }
        }
      }
  
    return grid;
  }


  function pattern (grid, cols, rows){
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
   
            if ((i === 24 && j === 36) || (i === 24 && j === 37) || (i === 24 && j === 38)
                || (i === 25 && j === 36) ||                      (i === 25 && j === 38)      
                || (i === 26 && j === 36) ||(i === 26 && j === 37) || (i === 26 && j === 38)
                ||
                (i === 28 && j === 36) || (i === 28 && j === 37) || (i === 28 && j === 38)
                || (i === 29 && j === 36) ||                      (i === 29 && j === 38)      
                || (i === 30 && j === 36) ||(i === 30 && j === 37) || (i === 30 && j === 38)) {
              grid[i][j] = 1;
    
            } else {
                grid[i][j] = 0;
            }
          }
        }
      console.table(grid)
      debugger
      return grid;
}

GameOfLife.prototype.draw = function () {
	for (let i = 0; i < this.cols; i++) {
		for (let j = 0; j < this.rows; j++) {
			let x = i * this.resolution;
			let y = j * this.resolution;
			if (this.grid[i][j] === 1) {
				this.ctx.fillStyle = 'white';
				this.ctx.fillRect(x,y,this.resolution-1, this.resolution-1);
			}
		}
	}
}



GameOfLife.prototype.update = function () {
  //debugger
    //console.log(this.clicked)
    let next = make2DArray(this.cols, this.rows);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let state = this.grid[i][j];
        let neighbors = countNeighbors(this.grid, i, j,this.cols, this.rows);
        if (state === 0 && neighbors  === 3) {
          next[i][j] = 1;
          
        } else if ( state === 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }
    this.grid = next;

    document.getElementById('randomButton').onclick = function() {
      clickedButton = "random"
    }
    document.getElementById('gliderGunButton').onclick = function() {
      clickedButton = "gliderGun"
    }
    document.getElementById('spaceShipButton').onclick = function() {
      clickedButton = "spaceShip"
    }
    document.getElementById('patternButton').onclick = function() {
      clickedButton = "pattern"
    }

    if (clickedButton === "random"){
      this.grid = make2DArray(this.cols, this.rows);
      this.grid = random(this.grid, this.cols, this.rows);
      clickedButton = null;
      
    } else if (clickedButton === "gliderGun"){
      this.grid = make2DArray(this.cols, this.rows);
      this.grid = gliderGun(this.grid, this.cols, this.rows);
      clickedButton = null;
    } else if (clickedButton === "spaceShip"){
      this.grid = make2DArray(this.cols, this.rows);
      this.grid = spaceShip(this.grid, this.cols, this.rows);
      clickedButton = null;
    } else if (clickedButton === "pattern"){
      this.grid = make2DArray(this.cols, this.rows);
      this.grid = pattern(this.grid, this.cols, this.rows);
      clickedButton = null;
    }
}


function make2DArray(cols, rows) {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
		for (let j = 0; j < rows; j++) {
		}
	}
	return arr;
}

function countNeighbors(grid, x, y,cols, rows) {
	let sum = 0;
	for (let i = -1; i <2; i++) {
		for (let j = -1; j < 2; j++) {
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];		
		}
	}
	sum -= grid[x][y];
	return sum;
}

AM.downloadAll(function () {

});


window.onload = function () {


  socket.on("connect", function () {        
    console.log("Socket connected.")    
  });    
  socket.on("disconnect", function () {        
    console.log("Socket disconnected.")    
  });    
  socket.on("reconnect", function () {        
    console.log("Socket reconnected.")    
  });
  
  socket.on("load", function (data) {
      //debugger
      gameEngine.entities[1].grid = data.data;
      console.log(data);
  });

  var text = document.getElementById("text");
  var saveButton = document.getElementById("save");
  var loadButton = document.getElementById("load");

  saveButton.onclick = function () {
    console.log("save");
    text.innerHTML = "Saved."

    console.log(gameEngine.entities[1].grid);
    socket.emit("save", { studentname: "Ai Nguyen", statename: "HW3", data: gameEngine.entities[1].grid});
  };

  loadButton.onclick = function () {
    console.log("load");
    text.innerHTML = "Loaded."
    socket.emit("load", { studentname: "Ai Nguyen", statename: "HW3" });
  };

  socket.emit("message", { message: "Ai Nguyen, testing" });

  var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");
	
	var gameEngine = new GameEngine();
	gameEngine.init(ctx);
	gameEngine.start();
	
	gameEngine.addEntity(new Background(gameEngine));
	gameEngine.addEntity(new GameOfLife(gameEngine,canvas.width, canvas.height));
	
  console.log("All Done!");
  
}












