function shake(div){
    var interval = 50;
    var distance = 3;
    var times = 4;

    $(div).css('position','relative');

    for(var iter=0;iter<(times+1);iter++){
        $(div).animate({ left: ((iter%2==0 ? distance : distance*-1))},interval);
    }//for

    $(div).animate({ left: 0},interval);

}//shake
