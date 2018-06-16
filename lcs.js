var canvas = document.getElementById('cvs2');
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

c.font = "15px Courier New"
c.fillText("function LCSLength(X[1..m], Y[1..n])",50,450);
c.fillText("    C = array(0..m, 0..n)",50,470);
c.fillText("    for i := 0..m",50,490);
c.fillText("       C[i,0] = 0",50,510);
c.fillText("    for j := 0..n",50,530);
c.fillText("       C[0,j] = 0",50,550);
c.fillText("    for i := 1..m",50,570);
c.fillText("        for j := 1..n",50,590);
c.fillText("            if X[i] = Y[j]",50,610);
c.fillText("                C[i,j] := C[i-1,j-1] + 1",50,630);
c.fillText("            else",50,650);
c.fillText("                C[i,j] := max(C[i,j-1], C[i-1,j])",50,670);
c.fillText("    return C[m,n]",50,690);

code_if = [50,610];
code_true = [50,630];
code_false = [50,670];

function change_if (color) {
	c.clearRect(code_if[0],code_if[1] - 15,1000,15);
	c.font = "15px Courier New"
	c.fillStyle = color;
	c.fillText("            if X[i] = Y[j]",50,610);
}

function change_true (color) {
	c.clearRect(code_true[0],code_true[1] - 15,1000,15);
	c.font = "15px Courier New"
	c.fillStyle = color;
	c.fillText("                C[i,j] := C[i-1,j-1] + 1",50,630);
}

function change_false (color) {
	c.clearRect(code_false[0],code_false[1] - 15,1000,15);
	c.font = "15px Courier New"
	c.fillStyle = color;
	c.fillText("                C[i,j] := max(C[i,j-1], C[i-1,j])",50,670);
}

code_if2 = [50,510];
code_return1 = [50,530];
code_return2 = [50,570];
code_return3 = [50,590];

function change_if2 (color) {
	c.clearRect(code_if2[0],code_if2[1] - 15,1000,15);
	c.font = "15px Courier New"
	c.fillStyle = color;
	c.fillText("    if  X[i] = Y[j]",50,610);
}

function change_return1 (color) {
	c.clearRect(code_return1[0],code_return1[1] - 15,1000,15);
	c.font = "15px Courier New"
	c.fillStyle = color;
	c.fillText("                C[i,j] := C[i-1,j-1] + 1",50,630);
}

function change_return2(color) {
	c.clearRect(code_return2[0],code_return2[1] - 15,1000,15);
	c.font = "15px Courier New"
	c.fillStyle = color;
	c.fillText("                C[i,j] := max(C[i,j-1], C[i-1,j])",50,670);
}

function change_return3(color) {
	c.clearRect(code_return3[0],code_return3[1] - 15,1000,15);
	c.font = "15px Courier New"
	c.fillStyle = color;
	c.fillText("                C[i,j] := max(C[i,j-1], C[i-1,j])",50,670);
}

c.font = "30px Arial";
c.strokeStyle = 'rgba(200,100,20,0.7)';

var table_canvas = document.getElementById('cvs1');
table_canvas.width = window.innerWidth/2;
table_canvas.height = 0.95*window.innerHeight;
var tc = table_canvas.getContext('2d');
tc.strokeStyle = 'rgba(200,100,20,0.7)';


//functions and classes
function Char(value,dim) {
	this.Value = value;
	this.Dim = dim;
	this.RectDim = [dim[0],dim[1]-font_size,font_size,font_size];
	this.RectColor = 'rgba(200,100,20,0.7)';

	this.Draw = function(x,y){
		c.font = "30px Arial"
		c.fillStyle = 'rgba(0,0,0,1)'
		c.fillText(this.Value,this.Dim[0],this.Dim[1]);
	}
	this.DrawRect = function(){
		c.beginPath();
		c.strokeStyle = this.RectColor;
		c.rect(this.RectDim[0],this.RectDim[1],this.RectDim[2],this.RectDim[3]);
		c.stroke();
		c.closePath();
	}
	this.RedrawRect = function(color){
		this.RectColor = color;
		this.ClearRect();
		this.DrawRect();
		this.Draw();
	}
	this.ClearRect = function(){
		c.clearRect(this.RectDim[0]-20,this.RectDim[1]-20,this.RectDim[2]+40,this.RectDim[3]+40);
	}
}

function Table (X,Y) {
	this.m = X.length;
	this.n = Y.length;
	this.cell_size = ((window.innerWidth/2) - 100)/(this.n+1);
	this.table_width = this.cell_size * (this.n+1)
	this.table_height = this.cell_size * (this.m+1)

	this.table_array = new Array(this.m+1);

	for (var i = 0; i < this.m+1; i++) {
		this.table_array[i] = new Array(this.n+1);
	}

	for (var i = 0; i < this.m+1; i++) {
		for (var j = 0; j < this.n+1; j++) {
			if ((i == 1 && j>0) || (j == 1 && i>0)) {
				this.table_array[i][j] = new Table_Cell(50+(j*this.cell_size),50+(i*this.cell_size),this.cell_size,this.cell_size,0);
			}
			if (i == 0 && j > 0) {
				this.table_array[i][j] = new Table_Cell(50+(j*this.cell_size),50+(i*this.cell_size),this.cell_size,this.cell_size,Y.charAt(j-1));
			}
			else if (j == 0 && i > 0) {
				this.table_array[i][j] = new Table_Cell(50+(j*this.cell_size),50+(i*this.cell_size),this.cell_size,this.cell_size,X.charAt(i-1));
			}
			else{
				this.table_array[i][j] = new Table_Cell(50+(j*this.cell_size),50+(i*this.cell_size),this.cell_size,this.cell_size,"");
			}
		}
	}

	this.DrawTable = function () {
		x = 50;
		y = 50;
		for (var i = 0; i <= this.n+1; i++) {
			tc.beginPath();
			tc.moveTo(x,y);
			tc.lineTo(x,y+this.table_height);
			tc.stroke();
			tc.closePath();
			x = x + this.cell_size;
		}
		x = 50;
		y = 50;
		for (var i = 0; i <= this.m+1; i++) {
			tc.beginPath();
			tc.moveTo(x,y);
			tc.lineTo(x+this.table_width,y);
			tc.stroke();
			tc.closePath();
			y = y + this.cell_size;
		}

		tc.font = this.cell_size.toString() + "px Arial";;
		for (var i = 0; i < this.m+1; i++) {
			for (var j = 0; j < this.n+1; j++) {
				this.table_array[i][j].DrawChar(this.cell_size);
			}
		}
	}
}

function Table_Cell (x,y,w,h,char) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.char = char;
	this.DrawChar = function() {
		tc.fillStyle = 'rgba(0,0,0,1)';
		tc.fillText(this.char,this.x,this.y + this.h);
	}
	this.UpdateChar = function (char) {
		this.char = char;
		this.DrawChar();
	}
	this.FillCell = function (color) {
		tc.fillStyle = color;
		tc.fillRect(this.x,this.y,this.w,this.h);
		this.DrawChar();
		this.RectCell('rgba(200,100,20,0.7)');
	}
	this.RectCell = function (color) {
		tc.strokeStyle = color;
		tc.beginPath();
		tc.rect(this.x,this.y,this.w,this.h);
		tc.stroke();
		tc.closePath();
	}
}

function lcs_length (X,Y) {
	var M = new Array(X.length);
	for (var i = 0; i < X.length; i++) {
		M[i] = new Array(Y.length);
	}
	for (var i = 0; i < X.length; i++) {
		M[i][0] = 0;
		// table.table_array[i+1][1].UpdateChar(0);
	}
	for (var j = 0; j < Y.length; j++) {
		M[0][j] = 0;
		// table.table_array[1][j+1].UpdateChar(0);
	}

	for (var i = 1; i < X.length; i++) {
		for(var j = 1; j < Y.length; j++){
				if (X.charAt(i) == Y.charAt(j)) {
					M[i][j] = M[i-1][j-1] + 1;
					// table.table_array[i+1][j+1].UpdateChar(table.table_array[i][j].char+1);
				}
				else {
					M[i][j] = Math.max(M[i][j-1],M[i-1][j]);
					// 	table.table_array[i+1][j+1].UpdateChar(Math.max(table.table_array[i+1][j].char,table.table_array[i][j+1].char));
				}
		}
	}
	return M;
}

function backtrack (C,X,Y,i,j) {
	s1[i].DrawRect();
	s2[j].DrawRect();
	table.table_array[i+1][j+1].FillCell('rgba(227,184,56,1)');
	setTimeout(function(){
		s1[i].ClearRect();
		s2[j].ClearRect();
		s1[i].Draw();
		s2[j].Draw();
		if (i == 0 || j == 0){
        return "";
		}
	    if (X.charAt(i) == Y.charAt(j)){
	    	s1[i].RedrawRect('rgba(0,128,0,1)');
			s2[j].RedrawRect('rgba(0,128,0,1)');
			table.table_array[i+1][j+1].FillCell('rgba(0,128,0,1)');
			tc.fillText(X.charAt(i),lcs_x,lcs_y);
			lcs_x = lcs_x - 50;
	        return backtrack(C, X, Y, i-1, j-1) + X.charAt(i);
	    }
	    if (C[i][j-1] > C[i-1][j]){
	        return backtrack(C, X, Y, i, j-1)
	    }
	    return backtrack(C, X, Y, i-1, j)
	},delayInMilliseconds);
}

function setDelay(i,j,delay_time) {
	// if (table.table_array[i+1][0].char == table.table_array[0][j+1].char) {
	// 	table.table_array[i+1][0].FillCell('rgba(0,255,0,1)');
	// 	table.table_array[0][j+1].FillCell('rgba(0,255,0,1)');
	// }
	// else {
	// 	table.table_array[i+1][0].FillCell('rgba(227,184,56,1)');
	// 	table.table_array[0][j+1].FillCell('rgba(227,184,56,1)');
	// }
  	setTimeout(function(){
  		change_if('rgba(0,0,0,1)');
	  	if (table.table_array[i+1][0].char == table.table_array[0][j+1].char) {
	  		change_true('rgba(255,0,0,1)');
	  		// table.table_array[i][j].FillCell('rgba(0,128,0,0.3)');
		}
		else {
			change_false('rgba(255,0,0,1)');
		}
		// if (table.table_array[i+1][0].char == table.table_array[0][j+1].char) {
	 //  		table.table_array[i][j].FillCell('rgba(0,128,0,0.3)');
		// }
		// else if (table.table_array[i+1][j].char > table.table_array[i][j+1].char) {
		// 	table.table_array[i+1][j].FillCell('rgba(0,128,0,0.3)');
		// }
		// else{
		// 	table.table_array[i][j+1].FillCell('rgba(0,128,0,0.3)');
		// }
	  	table.table_array[i+1][0].FillCell('rgba(255,255,255,1)');
	  	table.table_array[0][j+1].FillCell('rgba(255,255,255,1)');
	    table.table_array[i+1][j+1].UpdateChar(m[i][j]);
 	}, (delay_time/2 + delay_time*j + delay_time*str2.length*i));
}

function setColorDelay(i,j,delay_time) {
  setTimeout(function(){
  	change_if('rgba(255,0,0,1)');
  	change_false('rgba(0,0,0,1)');
  	change_true('rgba(0,0,0,1)');
  	if (table.table_array[i+1][0].char == table.table_array[0][j+1].char) {
  		table.table_array[i+1][0].FillCell('rgba(0,255,0,1)');
		table.table_array[0][j+1].FillCell('rgba(0,255,0,1)');
  	}
  	else {
  		table.table_array[i+1][0].FillCell('rgba(227,184,56,1)');
		table.table_array[0][j+1].FillCell('rgba(227,184,56,1)');
  	}
  }, (delay_time*j + delay_time*str2.length*i));
}

var font_size = 30;
var submit_strings = document.getElementById('submit_strings');
var str1 = "ØYASHWANTH1";
var str2 = "ØYASHWANTH2";
var s1 = [];
var s2 = [];

var w = 0;
for(var i = 0; i < str1.length; i++){
	s1.push(new Char(str1.charAt(i),[50+w,200]));
	if(!i==0){
		s1[i].Draw();
	}
	w  = w + 70;
}

w = 0;
for(var i = 0; i < str2.length; i++){
	s2.push(new Char(str2.charAt(i),[50+w,350]));
	if (!i==0) {
		s2[i].Draw();
	}
	w  = w + 70;
}

var table = new Table(str1,str2);
table.DrawTable();

var lcs_x = window.innerWidth/2 - 70;
var lcs_y = window.innerHeight - 70;
var delayInMilliseconds = 2000;


m = lcs_length(str1,str2);

// for (var i = 1; i < str1.length; i++) {
// 	table.table_array[i][1].char = 0;
// }

// for(var j = 1; j < str2.length; j++){
// 	table.table_array[1][j].char = 0;
// }

var time = 1000;

var delay_time = 1997;
for (var i = 0; i < str1.length; i++) {
	for(var j = 0; j < str2.length; j++){
		setColorDelay(i,j,delay_time);
		setDelay(i,j,delay_time);
	}
}

console.log(m);
console.log(m[str1.length-1][str2.length-1]);

var lcs

var button = document.getElementById('get_lcs_btn');
button.onclick = function () {
	c.clearRect(40,420,1000,2000);
	c.fillStyle = 'rgba(0,0,0,1)';
	c.fillText("function backtrack(C[0..m,0..n], X[1..m], Y[1..n], i, j)",50,450);
	c.fillText("    if i = 0 or j = 0",50,470);
	c.fillText("        return '' ",50,490);
	c.fillText("    if  X[i] = Y[j]",50,510);
	c.fillText("        return backtrack(C, X, Y, i-1, j-1) + X[i]",50,530);
	c.fillText("    if C[i,j-1] > C[i-1,j",50,550);
	c.fillText("        return backtrack(C, X, Y, i, j-1)",50,570);
	c.fillText("    return backtrack(C, X, Y, i-1, j)",50,590);
	lcs = backtrack(m,str1,str2,str1.length-1,str2.length-1);
};

console.log(lcs);
