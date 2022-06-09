import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"

export function App() {
    const nav = useNavs()

    return (
        <div>
            <nav key={el.key}>
                <Link to={el.name}>{el.label}</Link>
            </nav>

            <Outlet />
        </div>
    )

    return (
        <>
            <nav>
                <span>Tacomania {num}</span>
                <ul>{theNavItems}</ul>
            </nav>
            <div id="app-body">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<div>Home</div>} />
                        <Route path="products" element={<Products />} />
                        <Route path="about" element={<About />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}
