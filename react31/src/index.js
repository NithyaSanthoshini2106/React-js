import ReactDom from "react-dom/client"
import App from "./App.js"
let rooti=ReactDom.createRoot(document.getElementById('rooti'))
rooti.render(<h1>yello</h1>)
rooti.render(<App/>)
