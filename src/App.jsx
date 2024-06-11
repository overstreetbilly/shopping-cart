import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
    return (
        <>
            <section>
                <Header />
                <h1 className='text-3xl font-bold underline'>
                    Hello Shoppers weclome
                </h1>
            </section>
        </>
    );
}

export default App;
