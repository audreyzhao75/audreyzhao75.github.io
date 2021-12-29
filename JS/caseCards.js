
class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
  
    set data(obj) {
        // Similar to how styles were managed in Lab 6
        const style = document.createElement('style');
        const styleText = `
            img {
                width:100%;
                margin: 0px;
            }
        `
        // Append the style and create the container element
        style.innerHTML = styleText;
        this.shadowRoot.appendChild(style);
        // const wrapper = document.createElement('div');
        // wrapper.classList.add('wrapper');
        // this.shadowRoot.appendChild(wrapper);
        // // Append the bookmark button
        // const img_wrapper = document.createElement('div');
        // img_wrapper.classList.add('photo_wrapper');
        const div = document.createElement("div");
        div.className = "CaseCard col-lg-6 col-sm-6 mb-4";

        const a = document.createElement("a");
        a.href = obj.href;
        div.appendChild(a);

        const img = document.createElement("img");
        img.setAttribute("id", obj.id);
        img.className = "card-img-top";
        img.setAttribute("src", obj.image);
        img.setAttribute("alt", obj.alt);
        a.appendChild(img);

        this.shadowRoot.appendChild(div);
    }
}
customElements.define('case-card', Card);