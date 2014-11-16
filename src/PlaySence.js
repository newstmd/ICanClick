var total=3;
var score=0;
var scoreLabel=null;
var timeout=0;
var timeoutLabel=null;
var isPlaying = 1;
var menu = null;
var again = null;
var PlayScene = cc.Scene.extend({
	
	onEnter:function () {
		
		this._super();
		
		
		var bglayer = new PlayBackgroundLayer();
		this.addChild(bglayer);
		
		var statelayer = new StateLayer();
		this.addChild(statelayer);
		
		this.restartGame();
		
		var menu1 = cc.MenuItemImage.create(
				res.button1_png,
				res.button2_png,
				function(){
					addScore();
				});
		
		menu1.attr({
			x: 260 ,
			y: 400,
			anchorX: 0.5,
			anchorY: 0.5
		});
		menu = new cc.Menu(menu1);
		menu.x = 0;
		menu.y = 0;
		this.addChild(menu, 1);
		
		
		
	},
	restartGame:function(){
		//清空数据环境
		resetState();
		

		//倒计时3秒再开始

		//游戏倒计时开始，每秒全局判断
		this.schedule(this.gameing,1);


	},
	gameing:function(){
		subtractTime();


		if (timeout==0) {//当计时结束时，停止计时器，显示成绩，分享！
			isPlaying = 0;
			menu.setEnabled(false);
			this.unschedule(this.gameing); 
			//显示结果界面
			var end = new endLayer();
			end.setTag(9988);
			this.addChild(end,10);
			
		}
	}
		
});
function addScore(){
	if (isPlaying>0) {
		score += 1;
		scoreLabel.setString("score:" + score);
	}
}
function subtractTime(){
	timeout -=1;
	timeoutLabel.setString(timeout);
}

function resetState(){
	score = 0;
	scoreLabel.setString("score:0");

	timeout = total;
	timeoutLabel.setString(total);
}


