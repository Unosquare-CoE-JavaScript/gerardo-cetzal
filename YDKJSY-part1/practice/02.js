function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}
var reel = {
    symbols: [
        "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        // hint: use Object.create
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },
    display() {
        var lines = [];
        // we need to display the 3 lines on the slot machine
        // we initialize in 0 to this.reels.length
        for (let linePos = 0; linePos <= this.reels.length; linePos++) {
            // suggested, we use a map to read the values from the reels, using the keyword this to access the propertie
            let line = this.reels.map(reel => {
                // we created the slot
                var slot = Object.create(reel);
                //and assign the position
                slot.position = (
                    reel.symbols.length +
                    reel.position +
                    linePos
                ) % reel.symbols.length;
                // we call display
                return slot.display();
            })
            // and finally we join the characters in array by position
            lines.push(line.join(" | "));
        }
        // print line by line
        console.log(lines[0])
        console.log(lines[1])
        console.log(lines[2])
    }
}

slotMachine.spin();
slotMachine.display();