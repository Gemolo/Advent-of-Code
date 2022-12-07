function day4(){
	var lista = document.getElementById("lista").innerHTML;
	var arr = [];
	var doppioni = 0;
	var parte2 = 0;
	arr = lista.split("\n");
	for(var i = 0 ; i< arr.length; i++){
		arr[i] = arr[i].split(",")
		for(var j = 0; j < arr[i].length; j++){
		  arr[i][j] = arr[i][j].trim().split("-");
		  arr[i][j] = arr[i][j].map(str => {
			return Number(str);
		  });
		}	
	}
	for(var i = 0; i < arr.length; i++){
		if(arr[i][0][0] <= arr[i][1][0] && arr[i][0][1] >= arr[i][1][1] || arr[i][0][0] >= arr[i][1][0] && arr[i][0][1] <= arr[i][1][1]){
				doppioni++;
		}
		if(arr[i][0][0] < arr[i][1][0] && arr[i][0][1] < arr[i][1][0] || arr[i][0][0] > arr[i][1][1] && arr[i][0][1] > arr[i][1][1]){
				parte2+=0;
		}else{
				parte2+=1;
		}
		
	}
	console.log(doppioni, parte2);
}

function day5(){
	var pila = createArrStacks();
	var mosse = createMoves();
	
	//pila = cratesMovingAtOnce(pila, mosse);
	pila = cratesMoving(pila, mosse);
	console.log(pila);
	var soluzione = "";
	for(var i = 0; i < pila.length; i++){
		soluzione = soluzione.concat(pila[i][pila[i].length - 1]);
	}
	for(var i = 0; i < soluzione.length; i++){
		soluzione = soluzione.replace('[', '');
		soluzione = soluzione.replace(']', '');
	}
	console.log(soluzione);
}

function cratesMoving(pila, mosse){
	for(var i = 0; i < mosse.length; i++){
		var num = mosse[i][0];
		var from = mosse[i][1] - 1;
		var to = mosse[i][2] - 1;
		var len = pila[from].length - 1;
		var temp = [];
		for(var j = 0; j < num; j++){
			temp.push(pila[from].pop());						
		}
		for(var j = 0; j < num; j++){
			pila[to].push(temp.pop());			
		}
		
	}
	return pila;
}

function cratesMovingAtOnce(pila,  mosse){
	for(var i = 0; i < mosse.length; i++){
		var num = mosse[i][0];
		var from = mosse[i][1] - 1;
		var to = mosse[i][2] - 1;
		var len = pila[from].length - 1;
		for(var j = 0; j < num; j++){
			var temp = pila[from].pop();
			//console.log(temp);
			pila[to].push(temp);
		}
	}
	return pila;
}

function createMoves(){
	var moves = document.getElementById("mosse").innerHTML;
	var ret = [];
	moves = moves.split("\n");
	for(var i = 0; i < moves.length; i++){
		moves[i] = moves[i].toString().split(" ");
	}
	
	for(var i = 0; i < moves.length; i++){
		ret[i] = [];
		for(var j = 1; j <= 5; j+=2){
			ret[i].push(moves[i][j]);
		}
	}
	return ret;
}

function createArrStacks(){
	var cargo = document.getElementById("cargo").innerHTML;
	var arrStacks = [];
	for(var i = 0; i < 9; i++){
		arrStacks[i] = [];
	}
	
	cargo = cargo.split("\n");
	cargo.pop();
	
	for(var i = 0; i < cargo.length; i++){
		cargo[i] = cargo[i].split(" ");
	}
	var x = 0;
	
	
	for(var i = cargo.length - 1; i >= 0 ; i--){
		x++;
		for(var j = 0; j < cargo[i].length; j++){
			//console.log(i,j, cargo[i][j]);
			if(cargo[i][j] !== "[]"){
				arrStacks[j].push(cargo[i][j]);
			}
		}
	}
	
	return arrStacks;
}

function day6(){
	var codice = document.getElementById("codice").innerHTML;
	console.log(startOf(codice, 14));
}

function startOf(codice, len){
	for(var i = 0; i < codice.length - len; i++){
		var temp = "";
		var doppio = false;
		
		for(var j = 0; j < len; j++){
			if(!temp.includes(codice[i + j])){
				temp = temp.concat(codice[i + j]);
			} else doppio = true;
		}
		
		if(!doppio){
			return i + j ;
		}
	}
	return -1;
}

