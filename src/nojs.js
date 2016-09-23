// [ vim: set tabstop=2 shiftwidth=2 expandtab : ] 

noh.Node.prototype.unaryPlus = function(node) {
  if(typeof(node) === "string")
    node = noh.text(node);
  return this.add(node);
};

