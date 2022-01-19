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
        for (let linePos = 0; linePos <= this.reels.length; linePos++) {
            // suggested
            let line = this.reels.map(reel => {
                var slot = Object.create(reel);
                slot.position = (
                    reel.symbols.length +
                    reel.position +
                    linePos
                ) % reel.symbols.length;
                return slot.display();
            })

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