var PlayBackgroundLayer = cc.Layer.extend({
	
	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		/////////////////////////////
		// 2. add a menu item with "X" image, which is clicked to quit the program
		//    you may modify it.
		// ask the window size
		var size = cc.winSize;
		var bgSprite = cc.Sprite.create(res.BackGround_jpg);
		bgSprite.attr({
			x:size.width/2,
			y:size.height/2
		});
		this.addChild(bgSprite);
		
		//this.times = 100;
		
		
		
		return true;
	}
});