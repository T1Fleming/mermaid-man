const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom;

// Read HTML Doc
const inHtmlFile = fs.readFileSync('./mindmap.html', 'utf-8')
const dom = new JSDOM(inHtmlFile)
const encodedMermaidDoc = dom.window.document.getElementById("waka").innerHTML

// Build Data Structures
class Graph {

    head;
    tail;
    count = 0;

    constructor() {
    }

    setHead(headRef) {
        this.head = headRef
    }
}

class Node {
    // Reference Other Nodes
    inLinks = []
    value;

    constructor(value, inLinks = null, outLinks = null) {
        this.value = value
        this.inLinks = inLinks
        this.outLinks = outLinks
    }

    printInLinks() {
        console.log(this.inLinks)
    }

    writeValue(text) {
        this.value = text
    }

}

// Build Graph
console.log(encodedMermaidDoc)

// const myGraph = new Graph()


// const node1 = new Node('rackCity')
// const node2 = new Node('shelfCity', [node1])
// node1.writeValue('MODIFIED')

// node2.printInLinks()

const mermaidDocArray = encodedMermaidDoc.split('\n')
console.log(mermaidDocArray[7].split('--&gt'))