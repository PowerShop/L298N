Blockly.Python['l298n_set_speed'] = function(block) {
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    
    var code = `set_speed(${value_speed})\n`;
    return code;
}

Blockly.Python['l298n_set_direction'] = function(block) {
    var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
    
    var code = `set_direction(${value_direction})\n`;
    return code;
}

Blockly.Python['l298n_stop'] = function(block) {
    var code = 'stop()\n';
    return code;
}
