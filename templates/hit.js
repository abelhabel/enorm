function make(data, helpers){
  var hit = {
    tags: {
      container: {tag: 'div', className: 'hit-container', id: '', data: [{name: 'id', value: data.id}],
        tags: {
          image: {tag: 'img', className: 'hit-image', id: '', src: data.image},
          infoWrap: { tag: 'div', className: 'hit-info-wrapper', id:'',
            tags: {
              title: {tag: 'div', className: 'hit-title', id: helpers.getTime(), innerHTML: data.title},
              phone: {tag: 'div', className: 'hit-phone', innerHTML: data.phone},
              time: {tag: 'span', innerHTML: 'Time: ' + helpers.getTime()},
              order: ['title', 'phone', 'time']
            }
          },
          description: {tag: 'div', className: 'hit-description', innerHTML: data.description},
          order: ['image', 'infoWrap', 'description']
        },
      },
        order: ['container']
    },
  };
  return hit;
}
module.exports = make;
