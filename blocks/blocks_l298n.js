Blockly.defineBlocksWithJsonArray(
    [{
        "type": "l298n_motor",
        "message0": "Motor %1 %2 Speed %3",
        "args0": [{
            "type": "field_dropdown",
            "name": "motor",
            "options": [
                ["1", "1"],
                ["2", "2"]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
                ["Forward", "1"],
                ["Backward", "2"]
            ]
        },
        {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
        }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Motor control",
        "helpUrl": ""
    }],
    {

        "type": "l298n_motor_set_speed",
        "message0": "Motor %1 Set Speed %2",
        "args0": [{
            "type": "field_dropdown",
            "name": "motor",
            "options": [
                ["1", "1"],
                ["2", "2"]
            ]
        },
        {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
        }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Motor control",
        "helpUrl": ""
    },
    {

        "type": "l298n_motor_stop",
        "message0": "Motor %1 Stop",
        "args0": [{
            "type": "field_dropdown",
            "name": "motor",
            "options": [
                ["1", "1"],
                ["2", "2"]
            ]
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Motor control",
        "helpUrl": ""
    }
);
