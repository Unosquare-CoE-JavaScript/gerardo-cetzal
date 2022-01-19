var homework = {
    topic: 'JS'
}

var otherHomework = Object.create(homework);


// consider
otherHomework.topic = 'Math';
console.log(otherHomework.topic);
console.log(homework.topic);

// this Revisited
var homework2 = {
    study() {
        console.log(`Please study ${this.topic}`);
    }
}

var jsHomework = Object.create(homework2);
jsHomework.topic = 'JS';
jsHomework.study();

var mathHomework = Object.create(homework2);
mathHomework.topic = 'Math';
mathHomework.study();