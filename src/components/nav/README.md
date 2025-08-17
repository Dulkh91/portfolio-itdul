```ts
---
import { Icon } from "astro-icon/components";
---
<theme-toggle>
    <button type="button" class="test-btn-icon">
        <Icon name="discord" width={30} height={30}/>
    </button>
</theme-toggle>

<script>
    document.addEventListener('astro:page-load',()=>{
        document.querySelector('.test-btn-icon')?.addEventListener('click',()=>{
        console.log("kkdlkdlfdkfjlaf;");
    })
    })
</script>

```


```ts
<theme-toggle>
    <button type="button" class="test-btn-icon">
        <Icon name="discord" width={30} height={30}/>
    </button>
</theme-toggle>

<script>
    class MenuBtn extends HTMLElement{
        constructor(){
            super()
            
        const btn = document.querySelector('.test-btn-icon')
        btn?.addEventListener('click',()=>{
            console.log("kkkkkk");
        })

        }
    }
    customElements.define("theme-toggle", MenuBtn);
</script>
```
### Nanostore

```ts
<script>
  import { isOpenMenu } from "../../store";

  class Hamberger extends HTMLElement {
    constructor() {
      super();
    };

    connectedCallback() {
      const menu = document.querySelector(".hamberger");

      if (menu) {
        menu.addEventListener("click", () => {
          isOpenMenu.set(!isOpenMenu.get()); // ប្ដូរតម្លៃ menu ឱ្យទៅជាផ្ទុយ
        });
      };

      isOpenMenu.listen((value) => {
        if (menu) {
          if (value) {
            menu.classList.add("open");
          } else {
            menu.classList.remove("open");
          }
        }
      });
    }
  }
  customElements.define("hamberger-bar", Hamberger);
</script>
```



