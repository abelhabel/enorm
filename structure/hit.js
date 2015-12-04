var hit = {
  container: {tag: 'div', className: 'hit-container', id: '', data: [{name: 'id', value: 2}]},
  tags: {
    image: {tag: 'img', className: 'hit-image', id: '', data: []},
    infoWrap: { tag: 'div', className: 'hit-info-wrapper', id:'',
      tags: {
        title: {tag: 'div', className: 'hit-title', id: '', data: []},
        phone: {tag: 'div', className: 'hit-phone', id: '', data: []},
        order: ['title', 'phone']
      }
    },
    description: {tag: 'div', className: 'hit-description', id: '', data: []},
    order: ['image', 'infoWrap', 'description']
  },
};

module.exports = hit;
