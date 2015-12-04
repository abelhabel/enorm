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

var hitView = {
  container: {
    tag: 'div',
    className: 'hit-container',
    id: '',
    data: [{name: 'id', value: 2}]
  },
  tags: {
    description: {tag: 'div', className: 'hit-description', id: '', data: []},
    title: {tag: 'div', className: 'hit-title', id: '', data: []},
    image: {tag: 'img', className: 'hit-image', id: '', data: []},
    phone: {tag: 'div', className: 'hit-phone', id: '', data: []}
  },
  order: ['title', 'image', 'description', 'phone']
};

var modelData = {
  title: "Sammy's Shop",
  image: "http://globe-views.com/dcim/dreams/ball/ball-05.jpg",
  phone: '289-323-2323',
  description: 'A small little shop on the outskirts of Balmore'
};

module.exports = Controller;
