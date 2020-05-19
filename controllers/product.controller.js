module.exports.index = function(req, res, next){
    res.render('products/index');
}

module.exports.search = function(req, res, next){
    res.send('seach');
}

module.exports.view = function(req, res, next){
    res.render('products/view')
}

module.exports.create = function(req, res, next){
    res.render('products/create')
}


module.exports.update = function(req, res, next){
    res.render('products/update')
}


module.exports.delete = function(req, res, next){
    res.send('delete');
}


module.exports.postCreate = function(req, res, next){

}

module.exports.postUpdate = function(req, res, next){
    
}

module.exports.postDelete = function(req, res, next){
    
}