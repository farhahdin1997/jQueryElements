const rootElement = $('#root');
const newParagraphElement = $('<p>')
newParagraphElement.text('~ Carol Dweck');
newParagraphElement.addClass('plain')

const headerElement = $('<h1>')
headerElement.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.')
headerElement.addClass('fancy');
newParagraphElement.append(headerElement)

rootElement.append(newParagraphElement)