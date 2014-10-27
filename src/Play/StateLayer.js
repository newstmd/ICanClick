var StateLayer = cc.Layer.extend({

	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		/////////////////////////////
		// 2. add a menu item with "X" image, which is clicked to quit the program
		//    you may modify it.
		// ask the window size
		var size = cc.winSize;
		
		/*var timeLabel = cc.LabelTTF.create();
		timeLabel.setString(times);
		timeLabel.attr({
			x:size.width/2,
			y:size.height/8*7
		});
		this.addChild(timeLabel);*/
		
		
		scoreLabel = new cc.LabelTTF("score:0", "Arial", 50);
		scoreLabel.attr({
			x:size.width/2,
			y:size.height - 40
		});
		this.addChild(scoreLabel, 5);
		
		timeoutLabel = cc.LabelTTF.create("" + this.timeout, "Arial", 50);
		timeoutLabel.x = 50;
		timeoutLabel.y = size.height - 40;
		this.addChild(timeoutLabel, 5);

		return true;
	}
});