// Generator function for L298N block
Blockly.JavaScript['l298n_block'] = function (block) {
    // Get the values of the inputs
    var input1 = Blockly.JavaScript.valueToCode(block, 'INPUT1', Blockly.JavaScript.ORDER_ATOMIC);
    var input2 = Blockly.JavaScript.valueToCode(block, 'INPUT2', Blockly.JavaScript.ORDER_ATOMIC);
    var speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);

    // Generate the code for controlling the L298N
    var code = `
    // Code for controlling the L298N
    // Input 1: ${input1}
    // Input 2: ${input2}
    // Speed: ${speed}
    // Add your code here
  `;

    return code;
};

// Generator function for L298N block
Blockly.JavaScript['l298n_motor'] = function (block) {
    // Get the values of the inputs
    var motor = block.getFieldValue('motor');
    var direction = block.getFieldValue('direction');
    var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);

    // Generate the code for controlling the L298N
    var code = `
    // Code for controlling the L298N
    // Motor: ${motor}
    // Direction: ${direction}
    // Speed: ${speed}
    // Add your code here
  `;

    return code;
};

// Generator function for L298N block
Blockly.JavaScript['l298n_motor_set_speed'] = function (block) {
    // Get the values of the inputs
    var motor = block.getFieldValue('motor');
    var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);

    // Generate the code for controlling the L298N
    var code = `
    // Code for controlling the L298N
    // Motor: ${motor}
    // Speed: ${speed}
    // Add your code here
  `;

    return code;
};

// Generator function for L298N block
Blockly.JavaScript['l298n_motor_stop'] = function (block) {
    // Get the values of the inputs
    var motor = block.getFieldValue('motor');

    // Generate the code for controlling the L298N
    var code = `
    // Code for controlling the L298N
    // Motor: ${motor}
    // Add your code here
  `;

    return code;
};
