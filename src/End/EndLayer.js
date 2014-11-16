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
		
		var heiban = cc.Sprite.create(res.heiban_png);
		heiban.x=size.width/2;
		heiban.y=size.height/2+90;
		heiban.anchorX = 0.5;
		heiban.anchorY = 0.5;
		
		this.addChild(heiban,6);
		

		//分数公布
		var endString = "";
		if (score<100) {
			endString = "亲，你的小屏幕失灵了么？\n才撸"+score+"次，怎么拿的出手？";
		} else if(score < 380) {
			endString = "不错哟，一次性撸了"+score+"次\n那么问题来了…………\n几根手指头同时撸最强？\n赶紧去炫耀炫耀吧！";
		} else {
			endString = ""+score+"次!!!\n你个撸sir…………\n手指快到没朋友！\n赶紧去炫耀炫耀吧！";
		}
		var la = cc.LabelTTF.create();
		la.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
		la.x=size.width/2 -20;
		la.y=170;
		la.setString(endString);
		la.setFontSize(32);
		//this.addChild(la);
		heiban.addChild(la);
		//
		
		
		
		//添加重新开始的BUTTON
		var againItem = new cc.MenuItemImage(
				res.again_png,
				res.again_png,
				function () {
					cc.log("again");
					//cc.director.replaceScene(new PlayScene());
					cc.director.runScene(new PlayScene());
					
				});

		againItem.attr({
			x: size.width/4*3,
			y: 200,
			anchorX: 0.5,
			anchorY: 0.5
		});

		var againmenu = new cc.Menu(againItem); 
		//menu.addChild();
		againmenu.x = 0;
		againmenu.y = 0;
		this.addChild(againmenu, 5);
		//if (sys.isMobile) {
			share(1,score,99);
		//}
		
		
		//添加分享按钮
		var shareItem = new cc.MenuItemImage(
				res.share_png,
				res.share_png,
				function () {
					cc.log("share");
					var share = new ShareUI();
					cc.director.getRunningScene().addChild(share,15);
					//cc.director.replaceScene(new PlayScene());
					//cc.director.runScene(new PlayScene());

				});

		shareItem.attr({
			x: size.width/4,
			y: 200,
			anchorX: 0.5,
			anchorY: 0.5
		});

		var sharemenu = new cc.Menu(shareItem); 
		//menu.addChild();
		sharemenu.x = 0;
		sharemenu.y = 0;
		this.addChild(sharemenu, 5);

		return true;
	}
});

var ShareUI = cc.LayerColor.extend({
	ctor: function () {
		this._super(cc.color(0, 0, 0, 188), cc.winSize.width, cc.winSize.height);

		var arrow = new cc.Sprite(res.arrow_png);
		arrow.anchorX = 1;
		arrow.anchorY = 1;
		arrow.x = cc.winSize.width - 15;
		arrow.y = cc.winSize.height - 5;
		this.addChild(arrow);

		var label = new cc.LabelTTF("请点击右上角的菜单按钮\n然后\"分享到朋友圈\"\n测测好友的手指灵活度吧", "宋体", 32, cc.size(cc.winSize.width*0.7, 250), cc.TEXT_ALIGNMENT_CENTER);
		label.x = cc.winSize.width/2;
		label.y = cc.winSize.height - 100;
		label.anchorY = 1;
		label.shadowColor = cc.color(255,255,255);
		label.shadowBlur = 50;
		this.addChild(label);
	},
	onEnter: function () {
		this._super();
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches:true,
			onTouchBegan: function (touch, event) {
				return true;
			},
			onTouchEnded:function(t, event){
				event.getCurrentTarget().removeFromParent();
			}
		}, this);
	}
});