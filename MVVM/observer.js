class Observer {
    constructor(data) {
        this.observer(data);
    }

    observer(data) {
        if (!data || typeof data !== 'object') {
            return;
        }
        //   Object.keys(data)方法将数据转化为{message:{},a:1} => ['message','a'];
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
            this.observer(data[key]);
        })
    }

    defineReactive(obj, key, value) {
        let that = this;
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            // 是否可以枚举
            // 是否可以通过for...in遍历到
            // 是否可以通过Obejct.keys()方法获取属性名称
            enumerable: true,
            // 是否可删除
            // 是否可以删除属性
            configurable: true,
            get(){
                console.log(Dep.target);
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set(newValue){
                if (newValue !== value) {
                    // 如果是对象，继续劫持
                    that.observer(newValue);
                    value = newValue;
                    dep.notify();   // 通知所有人，数据更新了
                }
            }
        })
    }
}
class Dep{
    constructor(){
        this.subs=[];
    }
    addSub(watcher){
        this.subs.push(watcher);
    }
    notify() {
        this.subs.forEach(watcher => watcher.update());
    }
}