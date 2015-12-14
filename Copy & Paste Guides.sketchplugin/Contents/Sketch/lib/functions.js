function paste(target){
    var vRulers = userDefaults.verticalRulers;
    var hRulers = userDefaults.horizontalRulers;

    // Vertical rulers
    for(rulers=0; rulers < vRulers.count(); rulers++){
        var value = vRulers[rulers];
        [[target verticalRulerData] addGuideWithValue:value]
    }

    // Horizontal rulers
    for(rulers=0; rulers < hRulers.count(); rulers++){
        var value = hRulers[rulers];
        [[target horizontalRulerData] addGuideWithValue:value]
    }
}

function remove(target){
    var countVertical = [[target verticalRulerData] numberOfGuides]
    var countHorizontal = [[target horizontalRulerData] numberOfGuides]

    // Vertical rulers
    while( countVertical > 0 ) {
        [[target verticalRulerData] removeGuideAtIndex:0]
        var countVertical = [[target verticalRulerData] numberOfGuides]
    }

    // Horizontal rulers
    while( countHorizontal > 0 ) {
        [[target horizontalRulerData] removeGuideAtIndex:0]
        var countHorizontal = [[target horizontalRulerData] numberOfGuides]
    }
}