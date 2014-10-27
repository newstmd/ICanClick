const total=20;
var score=0;
var scoreLabel=null;
var timeout=0;
var timeoutLabel=null;
var isPlaying = 0;
var PlayScene = cc.Scene.extend({
	
	onEnter:function () {
		
		this._super();
		
		
		var bglayer = new PlayBackgroundLayer();
		this.addChild(bglayer);
		
		var statelayer = new StateLayer();
		this.addChild(statelayer);
		
		this.restartGame();
		
	},
	addScore:function(){
		
		if (isPlaying>0) {
			score += 1;
			scoreLabel.setString("score:" + score);
		}
		
	},
	subtractTime:function(){
		timeout -=1;
		timeoutLabel.setString(timeout);
	},
	resetState:function(){
		score = 0;
		scoreLabel.setString("score:0");
		
		timeout = total;
		timeoutLabel.setString(total);
	},
	restartGame:function(){
		//清空数据环境
		this.resetState();
		
		//倒计时3秒再开始
		
		//游戏倒计时开始，每秒全局判断
		this.schedule(this.gameing,1);
		
	},
	gameing:function(){
		this.subtractTime();
		
		
		if (timeout==0) {//当计时结束时，停止计时器，显示成绩，分享！
			isPlaying = 0;
			this.unschedule(this.gameing);
		}
	}
	
	
});