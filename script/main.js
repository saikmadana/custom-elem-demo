class PopUpInfo extends HTMLElement {
    constructor() {

      // Always call super first in constructor
      super();

      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});

      // HTML content
      const content = `
      <div>
        <div class="custom-elem" id="elem">This is Custom element demonstration</div>
        <div onclick="callme()">Click to say Hi</div>
      </div>`;
  
      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style');
  
      style.textContent = `
        .custom-elem {
          color: green;
          background: blue;
        }
      `;
        
      // Attach the created elements to the shadow dom
      shadow.innerHTML = content;
      shadow.appendChild(style);
      console.log(style.isConnected, this.shadowRoot, shadow);
    }

    connectedCallback() {
        console.log("connectedCallback");
        this.shadowRoot.getElementById("elem").addEventListener("click", this.callme);
        setInterval(() => {
          this.shadowRoot.getElementById("elem").setAttribute("a", a++);
        }, 2000);
    }

    disconnectedCallback() {
        console.log("disconnectedCallback");
    }

    adoptedCallback() {
        console.log("adoptedCallback");
    }

    attributeChangedCallback() {
        console.log("attributeChangedCallback");
    }

    static get observedAttributes() { 
        console.log("observedAttributes");
        return ['a', 'b']; 
    }

    callme() {
        alert("called meeeee")
    }
}

customElements.define('custom-elemm', PopUpInfo);

// let ce = document.createElement("custom-elemm");
// ce.setAttribute("data-text", "test attribute");

// document.body.appendChild(ce);

let a = 0;

