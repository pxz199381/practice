DOMTokenList.prototype.adds = function(tokens){
    tokens.split('').forEach(function(item){
        this.classList.add(item)
    })
}
