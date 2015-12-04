var hit = {
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

module.exports = hit;
