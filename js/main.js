window.onload = function() {
	var box = new boxMap();
	box.build();
	var move_box = new moveBox();
	move_box.init();
	move_box.turnRight();
	setTimeout(function() {
		move_box.moveRight();
	},1000);
	setTimeout(function() {
		move_box.turnLeft();
	},2000);
	
}


var boxMap = function() {
	this.num = 15;
	this.build = function() {
		var top_num = document.getElementById("top-num");
		var box_board = document.getElementById("box-board");
		var num_frag = document.createDocumentFragment();
		var board_frag = document.createDocumentFragment();
		for(var i=0;i<this.num;i++) {
			var oNum = document.createElement("span");
			oNum.innerHTML = i+1;
			addClass(oNum,"small-box");
			num_frag.appendChild(oNum);
			for(var j=0;j<(this.num+1);j++) {
				var oBoard = document.createElement("span");
				addClass(oBoard,"small-box");
				if(j%(this.num+1) === 0) {
					oBoard.innerHTML = i+1;
					addClass(oBoard,"left-num");
				} else {
					addClass(oBoard,"small-board");
				}
				
				if((j+1)%(this.num+1) === 0) {
					oBoard.style.borderRight = "1px solid #e6e6e6";
				}
				if((i+1) === this.num) {
					oBoard.style.borderBottom = "1px solid #e6e6e6";
				}
				board_frag.appendChild(oBoard);
			}
		}
		top_num.appendChild(num_frag);
		box_board.appendChild(board_frag);
	}
}


var moveBox = function() {
	this.oBox = document.getElementById("move-box");
	this.oBox_left = this.oBox.style.left;
	this.oBox_top = this.oBox.style.top;
	this.rot_deg = 
	this.init = function() {
		this.oBox_left = "41px";
		this.oBox_top = "1px";
	}
	this.turnRight = function() {
		addClass(this.oBox,"turn-right");
	}
	this.turnLeft = function() {
		addClass(this.oBox,"turn-left");
	}
	this.moveRight = function() {
		var oLeft = parseInt(this.oBox_left);
		oLeft += 40;
		this.oBox.style.left = oLeft+"px";
	}
}
