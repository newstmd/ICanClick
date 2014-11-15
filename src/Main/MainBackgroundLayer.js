var MainLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		/////////////////////////////
		// 2. add a menu item with "X" image, which is clicked to quit the program
		//    you may modify it.
		// ask the window size
		var size = cc.winSize;
		//add title
		var title = cc.Sprite.create(res.title_png);
		title.x = size.width/2;
		title.y = size.height/2;
		this.addChild(title,5);
		
		
		var bgSprite = cc.Sprite.create(res.BackGround_jpg);
		bgSprite.attr({
			x:size.width/2,
			y:size.height/2
		});
		this.addChild(bgSprite,0);
		// add a button
		var closeItem = new cc.MenuItemImage(
				res.Begin_png,
				res.Begin_png,
				function () {
					
					//cc.director.replaceScene(new PlayScene());
					cc.director.runScene(new PlayScene());

				});
			
		closeItem.attr({
			x: size.width/2,
			y: 180,
			anchorX: 0.5,
			anchorY: 0.5
		});

		var menu = new cc.Menu(closeItem); 
		//menu.addChild();
		menu.x = 0;
		menu.y = 0;
		this.addChild(menu, 5);
		
		//文字介绍介绍
		var jieshao = cc.LabelTTF.create();
		jieshao.setString("最新\"减压\"小游戏\n看你30秒能戳她多少次？\n不要戳坏你的小屏幕哟！"); 
		jieshao.x = size.width /2;
		jieshao.y = 350;
		jieshao.setFontSize(30);
		//jieshao._lineWidths = 500;
		jieshao.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
		this.addChild(jieshao,5);

		/////////////////////////////
		// 3. add your codes below...
		// add a label shows "Hello World"
		// create and initialize a label
		//var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
		// position the label on the center of the screen
		//helloLabel.x = size.width / 2;
		//helloLabel.y = 0;
		// add the label as a child to this layer
		//this.addChild(helloLabel, 5);

		// add "HelloWorld" splash screen"
		/*this.sprite = new cc.Sprite(res.BackGround_jpg);
		this.sprite.attr({
			x: size.width / 2,
			y: size.height / 2,
			scale: 0.5,
			rotation: 180
		});
		this.addChild(this.sprite, 0);

		this.sprite.runAction(
				cc.sequence(
						cc.rotateTo(2, 0),
						cc.scaleTo(2, 1, 1)
				)
		);*/
		/*helloLabel.runAction(
				cc.spawn(
						cc.moveBy(2.5, cc.p(0, size.height - 40)),
						cc.tintTo(2.5,255,125,0)
				)
		);*/
		return true;
	}
});