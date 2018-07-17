class Compile {
    constructor(el, vm) {
        this.el = document.querySelector(el);
        this.vm = vm;
        if (this.el) {
            let fragment = this.node2fragment(this.el);
            this.compile(fragment);
        }
    }

    node2fragment(el) {
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild);
        }
        return fragment;    // 内存中的节点
    }

    compile(fragment) {
        let childNodes = fragment.childNodes;
        Array.form(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                this.compileElement(node);
                this.compile(node);
            } else {
            }
        });
    }

    compileElement(node) {
        let attrs = node.attributes;
        Array.form(attrs).forEach(attr => {
            let attrName=arrt.value;
        })
    }

    isElementNode(node) {
        return node.nodeType === 1;
    }

    isDirective(name) {
        return name.includes('v-');
    }
}