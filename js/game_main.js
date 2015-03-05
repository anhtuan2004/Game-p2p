// function GameManager(size, InputManager, Actuator, StorageManager) {
function GamePlayer(size) {
    this.size           = size; // Size of the grid
    // this.inputManager   = new InputManager;
    // this.storageManager = new StorageManager;
    // this.actuator       = new Actuator;

    this.crrLevel = 1;
    // 1: color, 2: poly, 4: all
    this.level1 = [{move:20, type:1},{'x':0,'y':0,type:2,color:'green',poly:'1',value:0},{'x':60,'y':0,type:2,color:'green',poly:'1',value:1},{'x':120,'y':0,type:2,color:'green',poly:'1',value:2},{'x':180,'y':0,type:2,color:'green',poly:'1',value:3},{'x':240,'y':0,type:2,color:'green',poly:'1',value:4},{'x':0,'y':60,type:2,color:'green',poly:'1',value:5},{'x':60,'y':60,type:2,color:'green',poly:'1',value:6},{'x':120,'y':60,type:2,color:'green',poly:'1',value:7},{'x':180,'y':60,type:2,color:'green',poly:'1',value:8},{'x':240,'y':60,type:2,color:'green',poly:'1',value:9},{'x':0,'y':120,type:2,color:'green',poly:'1',value:10},{'x':60,'y':120,type:2,color:'green',poly:'1',value:11},{'x':120,'y':120,type:2,color:'green',poly:'1',value:12},{'x':180,'y':120,type:2,color:'green',poly:'1',value:13},{'x':240,'y':120,type:2,color:'green',poly:'1',value:14},{'x':0,'y':180,type:2,color:'green',poly:'1',value:15},{'x':60,'y':180,type:2,color:'green',poly:'1',value:16},{'x':120,'y':180,type:2,color:'green',poly:'1',value:17},{'x':180,'y':180,type:2,color:'green',poly:'1',value:18},{'x':240,'y':180,type:2,color:'green',poly:'1',value:19},{'x':0,'y':240,type:2,color:'green',poly:'1',value:20},{'x':60,'y':240,type:2,color:'green',poly:'1',value:21},{'x':120,'y':240,type:2,color:'green',poly:'1',value:22},{'x':180,'y':240,type:2,color:'green',poly:'1',value:23},{'x':240,'y':240,type:2,color:'green',poly:'1',value:24}];

    this.setup();
}

// set up start
GamePlayer.prototype.setup = function(){
    // init var from level
    // 
    

    // draw title
    this.drawTile(this.level1)
}

GamePlayer.prototype.drawTile = function(tileArray){
    $('#game').html('');
    // console.debug(tileArray);
    for (var i = 1; i < tileArray.length ; i++) {
        // console.debug(tileArray[i]);
        var crrItem = $('<div class="tile"></div>');
        crrItem.addClass('tile-'+tileArray[i]['color']).addClass('poly-'+tileArray[i]['poly']);
        // this.html('');
        crrItem.attr({'data-value' : tileArray[i]['type']}).css({'left': tileArray[i]['x'],
            'top': tileArray[i]['y']});
        crrItem.html('<span class="back">'+tileArray[i]['value']+'</span>');
        $('#game').append(crrItem);
        
    };

    $('.game-wrap').width(5*60)
    
}



$(document).ready(function() {
    // new GamePlayer(8, KeyboardInputManager, HTMLActuator, LocalStorageManager);
	new GamePlayer(8);
})