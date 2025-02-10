import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import { GetUsersWithChainedPromises } from './1/01-exercise.mine.ts'
import {GetUsersWithChainedPromisesFeedback} from './1/01-exercise.promises.ts'
import {EXERCISE02} from './2/01-exercise.mine.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
    </div>
  
  </div>
`
EXERCISE02();
