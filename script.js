var states = new Array(); //value 0 = blank, 1 = X, 2 = O
var turn = 1; // value 1= player 0= computer
var game_over = false;
var cur_x;
var cur_y;
function set_states_init(){
	$("#board tr").each(function(index_tr, element_tr) { 	
		states[index_tr] = new Array();		
		$(element_tr).children("td").children("div").each(function(index_div, element_div) {
			$(element_div).attr("position-x",index_div);
			$(element_div).attr("position-y",index_tr);
			states[index_tr][index_div] = 0;
		});
	});
}

function set_position(x,y){
	if(x < 0 || x >=20 || y < 0 || y >=20){
		return false;	
	}
	if(states[y][x]!=0){
		return false;	
	}
	var img = "";
	var value ="";
	if(turn==1){
		img = "cross.png";
		value = 1;
	}else{
		img = "circle.png";
		value = 2;
	}
	states[y][x] = value;
	$('[position-x="'+x+'"][position-y="'+y+'"]' ).css({background:'url('+img+')'});
	return true;
}

function bind_event(){
	$("#board div").click(function(e) {
		if(game_over == true){
			return;	
		}
        if(turn ==1){
			var x = $(this).attr("position-x");
			var y = $(this).attr("position-y");
			if(set_position(x,y)){
				check_winner();
				cur_x=x;
				cur_y=y;
				turn =0;				
				compute_play();
				
			}
		}
    });	
}
function compute_play(){
	
	if(game_over == true){
		return;	
	}
	//var x= Math.floor(Math.random()*20);
	//var y= Math.floor(Math.random()*20);
	var x = cur_x;
	var y = cur_y;
	var rnd ;
	while(set_position(x,y)==false){
		if(x >=20){
			x = cur_x;	
		}
		if(y >=20){
			y = cur_y;	
		}
		rnd= Math.floor(Math.random()*4);
		if(rnd==0){
			x = x+1;
		}else if(rnd==1){
			x = x-1;
		}else if(rnd =2){
			y = y+1;
		}else if(rnd ==3){
			y = y-1;
		}
		//x= Math.floor(Math.random()*20);
		//y= Math.floor(Math.random()*20);
	}
	check_winner();	
	turn =1;
}
$(document).ready(function(){
	set_states_init();
	bind_event();
});

function check_winner(){ 
	if(game_over == true){
		return;	
	}
	//check left to right
	var tmp = 0;
	var tmp_player ="";
	var player ="";  // value 1= player 0= computer
	for(i=0;i<20;i++){ 
		for(j=0;j<20;j++){
			var value = states[i][j];
			if(value==1){
				player = 1;
			}else if(value==2){
				player = 0;
			}else{
				tmp=0;
				continue;
			}
			if(tmp_player ==""){
				tmp_player = player;	
			}
			if(player==tmp_player){
				tmp+=1;
			}else{
				tmp=1;	
			}
			
			if(tmp==5){
				if(player==1){
					alert("You win the game!");
				}else if(player==0){
					alert("You lose the game!");	
				}
				game_over = true;
				break;
			}
		}
	}
	
	//check top to bottm
	tmp = 0;
	tmp_player ="";
	player ="";  // value 1= player 0= computer
	for(i=0;i<20;i++){ 
		for(j=0;j<20;j++){
			var value = states[j][i];
			if(value==1){
				player = 1;
			}else if(value==2){
				player = 0;
			}else{
				tmp=0;
				continue;
			}
			if(tmp_player ==""){
				tmp_player = player;	
			}
			if(player==tmp_player){
				tmp+=1;
			}else{
				tmp=1;	
			}
			
			if(tmp==5){
				if(player==1){
					alert("You win the game!");
				}else if(player==0){
					alert("You lose the game!");	
				}
				game_over = true;
				break;
			}
		}
	}
	//check cross left to right above
	tmp = 0;
	tmp_player ="";
	player ="";  // value 1= player 0= computer
	var n;
	for(i=0;i<20;i++){ 
		n = i;
		for(j=0;j<20;j++){
			var m = j;
			var value = states[m][++n];
			if(i==0){
				//alert(m+","+n);
			}
			if(value==1){
				player = 1;
			}else if(value==2){
				player = 0;
			}else{
				tmp=0;
				continue;
			}
			if(tmp_player ==""){
				tmp_player = player;	
			}
			if(player==tmp_player){
				tmp+=1;
			}else{
				tmp=1;	
			}
			
			if(tmp==5){
				if(player==1){
					alert("You win the game!");
				}else if(player==0){
					alert("You lose the game!");	
				}
				game_over = true;
				break;
			}
		}
	}
	//check cross left to right below
	tmp = 0;
	tmp_player ="";
	player ="";  // value 1= player 0= computer
	for(i=19;i>=0;i--){ 
		n = i;
		for(j=19;j>=0;j--){
			var m = j;
			var value = states[m][--n];
			if(i==19){
				//alert(m+","+n);
			}
			if(value==1){
				player = 1;
			}else if(value==2){
				player = 0;
			}else{
				tmp=0;
				continue;
			}
			if(tmp_player ==""){
				tmp_player = player;	
			}
			if(player==tmp_player){
				tmp+=1;
			}else{
				tmp=1;	
			}
			
			if(tmp==5){
				if(player==1){
					alert("You win the game!");
				}else if(player==0){
					alert("You lose the game!");	
				}
				game_over = true;
				break;
			}
		}
	}
	
	//check cross right to left above
	tmp = 0;
	tmp_player ="";
	player ="";  // value 1= player 0= computer
	var n;
	for(i=19;i>=0;i--){ 
		n = i;
		for(j=0;j<20;j++){
			var m = j;
			var value = states[m][--n];
			if(i==0){
				//alert(m+","+n);
			}
			if(value==1){
				player = 1;
			}else if(value==2){
				player = 0;
			}else{
				tmp=0;
				continue;
			}
			if(tmp_player ==""){
				tmp_player = player;	
			}
			if(player==tmp_player){
				tmp+=1;
			}else{
				tmp=1;	
			}
			
			if(tmp==5){
				if(player==1){
					alert("You win the game!");
				}else if(player==0){
					alert("You lose the game!");	
				}
				game_over = true;
				break;
			}
		}
	}
	
	//check cross right to left below
	tmp = 0;
	tmp_player ="";
	player ="";  // value 1= player 0= computer
	var n;
	for(i=0;i<20;i++){ 
		n = i;
		for(j=19;j>=0;j--){
			var m = j;
			var value = states[m][++n];
			if(i==0){
				//alert(m+","+n);
			}
			if(value==1){
				player = 1;
			}else if(value==2){
				player = 0;
			}else{
				tmp=0;
				continue;
			}
			if(tmp_player ==""){
				tmp_player = player;	
			}
			if(player==tmp_player){
				tmp+=1;
			}else{
				tmp=1;	
			}
			
			if(tmp==5){
				if(player==1){
					alert("You win the game!");
				}else if(player==0){
					alert("You lose the game!");	
				}
				game_over = true;
				break;
			}
		}
	}
}
