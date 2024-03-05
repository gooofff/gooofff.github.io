<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scales=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Wed</title>
    <!-- reset css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="./assets/css/base.css">
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/font/fontawesome-free-6.2.1-web/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="app">
        <header class="header">
            <div class="grid">
                <nav class="header__navbar">
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item ">
                            <span class="header__navbar-title--no-pointer">YAB</span>
                        </li>
                    </ul>
    
                    <ul class="header__navbar-list">
                        <!-- <li class="header__navbar-item header__navbar-item--search">
                            <i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm
                        </li> -->

                        <li class="header__navbar-item header__navbar-item--has-notify">
                            <a href="" class="header__navbar-item-link">
                                <i class="fa-regular fa-bell"></i>Thông báo
                            </a>
                            <div class="header__notify">
                                <haeder class="header__notify-header">
                                    <h3>Thông báo mới nhận</h3>
                                </haeder>
                                <ul class="header__notify-list">
                                    <li class="header__notify-item header__notify-item--view">
                                        <a href="" class="header__notify-link">
                                            <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B1WZrpxq9_gAX8BzMrd&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCd-Dw-Nz5gOnK5EUxGE_xIOrk73Ylc_oGY_prmHyElhQ&oe=63892892" alt="" class="header__notify-img">
                                            <div class="header__notify-infor">
                                                <span class="header__notify-name">Đây là thông báo</span>
                                                <span class="header__notify-descriotion">Thông báo này là để thông báo</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header__notify-item">
                                        <a href="" class="header__notify-link">
                                            <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B1WZrpxq9_gAX8BzMrd&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCd-Dw-Nz5gOnK5EUxGE_xIOrk73Ylc_oGY_prmHyElhQ&oe=63892892" alt="" class="header__notify-img">
                                            <div class="header__notify-infor">
                                                <span class="header__notify-name">Đây là thông báo</span>
                                                <span class="header__notify-descriotion">Thông báo này là để thông báo</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header__notify-item">
                                        <a href="" class="header__notify-link">
                                            <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B1WZrpxq9_gAX8BzMrd&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCd-Dw-Nz5gOnK5EUxGE_xIOrk73Ylc_oGY_prmHyElhQ&oe=63892892" alt="" class="header__notify-img">
                                            <div class="header__notify-infor">
                                                <span class="header__notify-name">Đây là thông báo</span>
                                                <span class="header__notify-descriotion">Thông báo này là để thông báo</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header__notify-item">
                                        <a href="" class="header__notify-link">
                                            <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B1WZrpxq9_gAX8BzMrd&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCd-Dw-Nz5gOnK5EUxGE_xIOrk73Ylc_oGY_prmHyElhQ&oe=63892892" alt="" class="header__notify-img">
                                            <div class="header__notify-infor">
                                                <span class="header__notify-name">Đây là thông báo</span>
                                                <span class="header__notify-descriotion">Thông báo này là để thông báo</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <footer class="header__notify-footer">
                                    <a href="" class="header__notify-footer-btn">Xem tất cả</a>
                                </footer>
                            </div>
                        </li>

                        <!-- Giao dien truoc dang nhap -->

                        <!-- <li class="header__navbar-item">
                            <a href="" class="header__navbar-item-link">
                                <i class="fa-solid fa-user"></i>Đăng nhập
                            </a>
                        </li> -->

                        <!-- Giao dien sau dang nhap -->

                        <li class="header__navbar-item header__navbar-user">
                            <i class="header__navbar-user-avata fa-solid fa-user"></i>
                            <span class="header__navbar-user-name">Đình Quý</span>
                            <ul class="header__navbar-user-menu">
                                <li class="header__navbar-user-item">
                                    <a href="">Tài khoản của tôi</a>
                                </li>
                                <li class="header__navbar-user-item">
                                    <a href="">Địa chỉ của tôi</a>
                                </li>
                                <li class="header__navbar-user-item">
                                    <a href="">Đơn đặt dịch vụ</a>
                                </li>
                                <li class="header__navbar-user-item">
                                    <a href="/logout.html">Đăng xuất</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <!-- header with search -->
                <div class="header-with-search">
                    <div class="header__logo">
                        <img class="header__logo-img" src="https://i.pinimg.com/564x/ad/51/fa/ad51fafbfa533f784b2ac3fa5b119b8f.jpg" alt="">
                    </div>

                    <div class="header__search">
                        <div class="header__search-input-wrap">
                            <input type="text" class="header__search-input" placeholder="Nhập để tìm kiếm">
                            
                            <!-- search history -->
                            <div class="header__search-history">
                                <h3 class="header__search-history-heading">Lịch sử tim kiếm</h3>
                                <ul class="header__search-history-list">
                                    <li class="header__search-history-item">
                                        <a href="">Kem dưỡng da</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="">Kem nền</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="">Kem chống nắng</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="header__search-select">
                            <span class="header__search-select-lebel">Cửa hàng</span>
                            <i class="header__search-select-lebel-icon fas fa-angle-down"></i>
                            <ul class="header__search-option">
                                <li class="header__search-option-item header__search-option-item--active">
                                    <span>Cửa hàng</span>
                                    <i class="fas fa-check"></i>
                                </li>
                                <li class="header__search-option-item">
                                    <span>Mỹ phẩm</span>
                                    <i class="fas fa-check"></i>
                                </li>
                                <li class="header__search-option-item">
                                    <span>Tất cả</span>
                                    <i class="fas fa-check"></i>
                                </li>
                            </ul>
                        </div>
                        <button class="header__search-btn">
                            <i class="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <!-- cart -->
                    <div class="header__cart">
                        <div class="header__cart-wrap">
                            <i class="header__cart-icon fas fa-shopping-cart"></i>
                            <span class="header__car-notice">3</span>
                            <!-- No cart: header__cart-list--no-cart -->
                            <div class="header__cart-list">
                                <img src="./assets/img/no_cart.png" alt="" class="header__cart-no-cart-img">
                                <span class="header__cart-list--no-cart-msg">
                                    Chưa đặt dịch vụ nào
                                </span>

                                <h4 class="header__cart-heading">Các dịch vụ đã đặt</h4>
                                <ul class="header__cart-list-item">
                                    <!-- cart item -->
                                    <li class="header__cart-item">
                                        <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GN__UL1dW4wAX_fujUZ&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCjqP0ddLMODxfgTQrPU6l6jKuow_3x1rKF05JlWmaQ-A&oe=638D1D12" alt="" class="header__cart-img">
                                        <div class="header__cart-item-infor">
                                            <div class="header__cart-item-head">
                                                <h5 class="header__cart-item-name">Dịch vụ đã đặt</h5>
                                                <div class="header__cart-item-price-wrap">
                                                    <span class="header__cart-item-price">2.345.678đ</span>
                                                    <span class="header__cart-item-multipl">x</span>
                                                    <span class="header__cart-item-qnt">1</span>
                                                </div>
                                            </div>
                                            <div class="header__cart-item-body">
                                                <span class="header__cart-item-decription">Mô tả</span>
                                                <span class="header__cart-item-remove">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="header__cart-item">
                                        <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GN__UL1dW4wAX_fujUZ&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCjqP0ddLMODxfgTQrPU6l6jKuow_3x1rKF05JlWmaQ-A&oe=638D1D12" alt="" class="header__cart-img">
                                        <div class="header__cart-item-infor">
                                            <div class="header__cart-item-head">
                                                <h5 class="header__cart-item-name">Dịch vụ đã đặt</h5>
                                                <div class="header__cart-item-price-wrap">
                                                    <span class="header__cart-item-price">2.345.678đ</span>
                                                    <span class="header__cart-item-multipl">x</span>
                                                    <span class="header__cart-item-qnt">1</span>
                                                </div>
                                            </div>
                                            <div class="header__cart-item-body">
                                                <span class="header__cart-item-decription">Mô tả</span>
                                                <span class="header__cart-item-remove">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="header__cart-item">
                                        <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GN__UL1dW4wAX_fujUZ&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCjqP0ddLMODxfgTQrPU6l6jKuow_3x1rKF05JlWmaQ-A&oe=638D1D12" alt="" class="header__cart-img">
                                        <div class="header__cart-item-infor">
                                            <div class="header__cart-item-head">
                                                <h5 class="header__cart-item-name">Dịch vụ đã đặt</h5>
                                                <div class="header__cart-item-price-wrap">
                                                    <span class="header__cart-item-price">2.345.678đ</span>
                                                    <span class="header__cart-item-multipl">x</span>
                                                    <span class="header__cart-item-qnt">1</span>
                                                </div>
                                            </div>
                                            <div class="header__cart-item-body">
                                                <span class="header__cart-item-decription">Mô tả</span>
                                                <span class="header__cart-item-remove">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" class="header__cart-view-cart btn btn--primary">Xem danh sách</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

        <div class="app__container">
            <div class="grid">
                <div class="grid__row app__content">
                    <div class="grid__column-2">
                        <nav class="category">
                            <h3 class="category__heading">
                                <i class="category__heading-icon fa-solid fa-bars"></i>
                                Danh mục
                            </h3>
                            <ul class="category-list">
                                <li class="category-item">
                                    <a href="" class="category-item-link">Trang chủ</a>
                                </li>
                                <li class="category-item">
                                    <a href="" class="category-item-link">Cửa hàng</a>
                                </li>
                                <li class="category-item category-item--active">
                                    <a href="" class="category-item-link">Các dịch vụ</a>
                                </li>
                                <li class="category-item">
                                    <a href="" class="category-item-link">Giới thiệu</a>
                                </li>
                                <li class="category-item">
                                    <a href="" class="category-item-link">Liên hệ</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="grid__column-10">
                        <div class="home-product">
                            <div class="grid__row">
                                <div class="grid__column-5">
                                    <div class="item">
                                        <div class="home-product-item__img" style="background-image: url(https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/287657286_1541808542883136_3891703002878721536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-6bDllYh0PkAX8ELfwD&tn=1UB_3gvIP80EQZxM&_nc_ht=scontent.fhph1-2.fna&oh=00_AfDzznRoM8GNZq5k5KUR20OMSrYkky9wRbDUjRgnI77S5g&oe=63911192);"></div>
                                    </div>
                                </div>
                                <div class="grid__column-7">
                                    <div class="item">
                                        <h2 class="home-product-item__name">Ten dich vu Ten dich vu Ten dich vu Ten dich vu Ten dich vu Ten dich vu Ten dich vu Ten dich vu Ten dich vu Ten dich vu</h4>
                                        <div class="infor-product-action">
                                            <span class="infor-product-item__numbers">5.0</span>
                                            <div class="infor-product-item__rating">
                                                <i class="home-product-item__star--color fa-solid fa-star"></i>
                                                <i class="home-product-item__star--color fa-solid fa-star"></i>
                                                <i class="home-product-item__star--color fa-solid fa-star"></i>
                                                <i class="home-product-item__star--color fa-solid fa-star"></i>
                                                <i class="home-product-item__star--color fa-solid fa-star"></i>
                                            </div>
                                            <span class="infor-product-item__reviews__">7 Đánh giá</span>
                                            <span class="infor-product-item__sold">99 lượt dùng</span>
                                        </div>
                                        <div class="infor-product-item__price">
                                            <span class="infor-product-item__price-old">999.000đ</span>
                                            <span class="infor-product-item__price-current">899.000đ</span>
                                            <div class="infor-product-item__sale-off-percent">10% Giảm</div>
                                        </div>
                                        <div class="infor-product-item__description">
                                            <span class="infor-product-item__description__">
                                                Miêu tả sản phẩm này rất nhiều :V
                                            </span>
                                        </div>
                                        <div class="infor-product-item__selection">
                                            <span class="infor-product-item__selection">

                                            </span>
                                        </div>
                                        <div class="infor-product-item__control">
                                            <a href="/index.html" class="btn btn--normal infor-product-item__control-close">Đóng</a>
                                            <a href="/accept.html" class="btn infor-product-item__control-confirm">Đăng kí</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer">

        </footer>
    </div>
</body>
</html>

                                <div class="modal modal__form">
                                    <div class="modal__overlay"></div>
                                    <div class="modal__body form__body">
                                        <div class="auth-frorm">
                                            <div class="auth-form__container">
                                                <div class="auth-form__header form-form__header">
                                                    <span class="form-form__title">Vui lòng điền các thông tin cá nhân</span>
                                                </div>
                                                <div class="auth-form__form">
                                                    <div class="auth-form__group">
                                                        <input type="text" class="auth-form__input" placeholder="Nhập họ tên của bạn">
                                                    </div>
                                                    <div class="auth-form__group">
                                                        <input type="password" class="auth-form__input" placeholder="Nhập số điện thoại của bạn">
                                                    </div>
                                                    <div class="auth-form__group">
                                                        <input type="password" class="auth-form__input" placeholder="Nhập email của bạn">
                                                    </div>
                                                    </div>
                                                    <div class="auth-form__group">
                                                        <input type="password" class="auth-form__input" placeholder="Nhập ngày đến sử dụng dịch vụ">
                                                    </div>
                                                    <div class="auth-form__group">
                                                        <input type="password" class="auth-form__input" placeholder="Nhập khung giờ">
                                                    </div>
                                                </div>
                                                <div class="auth-form__aside">
                                                    <div class="auth-form__help">
                                                        <a href="" class="auth-form__help-link form-form__help-link">Cần trợ giúp ?</a>
                                                    </div>
                                                </div>
                                                <div class="auth-form__controls form-form__controls">
                                                    <a href="/infor_product.html" class="btn auth-form__controls-back btn--normal">TRỞ LẠI</a>
                                                    <a href="/successful_registration.html" class="btn btn--primary form-form__controls-accept">ĐĂNG KÍ</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                    <div class="modal">
                                        <div class="modal__overlay"></div>
                                        <div class="modal__body">
                                            <div class="auth-frorm signup__success">
                                                <div class="auth-form__container">
                                                    <div class="auth-form__signup-success">
                                                        <i class="auth-form__signup-success-icon fa-regular fa-circle-check"></i>
                                                        <h3 class="auth-form__signup-success-notify">Đăng kí đặt lịch thành công!</h3>
                                                    </div>
                                
                                                    <div class="auth-form__controls">
                                                        <a href="/infor_product.html" class="btn auth-form__controls-back btn--normal">TRỞ LẠI</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>