class MVVM {
    constructor(options) {
        // 将数据绑定到this上
        this.$el = options.el;
        this.$data = options.data;
        if (this.$el) {
            // new Observer(this.$data);
            // this.proxyData(this.$data);
            // 用数据和元素进行编译
            new Compile(this.$el, this);
        }
    }

    // 如果又要编译的模板，我们就开始编译
    proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key]
                },
                set(newValue) {
                    data[key] = newValue
                }
            })
        })
    }
}