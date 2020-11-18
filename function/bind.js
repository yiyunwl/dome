const modules = {
    x : 2,
    getX:function(){
        return  this.x;
    }
};

const arr = modules.getX;
console.log(arr());

const arr1 = modules.getX.bind(modules)
console.log(arr1())


