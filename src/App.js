import { useState } from "react"
import { About } from "./About"
import { Cart } from "./Cart"
import { Products } from "./Products"

export function App() {
    console.log("URL", window.location.pathname)

    const [_, setState] = useState(0)

    let theComponent
    switch (window.location.pathname) {
        case "/about":
            theComponent = <About />
            break
        case "/products":
            theComponent = <Products />
            break
        case "/cart":
            theComponent = <Cart />
            break
        default:
            break
    }

    function handleClick(e) {
        // console.log("taco", e.target.name)

        // This is a hack
        // This purpose of this is simply to trigger <App /> to rerender
        // setState( (currentState) => currentState ++  )
        // setState(e)
        // setState(new Date())
        setState({})
        // setState([])

        window.history.replaceState(undefined, "", `/${e.target.name}`)
    }

    return (
        <>
            <nav>
                <span>Tacomania</span>

                <ul>
                    <li>
                        <a name="products" onClick={handleClick}>
                            Products
                        </a>
                    </li>
                    <li>
                        <a name="cart" onClick={handleClick}>
                            Cart
                        </a>
                    </li>
                    <li>
                        <a name="about" onClick={handleClick}>
                            About
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="app-body">{theComponent}</div>
        </>
    )
}
