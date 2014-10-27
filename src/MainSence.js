


var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var bglayer = new MainLayer();
        this.addChild(bglayer);
    }
});

