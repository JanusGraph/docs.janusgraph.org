const versions = [
  {path: "master", text: "Upcoming version", selected: true },
  {path: "", text: "v1.1 Latest", selected: false },
  {path: "v1.0", text: "v1.0", selected: false },
  {path: "v0.6", text: "v0.6", selected: false },
  {path: "v0.5", text: "v0.5", selected: false },
  {path: "v0.4", text: "v0.4", selected: false },
  {path: "v0.3", text: "v0.3", selected: false },
  {path: "v0.2", text: "v0.2", selected: false },
];

// Material theme
function addMaterialMenu(elt, versions) {
    const current = versions.find(function (value) {
        return value.selected
    })
    const rootDiv = document.createElement('div');
    rootDiv.classList.add('md-version');

    const rootLi = document.createElement('button');
    rootLi.classList.add('md-version__current');
    rootLi.textContent = current.text;
    rootDiv.appendChild(rootLi)
    const ul = document.createElement('ul')
    ul.classList.add('md-version__list');


    for (let i = 0; i < versions.length; i++) {
        const li = document.createElement('li');
        li.classList.add('md-version__item');

        ul.appendChild(li);

        const a = document.createElement('a');
        a.classList.add('md-version__link');
        if (versions[i].selected) {
            a.classList.add('md-nav__link--active');
        }
        a.href = window.location.protocol + "//" + window.location.host + "/";
        if (window.location.host.includes(".github.io")) {
            a.href = a.href + window.location.pathname.split("/")[1] + "/";
        }
        if (versions[i].path) {
            a.href = a.href + versions[i].path + "/"
        }
        a.title = versions[i].text;
        a.text = versions[i].text;

        li.appendChild(a);
    }
    rootDiv.appendChild(ul);
    elt.appendChild(rootDiv);
}

const materialSelector = 'header.md-header div.md-header__topic';

let elt = document.querySelector(materialSelector);
addMaterialMenu(elt, versions);
