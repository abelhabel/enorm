function Controller(data, template, parent){
  var that = this;
  this.data = data || {};
  this.view = {};
  var view = this.view;

  var tags = template(data, helpers).tags;

  function loopKeys(tags, parent) {
    tags.order.forEach(function(key) {

      view[key] = makeTag(tags[key]);
      // if(data[key]) view[key][tagMap.get(tags[key].tag)] = data[key];
      parent.appendChild(view[key]);
      if(tags[key].tags) loopKeys(tags[key].tags, view[key]);
    });
  }
  function updateKeys(tags) {
    tags.order.forEach(function(key) {
      updateTag(view[key], tags[key]);
      if(tags[key].tags) updateKeys(tags[key].tags);
    });
  }
  loopKeys(tags, parent);

  this.update = function(data) {
    var tags = template(data, helpers).tags;
    this.data = data;
    updateKeys(tags);

    console.log(this);
  };
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

var helpers = {
  getTime: function() {
    return Date.now();
  }
};

function updateTag(tag, options) {
  if(options.className) tag.className = options.className;
  if(options.id) tag.id = options.id;
  if(options.innerHTML) tag.innerHTML = options.innerHTML;
  if(options.src) tag.src = options.src;
  if(options.data) {
    options.data.forEach(function(data) {
      tag.setAttribute('data-' + data.name, data.value);
    });
  }
}

function makeTag(options) {
  var tag = document.createElement(options.tag);
  updateTag(tag, options);
  return tag;
}

module.exports = Controller;
