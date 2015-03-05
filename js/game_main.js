// function GameManager(size, InputManager, Actuator, StorageManager) {
function GamePlayer(size) {
    this.size           = size; // Size of the grid
    // this.inputManager   = new InputManager;
    // this.storageManager = new StorageManager;
    // this.actuator       = new Actuator;

    this.crrLevel = 1;
    // 1: color, 2: poly, 4: all
    this.level1 = [{move:20, type:1},{'x':0,'y':0,type:2,color:'green',poly:'1',value:0},{'x':60,'y':0,type:2,color:'green',poly:'1',value:1},{'x':120,'y':0,type:2,color:'green',poly:'1',value:2},{'x':180,'y':0,type:2,color:'green',poly:'1',value:3},{'x':240,'y':0,type:2,color:'green',poly:'1',value:4},{'x':0,'y':60,type:2,color:'green',poly:'1',value:5},{'x':60,'y':60,type:2,color:'green',poly:'1',value:6},{'x':120,'y':60,type:2,color:'green',poly:'1',value:7},{'x':180,'y':60,type:2,color:'green',poly:'1',value:8},{'x':240,'y':60,type:2,color:'green',poly:'1',value:9},{'x':0,'y':120,type:2,color:'green',poly:'1',value:10},{'x':60,'y':120,type:2,color:'green',poly:'1',value:11},{'x':120,'y':120,type:2,color:'green',poly:'1',value:12},{'x':180,'y':120,type:2,color:'green',poly:'1',value:13},{'x':240,'y':120,type:2,color:'green',poly:'1',value:14},{'x':0,'y':180,type:2,color:'green',poly:'1',value:15},{'x':60,'y':180,type:2,color:'green',poly:'1',value:16},{'x':120,'y':180,type:2,color:'green',poly:'1',value:17},{'x':180,'y':180,type:2,color:'green',poly:'1',value:18},{'x':240,'y':180,type:2,color:'green',poly:'1',value:19},{'x':0,'y':240,type:2,color:'green',poly:'1',value:20},{'x':60,'y':240,type:2,color:'green',poly:'1',value:21},{'x':120,'y':240,type:2,color:'green',poly:'1',value:22},{'x':180,'y':240,type:2,color:'green',poly:'1',value:23},{'x':240,'y':240,type:2,color:'green',poly:'1',value:24}];

    this.moveTrigger        = "MSPointerMove pointermove touchmove mousemove";
    this.startTrigger       = "MSPointerDown pointerdown touchstart mousedown";
    this.stopTrigger        = "MSPointerUp pointerup touchend mouseup";
    this.startTriggerArray  = this.startTrigger.split(' ');
    this.moveTriggerArray   = this.moveTrigger.split(' ');
    this.stopTriggerArray   = this.stopTrigger.split(' ');

    this.el  = '#game';
    this.$el = $('#game');

    // setup for start 
    this.setup();
    
}

// set up start
GamePlayer.prototype.setup = function(){
    // init var from level

    

    // draw title div
    this.drawTile(this.level1);

    this.subscribe();

}

GamePlayer.prototype.randonColor = function(){
    var clcode = Math.random() * 4;
    var returndata = '';
    switch (true){
        case ( clcode < 1):
            returndata = 'blue';
            break;
        case (clcode >=1 && clcode <2):
            returndata = 'green';
            break;
        case (clcode >=2 && clcode <3):
            returndata = 'orange';
            break;
        case (clcode >=3):
            returndata = 'red';
        break;

    }
    return returndata;
}

GamePlayer.prototype.drawTile = function(tileArray){
    this.$el.html('');
    // console.debug(tileArray);
    for (var i = 1; i < tileArray.length ; i++) {
        // console.debug(tileArray[i]);
        var crrItem = $('<div class="tile"></div>');
        var color = this.randonColor();
        // crrItem.addClass('tile-'+tileArray[i]['color']).addClass('poly-'+tileArray[i]['poly']);
        crrItem.addClass('tile-'+ color ).addClass('poly-'+tileArray[i]['poly']);
        // this.html('');
        crrItem.attr({'data-value' : tileArray[i]['type']}).css({'left': tileArray[i]['x'],
            'top': tileArray[i]['y']});
        crrItem.html('<span class="back">'+i+'</span>'); //'+(tileArray[i]['value'] + 1)+'
        this.$el.append(crrItem);
        
    };

    $('.game-wrap').width(this.size*60);
}

GamePlayer.prototype.subscribe = function () {
    var self = this;

    // Subscribe to our start event
    this.onStartEvent = function(ev){ self.handleStart(ev); };
    this.$el.on(this.startTrigger, this.onStartEvent);

    // Prevent start events from being gobbled by elements that should allow user interaction
    this.onStartEventOnElementsWithInteraction = function(ev){ ev.stopPropagation(); };
    this.$el.on(
      this.startTrigger,
      this.options.elementsWithInteraction,
      this.onStartEventOnElementsWithInteraction
    );

    // Subscribe to our stop event
    this.onStopEvents = function(ev) { self.handleStop(ev); };
    this.$document.on(this.stopEvents, this.onStopEvents);

    // Subscribe to our move event
    this.onMoveEvents = function(ev){ self.moveEvent = ev; };
    this.$document.on(this.moveTrigger, this.onMoveEvents);
};

GamePlayer.prototype.unsubscribe = function() {
    this.$el.off(this.startTrigger, this.onStartEvent);
    this.$el.off(
      this.startTrigger,
      this.options.elementsWithInteraction,
      this.onStartEventOnElementsWithInteraction
    );
    this.$document.off(this.stopEvents, this.onStopEvents);
    this.$document.off(this.moveTrigger, this.onMoveEvents);
};


GamePlayer.prototype.handleStart = function(ev) {
    $('.test-info').html('start');
};

GamePlayer.prototype.handleMove = function() {
    $('.test-info').append('move');
};

GamePlayer.prototype.handleStop = function(ev) {
    $('.test-info').append('stop');
    
}



$(document).ready(function() {
    // new GamePlayer(8, KeyboardInputManager, HTMLActuator, LocalStorageManager);
	new GamePlayer(5);
})