var PlayScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		
		var bglayer = new PlayBackgroundLayer();
		this.addChild(bglayer);
	}
});