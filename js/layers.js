addLayer("shop", {
    name: "shop", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol() {return "<img src=https://cdn.glitch.global/542f8bcb-9b41-4792-ac96-0303c4328953/coin.png?v=1702255751908' style='width:calc(100% + 30px);height:calc(100% + 30px);margin:-59%' ></img>"}, // This appears on the layer's node. Default is the id with the first letter capitalized
    position: -1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#fffb00",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "coins", // Name of prestige currency
    baseResource: "multiplier", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for coins", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
      
})
addLayer("bm", {
    name: "button multplier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol() {return "<img src=https://cdn.glitch.global/542f8bcb-9b41-4792-ac96-0303c4328953/redx.png?v=1702253599533' style='width:calc(80% - 2px);height:calc(80% - 2px);margin:10%' ></img>"}, // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#fc3d3dff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.0000000375, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "none", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
      
    buyables: {
  11: {
            cost(x) { return new Decimal(4) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(1).sub(2).add(tmp.r.buyables[11].effect).add(tmp.r.buyables[12].effect)},
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>4 Money = 1 Multiplier"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Money"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },
      12: {
            cost(x) { return new Decimal(23) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(3).sub(4).add(tmp.r.buyables[11].effect).add(tmp.r.buyables[12].effect) },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>23 Money = 3 Multiplier"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Money"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },
      13: {
            cost(x) { return new Decimal(145) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(10).sub(11).mult((tmp.r.buyables[11].effect).add(tmp.r.buyables[12].effect)) },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>145 Money = 10 Multiplier"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Money"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },
      21: {
            cost(x) { return new Decimal(670) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(22).sub(23).add(tmp.r.buyables[11].effect).add(tmp.r.buyables[12].effect) },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>670 Money = 22 Multiplier"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Money"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },
      22: {
            cost(x) { return new Decimal(2150) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(65).sub(66).add(tmp.r.buyables[11].effect).add(tmp.r.buyables[12].effect) },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>2150 Money = 65 Multiplier"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Money"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },
      23: {
            cost(x) { return new Decimal(7680) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(150).sub(151).add(tmp.r.buyables[11].effect).add(tmp.r.buyables[12].effect) },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>7680 Money = 150 Multiplier"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Money"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },


  },
  infoboxes: {
    Added: {
       title: "Multiplier Upgrades",
       body() {return "In the Upgrades Tab, On the Bottom, There are Upgrades for Mulitpliers" }, 
       style: {"border-color": "#ff0000ff"},
    }
  },
  tabFormat: {
    "Main": {
    content:[
        function() {if (player.tab == "bm") return "resource-display"},
        "blank",
        "buyables",
        ],
},
    
},
})
addLayer("r", {
    name: "rebirths", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol() {return "<img src=https://cdn.glitch.global/542f8bcb-9b41-4792-ac96-0303c4328953/bluer.png?v=1702254234653' style='width:calc(70% - 20px);height:calc(70% - 20px);margin:10%' ></img>"}, // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		  points: new Decimal(0),
      best: new Decimal(0),
			total: new Decimal(0),
			pseudoUpgs: [],
    }},
    color: "#1bace7",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "rebirths(multiplier-converted)", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
      branches: ["bm"],
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (player.bm.unlocked) mult = mult.add(tmp.bm.buyables[11].effect)
        if (player.bm.unlocked) mult = mult.add(tmp.bm.buyables[12].effect)
        if (player.bm.unlocked) mult = mult.add(tmp.bm.buyables[13].effect)
        if (player.bm.unlocked) mult = mult.add(tmp.bm.buyables[21].effect)
        if (player.bm.unlocked) mult = mult.add(tmp.bm.buyables[22].effect)
        if (player.bm.unlocked) mult = mult.add(tmp.bm.buyables[23].effect)
        if (player.bm.unlocked) mult = mult.sub(7)
        if (player.bm.unlocked) mult = mult.div(2)
      
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for rebirth points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
      effect() {
        let eff = player.r.points.pow(0).add(tmp.bm.buyables[11].effect).add(tmp.bm.buyables[12].effect).add(tmp.bm.buyables[13].effect).add(tmp.bm.buyables[21].effect).add(tmp.bm.buyables[22].effect).add(tmp.bm.buyables[23].effect).sub(7)
        return eff
      },
      effectDescription() {
        return "and currently x" + format(tmp.r.effect) + " multiplier"
      },
      buyables: {
      11: {
            cost(x) { return new Decimal(1250) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(1).sub(0) },
            canAfford() { return player.r.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>1250 Multiplier = 1 Rebirth"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Multiplier"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.r.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },
        12: {
            cost(x) { return new Decimal(2900) },
            effect(x) { return new Decimal(1).add(x || getBuyableAmount(this.layer, this.id)).times(3).sub(2) },
            canAfford() { return player.r.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>2900 Multiplier = 2 Rebirth"
            },
            display() {
                return "which are boosting your money gain by ×" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Multiplier"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1
                let max = Decimal.affordGeometricSeries(player.r.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                
            },
        },
      },
  tabFormat: {
    "Main": {
    content:[
        function() {if (player.tab == "r") return "main-display"},
        "prestige-button",
        function() {if (player.tab == "r") return "resource-display"},
        "blank",
        "buyables",
        ],
},
    
},
})