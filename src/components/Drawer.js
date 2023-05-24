function Drawer() {
    return (
        <div style={{ display: 'none' }} className='overlay'>
            <div className='drawer'>
                <h2 className='mb-30 d-flex justify-between align-center'>
                Корзина <img className='remove cu-p' src='/img/remove.svg' alt='Romove' />
                </h2>

            <div className='cartItem d-flex align-center mb-20'>

            <div
                style={{ backgroundImage: 'url(/img/sneakers/9.jpg)' }}
                className='cartItemImage'>
            </div>

            <div className='mr-20 flex'>
                <p classNam='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
                </div>
                    <img className='remove' src='/img/remove.svg' alt='Romove' />
                </div>
            <div className='cartItem d-flex align-centermb-20'>

            <div
                style={{ backgroundImage: 'url(/img/sneakers/9.jpg)' }}
                className='cartItemImage'>
            </div>

            <div className='mr-20 flex'>
                <p classNam='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
                </div>
                    <img className='remove' src='/img/remove.svg' alt='Romove' />
                </div>
            </div>

            <div className='items'>
                <div className='cartTotalBlock'>
                    <ul>
                    <li>
                        <span>Итого: </span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li>
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ <img src='/img/arrow.svg' alt='Arrow' /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;