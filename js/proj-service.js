var gProj = [], gCurrProj = null;

function createProj(name, title, desc, url, labels,link) {
    var proj = {
        id: +randomGuid(),
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: new Date(Date.now()),
        labels,
        link:link
    }
    return proj;
}

function createProjs() {
    gProj.push(createProj('Minesweeper', 'lorem', 'lorem ipsum', 'minesweeper.png','lorem','https://ohad254682.github.io/Minesweeper/'));
    gProj.push(createProj('Book Store', 'lorem', 'lorem ipsum', 'book-store.png','lorem','https://ohad254682.github.io/Project/'));
    gProj.push(createProj('Pacman', 'lorem', 'lorem ipsum', 'pacman.png','lorem','https://ohad254682.github.io/Pacman/.'));
    gProj.push(createProj('Touch Nums', 'lorem', 'lorem ipsum', 'touch-nums.png','lorem','https://ohad254682.github.io/TouchNums/.'));
    gProj.push(createProj('Todo List', 'lorem', 'lorem ipsum', 'todo-list.png','lorem','https://ohad254682.github.io/Todo-list/.'));
    gProj.push(createProj('Guess Me', 'lorem', 'lorem ipsum', 'guess-me.png','lorem','https://ohad254682.github.io/Guess-Me/.'));
    gProj.push(createProj('Ball Board', 'lorem', 'lorem ipsum', 'ball-board.png','lorem','https://ohad254682.github.io/ballBoard/.'));
    gProj.push(createProj('Safe Content', 'lorem', 'lorem ipsum', 'safe-content.png','lorem',' https://ohad254682.github.io/safe-content/.'));
    
    
}

function saveData() {
    saveToStorage('data-proj', gProj);
}

function loadData() {
    gProj = loadFromStorage(gProj);
}

function projsToRender() {
    return gProj;
}

function setCurrProj(projId) {
    gCurrProj = gProj.find(function (proj) {
        return proj.id === projId;
    })
}

