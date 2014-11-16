

var endSence = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer1 = new endLayer();
		this.addChild(layer1);

	}
}); 

