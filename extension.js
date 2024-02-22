({
    name: "L298N", // Category Name
    description: "L298N Motor Driver Extension by Kittisak", // Category Description
    author: "Kittisak",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#0271D9", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="l298n_set_speed">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>

                <block type="l298n_set_direction">
                    <value name="direction">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>

                <block type="l298n_stop"></block>
            `
        }
    ], 
    supportArduinoPlatform: true,
    depends: [ // Arduino library
    ]
});