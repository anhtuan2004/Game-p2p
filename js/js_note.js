// make tile
for (var i = 1; i < 25 ; i++) {
	var row =0,col=0;
    for (var i = 0; i < 8*8; i++) {
        if(i % 8 == 0 && i>0){
            row++;
            col = 0;
        } 

        $('.test-info').append(",{'x':"+(col*60)+",'y':"+(row*60)+",type:2,color:'green',poly:'1',value:"+i+"}");

        col++;
    };
}