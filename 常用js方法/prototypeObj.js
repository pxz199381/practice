function People(){

}

People.prototype = {
    name: 'pxz',
    age: 24,
    job: 'front-end'
}
Object.defineProperty(People.prototype,'constructor',{
    enumerable: false,
    value: People
})