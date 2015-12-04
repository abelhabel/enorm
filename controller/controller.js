function Controller(options){
  var that = this;
  this.data = options || modelData;
  this.view = {};
  var view = this.view;

  var tags = hitView.tags;
  var container = hitView.container;

  view.container = makeTag(container);

  document.body.appendChild(view.container);

  hitView.order.forEach(function(key) {
    view[key] = makeTag(tags[key]);
    view[key][tagMap.get(tags[key].tag)] = that.data[key];
    view.container.appendChild(view[key]);
  });
}
var tagMap = {
  innerHTML: ['div', 'span', 'section'],
  value: ['input', 'li'],
  src: ['img', 'script'],
  get: function(tag) {
    for(var key in tagMap) {
      if(tagMap[key].indexOf(tag) !== -1) {
        return key;
      }
    }
  }
};
function makeTag(options) {
  var tag = document.createElement(options.tag);
  tag.className = options.className;
  tag.id = options.id;
  options.data.forEach(function(data) {
    tag.setAttribute(data.name, data.value);
  });
  return tag;
}

module.exports = Controller;
