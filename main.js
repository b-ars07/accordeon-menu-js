var selectTitle,
    ul = document.querySelector('.accordeon__list'),
    item = document.querySelectorAll('.accordeon__item');

ul.onclick = function(e) {
    var target = e.target;


    var title = target.closest('.accordeon__item-title');

    if (!title) return;

    if (!ul.contains(title)) return;
    openItem(title);
}

function openItem(node) {
    if (selectTitle) {
        collapse(selectTitle.nextSibling);
        selectTitle.previousSibling.classList.remove('accordeon__item--active');
    }

    selectTitle = node.nextSibling;
    selectTitle.previousSibling.classList.add('accordeon__item--active');
    expand(selectTitle.nextSibling);
}

function expand(node) {
    var paddingBottom = 12;
    node.style.maxHeight = node.scrollHeight + paddingBottom + 'px';
    node.style.marginTop = 12 + 'px';
    node.style.marginLeft = 20 + 'px';
    node.style.paddingBottom = 12 + 'px';
}

function collapse(node) {
    node.style.maxHeight = 0;
    node.style.marginTop = 0;
    node.style.padding = 0;
}