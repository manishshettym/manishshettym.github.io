function switchTab(tab) {
    var ns = document.querySelector('.news'),
        ac = document.querySelector('.service'),
        ex = document.querySelector('.experience');

    var nst = document.querySelector('.ns-tab'),
        act = document.querySelector('.ac-tab'),
        ext = document.querySelector('.ex-tab');

    switch (tab) {
        case 'ns':
            ns.style.display = 'block';
            nst.className = 'tab ns-tab active';
            ex.style.display = 'none';
            ext.className = 'tab ex-tab';
            ac.style.display = 'none';
            act.className = 'tab ac-tab';
            break;
        case 'ex':
            ns.style.display = 'none';
            nst.className = 'tab ns-tab';
            ex.style.display = 'block';
            ext.className = 'tab ex-tab active';
            ac.style.display = 'none';
            act.className = 'tab ac-tab';
            break;
        case 'ac':
            ns.style.display = 'none';
            nst.className = 'tab ns-tab';
            ex.style.display = 'none';
            ext.className = 'tab ex-tab';
            ac.style.display = 'block';
            act.className = 'tab ac-tab active';
            break;
    }
}