// Switch tabs 
var pb = document.querySelector('.publications'),
    ns = document.querySelector('.news'),
    ex = document.querySelector('.experience');

var pbt = document.querySelector('.pb-tab'),
    nst = document.querySelector('.ns-tab'),
    ext = document.querySelector('.ex-tab');

ns.style.display = 'none';
ex.style.display = 'none';

function switchTab(tab) {
    switch (tab) {
        case 'ns':
            ns.style.display = 'block';
            nst.className = 'tab ns-tab active';
            pb.style.display = 'none';
            pbt.className = 'tab pb-tab';
            ex.style.display = 'none';
            ext.className = 'tab ex-tab';
            break;
        case 'pb':
            ns.style.display = 'none';
            nst.className = 'tab ns-tab';
            pb.style.display = 'block';
            pbt.className = 'tab pb-tab active';
            ex.style.display = 'none';
            ext.className = 'tab ex-tab';
            break;
        case 'ex':
            ns.style.display = 'none';
            nst.className = 'tab ns-tab';
            pb.style.display = 'none';
            pbt.className = 'tab pb-tab';
            ex.style.display = 'block';
            ext.className = 'tab ex-tab active';
            break;
    }
}
