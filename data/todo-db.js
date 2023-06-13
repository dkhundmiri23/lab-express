const characters = [
    {characters: 'rick', done: true},
    {characters: 'morty', done: false},
    {characters: 'summer', done: false}
  ];

  module.exports = {
    getAll: function() {
        return characters;
    }
  };