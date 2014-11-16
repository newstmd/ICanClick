var endLayer = cc.Layer.extend({

	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		/////////////////////////////
		// 2. add a menu item with "X" image, which is clicked to quit the program
		//    you may modify it.
		// ask the window size
		var size = cc.winSize;
		//背景
		var bgSprite = cc.Sprite.create(res.BackGround_jpg);
		bgSprite.attr({
			x:size.width/2,
			y:size.height/2
		});
		this.addChild(bgSprite);
		

		//分数公布
		var la = cc.LabelTTF.create();
		la.x=size.width/2;
		la.y=400;
		la.setString("分数："+score);
		la.setFontSize(50);
		this.addChild(la);

		
		/*var button1 = cc.ControlButton.create();
		button1.x=200;
		button1.y=200;
		this.addChild(button1);*/

		var againButton = cc.Sprite.create(res.again_png);
		againButton.x = size.width/4*3;
		againButton.y = 240 ;
		//这里还没做好！
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ALL_AT_ONCE,
			onTouchesMoved: function (touches, event) {
			this.removeFromParent(true);
				cc.log("okok");
			}
		}, againButton);
		
		this.addChild(againButton);

		return true;
	}
});